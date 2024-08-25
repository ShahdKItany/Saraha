


export const sendMessage = async (req,res)=>{

    const {message} = req.body;
    const {receiverId}=req.params;

    return res.json("Hi , test send message");

}