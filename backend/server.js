const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const leadRoutes = require("./routes/leadRoutes");
const pocRoutes = require("./routes/pocRoutes");
const interactionRoutes = require("./routes/interactionRoutes");
const callRoutes = require("./routes/callRoutes");

// Initialize app and load environment variables
dotenv.config();
const app = express();
app.use(express.json());
connectDB();

// Middleware setup
app.use(bodyParser.json());
app.use(require("cors")());

// Routes setup
app.use("/api/restaurants", require("./routes/restaurantRoutes"));
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/pocs", pocRoutes);
app.use("/api/interactions", interactionRoutes);
app.use("/api/calls", callRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
