import { getAllCars } from "../repositories/carRepository.js";
import { createCar } from "../repositories/carRepository.js";

export const getRentalCars = async (req, res) => {
  try {
    const cars = await getAllCars(req.query);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const addCar = async (req, res) => {
  try {
    const carData = req.body;  // Get the car data from the request body
    const newCar = await createCar(carData);  // Create the car using the repository function
    res.status(201).json(newCar);  // Return the created car as a response
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
