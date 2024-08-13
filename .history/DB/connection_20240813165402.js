import mongoose from  'mongoose';


  const connectDB = ()=> {
  
  return mongoose.connect(process.env.connectDB).then(result=>{
    console.log(`connect DB..`);
   }).catch(err=>{
    console.log(`error to connect DB: ${err}`)
   })
}

export default connectDB;