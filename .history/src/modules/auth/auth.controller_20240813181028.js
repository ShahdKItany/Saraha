import userModel from "../../../DB/models/user.model";

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
        return res.status(404).json({message:"cath error:", error:err.stack});

    }
}