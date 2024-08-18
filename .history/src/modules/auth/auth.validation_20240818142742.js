import joi from 'joi';


export const registerSchema ={
    body:joi.object({
        userName:joi.string().domain(3)

    })
}