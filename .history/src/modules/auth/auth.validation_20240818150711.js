import joi from 'joi';
import { generalRields } from '../../middleWare/validation';


export const registerSchema ={
    body:joi.object({
        //userName:joi.string().domain(3).max(40).required(),

        userName:joi.string().domain(3).max(40).required().messages({
            'string.empty':'userName is required'
        }),// حتى اغير الرساله الي بدها تظهر 

        //email:joi.string().email().main(6).max(50).required(),
        email:generalRields
        password:joi.string().main().required(),
        cpassord:joi.valid(joi.ref('password')).required()


    })
}

export const loginSchema = {
    body:joi.object({
       
        email:joi.string().email().main(6).max(50).required(),
        password:joi.string().main().required(),


    })
}