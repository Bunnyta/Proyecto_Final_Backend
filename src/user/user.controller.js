import { userModel } from "./user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { name, surname, email, password, rol } = req.body;
  try {
    const newUser = await userModel.create({
      name,
      surname,
      email,
      password: bcryptjs.hashSync(password, 10),
      rol,
    });

    const token = jwt.sign({ user_id: newUser.user_id }, process.env.JWT_SECRET);
    const { password:_, ...user } = newUser;
    return res.status(201).json({
        token,
        user,
    });
  } catch (error) {
    console.log(error);
    if (error.code === "23505") {
      return res.status(400).json({ error: "User already exists" });
    }
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne(email);
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials." });
    }
    const isMatch = bcryptjs.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalida Credentials" });
    }

const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET);

return res.status(200).json ({ token, email });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export const userController = {
  register,
  login,
};
