import { Schema, model, Document, ObjectId, SchemaTypes } from 'mongoose';
import { IQuestion } from './question';

export interface IQuiz extends Document {
   title: string,
   questions: IQuestion[],
   ageCategory: number,
   creatorId: ObjectId,
   createdAt: string,
   editedAt: string,
}

const quizSchema = new Schema<IQuiz>({
   title: {
      type: String,
      required: true
   },
   questions: [
      {
         type: SchemaTypes.ObjectId,
         ref: 'Question',
         required: true,
      }
   ],
   ageCategory: {
      type: Number,
      required: true,
   },
   creatorId: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
   }
}, { timestamps: true });

export default model<IQuiz>('Quiz', quizSchema);