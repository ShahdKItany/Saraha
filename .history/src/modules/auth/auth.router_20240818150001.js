import { Router } from 'express';

const router = Router();

import * as AuthController from './auth.controller.js';
import validation from '../../middleWare/validation.js';
import { registerSchema } from './auth.validation.js';

router.post('/register',validation(registerSchema) ,AuthController.register);
router.post('/login',val, AuthController.login);


export default router;
