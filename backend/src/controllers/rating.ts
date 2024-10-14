import { catchHandler, validateInputs, validateQuizId, validateUserId } from '../util/error';

import type { IUser } from '../models/user';
import type { IQuiz } from '../models/quiz';
import Rating, { IRating } from '../models/rating';

import type { AddRatingReq } from '../types/rating';
import type { NextFunction, Response } from 'express';

export const addRating = async (req: AddRatingReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const isSuccess = validateInputs(req, 'data', next);
   if (!isSuccess) return;

   // CHECKING FOR USER EXISTENCE
   const user: IUser | void = await validateUserId(req.userId, next);
   if (!user) return;

   // CHECKING FOR QUIZ EXISTENCE
   const { quizId } = req.params;
   const quiz: IQuiz | void = await validateQuizId(quizId, next);
   if (!quiz) return;

   // CREATING NEW RATING
   const { rate, message } = req.body;
   const rating: IRating = new Rating({ rate, message, creatorId: req.userId, quizId: quiz._id });

   try {
      await rating.save();
      res.status(201).json({ message: 'Rating uploaded successfully.', ratingId: rating._id });
   } catch (err) {
      catchHandler(err, next);
   }
};