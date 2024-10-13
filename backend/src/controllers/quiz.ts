import { validationResult } from 'express-validator';
import { catchHandler, MyError } from '../util/error';

import Question, { type IQuestion } from '../models/question';
import Quiz, { type IQuiz } from '../models/quiz';

import { type Response, type NextFunction } from 'express';
import { type CreateQuizReq, type EditQuizReq } from '../types/quiz';

export const postCreateQuiz = async (req: CreateQuizReq, res: Response, next: NextFunction) => {
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

export const patchEditQuiz = async (req: EditQuizReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }

   const { quizId } = req.params;

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

   const { title, questions, ageCategory } = req.body;
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