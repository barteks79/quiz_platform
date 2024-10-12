import { Router, type IRouter } from 'express';
import { postCreateQuiz } from '../controllers/quiz';
import { createQuizValidation } from '../util/validation';

const router: IRouter = Router();

router.post('/', createQuizValidation, postCreateQuiz);

export default router;