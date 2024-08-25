import { Router } from 'express';

const router = Router();

import * as MessageController from './message.controller.js';
//import validation from '../../middleWare/validation.js';
import { loginSchema, registerSchema } from './auth.validation.js';

router.post('/register',validation(registerSchema) ,AuthController.register);
router.post('/login',validation(loginSchema), AuthController.login);


export default router;
