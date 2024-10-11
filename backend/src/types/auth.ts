import type { Request } from "express";

export interface LoginReq extends Request {
   body: {
      email: string;
      password: string;
   }
}

export interface SignupReq extends Request {
   body: {
      username: string;
      email: string;
      password: string;
      confirmPassword: string;
      age: number;
   }
}

export interface EditReq extends Request {
   body: {
      username: string;
      email: string;
      age: number;
   }
}