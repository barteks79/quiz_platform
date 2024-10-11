import { validationResult } from 'express-validator';
import { MyValidationError } from '../types/auth';

import type { Request, Response, NextFunction } from 'express';
import type { LoginReq, SignupReq, EditReq } from '../types/auth';

export const postLogin = async (req: LoginReq, res: Response, next: NextFunction) => {
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyValidationError(result);
      return next(error);
   }
};

export const putSignup = async (req: SignupReq, res: Response, next: NextFunction) => {
   const result = validationResult(req);
   if (!result.isEmpty()) {
      const error = new MyValidationError(result);
      return next(error);
   }
};

export const patchEdit = async (req: EditReq, res: Response, next: NextFunction) => {
};

export const postLogout = async (req: Request, res: Response, next: NextFunction) => {
};