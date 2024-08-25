


export const sendMessage = async (req,res)=>{

    const {message} = req.body;
    const {receiverId}=req.para

    return res.json("Hi , test send message");

}