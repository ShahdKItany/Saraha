

import userModel from '../../../DB/models/user.model.js';
import messageModel from '../../../DB/models/user.model.js';

export const sendMessage = async (req,res)=>{


    try
    const {message} = req.body;
    const {receiverId}=req.params;  //   اي دي اليوزر الي بدي ابعتله الرساله برسله من خلال الرابط بعد ما ادخل على صفحته

    //return res.json("Hi , test send message");


    const user = await userModel.findById(receiverId);

    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    await messageModel.create({message,receiverId});
    return res.status(201).json({message:"success"});

    //return res.json({message,receiverId});


}