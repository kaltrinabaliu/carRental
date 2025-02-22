const { getAllCars } = require("../repositories/carRepository");

const getRentalCars = async (req, res) => {
  try {
    const cars = await getAllCars(req.query);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getRentalCars };
