

import userModel from
export const sendMessage = async (req,res)=>{

    const {message} = req.body;
    const {receiverId}=req.params;  //   اي دي اليوزر الي بدي ابعتله الرساله برسله من خلال الرابط بعد ما ادخل على صفحته

    //return res.json("Hi , test send message");


    const user = await userModel.findById(receiverId);

    return res.json({message,receiverId});


}