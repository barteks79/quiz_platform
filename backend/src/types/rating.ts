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

export interface GetRatingsReq extends Request {
   params: { quizId?: string; };
   body: {
      page: number;
      perPage: number;
   }
}