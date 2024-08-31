import { Router } from 'express';

const router = Router();

import * as AuthController from './auth.controller.js';
import validation from '../../middleWare/validation.js';
import { loginSchema, registerSchema } from './auth.validation.js';
//import asyncHandler from 'express-async-handler';
import  {asyncHandler }from '../../utils/catchError.js';

router.post('/register',validation(registerSchema) ,asyncHandler(AuthController.register));
//router.post('/register',validation(registerSchema) ,AuthController.register);


router.post('/login',validation(loginSchema),asyncHandler( AuthController.login));
//router.post('/login',validation(loginSchema), AuthController.login);


router.get('allUsers',asyncHandler(AuthController.allUsers));
//router.get('allUsers',AuthController.allUsers);


export default router;
