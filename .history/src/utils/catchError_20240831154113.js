export const asyncHandler =(func)=>{


    return (req,res,next)=>{

        try{
            return func();

        }catch(errr){
return res.status(500).j
        }
    }

}