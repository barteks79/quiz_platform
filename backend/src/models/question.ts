import { Schema, model, Document, SchemaTypes } from 'mongoose';
import { IAnswer } from './answer';

export interface IQuestion extends Document {
   content: string,
   answers: IAnswer[],
   points: number,
   isMultipleChoice: boolean,
}

const questionSchema = new Schema<IQuestion>({
   content: {
      type: String,
      required: true,
   },
   answers: [
      {
         type: SchemaTypes.ObjectId,
         ref: 'Answer',
         required: true,
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