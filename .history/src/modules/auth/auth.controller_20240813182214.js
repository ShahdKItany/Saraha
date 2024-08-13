import userModel from "../../../DB/models/user.model";
import jwt from 'jsonwebtoken';

export const register=async (req,res)=>{
try {
    const {userName,email,password}=req.body;

    const user=await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:"email  alrady exists"});
    }

const hashedPassword = bcrypt.hashSync(password,parseInt(process.env.SALTROUND));
//const newUswe = await userModel.create({userName,email,password:hashedPassword});
 await userModel.create({userName,email,password:hashedPassword});

return res.status(201).json({message:"success"});
}catch(err){

    return res.status(500).json({message:"cath error:", error:err.stack});

}
    

    return res.json("register");
}

export const login =async (req,res)=>{
    const {email,password}=req.body;
    const user = await userModel.findOne({email});


    if(!user){
        return res.status(404).json({message:" user not found"});

    }


    const match =bcrypt.compareSync(password,user.password);
    if(!match){
        return res.status(404).json({message:" password is not match"});
    }
    const token = await jwt.sign({id:user._id},process.env.LOGINSIGNATURE,{e});
    return res.status(201).json({message:"success",token});

}