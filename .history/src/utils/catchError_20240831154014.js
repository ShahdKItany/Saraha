export const asyncHandler =(func)=>{


    return (req,res,next)=>{

        try{
            return func();

        }catch(err){

        }
    }

}