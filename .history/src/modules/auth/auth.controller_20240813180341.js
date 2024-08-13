import userModel from "../../../DB/models/user.model";

export const register=async (req,res)=>{
try {
    const {userName,email,password}=req.body;

    const user=await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:"email  alrady exists"});
    }

const hashedPassword = bcrypt.hashSync(password,parseInt(process.env.SALTROUND));
const newUswe = await userModel.create({userName,email,password:hashedPassword});

return res.status(201).json({message:"success"});
}catch(err){

    return res.

}
    

    return res.json("register");
}