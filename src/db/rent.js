import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

export let db; 

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("carRental"); 
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); 
  }
}
