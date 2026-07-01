const express = require("express");
const router = express.Router();

const {
  registerBusiness,
  loginBusiness,
} = require("../controllers/authController");

// Register
router.post("/register", registerBusiness);

// Login
router.post("/login", loginBusiness);

module.exports = router;