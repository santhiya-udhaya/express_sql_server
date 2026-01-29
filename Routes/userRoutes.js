import { createUserController,getAllUserController, updateUserPasswordController,deleteUserController } from "../Controller/userController.js";
import express from 'express'
const userRoutes = express.Router();
userRoutes.post("/signup" , createUserController);
userRoutes.get("/getusers", getAllUserController);
userRoutes.put("/updatePassword/:id",updateUserPasswordController);
userRoutes.delete("/deleteuser/:id",deleteUserController);

export default userRoutes;



 