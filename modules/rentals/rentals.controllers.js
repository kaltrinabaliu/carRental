import { ObjectId } from "mongodb";
import { db } from "../../database/connection.js";








const getAllRentals= async (req,res)=>{
    const rentals= await db.collection('rentals').aggregate([{$lookup:{
        from:"customers",
        localField:"customerId",
        foreignField: "_id",
        as: "car_rented_to"
    }},{$project:{"car_rented_to.password":0}}]).toArray()
    res.status(200).json(rentals)
}

const getRental= async (req,res)=>{
    const rental = await db.collection('rentals')
    .aggregate([{$match:{_id:new ObjectId(req.params.id)}},
        {$lookup:{
        from: "customers",
        localField: "customerId",
        foreignField: "_id",
        as: "car_rented_to"
    }},{$project:{"car_rented_to.password":0}}]).toArray()
    res.status(200).json(rental)
}

export{
    getAllRentals,
    getRental,
}