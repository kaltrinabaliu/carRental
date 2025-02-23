import Car from "../models/car.js";

export const getAllCars = async (filters = {}) => {
  return await Car.find(filters).sort({ price_per_day: 1 });
};

