const express = require("express");
const { body, validationResult } = require("express-validator");
const Booking = require("../models/Booking");

const router = express.Router();

// 📌 @route  POST /api/bookings
// 📌 @desc   Create a new safari booking
// 📌 @access Public
router.post(
    "/",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Invalid email address"),
        body("phone").isMobilePhone().withMessage("Invalid phone number"),
        body("safariType").notEmpty().withMessage("Safari type is required"),
        body("date").isISO8601().withMessage("Invalid date format")
    ],
    async (req, res) => {
        // Validate request inputs
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, safariType, date, message } = req.body;

        try {
            // Check if booking already exists for the same user and safari
            const existingBooking = await Booking.findOne({ email, safariType, date });
            if (existingBooking) {
                return res.status(400).json({ error: "You have already booked this safari on this date." });
            }

            // Create new booking
            const newBooking = new Booking({ name, email, phone, safariType, date, message });
            await newBooking.save();

            res.status(201).json({
                message: "🎉 Booking confirmed! We will contact you soon.",
                booking: newBooking
            });
        } catch (error) {
            console.error("❌ Booking Error:", error);
            res.status(500).json({ error: "Server error. Please try again later." });
        }
    }
);

// 📌 @route  GET /api/bookings
// 📌 @desc   Get all bookings
// 📌 @access Private (Admin only)
router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ date: 1 });
        res.status(200).json(bookings);
    } catch (error) {
        console.error("❌ Fetching Bookings Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// 📌 @route  DELETE /api/bookings/:id
// 📌 @desc   Delete a booking
// 📌 @access Private (Admin only)
router.delete("/:id", async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }

        await booking.deleteOne();
        res.status(200).json({ message: "Booking successfully deleted." });
    } catch (error) {
        console.error("❌ Delete Booking Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

module.exports = router;
