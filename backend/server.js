const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/foodDonation")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB error:", err));

// Schema
const Donation = mongoose.model("Donation", {
    name: String,
    phone: String,
    foodType: String,
    quantity: String,
    address: String,
    createdAt: { type: Date, default: Date.now }
});

// Routes
app.post("/donate", async (req, res) => {
    const data = new Donation(req.body);
    await data.save();
    res.send({ message: "Food donation submitted!" });
});

app.get("/donations", async (req, res) => {
    const data = await Donation.find().sort({ createdAt: -1 });
    res.send(data);
});

// Start Server
app.listen(5000, () => console.log("Server running on 5000"));
