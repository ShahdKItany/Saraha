import { Router } from 'express';

const router = Router();

import * as MessageController from './message.controller.js';


router.post('/:receiverId',valid,MessageController.sendMessage);


export default router;
