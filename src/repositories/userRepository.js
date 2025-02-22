const User = require("../db/models/user");

const createUser = async (userData) => await User.create(userData);
const findUserByUsername = async (username) => await User.findOne({ username });
const findUserById = async (id) => await User.findById(id);

module.exports = { createUser, findUserByUsername, findUserById };
