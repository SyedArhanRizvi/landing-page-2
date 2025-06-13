"use client";
import React, { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Services", "Projects", "Blogs", "About Us"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-between items-center md:px-10 px-5 py-4 bg-[#375682] text-white relative z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <p className="text-2xl">
          <BsBuildings />
        </p>
        <h1 className="font-serif text-xl md:text-2xl">PropZilla</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link, index) => (
          <a key={index} href="#" className="hover:text-gray-300 cursor-pointer transition">
            {link}
          </a>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-4 py-1 cursor-pointer border rounded hover:bg-white hover:text-black transition">
          Login
        </button>
        <button className="px-4 py-1 cursor-pointer bg-white text-black rounded hover:bg-gray-300 transition">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 z-40 border-t border-gray-800 md:hidden"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-lg hover:text-gray-300 transition"
              >
                {link}
              </a>
            ))}
            <button className="px-4 py-1 border rounded hover:bg-white hover:text-black transition">
              Login
            </button>
            <button className="px-4 py-1 bg-white text-black rounded hover:bg-gray-300 transition">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
