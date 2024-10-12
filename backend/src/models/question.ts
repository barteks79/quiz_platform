import { Schema, model, Document } from 'mongoose';

export interface IQuestion extends Document {
   content: string;
   answers: [{ content: string, isCorrect: boolean }];
   points: number;
   isMultipleChoice: boolean;
}

const questionSchema = new Schema<IQuestion>({
   content: {
      type: String,
      required: true,
   },
   answers: [
      {
         content: {
            type: String,
            required: true
         },
         isCorrect: {
            type: Boolean,
            required: true
         }
      }
   ],
   points: {
      type: Number,
      required: true,
   },
   isMultipleChoice: {
      type: Boolean,
      required: true,
   }
});

export default model<IQuestion>('Question', questionSchema);