const express = require("express");
const { register, login } = require("../controllers/authController");
const { getRentalCars } = require("../controllers/carController");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/rental-cars", getRentalCars);
router.get("/my-profile", authMiddleware, (req, res) => {
  res.json(req.user);
});

module.exports = router;
