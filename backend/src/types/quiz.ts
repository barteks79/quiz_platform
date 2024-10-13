import { type Request } from 'express';
import { ObjectId } from 'mongoose';

export interface CreateQuizReq extends Request {
   userId?: ObjectId;
   body: {
      title: string;
      ageCategory: number;
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
   };
}

export interface EditQuizReq extends Request {
   userId?: ObjectId;
   params: { quizId?: string; };
   body: {
      title: string;
      ageCategory: number;
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
   }
}