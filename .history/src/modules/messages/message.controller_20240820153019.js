


export const sendMessage = async (req,res)=>{

    const {message} = req.body;
    const {receiverId}=req.params;  // id  اي دي اليوزر الي بدي ابعتله الرساله برسله من خلال الرابط بعد ما ادخل 

    return res.json("Hi , test send message");

}