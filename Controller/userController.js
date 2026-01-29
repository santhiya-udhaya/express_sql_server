import UserModel from "../Model/userModel.js";
export const createUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const response = await UserModel.createUserModel({ name, email, password });
        res.status(201).json({  
            message: "User created successfully" ,
            userId: response 
            })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
export const getAllUserController = async (req, res) => {
    try {
        const data = await UserModel.getAllUsersModel();
        res.status(200).json({ data });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
export const updateUserPasswordController = async (req,res) => {
    try{
        const { password } = req.body;
        const { id } =req.params;

        const response = await UserModel.updateUserPasswordModel(id,{ password});
        if(!response){
            res.status(404).json({message:"User not found"})

        }
        else{
            res.status(200).json({ message: "Password updated successfully" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
export const deleteUserController = async (req,res) => {
    try{
        const delte = await UserModel.deleteUserModel(req.params.id);
        if(!delte){
            res.status(404).json({message:"User not found"})
        }
        else{
            res.json({ message: "User deleted successfully" });
        }
        }

    
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
