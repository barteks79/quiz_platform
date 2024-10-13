import { Router, type IRouter } from 'express';
import isAuth from '../middlewares/is-auth';
import { getAllQuizzes, getSingleQuiz, createQuiz, editQuiz, deleteQuiz } from '../controllers/quiz';
import { getAllQuizzesValidation, createQuizValidation } from '../util/validation';

const router: IRouter = Router();

router.get('/', getAllQuizzesValidation, getAllQuizzes);

router.post('/', isAuth, createQuizValidation, createQuiz);

router.get('/:quizId', getSingleQuiz)

router.patch('/:quizId', isAuth, createQuizValidation, editQuiz);

router.delete('/:quizId', isAuth, deleteQuiz);

export default router;