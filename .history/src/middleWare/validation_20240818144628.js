const dataMethods = ['body','params','query'];

const validation = (schema)=>{

    const validationA

    return(req,res,next)=>{

    
    dataMethods.forEach(key=>{
        console.log(key);

        if(schema[key]){
            const validationResult =schema[key].validate(req[key],{abortEarly:false});
        }
    })
}

}

export default validation;