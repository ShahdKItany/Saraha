export const register=(req,res)=>{

    const {userName,email,password}=req.body;


    return res.json("register");
}