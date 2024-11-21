import { Schema, model, Document, SchemaTypes, ObjectId } from 'mongoose';

export interface IRating extends Document {
   _id: ObjectId;
   rate: number;
   message: string;
   quizId: ObjectId;
   creatorId: ObjectId;
   createdAt: string;
   updatedAt: string;
}

const ratingSchema = new Schema<IRating>({
   rate: {
	  type: Number,
	  required: true
   },
   message: {
	  type: String,
	  required: true
   },
   quizId: {
	  type: SchemaTypes.ObjectId,
	  ref: 'Quiz',
	  required: true
   },
   creatorId: {
	  type: SchemaTypes.ObjectId,
	  ref: 'User',
	  required: true
   }
}, { timestamps: true });

export default model<IRating>('Rating', ratingSchema);