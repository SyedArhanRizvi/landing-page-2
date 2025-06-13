"use client";
import React from "react";
import { motion } from "framer-motion";
import TopDestinationsPCard from "../components/Cards/TopDestinationsPCard";
function HeroSection3() {
  const topDestinations = [
    {
      img: "/turkey.jpeg", // Beach in Maldives
      country: "Turkey",
      city: "Istambul",
    },
    {
      img: "/paris.jpeg", // Paris Eiffel Tower
      country: "France",
      city: "Paris",
    },
    {
      img: "/london.jpeg", // Tokyo city lights
      country: "U.K",
      city: "London",
    },
    {
      img: "/newYork.jpeg", // New York skyline
      country: "USA",
      city: "New York",
    },
    {
      img: "/dubai.jpeg", // Santorini white buildings
      country: "U.A.E",
      city: "Dubai",
    },
    {
      img: "/london.jpeg", // Tokyo city lights
      country: "U.K",
      city: "London",
    },
  ];

  return (
    <section
      className="w-screen flex flex-col items-center gap-6 px-4 py-10"
      style={{
        backgroundImage: 'url("/landPBG2.avif")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "500px",
      }}
    >
      <div className="w-[80%]">
        <h1 className="text-xl md:text-3xl font-bold font-mono">Discover Top Destinations</h1>
      </div>
      <div className="w-[80%] flex flex-wrap gap-5 ">
        {topDestinations.map((data, idx) => {
          return (
            <TopDestinationsPCard data={data} key={idx}></TopDestinationsPCard>
          );
        })}
      </div>
    </section>
  );
}

export default HeroSection3;
