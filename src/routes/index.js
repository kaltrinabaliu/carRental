import express from "express";
import { register, login } from "../controllers/authController.js";
import { getRentalCars } from "../controllers/carController.js";
import authMiddleware from "../utils/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/rental-cars", getRentalCars);
router.get("/my-profile", authMiddleware, (req, res) => {
  res.json(req.user);
});

export default router;
