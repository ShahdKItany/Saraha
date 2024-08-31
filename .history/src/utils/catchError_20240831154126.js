export const asyncHandler =(func)=>{


    return (req,res,next)=>{

        try{
            return func();

        }catch(Errr){
return res.status(500).json
        }
    }

}