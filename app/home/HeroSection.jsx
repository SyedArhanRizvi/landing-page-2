"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaInfoCircle, FaSearch, FaHome, FaRegPaperPlane } from "react-icons/fa";

function HeroSection() {
  const [sell, setSell] = useState(false);

  return (
    <section
      className="w-full min-h-screen flex items-center px-4 md:px-10"
      style={{
        backgroundImage: 'url("/lndBg1.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Main Content Div */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#272626aa] text-white rounded-lg shadow-lg p-6 md:p-10 w-full md:w-[40%] flex flex-col gap-5"
      >
        {/* Heading + Subtext */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl md:text-4xl font-serif">
            Find Your Best Real Estate
          </h1>
          <p className="text-sm text-gray-200">
            We help you buy and sell properties in your dream location with ease and trust.
          </p>
        </div>

        {/* Sell & Buy Buttons */}
        <div className="flex gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setSell(false)}
            className={`px-4 py-2 rounded-md flex cursor-pointer items-center gap-2 transition ${
              !sell ? "bg-white text-black" : "bg-transparent border border-white"
            }`}
          >
            <FaHome /> Buy
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setSell(true)}
            className={`px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 transition ${
              sell ? "bg-white text-black" : "bg-transparent border border-white"
            }`}
          >
            <FaRegPaperPlane /> Sell
          </motion.button>
        </div>

        {/* Dynamic Form */}
        <form className="flex flex-col gap-3">
          {sell ? (
            <>
              <input
                type="text"
                placeholder="Enter Full Location of Property"
                className="px-4 py-2 border-2 border-white rounded text-white"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 border-2 border-white rounded text-white"
              />
              <motion.input
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                value="Submit"
                className="cursor-pointer bg-white text-white px-4 py-2 border-2 border-white rounded"
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Buy your property at your dream location"
                className="px-4 py-2 border-2 border-white rounded text-white"
              />
              <motion.input
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                value="Search"
                className="cursor-pointer bg-white text-black px-4 py-2 rounded"
              />
            </>
          )}
        </form>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer gap-2 bg-white text-black px-4 py-2 rounded"
          >
            <FaPhoneAlt /> Call Now
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer gap-2 border border-white px-4 py-2 rounded"
          >
            <FaInfoCircle /> Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;