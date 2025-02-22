import { db } from "../../database/connection.js";

const getSpeceficModels= async (req,res)=>{
    const {model1,model2}=req.query
    const cars= await db.collection('cars').aggregate([{$match:{name:{$in:[model1,model2]}}}]).toArray()
    res.status(200).json(cars)
}

const getAvailableModel= async (req,res)=>{
    const {model}=req.params
    console.log(model)
    const rentalStatus= 'available'
    const cars= await db.collection('cars').aggregate([{$match:{name:model}},{$match:{rentalStatus}}]).toArray()
    res.status(200).json(cars)
}

const getModel= async (req,res)=>{
    const {model}=req.params
    console.log(model)
    const cars= await db.collection('cars')
    .find({$or:[{name:model},{rentalStatus:'rented'}]}).toArray()
    res.status(200).json(cars)
}

const queryModels= async (req,res)=>{
    const {availableModels,rentedModel}= req.query
    const availableModelsArray= availableModels? availableModels.split(','):[]
    const cars=await db.collection('cars')
    .find({$or:[{rentalStatus:'available'
        ,name:{$in:availableModelsArray}}
        ,{rentalStatus:'rented',name: rentedModel}]}).toArray()
    res.status(200).json(cars)
}

export{
    getSpeceficModels,
    getAvailableModel,
    getModel,
    queryModels
}