import { hashPassword, passwordcheck } from "../utils/hash.js";
import { createToken } from "../utils/token.js";
import AuthUserModel from "../Model/authUserModel.js";
export const authSignUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email and password are required" });
        }
        const checkMail = await AuthUserModel.userLoginModel(email);
        if (checkMail) {
            return res.status(400).json({ message : "Email already exists" });
        }
        const newPassword = await hashPassword(password);
        const id = await AuthUserModel.userSignupModel({
            name,
            email,
            password: newPassword,
            role: role || "user",
        });
        return res.status(201).json({ message: "User created successfully", userId: id });
              
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await AuthUserModel.userLoginModel(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await passwordcheck(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = await createToken({
      id: user.id,
      role: user.role,
    });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};