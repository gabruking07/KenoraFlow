const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const businessRoutes = require("./routes/businessRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to KenoraFlow API",
    version: "1.0.0",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/business", businessRoutes);

module.exports = app;