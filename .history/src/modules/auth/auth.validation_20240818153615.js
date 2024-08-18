



import joi from 'joi';
import { generalFields } from '../../middleWare/validation.js';

export const registerSchema = {
    body: joi.object({
        userName: joi.string().min(3).max(40).required().messages({
            'string.empty': 'userName is required'
        }),
        email: generalFields.email,
        password: generalFields.password,
        cpassword: joi.string().valid(joi.ref('password')).required().messages({
            'any.only': 'Passwords do not match',
            'string.empty': 'Confirm Password is required'
        })
    })
}

export const loginSchema = {
    body: joi.object({
        email: generalFields.email,
        password: generalFields.password,
    })
}
