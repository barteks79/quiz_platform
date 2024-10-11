import type { Application } from 'express';

export const runServer = (app: Application, port: number) => {
   app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
   });
};