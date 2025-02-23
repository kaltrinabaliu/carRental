import { getAllCars } from "../repositories/carRepository.js";
import { createCar } from "../repositories/carRepository.js";

export const getRentalCars = async (req, res) => {
  try {
    const filters = req.query;  
    const cars = await getAllCars(filters); 
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const addCar = async (req, res) => {
  try {
    const carData = req.body;  
    const newCar = await createCar(carData);  
    res.status(201).json(newCar);  
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
