 import dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import cookieParser from "cookie-parser";
 import userRouter from "../routes/userRouter.js";
 import {errorMiddleware} from "../middlewares/error.js";
import dbConnection from "../database/dbConnaction.js";
 const app = express();


 dotenv.config({ path: "../config/config.env"});

 app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,
 })
);
 app.use(cookieParser());
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 app.use("/api/v1/user" ,userRouter);

 dbConnection();
 app.use(errorMiddleware);



 export default app