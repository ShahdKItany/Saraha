import { Router } from 'express';

const router = Router();

import * as MessageController from './message.controller.js';
import vali


router.post('/:receiverId',validation(sendMessageSchema),MessageController.sendMessage);


export default router;
