import express from 'express'
import { addCar, deleteCar, getAllCars, getCar, updateCar } from './cars.controllers.js'
const carRouter=express.Router()

carRouter.post('/',addCar)
carRouter.put('/:id',updateCar)
carRouter.delete('/:id',deleteCar)
carRouter.get('/:id',getCar)
carRouter.get('/',getAllCars)

export default carRouter
