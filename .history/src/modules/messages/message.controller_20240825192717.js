

import userModel from '../../../DB/models/user.model.js';
import messageModel from '../../../DB/models/message.model.js'; 
import jwt from 'jsonwebtoken';
export const sendMessage = async (req,res)=>{


    try{
    const {message} = req.body;
    const {receiverId}=req.params;  //   اي دي اليوزر الي بدي ابعتله الرساله برسله من خلال الرابط بعد ما ادخل على صفحته

    //return res.json("Hi , test send message");

 //      
    const user = await userModel.findById(receiverId);

    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    await messageModel.create({message,receiverId});
    return res.status(201).json({message:"success"});
    }catch(error){
        return res.status(500).json({message: `catch error`,error:error.stack});

    }
    //return res.json({message,receiverId});


}

export const getMessages = async(req,res)=>{


try{ 
    const {token} =req.headers;

    const decoded = jwt.verify(token,process.env.LOGINSIGNATURE);
    if(!decoded){
        return res.status(400).json({message:"invalid token"});

    }
    const id = decoded.id;

    const messages =messageModel.find({receiverId:id})
    return res.status(500).json({message:"suu"})
    return res.json(decoded);
}catch(error){
    return res.status(500).json({message:`catch error`,error:error.stack})
};
}