import express from "express";
import * as dotenv from "dotenv";
import cors from  "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";// importing routes
import dalleRoutes from "./routes/dalleRoutes.js";


dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'})); // enables the server to parse incoming requests with JSON payloads up to a limit of 50MB.
//data being send cannot exceed 50MB
app.use('/api/v1/post',postRoutes);// any HTTP requests that match the route path /api/v1/post will be handled by the middleware 
//functions defined in the postRoutes module.
app.use('/api/v1/dalle',dalleRoutes);
app.get("/",async(req, res)=>{
    res.send('Hello from DALLE');
});
connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT||8080,()=>{
            console.log('server has started on port http://localhost:8080');
        })
