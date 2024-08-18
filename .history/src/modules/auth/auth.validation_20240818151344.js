

/*
import joi from 'joi';
import { generalFields } from '../../middleWare/validation.js';


export const registerSchema ={
    body:joi.object({
        //userName:joi.string().domain(3).max(40).required(),

        userName:joi.string().domain(3).max(40).required().messages({
            'string.empty':'userName is required'
        }),// حتى اغير الرساله الي بدها تظهر 

        //email:joi.string().email().min(6).max(50).required(),
        email:generalFields.email,
        //password:joi.string().min().required(),
        password:generalFields.password,
        cpassord:joi.valid(joi.ref('password')).required()


    })
}

export const loginSchema = {
    body:joi.object({
       
        //email:joi.string().email().min(6).max(50).required(),
       // password:joi.string().min().required(),

       email:generalFields.email,
       password:generalFields.password,


    })
}
*/

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
