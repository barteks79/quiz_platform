import { validationResult } from 'express-validator';
import { MyError } from '../types/auth';
import User from '../models/user'

import type { Request, Response, NextFunction } from 'express';
import type { LoginReq, SignupReq, EditReq } from '../types/auth';

export const postLogin = async (req: LoginReq, res: Response, next: NextFunction) => {
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }

   const { email, password } = req.body;
   const user = User.findOne({ email })
   if (!user) {
      const error = new MyError('Invalid data provided.', 401);
      return next(error);
   }
};

export const putSignup = async (req: SignupReq, res: Response, next: NextFunction) => {
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }
};

export const patchEdit = async (req: EditReq, res: Response, next: NextFunction) => {
};

export const postLogout = async (req: Request, res: Response, next: NextFunction) => {
};