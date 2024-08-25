

import joi from 'joi';


const dataMethods = ['body','params','query'];


export const generalFields = { // عشان ما اضل اكرر الداتا ولما بدي اعدل اعدل مره وحده
    email:joi.string().email().min(6).max(50).required(),
    password:joi.string().min(8).required(),
}

import joi from 'joi';


export default validation;


