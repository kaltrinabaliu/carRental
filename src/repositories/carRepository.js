import { db } from "../db/rent.js";

export const getAllCars = async (filters = {}) => {

  const query = {};

  if (filters.year) query.year = parseInt(filters.year);
  if (filters.color) query.color = filters.color;
  if (filters.steering_type) query.steering_type = filters.steering_type;
  if (filters.number_of_seats) query.number_of_seats = parseInt(filters.number_of_seats);
  
  return await db.collection("cars")
    .find(query)  
    .sort({ price_per_day: 1 })  
    .toArray();  
};

export const createCar = async (carData) => {
  return await db.collection("cars").insertOne(carData);

};

