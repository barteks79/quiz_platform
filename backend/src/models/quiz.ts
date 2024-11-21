import { Schema, model, Document, SchemaTypes, ObjectId } from 'mongoose';

export interface IQuiz extends Document {
   _id: ObjectId;
   title: string;
   slug: string;
   questions: ObjectId[];
   ageCategory: number;
   creatorId: ObjectId;
   createdAt: string;
   editedAt: string;
}

const quizSchema = new Schema<IQuiz>({
   title: {
	  type: String,
	  required: true
   },
   slug: {
	  type: String,
	  unique: true,
	  required: true
   },
   questions: [
	  {
		 type: SchemaTypes.ObjectId,
		 ref: 'Question',
		 required: true
	  }
   ],
   ageCategory: {
	  type: Number,
	  required: true
   },
   creatorId: {
	  type: SchemaTypes.ObjectId,
	  ref: 'User',
	  required: true
   }
}, { timestamps: true });

export default model<IQuiz>('Quiz', quizSchema);