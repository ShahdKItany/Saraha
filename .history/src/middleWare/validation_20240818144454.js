const dataMethods = ['body','params','query'];

const validation = (schema)=>{

    return(req,res,next)=>{

    
    dataMethods.forEach(key=>{
        console.log(key);

        if(schema[key]){
            const
        }
    })
}

}

export default validation;