import { connect } from 'mongoose';
import type { Application } from 'express';

// DOTENV
import * as dotenv from 'dotenv';

dotenv.config();

// DATABASE
const { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env;
const DB_URI: string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.njhtx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=${DB_CLUSTER}`;

export const runServer = async (app: Application, port: number) => {
   try {
	  await connect(DB_URI);
   } catch (err) {
	  console.error(err);
   } finally {
	  app.listen(port, () => {
		 console.log(`Listening on port ${port}...`);
	  });
   }
};