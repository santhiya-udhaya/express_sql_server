import {connectDB} from './Db/db.js';
import express from "express";
import cors from "cors";//
import dotenv from "dotenv";//
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


connectDB();

app.use("/api/users", userRoutes);

app.listen(PORT,()=>{
    console.log(`your server is running in ${PORT}`);
});


