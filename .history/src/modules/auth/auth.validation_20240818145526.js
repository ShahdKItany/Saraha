import joi from 'joi';


export const registerSchema ={
    body:joi.object({
        //userName:joi.string().domain(3).max(40).required(),
        userName:joi.string().domain(3).max(40).required().messages(),

        email:joi.string().email().main(6).max(50).required(),
        password:joi.string().main().required(),
        cpassord:joi.valid(joi.ref('password')).required(),


    })
}