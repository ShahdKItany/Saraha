import userModel from "../../../DB/models/user.model.js";
import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';
import { sendEmail } from "../../utils/sendEmail.js";
import { AppError } from "../../utils/appError.js";


//import { registerSchema } from "./auth.validation.js";

export const register=async (req,res,next)=>{

    const {userName,email,password}=req.body;
    const user=await userModel.findOne({email});

    //const validationResult = await registerSchema.body.validate(req.body,{abortEarly:false});
    //return res.json(validationResult);

    if(user){
       // return res.status(409).json({message:"email  alrady exists"});


      // return next(new Error ("email  alrady exists"));
      return next(new AppError ('email  alrady exists',409));


const hashedPassword = bcrypt.hashSync(password,parseInt(process.env.SALTROUND));

sendEmail(email,userName);
//const newUswe = await userModel.create({userName,email,password:hashedPassword});
 await userModel.create({userName,email,password:hashedPassword});

return res.status(201).json({message:"success"});
}
    

    return res.json("register");
}

export const login =async (req,res,next)=>{
    const {email,password}=req.body;
    const user = await userModel.findOne({email});


    if(!user){
       // return res.status(404).json({message:" user not found"});
       //return next(new Error ("user not found "));
       return next(new Error ("user not found "));

    }


    const match =bcrypt.compareSync(password,user.password);
    if(!match){
        return res.status(404).json({message:" password is not match"});
    }
    const token = await jwt.sign({id:user._id},process.env.LOGINSIGNATURE,{expiresIn:'1h'});
    return res.status(201).json({message:"success",token});

}