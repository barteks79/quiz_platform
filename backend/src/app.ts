import express, {
   type Application,
   type Request,
   type NextFunction,
   type Response
} from 'express';

import { json } from 'body-parser';
import authRoutes from './routes/auth';
import { runServer } from './util/server';

const app: Application = express();

app.use(json());
app.use((_req: Request, res: Response, next: NextFunction) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});

app.use('/auth', authRoutes);

runServer(app, 4000);