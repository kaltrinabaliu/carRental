import express from "express";
import { register, login, myProfile  } from "../controllers/authController.js";
import { getRentalCars } from "../controllers/carController.js";
import authMiddleware from "../utils/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/rental-cars", getRentalCars);
router.get("/my-profile", authMiddleware, myProfile);

export default router;
