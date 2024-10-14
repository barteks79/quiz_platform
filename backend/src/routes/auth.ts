import { Router, type IRouter } from 'express';
import { loginUser, signupUser, editUser, logoutUser } from '../controllers/auth';
import { loginValidation, signupValidation } from '../util/validation';
import isAuth from '../middlewares/is-auth';

const router: IRouter = Router();

router.post('/login', loginValidation, loginUser);

router.put('/signup', signupValidation, signupUser);

router.patch('/edit', isAuth, editUser);

router.post('/logout', isAuth, logoutUser);

export default router;