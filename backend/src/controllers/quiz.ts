import { validationResult } from 'express-validator';
import { catchHandler, MyError } from '../util/error';

import Question, { type IQuestion } from '../models/question';
import Quiz, { type IQuiz } from '../models/quiz';

import { type Response, type NextFunction } from 'express';
import { type CreateQuizReq } from '../types/quiz';

export const postCreateQuiz = async (req: CreateQuizReq, res: Response, next: NextFunction) => {
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