const dataMethods = ['body','params','query'];

const validation = (schema)=>{

    return(req,res,next)=>{

    
    dataMethods.forEach(key=>{
        console.log(key);

        if(schema[key]){
            const validationResult =schema[key].validate
        }
    })
}

}

export default validation;