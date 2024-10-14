import express, { type Application } from 'express';

import { json } from 'body-parser';
import { runServer } from './util/server';

import authRoutes from './routes/auth';
import quizRouter from './routes/quiz';

import cors from './middlewares/cors';
import error from './middlewares/error';

const app: Application = express();

// BODY PARSING
app.use(json());

// HEADERS
app.use(cors);

// ROUTES
app.use('/auth', authRoutes);
app.use('/quiz', quizRouter);

// ERROR
app.use(error);

// SERVER
(async () => await runServer(app, 4000))();