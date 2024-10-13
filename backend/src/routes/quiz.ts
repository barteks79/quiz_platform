import { Router, type IRouter } from 'express';
import isAuth from '../middlewares/is-auth';
import { createQuiz, editQuiz, deleteQuiz } from '../controllers/quiz';
import { createQuizValidation } from '../util/validation';

const router: IRouter = Router();

router.post('/', isAuth, createQuizValidation, createQuiz);

router.patch('/:quizId', isAuth, createQuizValidation, editQuiz);

router.delete('/:quizId', isAuth, deleteQuiz);

export default router;