import { findUserById } from "../repositories/userRepository.js";

export const getUserProfile = async (userId) => {
  const user = await findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  return {
    fullName: user.fullName,
    username: user.username,
    email: user.email,
  };
};
