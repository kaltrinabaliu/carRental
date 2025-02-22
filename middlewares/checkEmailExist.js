import { ObjectId } from "mongodb";
import { db } from "../database/connection.js";

const checkEmailExist= async (req,res,next)=>{
    const {email}=req.body
    let found = await db.collection('customers').findOne({email:email})
    if(found){
        return res.json({message:"email already exists"})
    }
    next()
    
}

export default checkEmailExist