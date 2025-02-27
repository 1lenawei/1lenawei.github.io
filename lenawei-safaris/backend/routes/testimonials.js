const express = require("express");
const { body, validationResult } = require("express-validator");
const Testimonial = require("../models/Testimonial");

const router = express.Router();

// 📌 @route  POST /api/testimonials
// 📌 @desc   Add a new customer testimonial (Pending approval)
// 📌 @access Public
router.post(
    "/",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("message").notEmpty().isLength({ min: 10 }).withMessage("Message must be at least 10 characters"),
        body("rating").isInt({ min: 1, max: 5 }).withMessage("Rating must be between 1 and 5"),
    ],
    async (req, res) => {
        // Validate request inputs
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, message, rating } = req.body;

        try {
            // Create new testimonial (Unapproved by default)
            const newTestimonial = new Testimonial({
                name,
                message,
                rating,
                approved: false, // Admin must approve
            });

            await newTestimonial.save();

            res.status(201).json({
                message: "🎉 Testimonial submitted for approval!",
                testimonial: newTestimonial,
            });
        } catch (error) {
            console.error("❌ Testimonial Submission Error:", error);
            res.status(500).json({ error: "Server error. Please try again later." });
        }
    }
);

// 📌 @route  GET /api/testimonials
// 📌 @desc   Get all approved testimonials
// 📌 @access Public
router.get("/", async (req, res) => {
    try {
        const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
        res.status(200).json(testimonials);
    } catch (error) {
        console.error("❌ Fetch Testimonials Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// 📌 @route  GET /api/testimonials/pending
// 📌 @desc   Get all pending testimonials (Admin View)
// 📌 @access Private (Admin Only)
router.get("/pending", async (req, res) => {
    try {
        const pendingTestimonials = await Testimonial.find({ approved: false });
        res.status(200).json(pendingTestimonials);
    } catch (error) {
        console.error("❌ Fetch Pending Testimonials Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// 📌 @route  PATCH /api/testimonials/:id/approve
// 📌 @desc   Approve a testimonial (Admin Only)
// 📌 @access Private (Admin Only)
router.patch("/:id/approve", async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ error: "Testimonial not found" });
        }

        testimonial.approved = true;
        await testimonial.save();

        res.status(200).json({ message: "✅ Testimonial approved!", testimonial });
    } catch (error) {
        console.error("❌ Approve Testimonial Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// 📌 @route  DELETE /api/testimonials/:id
// 📌 @desc   Delete a testimonial (Admin Only)
// 📌 @access Private (Admin Only)
router.delete("/:id", async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ error: "Testimonial not found" });
        }

        await testimonial.deleteOne();
        res.status(200).json({ message: "🗑️ Testimonial deleted successfully." });
    } catch (error) {
        console.error("❌ Delete Testimonial Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

module.exports = router;
