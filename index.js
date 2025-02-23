import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/db/rent.js";
import routes from "./src/routes/index.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

connectDB();

app.listen(3000, () => console.log("Server running on port 3000"));
