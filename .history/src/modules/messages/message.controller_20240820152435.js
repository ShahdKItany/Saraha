


export const sendMessage = async (req,res)=>{

    const {message} = req.body;

    return res.json("Hi , test send message");

}