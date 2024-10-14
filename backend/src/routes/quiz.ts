import { Router, type IRouter } from 'express';
import isAuth from '../middlewares/is-auth';
import {
   getQuizzes,
   getQuiz,
   createQuiz,
   editQuiz,
   deleteQuiz,
   quizToggleFavorites,
   quizToggleCompleted
} from '../controllers/quiz';
import { getAllQuizzesValidation, createQuizValidation, quizToCompletedValidation } from '../util/validation';

const router: IRouter = Router();

router.get('/', getAllQuizzesValidation, getQuizzes);

router.post('/', isAuth, createQuizValidation, createQuiz);

router.get('/:quizId', getQuiz);

router.patch('/:quizId', isAuth, createQuizValidation, editQuiz);

router.delete('/:quizId', isAuth, deleteQuiz);

router.post('/favorite/:quizId', isAuth, quizToggleFavorites);

router.post('/completed/:quizId', isAuth, quizToCompletedValidation, quizToggleCompleted);

export default router;