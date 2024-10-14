import type { Request } from 'express';
import { ObjectId } from 'mongoose';

export interface AddRatingReq extends Request {
   userId?: ObjectId;
   params: { quizId?: string; };
   body: {
      rate: number;
      message: string;
   };
}