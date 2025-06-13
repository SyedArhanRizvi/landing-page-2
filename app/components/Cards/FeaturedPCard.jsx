"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function FeaturedPCard({ data, layout }) {
  const {
    imgs,
    title,
    para,
    price,
    address,
    type,
    bhk,
    size,
    currencyType,
  } = data;
  const { area, city, pLocation } = address;
  const { pxX, pyY, textSize, gapNum } = layout;

  const [imgIdx, setImgIdx] = useState(0);

  const imageCarousel = (direction) => {
    if (direction === "Right") {
      setImgIdx((prev) => (prev + 1) % imgs.length);
    } else {
      setImgIdx((prev) => (prev - 1 + imgs.length) % imgs.length);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300"
    >
      {/* Header: Featured label & Buttons */}
      <div className="absolute top-4 left-0 w-[100%] flex items-center justify-between px-4 z-10">
        <span className="bg-yellow-400 text-black text-sm font-semibold py-1 px-3 rounded-md shadow animate-pulse">
          Featured
        </span>
        <div className={`flex items-center gap-${gapNum}`}>
          <button
            onClick={() => imageCarousel("Left")}
            className={`p-${pyY} text-${textSize} bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:scale-105 transition`}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => imageCarousel("Right")}
            className={`p-${pyY} text-${textSize} bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:scale-105 transition`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-[100%] h-[200px] overflow-hidden">
        <motion.img
          key={imgIdx}
          src={imgs[imgIdx]}
          alt={title}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-[100%] h-[100%] object-cover transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{para}</p>

        <div className="flex justify-between text-base font-semibold text-green-700 mt-1">
          <span>{price}</span>
          <span>{currencyType}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>{area}</span>
          <span>{city}</span>
          <span>{pLocation}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>{type}</span>
          <span>{bhk} BHK</span>
          <span>{size} sqft</span>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedPCard;