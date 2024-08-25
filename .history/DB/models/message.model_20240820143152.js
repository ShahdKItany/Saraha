import mongoose, { Schema, Types } from 'mongoose'; 

// تعريف نموذج المستخدم
const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    receiverId:{
        type:Types.
    }
}, {
    timestamps: true // إضافة حقل timestamps لتخزين أوقات الإنشاء والتحديث
});

// تعريف النموذج بناءً على الـ Schema
const messageModel = mongoose.model('Message', messageSchema);

export default messageModel;
