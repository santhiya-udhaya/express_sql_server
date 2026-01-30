import {connectDB} from './Db/db.js';
import express from "express";
import cors from "cors";//
import dotenv from "dotenv";//
import userRoutes from "./Routes/userRoutes.js";
import authUserRoutes from "./Routes/authUserRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


connectDB();

app.use("/api/users", userRoutes);
app.use("/api/auth",authUserRoutes);

app.listen(PORT,()=>{
    console.log(`your server is running in ${PORT}`);
});


