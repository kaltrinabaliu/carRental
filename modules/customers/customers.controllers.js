import { ObjectId } from "mongodb";
import { db } from "../../database/connection.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req, res) => {
    try {
        const { fullname, email, username, password } = req.body;

        if (!fullname || !email || !username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await db.collection('customers').findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(409).json({ message: "Email or username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        await db.collection('customers').insertOne({
            fullname,
            email,
            username,
            password: hashedPassword,
            createdAt: new Date(),
        });

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const signin=(req,res)=>{
    res.json(req.body.user._id)
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
}



const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

// Get logged-in user
const getLoggedInCustomer = async (req, res) => {
    try {
        const user = await db.collection("customers").findOne(
            { _id: new ObjectId(req.user.id) },
            { projection: { fullname: 1, username: 1, email: 1 } }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error("Get Logged In Customer Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export {
    signup,
    signin,
    getLoggedInCustomer,
    authenticateJWT 
}