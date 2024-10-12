import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
   name: string;
   email: string;
   password: string;
   age: number;
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
   }
});

export default model<IUser>('User', userSchema);