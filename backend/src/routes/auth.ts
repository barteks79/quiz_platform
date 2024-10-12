import { Router, type IRouter } from 'express';
import { postLogin, putSignup, patchEdit, postLogout } from '../controllers/auth';
import { loginValidation, signupValidation } from '../util/validation';
import isAuth from '../middlewares/is-auth'

const router: IRouter = Router();

router.post('/login', loginValidation, postLogin);

router.put('/signup', signupValidation, putSignup);

router.patch('/edit', isAuth, patchEdit);

router.post('/logout', isAuth, postLogout);

export default router;