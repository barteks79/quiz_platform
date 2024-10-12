import { sign } from 'jsonwebtoken';
import { hash, compare } from 'bcryptjs';
import { validationResult } from 'express-validator';

import { MyError, catchHandler } from '../util/error';
import User, { IUser } from '../models/user';

import type { Request, Response, NextFunction } from 'express';
import type { LoginReq, SignupReq, EditReq } from '../types/auth';

// DOTENV
import * as dotenv from 'dotenv';

dotenv.config();

export const postLogin = async (req: LoginReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }

   // EMAIL EXISTENCE
   const { email } = req.body;
   const user: IUser | null = await User.findOne({ email });
   if (!user) {
      const error = new MyError('Invalid email or password.', 401);
      return next(error);
   }

   // PASSWORD MATCHING
   const { password } = req.body;
   const doMatch = await compare(password, user.password);
   if (!doMatch) {
      const error = new MyError('Invalid email or password.', 401);
      return next(error);
   }

   try {
      // GENERATING TOKEN
      const token = sign({ userId: user._id, email }, process.env.JWT_KEY || '', { expiresIn: '3h' });
      const expirationTime = new Date().getTime() + 1000 * 60 * 60 * 3;
      res.status(200).json({ message: 'Logged in successfully.', token, expirationTime });
   } catch (err: unknown) {
      catchHandler(err, next);
   }
};

export const putSignup = async (req: SignupReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }

   // EMAIL EXISTENCE
   const { email } = req.body;
   const existingUser: IUser | null = await User.findOne({ email });
   if (existingUser) {
      const error = new MyError('Email already in use.', 401);
      return next(error);
   }

   // CREATING USER
   const { name, age, password } = req.body;
   const hashedPassword = await hash(password, 12);
   const createdUser: IUser = new User({ name, age, email, password: hashedPassword, favorites: [], completed: [] });

   try {
      await createdUser.save();
      res.status(201).json({ message: 'Signed up successfully.', userId: createdUser._id });
   } catch (err: unknown) {
      catchHandler(err, next);
   }
};

export const patchEdit = async (req: EditReq, _res: Response, next: NextFunction) => {
   // VALIDATION
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyError('Validation failed.', 422, result);
      return next(error);
   }
};

export const postLogout = async (_req: Request, _res: Response, _next: NextFunction) => {
};