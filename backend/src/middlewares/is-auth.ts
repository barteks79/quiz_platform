import { verify } from 'jsonwebtoken';
import { MyError } from '../util/error';

import type { JwtPayload } from 'jsonwebtoken';
import type { Response, NextFunction } from 'express';
import { IsAuthReq } from '../types/auth';

// DOTENV
import * as dotenv from 'dotenv';

dotenv.config();

export default (req: IsAuthReq, res: Response, next: NextFunction) => {
   // CHECKING FOR AUTH HEADER
   const authHeader: string | undefined = req.get('Authorization');
   if (!authHeader) {
      const error = new MyError('Not authenticated.', 401);
      return next(error);
   }

   // GETTING TOKEN
   const token: string = authHeader.split(' ').at(1)!;
   let decodedToken: JwtPayload | string;

   try {
      decodedToken = verify(token, process.env.JWT_KEY || '');
      req.userId = (decodedToken as JwtPayload).userId;
      next();
   } catch (err) {
      const error = new MyError('Not authenticated.', 401);
      return next(error);
   }
}