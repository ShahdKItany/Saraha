import { Router } from 'express';

const router = Router();

import * as AuthController from './auth.controller.js';
import validation from '../../middleWare/validation.js';
import { loginSchema, registerSchema } from './auth.validation.js';

import from'express-async-handler';


router.post('/register',validation(registerSchema) ,AuthController.register);
router.post('/login',validation(loginSchema), AuthController.login);


export default router;
