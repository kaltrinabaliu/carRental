import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

export let db; // Use `let` so it can be reassigned after connection

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("carRental"); // Assign db after successful connection
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit if DB connection fails
  }
}
