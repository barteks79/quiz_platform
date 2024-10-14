import { Router, type IRouter } from 'express';
import isAuth from '../middlewares/is-auth';
import { quizRatingValidation } from '../util/validation';
import { addRating } from '../controllers/rating';

const router: IRouter = Router();

router.put('/:quizId', isAuth, quizRatingValidation, addRating);

export default router;