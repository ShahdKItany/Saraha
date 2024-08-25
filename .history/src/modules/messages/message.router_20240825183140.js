// routes/messages.js
import { Router } from 'express';
import * as MessageController from './message.controller.js';
import validation from '../../middleWare/validation.js';
import { sendMessageSchema } from './message.validation.js';

const router = Router();

router.post('/:receiverId', validation(sendMessageSchema), MessageController.sendMessage);
router.get('/',MessageController.getMe)

export default router;
