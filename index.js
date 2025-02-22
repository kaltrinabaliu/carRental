import express from 'express'
import carRouter from './modules/cars/cars.routes.js'
import customersRouter from './modules/customers/customers.routes.js'
// import rentalRouter from './modules/rentals/rental.routes.js'
// import specialRouter from './modules/specialAPIs/special.routes.js'


const app = express()
const PORT=3000
app.use(express.json())
app.use('/cars',carRouter)
app.use('/auth',customersRouter)
app.use('/customers',customersRouter)
// app.use('/rentals',rentalRouter)
// app.use('/available',specialRouter) 
// app.use('/model',specialRouter) 
// app.use('/query',specialRouter) 




app.listen(PORT,()=>console.log("server is running"))