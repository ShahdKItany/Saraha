const dataMethods = ['body','params','query'];


export const generalRields = {
    email:joi.string().email().main(6).max(50).required(),
    password:joi.string().main().required(),
}

const validation = (schema)=>{

    const validationArray = [];

    return(req,res,next)=>{

    
    dataMethods.forEach(key=>{
        console.log(key);

        if(schema[key]){
            const validationResult =schema[key].validate(req[key],{abortEarly:false});

           if ( validationResult.error){

           
          //  validationArray.push(validationResult);    // add everything
          validationArray.push(validationResult.error.details);  // add only details 

           }
        }
    });

    if (validationArray.length > 0)
{
  return res.status(400).json({message:'validation Error ',validationArray}) ; 
}else{
    next();
}}

}

export default validation;