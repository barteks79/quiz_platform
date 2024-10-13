import { Router, type IRouter } from 'express';
import isAuth from '../middlewares/is-auth';
import { postCreateQuiz, patchEditQuiz } from '../controllers/quiz';
import { createQuizValidation } from '../util/validation';

const router: IRouter = Router();

router.post('/', isAuth, createQuizValidation, postCreateQuiz);

router.patch('/:quizId', isAuth, createQuizValidation, patchEditQuiz);

export default router;