import { validationResult } from 'express-validator';
import { catchHandler, MyError } from '../util/error';
import { isValidObjectId } from 'mongoose';

import Question, { type IQuestion } from '../models/question';
import Quiz, { type IQuiz } from '../models/quiz';
import User, { type IUser } from '../models/user';

import type { Response, NextFunction } from 'express';
import type { GetAllQuizzesReq, GetSingleQuizReq, CreateQuizReq, EditQuizReq, DeleteQuizReq } from '../types/quiz';

export const getAllQuizzes = async (req: GetAllQuizzesReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Wrong data provided.', 422, result);
      return next(error);
   }

   const { page, perPage, ageCategory } = req.body;

   try {
      // QUIZZES COUNT
      const quizzesAmount = await Quiz.countDocuments({
         ageCategory: { $gte: ageCategory }
      });

      // FOUND QUIZZES
      const quizzes: IQuiz[] = await Quiz.find({
         ageCategory: { $gte: ageCategory }
      }).skip((page - 1) * perPage).limit(perPage).select('-_id title ageCategory createdAt').populate('creatorId', 'name');

      res.status(200).json({ message: 'Fetched quizzes successfully.', quizzesAmount, quizzes });
   } catch (err) {
      catchHandler(err, next);
   }
};

export const getSingleQuiz = async (req: GetSingleQuizReq, res: Response, next: NextFunction) => {
   const { quizId } = req.params;

   // CHECKING IF QUIZ ID FORMAT IS CORRECT
   if (!isValidObjectId(quizId)) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   // CHECKING FOR QUIZ EXISTENCE
   const quiz = await Quiz.findById(quizId).select('-_id title ageCategory createdAt').populate('questions', '-_id -__v').populate('creatorId', '-_id name');
   if (!quiz) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   res.status(200).json({ message: 'Fetched quiz successfully.', quiz });
};

export const createQuiz = async (req: CreateQuizReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }

   const { title, ageCategory, questions } = req.body;

   // CREATING QUIZ WITH NO QUESTIONS YET
   const createdQuiz: IQuiz = new Quiz({
      title,
      ageCategory,
      questions: [],
      creatorId: req.userId
   });

   try {
      for (const question of questions) {
         // CREATING QUESTION
         const createdQuestion: IQuestion = new Question({
            content: question.content,
            answers: question.answers,
            points: question.points,
            isMultipleChoice: question.isMultipleChoice
         });

         // SAVING QUESTION AND ADDING ITS ID TO QUIZ
         await createdQuestion.save();
         createdQuiz.questions.push(createdQuestion._id);
      }

      // SAVE QUIZ TO DATABASE
      await createdQuiz.save();
      res.status(201).json({ message: 'Quiz successfully created.', quizId: createdQuiz._id });
   } catch (err) {
      catchHandler(err, next);
   }
};

export const editQuiz = async (req: EditQuizReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }

   const { quizId } = req.params;

   // CHECKING IF QUIZ ID FORMAT IS CORRECT
   if (!isValidObjectId(quizId)) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   // CHECKING FOR QUIZ EXISTENCE
   const quiz: IQuiz | null = await Quiz.findById(quizId);
   if (!quiz) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   // CHECKING AUTHORIZATION
   if (quiz.creatorId.toString() !== req.userId!.toString()) {
      const error = new MyError('Not authorized.', 403);
      return next(error);
   }

   const {
      title, questions, ageCategory
   } = req.body;
   const prevQuestions = [...quiz.questions];

   // UPDATING QUIZ
   if (quiz.title !== title) quiz.title = title;
   if (quiz.ageCategory !== ageCategory) quiz.ageCategory = ageCategory;

   try {
      for (const [idx, question] of questions.entries()) {
         // CREATING QUESTION
         const createdQuestion: IQuestion = new Question({
            content: question.content,
            answers: question.answers,
            points: question.points,
            isMultipleChoice: question.isMultipleChoice
         });

         // SAVING QUESTION
         await createdQuestion.save();
         quiz.questions[idx] = createdQuestion._id;
      }

      // SAVING QUIZ AND DELETING OLD QUESTIONS
      await quiz.save();
      await Question.deleteMany({ _id: { $in: prevQuestions } });
      res.status(200).json({ message: 'Edited quiz successfully.', quizId: quiz._id });
   } catch (err) {
      catchHandler(err, next);
   }
};

