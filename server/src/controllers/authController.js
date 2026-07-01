const Business = require("../models/Business");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Register Business
const registerBusiness = async (req, res) => {
  try {
    const {
      ownerName,
      companyName,
      email,
      password,
      phone,
      industry,
    } = req.body;

    const businessExists = await Business.findOne({ email });

    if (businessExists) {
      return res.status(400).json({
        success: false,
        message: "Business already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const business = await Business.create({
      ownerName,
      companyName,
      email,
      password: hashedPassword,
      phone,
      industry,
    });

    res.status(201).json({
      success: true,
      message: "Business registered successfully",
      token: generateToken(business._id),
      data: business,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Business
const loginBusiness = async (req, res) => {
  try {

    const { email, password } = req.body;

    const business = await Business.findOne({ email });

    if (!business) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, business.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      token: generateToken(business._id),
      data: business,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerBusiness,
  loginBusiness,
};