import { isValidObjectId } from 'mongoose';
import { type ValidationError, Result, validationResult } from 'express-validator';
import { type NextFunction } from 'express';
import User, { type IUser } from '../models/user';
import Quiz, { IQuiz } from '../models/quiz';

export class MyError extends Error {
   status: number;
   inputs?: ValidationError[];

   constructor(message: string, status: number, inputs?: Result<ValidationError>) {
      super();
      this.message = message;
      this.status = status;
      this.inputs = inputs?.array();
   }
}

export const catchHandler = (err: unknown, next: NextFunction) => {
   if (err instanceof Error) {
      const error = new MyError(err.message || 'An error occurred.', 500);
      next(error);
   }
};

export const validateInputs = (req: unknown, type: 'validation' | 'data', next: NextFunction): boolean | void => {
   const result = validationResult(req!);
   if (!result.isEmpty()) {
      const message = type === 'validation' ? 'Validation failed.' : 'Wrong data provided.';
      const error = new MyError(message, 422, result);
      return next(error);
   }

   return true;
};

export const validateUserId = async (userId: any, next: NextFunction) => {
   if (!isValidObjectId(userId)) {
      const error = new MyError('Not authenticated.', 401);
      return next(error);
   }

   const user: IUser | null = await User.findById(userId);
   if (!user) {
      const error = new MyError('Not authenticated.', 401);
      return next(error);
   }

   return user;
};

export const validateQuizId = async (quizId: any, next: NextFunction) => {
   if (!isValidObjectId(quizId)) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   const quiz: IQuiz | null = await Quiz.findById(quizId);
   if (!quiz) {
      const error = new MyError('Quiz not found.', 404);
      return next(error);
   }

   return quiz;
};