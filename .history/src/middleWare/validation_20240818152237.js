

import joi from 'joi';


const dataMethods = ['body','params','query'];


export const generalFields = { // عشان ما اضل اكرر الداتا ولما بدي اعدل اعدل مره وحده
    email:joi.string().email().min(6).max(50).required(),
    password:joi.string().min(8).required(),
}

const validation = (schema)=>{

    const validationArray = [];

    return(req,res,next)=>{

    
    dataMethods.forEach(key=>{
        console.log(key);

        if(schema[key]){
            const validationResult =schema[key].validate(req[key],{abortEarly:false});

           if ( validationResult.error){

           
          //  validationArray.push(validationResult);    // add everything
          validationArray.push(validationResult.error.details);  // add only details 

           }
        }
    });

    if (validationArray.length > 0)
{
  return res.status(400).json({message:'validation Error ',validationArray}) ; 
}else{
    next();
}}

}

export default validation;



/*
import joi from 'joi';

const dataMethods = ['body', 'params', 'query'];

export const generalFields = { 
    email: joi.string().email().min(6).max(50).required(),
    password: joi.string().min(8).required(), // تم تحديد قيمة min
}

const validation = (schema) => {

    const validationArray = [];

    return (req, res, next) => {

        dataMethods.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false });

                if (validationResult.error) {
                    validationArray.push(validationResult.error.details); // إضافة التفاصيل فقط
                }
            }
        });

        if (validationArray.length > 0) {
            return res.status(400).json({ message: 'Validation Error', validationArray }); 
        } else {
            next();
        }
    }

}

export default validation;
*/