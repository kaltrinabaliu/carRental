const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./db/rent");
const routes = require("./routes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

connectDB();

app.listen(3000, () => console.log("Server running on port 3000"));
