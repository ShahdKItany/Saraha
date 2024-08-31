// routes/messages.js
import { Router } from 'express';
import * as MessageController from './message.controller.js';
import validation from '../../middleWare/validation.js';
import { sendMessageSchema } from './message.validation.js';
//import asyncHandler from 'express-async-handler';

const router = Router();


router.post('/:receiverId', validation(sendMessageSchema), MessageController.sendMessage);
router.get('/',MessageController.getMessages);


//router.post('/:receiverId', validation(sendMessageSchema),asyncHandler( MessageController.sendMessage));
//router.get('/',asyncHandler(MessageController.getMessages));

router.post('/:receiverId', validation(sendMessageSchema), MessageController.sendMessage);
router.get('/',MessageController.getMessages);
export default router;
