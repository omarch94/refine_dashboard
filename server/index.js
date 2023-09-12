import express from "express";
import * as dotenv from "dotenv";
import cors from "cors"
import connectDb from "./mongodb/connect.js";
import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js'
dotenv.config();

const app=express();

app.use(cors());

app.use(express.json({limit:'50mb'}));

app.get('/',(req,res)=>{
    res.send({message:"Hello world"})
})
//midlewear
app.use('/api/v1/users',userRouter);
app.use('/api/v1/properties',propertyRouter);

const startServer=async ()=>{
    try{
            connectDb(process.env.URL_MONGOOSE,{ useNewUrlParser: true });
            app.listen(process.env.PORT,()=>console.log("Server Started on http://localhost:8080"))
    }
    catch(error){
        console.log(error);
    }
}

startServer();

app.listen(8080, () => {
    console.log('server started')
})