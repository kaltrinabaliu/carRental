import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByUsername } from "../repositories/userRepository.js";

export const registerUser = async (fullName, email, username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await createUser({ fullName, email, username, password: hashedPassword });
};

 export const loginUser = async (username, password) => {
  const user = await findUserByUsername(username);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};


