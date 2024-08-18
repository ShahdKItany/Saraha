import { Router } from 'express';

const router = Router();

import * as AuthController from './auth.controller.js';
import validation from '../../middleWare/validation.js';

router.post('/register',validation(re) ,AuthController.register);
router.post('/login', AuthController.login);


export default router;
