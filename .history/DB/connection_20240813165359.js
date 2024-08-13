import mongoose from  'mongoose';


  const connectDB = ()=> {
  
  return mongoose.connect(process.env.connectDB).then(result=>{
    console.log(`connect DB..`);
   }).catch(err=>{
    console.log(`error to connect DB: ${err}`)
   })
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default connectDB;