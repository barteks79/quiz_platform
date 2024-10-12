import { Schema, model, Document } from 'mongoose';

export interface IAnswer extends Document {
   content: string;
   isCorrect: boolean;
}

const answerSchema = new Schema<IAnswer>({
   content: {
      type: String,
      required: true
   },
   isCorrect: {
      type: Boolean,
      required: true,
   }
});

export default model('Answer', answerSchema);