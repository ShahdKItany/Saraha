

import joi from 'joi';

export const sendMessageSchema ={

    body:joi.object({
        message:joi.string().min(3).
    })

}

