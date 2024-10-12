import { type ValidationError, Result } from 'express-validator';
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

export const catchHandler = (err: unknown, next: NextFunction) => {
   if (err instanceof Error) {
      const error = new MyError(err.message || 'An error occurred.', 500);
      next(error);
   }
}