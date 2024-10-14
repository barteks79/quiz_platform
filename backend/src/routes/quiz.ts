import { Router, type IRouter } from 'express';
import isAuth from '../middlewares/is-auth';
import { getAllQuizzes, getSingleQuiz, createQuiz, editQuiz, deleteQuiz, quizToFavorite } from '../controllers/quiz';
import { getAllQuizzesValidation, createQuizValidation } from '../util/validation';

const router: IRouter = Router();

router.get('/', getAllQuizzesValidation, getAllQuizzes);

router.post('/', isAuth, createQuizValidation, createQuiz);

router.get('/:quizId', getSingleQuiz);

router.patch('/:quizId', isAuth, createQuizValidation, editQuiz);

router.delete('/:quizId', isAuth, deleteQuiz);

router.post('/favorite/:quizId', isAuth, quizToFavorite);

export default router;