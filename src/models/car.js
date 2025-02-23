import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: String,
  price_per_day: Number,
  year: Number,
  color: String,
  steering_type: String,
  number_of_seats: Number,
});

export default mongoose.model("Car", CarSchema);
