import { motion } from "framer-motion";
import {
  FaRupeeSign,
  FaMapMarkerAlt,
  FaHome,
  FaWarehouse,
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const PropertyCard = ({ data }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImage = () => {
    setCurrentImg((prev) => (prev + 1) % data.imgs.length);
  };

  const prevImage = () => {
    setCurrentImg((prev) => (prev - 1 + data.imgs.length) % data.imgs.length);
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="w-full sm:w-[320px] cursor-pointer rounded-xl shadow-lg bg-white overflow-hidden  hover:shadow-xl transition-all duration-300"
    >
      {/* Image Carousel */}
      <div className="relative w-full h-48">
        <img
          src={data.imgs[currentImg]}
          alt="Property"
          className="w-full h-full object-cover"
        />
        {/* Carousel controls */}
        {data.imgs.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute cursor-pointer top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute cursor-pointer top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
            >
              <FaArrowRight />
            </button>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
          {data.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">{data.para}</p>

        {/* Info Section */}
        <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <FaRupeeSign className="text-green-600" /> {data.price}
          </div>
          <div className="flex items-center gap-1">
            <FaWarehouse className="text-blue-500" /> {data.size}
          </div>
          <div className="flex items-center gap-1">
            <FaHome className="text-purple-500" /> {data.typ}
          </div>
          <div className="flex items-center gap-1">
            <MdLocationCity className="text-red-500" />
            {data.address.city}
          </div>
        </div>

        {/* Address line */}
        <div className="mt-1 text-xs text-gray-500 flex items-center gap-1">
          <FaMapMarkerAlt /> {data.address.area}, {data.address.pLocation}
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
