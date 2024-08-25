import mongoose, { Schema, Types } from 'mongoose'; 

const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    receiverId:{
        type:Types.ObjectId,
        required: true,
        ref:'User',// حتى يعرف انو هاد الاي دي مربوط بل يوزر ويكون اي دي صح مش اشي هبل او خطا او مش موجود 

    }
}, {
    timestamps: true //  لتخزين أوقات الإنشاء والتحديث
});

const messageModel = mongoose.model('Message', messageSchema);

export default messageModel;
