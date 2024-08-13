import userModel from "../../../DB/models/user.model";

export const register=async (req,res)=>{

    const {userName,email,password}=req.body;

    const user=await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:"email  alrady exists"});
    }

const hashedPassword = bcrypt.hashSync(password,parseInt(process.env.SALTROUND));
const newUswe

    return res.json("register");
}