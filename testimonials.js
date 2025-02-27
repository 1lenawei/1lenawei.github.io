const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        minlength: [10, "Message must be at least 10 characters long"],
        trim: true,
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating must be at most 5"],
    },
    approved: {
        type: Boolean,
        default: false, // Admin must approve testimonials before they appear
    },
}, { timestamps: true });

module.exports = mongoose.model("Testimonial", TestimonialSchema);
