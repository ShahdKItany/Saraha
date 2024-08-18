const dataMethods = ['body','params','query'];

const validation = (schema)=>{

    return(req,res,next)=>{

    
    dataMethods.forEach(key=>{
        console.log(key);
    })

}

export default validation;