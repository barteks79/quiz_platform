import { Router, type IRouter } from 'express';
import { loginUser, signupUser, editUser } from '../controllers/auth';
import { loginValidation, signupValidation, editUserValidation } from '../util/validation';
import isAuth from '../middlewares/is-auth';

const router: IRouter = Router();

router.post('/login', loginValidation, loginUser);

router.put('/signup', signupValidation, signupUser);

router.patch('/edit', editUserValidation, isAuth, editUser);

export default router;