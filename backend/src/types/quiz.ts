import { type Request } from 'express';
import { ObjectId } from 'mongoose';

export interface CreateQuizReq extends Request {
   userId?: ObjectId;
   body: {
      title: string;
      questions: [
         {
            content: string;
            answers: [
               {
                  content: string | number;
                  isCorrect: boolean;
               }
            ],
            points: number;
            isMultipleChoice: boolean;
         }
      ]
      ageCategory: number;
   }
}