import { connect } from 'mongoose';
import type { Application } from 'express';

const DB_URI: string = `
   mongodb+srv://
   ${process.env.DB_USER}:
   ${process.env.DB_PASSWORD}@
   ${process.env.DB_CLUSTER}.njhtx.mongodb.net/
   ${process.env.DB_NAME}?retryWrites=true&w=majority&appName=sade79
`;

export const runServer = async (app: Application, port: number) => {
   try {
      await connect(DB_URI);
   } catch (err) {
      console.error(err)
   } finally {
      app.listen(port, () => {
         console.log(`Listening on port ${port}...`);
      });
   }
};