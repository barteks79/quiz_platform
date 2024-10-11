import express, {
   type Application,
   type Request,
   type NextFunction,
   type Response
} from 'express';

import {
   type ValidationError,
   Result
} from 'express-validator';

import { json } from 'body-parser';
import authRoutes from './routes/auth';
import { runServer } from './util/server';

const app: Application = express();

// BODY PARSING
app.use(json());

// HEADERS
app.use((_req: Request, res: Response, next: NextFunction) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});

// ROUTES
app.use('/auth', authRoutes);

// ERROR
type ErrorProperties = { message: string; status: number; inputs?: Result<ValidationError> }
app.use((err: ErrorProperties, req: Request, res: Response, next: NextFunction) => {
   const { message, status, inputs } = err;
   res.status(status).json({ message, inputs });
});

// SERVER
runServer(app, 4000);