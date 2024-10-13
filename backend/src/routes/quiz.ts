import { Router, type IRouter } from 'express';
import isAuth from '../middlewares/is-auth'
import { postCreateQuiz } from '../controllers/quiz';
import { createQuizValidation } from '../util/validation';

const router: IRouter = Router();

router.post('/', isAuth, createQuizValidation, postCreateQuiz);

export default router;