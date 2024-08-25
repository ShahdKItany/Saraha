import { Router } from 'express';

const router = Router();

import * as MessageController from './message.controller.js';


router.post('/',MessageController)


export default router;
