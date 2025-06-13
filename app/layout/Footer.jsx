"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center bg-[#375682] text-white px-5 pt-10 pb-5"
    >
      {/* Main Content */}
      <div className="border-b-2 border-[#827e7e8e] w-full flex flex-col md:flex-row justify-between items-start gap-10 py-10 max-w-7xl">
        
        {/* About + Social */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <p>This is demo about us info. This is demo about us info.</p>
          <p>+91-9999999999</p>
          <p>example@info.gmail.com</p>
          <div className="flex gap-4 text-xl mt-2">
            <FaTwitter className="hover:text-black transition" />
            <FaInstagram className="hover:text-black transition" />
            <FaWhatsapp className="hover:text-black transition" />
            <FaYoutube className="hover:text-black transition" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 w-full md:w-2/4 justify-between flex-wrap">
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-black transition">Home</a>
            <a href="#" className="hover:text-black transition">Projects</a>
            <a href="#" className="hover:text-black transition">Services</a>
            <a href="#" className="hover:text-black transition">Blogs</a>
            <a href="#" className="hover:text-black transition">About Us</a>
            <a href="#" className="hover:text-black transition">Privacy Policy</a>
            <a href="#" className="hover:text-black transition">Clients Reviews</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-black transition">For Sell</a>
            <a href="#" className="hover:text-black transition">For Purchase</a>
            <a href="#" className="hover:text-black transition">For Rent</a>
            <a href="#" className="hover:text-black transition">Free Consulting</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-3 w-full md:w-1/4">
          <p className="font-semibold">Have any enquiry?</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="px-3 py-2 rounded border-2 border-white text-white"
            />
            <textarea
              rows="3"
              placeholder="Enter your message here..."
              className="px-3 py-2 rounded border-2 border-white text-white resize-none"
            />
            <input
              type="submit"
              value="Submit"
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 cursor-pointer transition"
            />
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} PropZilla. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;