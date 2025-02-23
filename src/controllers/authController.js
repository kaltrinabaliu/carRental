import { registerUser, loginUser } from "../services/authServices.js";
import { getUserProfile } from "../services/userServices.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body.fullName, req.body.email, req.body.username, req.body.password);
    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await loginUser(req.body.username, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const myProfile = async (req, res) => {
  try {
    const userProfile = await getUserProfile(req.user.userId);
    res.json(userProfile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
