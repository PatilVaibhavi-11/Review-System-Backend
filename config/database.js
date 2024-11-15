import mongoose from "mongoose";

const dbConnect=async()=>{
    try{
          await mongoose.connect(process.env.MONGODB_URL)
          console.log("Mongodb connected succesfully")
    } catch(error){
        console.log("Connection failed !!",error)
    }
}
export default dbConnect;