import { createUserController } from "../Controller/userController.js";
import express from 'express'
const userRoutes = express.Router();
userRoutes.post("/signup" , createUserController);

export default userRoutes



 