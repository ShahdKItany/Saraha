export const asyncHandler =(func)=>{


    return (req,res,next)=>{

        try{
            return func();

        }catch(Error){
return res.status(500).json
        }
    }

}