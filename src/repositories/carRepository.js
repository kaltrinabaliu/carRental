import { db } from "../db/rent.js";

export const getAllCars = async (filters = {}) => {
  return await db.collection("cars")
    .find(filters)  
    .sort({ price_per_day: 1 })  
    .toArray();  
};

export const createCar = async (carData) => {
  return await db.collection("cars").insertOne(carData);

};

