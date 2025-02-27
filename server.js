require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/database"); // Secure DB connection
const bookingsRoutes = require("./routes/bookings");
const itinerariesRoutes = require("./routes/itineraries");
const testimonialsRoutes = require("./routes/testimonials");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to Database
connectDB();

// Routes
app.use("/api/bookings", bookingsRoutes);
app.use("/api/itineraries", itinerariesRoutes);
app.use("/api/testimonials", testimonialsRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Lenawei Safaris API");
});

// 404 Error Handling
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