export const deleteQuiz = async (req: DeleteQuizReq, res: Response, next: NextFunction) => {
   const { quizId } = req.params;

   // CHECKING IF QUIZ ID FORMAT IS CORRECT
   if (!isValidObjectId(quizId)) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   // CHECKING FOR QUIZ EXISTENCE
   const existingQuiz: IQuiz | null = await Quiz.findById(quizId);
   if (!existingQuiz) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   // CHECKING AUTHORIZATION
   if (existingQuiz.creatorId.toString() !== req.userId!.toString()) {
      const error = new MyError('Not authorized.', 403);
      return next(error);
   }

   try {
      // DELETING QUIZ AND RELATED QUESTIONS
      await Promise.all([
         Quiz.findByIdAndDelete(quizId),
         Question.deleteMany({ _id: { $in: existingQuiz.questions } }),
         User.updateMany({}, { $pull: { favorites: { quizId: existingQuiz._id } } }),
         User.updateMany({}, { $pull: { completed: { quizId: existingQuiz._id } } })
      ]);

      res.status(200).json({ message: 'Quiz deleted successfully.', quizId });
   } catch (err) {
      catchHandler(err, next);
   }
};

export const quizToFavorite = async (req: DeleteQuizReq, res: Response, next: NextFunction) => {
   // CHECKING IF USER ID FORMAT IS CORRECT
   if (!isValidObjectId(req.userId)) {
      const error = new MyError('Not authenticated.', 401);
      return next(error);
   }

   // CHECKING IF USER EXISTS
   const user: IUser | null = await User.findById(req.userId);
   if (!user) {
      const error = new MyError('Not authenticated.', 401);
      return next(error);
   }

   const { quizId } = req.params;

   // CHECKING IF QUIZ ID FORMAT IS CORRECT
   if (!isValidObjectId(quizId)) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   // CHECKING FOR QUIZ EXISTENCE
   const existingQuiz: IQuiz | null = await Quiz.findById(quizId);
   if (!existingQuiz) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   try {
      // GETTING INDEX (IF -1 THEN REMOVE ELSE ADD)
      const favoriteQuizIdx = user.favorites.findIndex(quiz => quiz.quizId.toString() === quizId);
      if (favoriteQuizIdx !== -1) {
         // REMOVING FROM FAVORITES
         user.favorites.splice(favoriteQuizIdx, 1);

         await user.save();
         res.status(200).json({ message: 'Quiz removed from favorites successfully.', quizId });
      } else {
         // ADDING TO FAVORITES
         const completedQuiz = user.completed.find(quiz => quiz.quizId.toString() === quizId);
         user.favorites.push({ quizId: existingQuiz._id, isCompleted: !!completedQuiz });

         await user.save();
         res.status(200).json({ message: 'Quiz added to favorites successfully.', quizId });
      }
   } catch (err) {
      catchHandler(err, next);
   }
};

export const quizToCompleted = async (req: DeleteQuizReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Wrong data provided.', 422, result);
      return next(error);
   }

   // CHECKING IF USER ID FORMAT IS CORRECT
   if (!isValidObjectId(req.userId)) {
      const error = new MyError('Not authenticated.', 401);
      return next(error);
   }

   // CHECKING IF USER EXISTS
   const user: IUser | null = await User.findById(req.userId);
   if (!user) {
      const error = new MyError('Not authenticated.', 401);
      return next(error);
   }

   const { quizId } = req.params;

   // CHECKING IF QUIZ ID FORMAT IS CORRECT
   if (!isValidObjectId(quizId)) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   // CHECKING FOR QUIZ EXISTENCE
   const existingQuiz: IQuiz | null = await Quiz.findById(quizId);
   if (!existingQuiz) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   try {
      // GETTING INDEX (IF -1 THEN REMOVE, SET FALSE ELSE ADD, SET TRUE)
      const completedQuizIdx = user.completed.findIndex(quiz => quiz.quizId.toString() === quizId);
      const favoriteQuizIdx = user.favorites.findIndex(quiz => quiz.quizId.toString() === quizId);

      if (completedQuizIdx !== -1) {
         // SETTING COMPLETED IN FAVORITES TO FALSE, REMOVING FROM COMPLETED
         if (favoriteQuizIdx !== -1) user.favorites[favoriteQuizIdx].isCompleted = false;
         user.completed.splice(completedQuizIdx, 1);

         await user.save();
         res.status(200).json({ message: 'Quiz removed from completed successfully.', quizId });
      } else {
         // SETTING COMPLETED IN FAVORITES TO TRUE, ADDING TO COMPLETED
         if (favoriteQuizIdx !== -1) user.favorites[favoriteQuizIdx].isCompleted = true;
         const { points } = req.body;
         user.completed.push({ quizId: existingQuiz._id, points: points! });

         await user.save();
         res.status(200).json({ message: 'Quiz added to completed successfully.', quizId });
      }
   } catch (err) {
      catchHandler(err, next);
   }
};