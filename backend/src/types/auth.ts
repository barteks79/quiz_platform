import type { Request } from 'express';
import { type ValidationError, Result } from 'express-validator';

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