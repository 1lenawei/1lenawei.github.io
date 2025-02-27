const express = require("express");
const { body, validationResult } = require("express-validator");
const Itinerary = require("../models/Itinerary");

const router = express.Router();

// 📌 @route  POST /api/itineraries
// 📌 @desc   Add a new safari itinerary
// 📌 @access Private (Admin only)
router.post(
    "/",
    [
        body("title").notEmpty().withMessage("Itinerary title is required"),
        body("description").notEmpty().withMessage("Description is required"),
        body("duration").isInt({ min: 1 }).withMessage("Duration must be at least 1 day"),
        body("highlights").isArray({ min: 1 }).withMessage("At least one highlight is required"),
        body("price").isNumeric().withMessage("Price must be a number"),
        body("pdfUrl").optional().isURL().withMessage("Invalid PDF URL format"),
    ],
    async (req, res) => {
        // Validate request inputs
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, duration, highlights, price, pdfUrl } = req.body;

        try {
            // Create new itinerary
            const newItinerary = new Itinerary({ title, description, duration, highlights, price, pdfUrl });
            await newItinerary.save();

            res.status(201).json({
                message: "🎉 Itinerary added successfully!",
                itinerary: newItinerary
            });
        } catch (error) {
            console.error("❌ Itinerary Error:", error);
            res.status(500).json({ error: "Server error. Please try again later." });
        }
    }
);

// 📌 @route  GET /api/itineraries
// 📌 @desc   Get all safari itineraries
// 📌 @access Public
router.get("/", async (req, res) => {
    try {
        const itineraries = await Itinerary.find().sort({ duration: 1 });
        res.status(200).json(itineraries);
    } catch (error) {
        console.error("❌ Fetch Itineraries Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// 📌 @route  GET /api/itineraries/:id
// 📌 @desc   Get a single safari itinerary by ID
// 📌 @access Public
router.get("/:id", async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ error: "Itinerary not found" });
        }
        res.status(200).json(itinerary);
    } catch (error) {
        console.error("❌ Fetch Single Itinerary Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// 📌 @route  DELETE /api/itineraries/:id
// 📌 @desc   Delete a safari itinerary
// 📌 @access Private (Admin only)
router.delete("/:id", async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ error: "Itinerary not found" });
        }

        await itinerary.deleteOne();
        res.status(200).json({ message: "Itinerary successfully deleted." });
    } catch (error) {
        console.error("❌ Delete Itinerary Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

module.exports = router;
