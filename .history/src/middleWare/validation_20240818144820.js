const dataMethods = ['body','params','query'];

const validation = (schema)=>{

    const validationArray = [];

    return(req,res,next)=>{

    
    dataMethods.forEach(key=>{
        console.log(key);

        if(schema[key]){
            const validationResult =schema[key].validate(req[key],{abortEarly:false});

           if ( validationResult.error){

           
            validationArray.push(validationResult);
           }
        }
    });

    if (validationArray.length > 0)
{
  return res.status  
}}

}

export default validation;