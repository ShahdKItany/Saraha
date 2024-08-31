import { Router } from 'express';

const router = Router();

import * as AuthController from './auth.controller.js';
import validation from '../../middleWare/validation.js';
import { loginSchema, registerSchema } from './auth.validation.js';

import asyncHandler from 'express-async-handler';


router.post('/register',validation(registerSchema) ,asyncHandlerAuthController.register);
router.post('/login',validation(loginSchema), AuthController.login);


export default router;
