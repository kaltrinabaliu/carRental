import { db } from "../db/rent.js";
import { ObjectId } from "mongodb";


export const createUser = async (userData) => {
  return await db.collection("users").insertOne(userData);
};

export const findUserByUsername = async (username) => {
  return await db.collection("users").findOne({ username });
};

export const findUserById = async (id) => {
  return await db.collection("users").findOne( { _id: new ObjectId(id) },
  { projection: { fullName: 1, username: 1, email: 1 } } );
};
