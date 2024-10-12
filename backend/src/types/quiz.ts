import { type Request } from 'express';

export interface CreateQuizReq extends Request {
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