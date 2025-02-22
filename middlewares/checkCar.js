import { ObjectId } from "mongodb"
import { db } from "../database/connection.js"

const checkCar= async (req,res,next)=>{
const car= await db.collection('cars').findOne({_id: new ObjectId(req.body.carId)})
if(car.rentalStatus!=="available"){
    return res.json({message:"car isn't available"})
}
req.car=car
return next()

}

export default checkCar