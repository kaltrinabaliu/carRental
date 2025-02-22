import express from 'express'
import {  getAllRentals, getRental } from './rentals.controllers.js'
import checkCar from '../../middlewares/checkCar.js'
const rentalRouter= express.Router()



rentalRouter.get('/',getAllRentals)
rentalRouter.get('/:id',getRental)




export default rentalRouter