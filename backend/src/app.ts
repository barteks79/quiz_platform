import express, { type Application, type Request, type NextFunction, type Response } from 'express';
import { type ValidationError } from 'express-validator';

import { json } from 'body-parser';
import { runServer } from './util/server';

import authRoutes from './routes/auth';
import quizRouter from './routes/quiz';

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
app.use('/quiz', quizRouter);

// ERROR
type ErrorProperties = { message: string; status: number; inputs?: ValidationError[] }
app.use((err: ErrorProperties, _req: Request, res: Response, _next: NextFunction) => {
   const { message, status, inputs } = err;
   res.status(status).json({ message, inputs });
});

// SERVER
(async () => await runServer(app, 4000))();