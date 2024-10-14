import { sign } from 'jsonwebtoken';
import { hash, compare } from 'bcryptjs';

import { MyError, catchHandler, validateInputs, validateUserId } from '../util/error';
import User, { IUser } from '../models/user';

import type { Response, NextFunction } from 'express';
import type { LoginReq, SignupReq, EditReq } from '../types/auth';

// DOTENV
import * as dotenv from 'dotenv';

dotenv.config();

export const loginUser = async (req: LoginReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const isSuccess = validateInputs(req, 'validation', next);
   if (!isSuccess) return;

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
      const token = sign({ userId: user._id }, process.env.JWT_KEY || '', { expiresIn: '3h' });
      const expirationTime = new Date().getTime() + 1000 * 60 * 60 * 3;
      res.status(200).json({ message: 'Logged in successfully.', token, expirationTime });
   } catch (err: unknown) {
      catchHandler(err, next);
   }
};

export const signupUser = async (req: SignupReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const isSuccess = validateInputs(req, 'validation', next);
   if (!isSuccess) return;

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

export const editUser = async (req: EditReq, res: Response, next: NextFunction) => {
   // VALIDATION
   const isSuccess = validateInputs(req, 'validation', next);
   if (!isSuccess) return;

   // CHECK FOR USER EXISTENCE
   const user: IUser | void = await validateUserId(req.userId, next);
   if (!user) return;

   // UPDATING USER
   const { name, age } = req.body;
   if (user.name !== name) user.name = name;
   if (user.age !== age) user.age = age;

   try {
      await user.save();
      res.status(200).json({ message: 'User profile updated successfully', userId: user._id });
   } catch (err) {
      catchHandler(err, next);
   }
};