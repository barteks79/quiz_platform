import { validationResult } from 'express-validator';
import { MyError } from '../util/error';

import Question from '../models/question'
import Quiz from '../models/quiz';

import { type Response, type NextFunction } from 'express';
import { type CreateQuizReq } from '../types/quiz';

export const postCreateQuiz = async (req: CreateQuizReq, res: Response, next: NextFunction) => {
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }

   const { questions } = req.body;
   questions.forEach(question => {
      const createdQuestion = new Question({
         content: question.content,
         answers: question.answers,
         points: question.points,
         isMultipleChoice: question.isMultipleChoice
      })
   })
};