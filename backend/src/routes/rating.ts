import { Router, type IRouter } from 'express';
import isAuth from '../middlewares/is-auth';
import { quizRatingValidation, getRatingsValidation } from '../util/validation';
import { addRating, getRatings } from '../controllers/rating';

const router: IRouter = Router();

router.get('/:quizId', getRatingsValidation, getRatings)

router.put('/:quizId', isAuth, quizRatingValidation, addRating);

export default router;