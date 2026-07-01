require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log("====================================");
    console.log("🚀 KenoraFlow Server Started");
    console.log(`🌐 Running on http://localhost:${PORT}`);
    console.log("====================================");
  });
};

startServer();