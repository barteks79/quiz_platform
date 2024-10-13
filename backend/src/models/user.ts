import { Schema, model, Document, SchemaTypes, ObjectId } from 'mongoose';
import { IQuiz } from './quiz';

export interface IUser extends Document {
   _id: ObjectId;
   name: string;
   email: string;
   password: string;
   age: number;
   favorites: [{ quizId: IQuiz, isCompleted: boolean }];
   completed: [{ quizId: IQuiz, points: number }];
}

const userSchema = new Schema<IUser>({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true
   },
   age: {
      type: Number,
      required: true
   },
   favorites: [
      {
         quizId: {
            type: SchemaTypes.ObjectId,
            ref: 'Quiz',
            required: true,
         },
         isCompleted: {
            type: Boolean,
            required: true,
         }
      }
   ],
   completed: [
      {
         quizId: {
            type: SchemaTypes.ObjectId,
            ref: 'Quiz',
            required: true,
         },
         pointsEarned: {
            type: Number,
            required: true
         }
      }
   ]
});

export default model<IUser>('User', userSchema);