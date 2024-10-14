import { type Request } from 'express';
import { ObjectId } from 'mongoose';

export interface GetAllQuizzesReq extends Request {
   body: {
      page: number;
      perPage: number;
      ageCategory: number;
   };
}

export interface GetSingleQuizReq extends Request {
   params: {
      quizId?: string;
   };
}

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
   };
}

export interface DeleteQuizReq extends Request {
   userId?: ObjectId;
   params: { quizId?: string; };
   body: { points?: number; };
}