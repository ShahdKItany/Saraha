import mongoose from  'mongoose';


  const connectDB = ()=> {
  
    try {
        await mongoose.connect(process.env.DB_LOCAL);
        console.log("Connected to the database");
    } catch (err) {
        console.log("Error connecting to the database", err);
    }
    

export default connectDB;