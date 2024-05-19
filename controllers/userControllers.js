import {catchAsyncErrror } from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../middlewares/error.js";
import { User } from "../model/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";


export const register = catchAsyncErrror(async(req,res,next)=>{
    const{name,email,password} = req.body;
    if( !name|| !email || !password){
        return next(new ErrorHandler("plese fill regstration form"))
    }
  
});