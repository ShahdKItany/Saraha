export const register=async(req,res)=>{

    const {userName,email,password}=req.body;

    const user=await


    return res.json("register");
}