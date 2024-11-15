import express from "express";
import dotenv from"dotenv";
import dbConnect from "./config/database.js";
import User from "./models/user.js";
import router from "./Routes/FeedbackRoutes.js";
dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.json())
app.use("/api/v1",router)
dotenv.config
dbConnect();







app.listen(PORT,()=>{
    console.log(`server is running at PORT : ${PORT}`)
})
