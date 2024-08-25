import { Router } from 'express';

const router = Router();

import * as MessageController from './message.controller.js';



router.post('/:receiverId',validation(sendMessageSchema),MessageController.sendMessage);


export default router;
