import userModel from "../../../DB/models/user.model";

export const register=async (req,res)=>{

    const {userName,email,password}=req.body;

    const user=await userModel.findOne({email});
    if(user){
        return res.status().json({message:"email is al"})
    }


    return res.json("register");
}