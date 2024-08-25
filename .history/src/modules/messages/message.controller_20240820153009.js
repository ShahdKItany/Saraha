


export const sendMessage = async (req,res)=>{

    const {message} = req.body;
    const {receiverId}=req.params;  // id  اي دي اليوزر الي بدي ابعتله الرساله برسله من خالل

    return res.json("Hi , test send message");

}