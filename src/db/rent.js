import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

const db = client.db("carRental");
export default{ connectDB, db };
