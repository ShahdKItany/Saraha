import mongoose, { Schema ,mo } from 'mongoose'; // تصحيح الاستيراد من mongoose

// تعريف نموذج المستخدم
const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    confirmEmail: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // إضافة حقل timestamps لتخزين أوقات الإنشاء والتحديث
});

// تعريف النموذج بناءً على الـ Schema
const userModel = mongoose.model('User', userSchema);

export default userModel;
