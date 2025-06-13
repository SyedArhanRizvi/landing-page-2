"use client";
import React from "react";
import BlogCard from "../components/Cards/BlogCard";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
function HeroSection4() {
  const blogsAndNews = [
    {
      img: "/realEstateBoom.jpeg",
      title: "Real Estate Market Trends 2025",
      news: "Experts predict a steady rise in housing prices across major Indian cities due to high demand and limited supply.",
      publishDate: "2025-06-01",
      author: "Anjali Sharma",
      category: "Market Trends",
      readTime: "4 min read",
      tags: ["real estate", "market", "property", "2025"],
      source: "The Economic Times",
    },
    {
      img: "ecoFrndly.jpeg",
      title: "Demand for Eco-Friendly Homes Surges",
      news: "Green buildings and eco-conscious designs are seeing higher buyer interest post-pandemic.",
      publishDate: "2025-05-28",
      author: "Rohit Verma",
      category: "Sustainability",
      readTime: "3 min read",
      tags: ["eco homes", "green building", "sustainability"],
      source: "Housing.com News",
    },
    {
      img: "investMent.jpeg",
      title: "Is 2025 the Best Year to Invest in Real Estate?",
      news: "With new government subsidies and low interest rates, real estate remains a top investment choice.",
      publishDate: "2025-05-20",
      author: "Megha Kapoor",
      category: "Investment",
      readTime: "5 min read",
      tags: ["investment", "real estate tips", "buyers"],
      source: "Moneycontrol Real Estate",
    },
    {
      img: "smartCities.jpeg",
      title: "Smart Cities Project Fuels Growth in Tier-2 Areas",
      news: "Infrastructure development in smaller cities is opening new doors for homebuyers and investors alike.",
      publishDate: "2025-06-05",
      author: "Vikrant Singh",
      category: "Development",
      readTime: "4 min read",
      tags: ["smart cities", "tier-2", "growth"],
      source: "NDTV Realty",
    },
    {
      img: "homeLoan.jpeg",
      title: "Home Loan Interest Rates Hit Record Low",
      news: "Banks slash interest rates on housing loans to stimulate buying; here’s how you can benefit.",
      publishDate: "2025-05-15",
      author: "Nisha Bansal",
      category: "Finance",
      readTime: "2 min read",
      tags: ["home loan", "finance", "interest rates"],
      source: "ET Realty",
    },
    {
      img: "retailMarket.jpeg",
      title: "Rental Market to Boom in Metro Cities",
      news: "Rising population and remote work culture are driving the rental demand in Bengaluru, Mumbai, and NCR.",
      publishDate: "2025-06-10",
      author: "Sanjay Menon",
      category: "Rental",
      readTime: "3 min read",
      tags: ["rental", "remote work", "metros"],
      source: "Times Property",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-10 justify-center items-center bg-white py-12">
      {/* Rating and Review Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[80%] flex flex-col md:flex-row items-center justify-between bg-gray-100 shadow-lg rounded-xl p-6"
      >
        {/* Rating Box */}
        <div className="flex flex-col items-center gap-2 text-center md:w-1/3">
          <h1 className="text-5xl font-bold text-green-600">4.8</h1>
          <p className="text-gray-600">Stars</p>
          <p className="text-sm text-gray-500">Top-Rated by Clients</p>
          <div className="flex items-center gap-2 mt-2 text-yellow-500 font-semibold">
            <AiFillStar size={24} />
            <span>Trustpilot</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-24 w-[2px] bg-gray-300 mx-6" />

        {/* Client Review */}
        <div className="md:w-2/3 flex flex-col gap-3 text-gray-800">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="italic"
          >
            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, laudantium? Dolore, perferendis deserunt vero quisquam
            quasi fugit itaque...”
          </motion.p>
          <div className="text-sm font-medium text-gray-700">
            <p>– Client Name</p>
            <p className="text-xs text-gray-500">June 1, 2025</p>
          </div>
          <p className="text-green-600 font-semibold">Highly Recommended!</p>
        </div>
      </motion.div>

      {/* News & Consult Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[80%] flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            📰 News & Consulting
          </h1>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
              <BsArrowLeft />
            </button>
            <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
              <BsArrowRight />
            </button>
          </div>
        </div>

        {/* Blog Carousel */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {blogsAndNews.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection4;
