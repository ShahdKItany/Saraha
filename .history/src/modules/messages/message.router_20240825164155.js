import { Router } from 'express';

const router = Router();

import * as MessageController from './message.controller.js';
import validation from '../../middleWare/validation.js';
import {sendMessageSchema} from 'assert'


router.post('/:receiverId',validation(sendMessageSchema),MessageController.sendMessage);


export default router;
