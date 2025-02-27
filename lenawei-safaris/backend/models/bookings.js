const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        match: [/^\d{10,15}$/, "Please enter a valid phone number"],
    },
    safariPackage: {
        type: String,
        required: [true, "Safari package selection is required"],
    },
    numberOfPeople: {
        type: Number,
        required: [true, "Number of people is required"],
        min: [1, "At least one person is required"],
    },
    travelDate: {
        type: Date,
        required: [true, "Travel date is required"],
    },
    specialRequests: {
        type: String,
        trim: true,
        default: "",
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled"],
        default: "Pending",
    },
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);
