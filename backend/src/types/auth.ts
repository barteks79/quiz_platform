import type { Request } from 'express';

type ValidationErrorField = {
   location: string,
   msg: string,
   path: string,
   type: string
}

export class ValidationError extends Error {
   inputs: { errors: ValidationErrorField[] };

   constructor(inputs: object) {
      super();
      this.message = 'Validation failed.';
      this.status = 422;
      this.inputs = inputs.errors;
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