import express from 'express'
import { db } from '../../database/connection.js'
import { ObjectId } from 'mongodb'

const addCar=(req,res)=>{
    db.collection('cars').insertOne(req.body)
    res.status(201).json({message:"success"})
}
const updateCar=(req,res)=>{
    db.collection('cars')
    .updateOne({_id:new ObjectId(req.params.id)},
    {$set:req.body})
    res.status(200).json({message:"success"})
}
const deleteCar=(req,res)=>{
    db.collection('cars')
    .deleteOne({_id:new ObjectId(req.params.id)})
    res.status(200).json({message:"deleted"})
}
const getCar= async (req,res)=>{
    let car = await db.collection('cars')
    .findOne({_id: new ObjectId(req.params.id)},{projection:{_id:0}})
    res.status(200).json(car)
}
const getAllCars = async (req,res)=>{
    let cars= await db.collection('cars')
    .find({},{projection:{_id:0}}).toArray()
    res.status(200).json(cars)
}
export{
    addCar,
    updateCar,
    deleteCar,
    getCar,
    getAllCars
}