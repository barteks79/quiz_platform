import type { Request } from 'express';
import { type ObjectId } from 'mongoose';

export interface IsAuthReq extends Request {
   userId?: ObjectId;
}

export interface LoginReq extends Request {
   body: {
      email: string;
      password: string;
   };
}

export interface SignupReq extends Request {
   body: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      age: number;
   };
}

export interface EditReq extends Request {
   body: {
      name: string;
      email: string;
      age: number;
   };
}