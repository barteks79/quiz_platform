import { type ValidationError, Result } from 'express-validator';
import { isValidObjectId } from 'mongoose';
import { type NextFunction } from 'express';

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

export const userIdIsObjectId = (userId: any, next: NextFunction) => {
   if (!isValidObjectId(userId)) {
      const error = new MyError('Not authenticated.', 401);
      next(error);
   }
}

export const catchHandler = (err: unknown, next: NextFunction) => {
   if (err instanceof Error) {
      const error = new MyError(err.message || 'An error occurred.', 500);
      next(error);
   }
}