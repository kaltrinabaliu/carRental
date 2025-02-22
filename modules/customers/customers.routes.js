import express from 'express'
import { getLoggedInCustomer, signin, signup, authenticateJWT } from './customers.controllers.js'
import checkEmailExist from '../../middlewares/checkEmailExist.js'
import signinValidation from '../../middlewares/signinValidation.js'
import authProfile from '../../middlewares/authProfile.js';
const customersRouter= express.Router()

customersRouter.post('/register',checkEmailExist,signup)
customersRouter.post('/login',signinValidation,signin)
customersRouter.get('/my-profile', authenticateJWT , getLoggedInCustomer);


export default customersRouter