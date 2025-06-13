"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function FeaturedPCard({ data }) {
  const {
    imgs,
    title,
    para,
    price,
    address,
    typ,
    bhk,
    size,
    currencyType,
  } = data;
  const { area, city, pLocation } = address;

  const [imgIdx, setImgIdx] = useState(0);

  const imageCarousel = (direction) => {
    setImgIdx((prev) =>
      direction === "Right"
        ? (prev + 1) % imgs.length
        : (prev - 1 + imgs.length) % imgs.length
    );
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300"
    >
      {/* Featured Tag & Arrows */}
      <div className="absolute top-4 left-0 w-full flex items-center justify-between px-4 z-10">
        <span className="bg-yellow-400 text-black text-xs font-semibold py-1 px-3 rounded-md shadow animate-pulse">
          Featured
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => imageCarousel("Left")}
            className="p-2 text-md bg-white/80 cursor-pointer backdrop-blur-md rounded-full shadow hover:scale-110 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => imageCarousel("Right")}
            className="p-2 text-md bg-white/80 cursor-pointer backdrop-blur-md rounded-full shadow hover:scale-110 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-h-[200px] overflow-hidden">
        <motion.img
          key={imgIdx}
          src={imgs[imgIdx]}
          alt={title}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="px-4 py-3 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{para}</p>

        <div className="flex justify-between text-base font-semibold text-green-700 mt-1">
          <span>{price}</span>
          <span>{currencyType}</span>
        </div>

        {/* Address Details as Stylish Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {[area, city, pLocation].map((item, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full border border-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Property Info as Stylish Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {[typ, bhk, `${size} sqft`].map((item, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedPCard;