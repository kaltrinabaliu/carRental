const Car = require("../models/car");

const getAllCars = async (filters = {}) => {
  return await Car.find(filters).sort({ price_per_day: 1 });
};

module.exports = { getAllCars };
