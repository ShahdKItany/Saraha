import joi from 'joi';


export const registerSchema ={
    body:joi.object({
        userName:joi.string().domain(3).max(40).required(),
        email:joi


    })
}