"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaCity, FaGlobe } from "react-icons/fa";

function TopDestinationsPCard({ data }) {
  const { img, city, country } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-[350px] flex flex-row cursor-pointer items-center gap-4 p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="w-[45%] h-[130px] rounded-lg overflow-hidden shadow">
        <img src={img} className="h-[100%] w-[100%] object-cover" alt={city} />
      </div>
      {/* Meta Info */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
          <FaMapMarkedAlt className="text-red-500" /> {city}
        </h2>
        <p className="flex items-center gap-2 text-sm text-gray-600">
          <FaCity className="text-blue-500" /> City: {city}
        </p>
        <p className="flex items-center gap-2 text-sm text-gray-600">
          <FaGlobe className="text-green-600" /> Country: {country}
        </p>
      </div>
    </motion.div>
  );
}

export default TopDestinationsPCard;
