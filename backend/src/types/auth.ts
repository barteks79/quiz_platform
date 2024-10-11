import type { Request } from 'express';
import { type ValidationError, Result } from 'express-validator';

export class MyValidationError extends Error {
   status: number;
   inputs: Result<ValidationError>;

   constructor(inputs: Result<ValidationError>) {
      super();
      this.message = 'Validation failed.';
      this.status = 422;
      this.inputs = inputs;
   }
}

export interface LoginReq extends Request {
   body: {
      email: string;
      password: string;
   };
}

export interface SignupReq extends Request {
   body: {
      username: string;
      email: string;
      password: string;
      confirmPassword: string;
      age: number;
   };
}

export interface EditReq extends Request {
   body: {
      username: string;
      email: string;
      age: number;
   };
}