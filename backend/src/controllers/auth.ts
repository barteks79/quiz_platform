import type { Response, NextFunction } from 'express';
import type { LoginReq, SignupReq, EditReq } from '../types/auth';

export const postLogin = async (req: LoginReq, res: Response, next: NextFunction) => {};

export const putSignup = async (req: SignupReq, res: Response, next: NextFunction) => {};

export const patchEdit = async (req: EditReq, res: Response, next: NextFunction) => {};