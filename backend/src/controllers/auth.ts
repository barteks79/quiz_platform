import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { validationResult } from 'express-validator';

import { MyError } from '../types/auth';
import User, { IUser } from '../models/user';

import type { Request, Response, NextFunction } from 'express';
import type { LoginReq, SignupReq, EditReq } from '../types/auth';

export const postLogin = async (req: LoginReq, res: Response, next: NextFunction) => {
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }

   const { email } = req.body;
   const user: IUser | null = await User.findOne({ email });
   if (!user) {
      const error = new MyError('Invalid email or password.', 401);
      return next(error);
   }

   const { password } = req.body;
   const doMatch = await compare(password, user.password);
   if (!doMatch) {
      const error = new MyError('Invalid email or password.', 401);
      return next(error);
   }

   try {
      const token = sign({ userId: user._id, email }, process.env.JWT_KEY || '', { expiresIn: '3h' });
      const expirationTime = new Date().getTime() + 1000 * 60 * 60 * 3;
      res.status(200).json({ message: 'Logged in successfully.', token, expirationTime });
   } catch (err: unknown) {
      if (err instanceof Error) {
         const error = new MyError(err.message, 500);
         next(error);
      }
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