import userModel from "../models/user.js";
import user from "../models/user.js"

export const isAdmin=async (req,res,next)=>{
try {
   const {email}=req.body; 
   const userInfo= await userModel.findOne({email})
   if(userInfo && userInfo.role=="Admin")
   {
    next(); //proceed
   }
   else{
    res.status(403).json({
        message:"Access denied!! Only admin can access the company"
    })
   }
} catch (error) {
    console.log(error);
    res.status(500).json({
        message :"internal server error"
    })
}
}