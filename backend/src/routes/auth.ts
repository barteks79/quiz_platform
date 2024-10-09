import { Router, type IRouter } from 'express';

const router: IRouter = Router();

router.post('/login');

router.put('/signup');

export default router;