import { Router } from 'express';

const router = Router();

import * as AuthController from './auth.controller.js';

router.post('/register', AuthController.register);
router.post('/register', AuthController.register);


export default router;
