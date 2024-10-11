import { Router, type IRouter } from 'express';
import { postLogin, putSignup, patchEdit, postLogout } from '../controllers/auth';
import { loginValidation, signupValidation } from '../util/validation';

const router: IRouter = Router();

router.post('/login', loginValidation, postLogin);

router.put('/signup', signupValidation, putSignup);

router.patch('/edit', patchEdit);

router.post('/logout', postLogout)

export default router;