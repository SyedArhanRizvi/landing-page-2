"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

function BlogCard({ blog }) {
  const { img, title, publishDate, author, news, readTime } = blog;

  return (
    <motion.div
      className="w-full sm:w-[250px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 m-2 flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <img src={img} alt={title} className="w-full h-32 object-cover" />
      {/* Content */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <h3 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="text-xs text-gray-500 flex flex-col gap-1 mb-3">
          <span className="flex items-center gap-1">
            <FaUser className="text-blue-400" /> {author}
          </span>

          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-red-400" /> {publishDate}
          </span>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2">{news}</p>

        <div className="mt-3 flex justify-between items-center">
          <button className="text-xs font-medium text-blue-600 hover:underline">
            Read More
          </button>

          <span className="text-[10px] text-gray-400">{readTime}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogCard;
