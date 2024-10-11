import { Router, type IRouter } from 'express';
import { postLogin, putSignup, patchEdit } from '../controllers/auth';
import { loginValidation } from '../util/validation';

const router: IRouter = Router();

router.post('/login', loginValidation, postLogin);

router.put('/signup', putSignup);

router.patch('/edit', patchEdit);

export default router;