import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";
import hotel5 from "../assets/images/hotel5.jpg";
import hotel6 from "../assets/images/hotel6.jpg";

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Hotel Rainbow Paradise",
      location: "Tanjung Bungah",
      price: 239,
      description: "A beachfront hotel with stunning views of the sea.",
      image: hotel1,
      website: "https://rainbowparadisebeachresort.com/",
    },
    {
      id: 2,
      name: "Bayview Hotel",
      location: "Georgetown",
      price: 329,
      description: "Luxurious hotel in the heart of Georgetown.",
      image: hotel2,
      website: "https://bhgp.bayviewhotels.com/?gad_source=1&gclid=Cj0KCQiAyoi8BhDvARIsAO_CDsBtZIGC6IvhpX3rqx0uVjo2jGZ44X1T0WBLgjApIn49aXAv_wpNgw8aAjTQEALw_wcB",
    },
    {
      id: 3,
      name: "lst Island Homestay",
      location: "Bayan Baru",
      price: 67,
      description: "Affordable homestay for budget travelers.",
      image: hotel3,
      website: "https://www.facebook.com/First.Island.Homestay/",
    },
    {
      id: 4,
      name: "Pearl View Hotel",
      location: "Seberang Perai",
      price: 297,
      description: "Elegant hotel with modern amenities.",
      image: hotel4,
      website: "https://pearlviewhotel.my/",
    },
    {
      id: 5,
      name: "Aroma Hotel Butterworth",
      location: "Butterworth",
      price: 204,
      description: "Free parking and nearby the food street.",
      image: hotel5,
      website: "https://www.aromahotel.com.my/",
    },
    {
      id: 6,
      name: "U Hotel Penang",
      location: "Gelugur",
      price: 195,
      description: "Less than 15 min drive away from the bridge and airport.",
      image: hotel6,
      website: "https://uhotelpenang.com/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: "20px", backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "8px" }}
    >
      <h1 style={{ color: "maroon", textAlign: 'center' }}>Hotels in Penang</h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {hotels.map((hotel) => (
          <motion.div
            key={hotel.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: hotel.id * 0.1 }}
            style={{
              border: "3px solid #800000",
              borderRadius: "8px",
              background: "rgba(128, 0, 0, 0.8)",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <a
              href={hotel.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </a>
            <h2 style={{ color: "snow", margin: "10px 0" }}>{hotel.name}</h2>
            <p style={{ color: "cornsilk" }}>{hotel.description}</p>
            <p style={{ fontWeight: "bold", color: "lime" }}>
              Price: RM {hotel.price} / night
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hotels;
