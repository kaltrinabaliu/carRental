import User from "../models/user.js";

export const createUser = async (userData) => await User.create(userData);
export const findUserByUsername = async (username) => await User.findOne({ username });
export const findUserById = async (id) => await User.findById(id);

