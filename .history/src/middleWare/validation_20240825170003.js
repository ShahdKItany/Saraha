

import joi from 'joi';


const dataMethods = ['body','params','query'];


export const generalFields = { // عشان ما اضل اكرر الداتا ولما بدي اعدل اعدل مره وحده
    email:joi.string().email().min(6).max(50).required(),
    password:joi.string().min(8).required(),
}

const validation = (schema) => {
    return (req, res, next) => {
        const validationArray = [];

        dataMethods.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false });

                if (validationResult.error) {
                    validationArray.push(...validationResult.error.details); // Flatten the array
                }
            }
        });

        if (validationArray.length > 0) {
            return res.status(400).json({ message: 'Validation Error', errors: validationArray });
        } else {
            next();
        }
    }
}


export default validation;


