export const asyncHandler =(func)=>{


    return (req,res,next)=>{

        try{
            return func();

        }catch(error){
return res.status(500).json(message:"cat")
        }
    }

}