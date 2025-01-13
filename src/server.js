const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Example hotels data (same as in Hotels.js, without images since frontend handles that)
const hotels = [
  {
    id: 1,
    name: "Hotel Rainbow Paradise",
    location: "Tanjung Bungah",
    price: 239,
    description: "A beachfront hotel with stunning views of the sea.",
  },
  {
    id: 2,
    name: "Bayview Hotel",
    location: "Georgetown",
    price: 329,
    description: "Luxurious hotel in the heart of Georgetown.",
  },
  {
    id: 3,
    name: "1st Island Homestay",
    location: "Bayan Baru",
    price: 67,
    description: "Affordable homestay for budget travelers.",
  },
  {
    id: 4,
    name: "Pearl View Hotel",
    location: "Seberang Perai",
    price: 297,
    description: "Elegant hotel with modern amenities.",
  },
];

// API endpoint to fetch hotels
app.get("/api/hotels", (req, res) => {
  res.json(hotels);
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Hotels API!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
