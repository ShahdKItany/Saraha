import { Router } from 'express';
import joi from 'joi'; // This import is repeated, ensure it's necessary only once


const router = Router();

import * as MessageController from './message.controller.js';
import validation from '../../middleWare/validation.js';
import {sendMessageSchema} from './message.validation.js'


router.post('/:receiverId',validation(sendMessageSchema),MessageController.sendMessage);


export default router;
