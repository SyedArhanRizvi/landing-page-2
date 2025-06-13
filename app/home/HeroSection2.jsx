"use client";
import React, { useRef, useState } from "react";
import FeaturedPCard from "../components/Cards/FeaturedPCard";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaHotel,
  FaRegBuilding,
  FaStore,
  FaMapMarkedAlt,
  FaTractor,
} from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NeighborHoodsPCard from "../components/Cards/NeighborHoodsPCard";
function HeroSection2() {
  const featuredProperties = [
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Luxury 3BHK Apartment in Noida Sector 78",
      para: "Spacious and modern apartment with park view and top amenities.",
      price: "89,00,000",
      currencyType: "INR",
      address: {
        area: "Sector 78",
        city: "Noida",
        pLocation: "Near Metro Station",
      },
      typ: "Apartment",
      bhk: "3BHK",
      size: "1800 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Elegant 4BHK Villa in South Delhi",
      para: "Independent villa with garden and private parking.",
      price: "3,20,00,000",
      currencyType: "INR",
      address: {
        area: "Chattarpur",
        city: "Delhi",
        pLocation: "Near DLF Farms",
      },
      typ: "Villa",
      bhk: "4BHK",
      size: "3200 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Affordable 2BHK Flat in Pune",
      para: "Best for small families. Near IT hubs and schools.",
      price: "52,00,000",
      currencyType: "INR",
      address: {
        area: "Hinjewadi",
        city: "Pune",
        pLocation: "Opp. Infosys Campus",
      },
      typ: "Flat",
      bhk: "2BHK",
      size: "1050 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Studio Apartment for Rent in Mumbai",
      para: "Furnished apartment ideal for working professionals.",
      price: "35,000",
      currencyType: "INR/month",
      address: {
        area: "Andheri West",
        city: "Mumbai",
        pLocation: "Near Lokhandwala Market",
      },
      typ: "Studio",
      bhk: "1RK",
      size: "500 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Independent House for Sale in Lucknow",
      para: "Corner plot with ample space for future construction.",
      price: "75,00,000",
      currencyType: "INR",
      address: {
        area: "Gomti Nagar",
        city: "Lucknow",
        pLocation: "Near City Mall",
      },
      typ: "House",
      bhk: "3BHK",
      size: "1600 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Modern Apartment in Bangalore",
      para: "Close to Manyata Tech Park. Family-friendly society.",
      price: "1,15,00,000",
      currencyType: "INR",
      address: {
        area: "Hebbal",
        city: "Bangalore",
        pLocation: "Near Nagawara Lake",
      },
      typ: "Apartment",
      bhk: "3BHK",
      size: "2000 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Budget 1BHK Flat in Ahmedabad",
      para: "Good rental property with all basic amenities.",
      price: "22,00,000",
      currencyType: "INR",
      address: {
        area: "Maninagar",
        city: "Ahmedabad",
        pLocation: "Opp. Kankaria Lake",
      },
      typ: "Flat",
      bhk: "1BHK",
      size: "600 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Spacious 5BHK Bungalow in Jaipur",
      para: "Heritage-style bungalow in posh colony.",
      price: "2,75,00,000",
      currencyType: "INR",
      address: {
        area: "Malviya Nagar",
        city: "Jaipur",
        pLocation: "Near GT Mall",
      },
      typ: "Bungalow",
      bhk: "5BHK",
      size: "3800 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Commercial Property for Rent in Gurugram",
      para: "Perfect for startups. Furnished with 50 seats.",
      price: "1,25,000",
      currencyType: "INR/month",
      address: {
        area: "Cyber City",
        city: "Gurugram",
        pLocation: "DLF Phase 3",
      },
      typ: "Office",
      bhk: "NA",
      size: "2100 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Premium Row House in Hyderabad",
      para: "Gated community with club, gym, and pool.",
      price: "1,35,00,000",
      currencyType: "INR",
      address: {
        area: "Kondapur",
        city: "Hyderabad",
        pLocation: "Near Botanical Garden",
      },
      typ: "Row House",
      bhk: "4BHK",
      size: "2500 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Residential Land for Sale in Patna",
      para: "Prime land in developing area, near AIIMS.",
      price: "48,00,000",
      currencyType: "INR",
      address: {
        area: "Phulwari",
        city: "Patna",
        pLocation: "Near AIIMS Hospital",
      },
      typ: "Land",
      bhk: "NA",
      size: "2400 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Girls PG with Meals in Chandigarh",
      para: "Safe and fully furnished with 3 meals daily.",
      price: "12,000",
      currencyType: "INR/month",
      address: {
        area: "Sector 22",
        city: "Chandigarh",
        pLocation: "Near Bus Stand",
      },
      typ: "PG",
      bhk: "1 Sharing/2 Sharing",
      size: "400 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Farmhouse in Dehradun Foothills",
      para: "Weekend getaway with scenic views and natural air.",
      price: "1,50,00,000",
      currencyType: "INR",
      address: {
        area: "Mussoorie Road",
        city: "Dehradun",
        pLocation: "Near Sahastradhara",
      },
      typ: "Farmhouse",
      bhk: "3BHK",
      size: "3000 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Luxury Penthouse in Navi Mumbai",
      para: "Top floor, sea-facing with private terrace garden.",
      price: "2,90,00,000",
      currencyType: "INR",
      address: {
        area: "Vashi",
        city: "Navi Mumbai",
        pLocation: "Palm Beach Road",
      },
      typ: "Penthouse",
      bhk: "4BHK",
      size: "3500 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Modern Duplex in Bhopal",
      para: "Double-storey with modular kitchen and solar panel setup.",
      price: "68,00,000",
      currencyType: "INR",
      address: {
        area: "Kolar Road",
        city: "Bhopal",
        pLocation: "Near Aura Mall",
      },
      typ: "Duplex",
      bhk: "3BHK",
      size: "1900 sq.ft",
    },
  ];

  const ourPropertiesTypes = [
    {
      icon: <FaHome className="text-6xl text-[#605e5e]" />,
      title: "Private Home",
      para: "Experience cozy and independent living with modern amenities.",
    },
    {
      icon: <FaBuilding className="text-6xl text-[#605e5e]" />,
      title: "Apartments",
      para: "Affordable and spacious flats in high-rise or mid-rise buildings.",
    },
    {
      icon: <FaHotel className="text-6xl text-[#605e5e]" />,
      title: "Villas",
      para: "Luxurious villas with private pools and landscaped gardens.",
    },
    {
      icon: <FaRegBuilding className="text-6xl text-[#605e5e]" />,
      title: "Offices",
      para: "Premium office spaces in prime business locations.",
    },
    {
      icon: <FaStore className="text-6xl text-[#605e5e]" />,
      title: "Shops",
      para: "Retail shops located in malls, markets, or commercial zones.",
    },
    {
      icon: <FaMapMarkedAlt className="text-6xl text-[#605e5e]" />,
      title: "Plots",
      para: "Residential or commercial plots ready for construction.",
    },
    {
      icon: <FaTractor className="text-6xl text-[#605e5e]" />,
      title: "Agricultural Lands",
      para: "Fertile lands ideal for farming and agri-business.",
    },
  ];

  const neighborHoodsProperties = [
    {
      img: "/delhi.jpeg",
      cityName: "South Delhi",
      totalProperties: "120+ Properties",
      startingPrice: "From ₹45 Lakhs",
    },
    {
      img: "/noida.jpeg",
      cityName: "Noida Sector 62",
      totalProperties: "95+ Listings",
      startingPrice: "From ₹38 Lakhs",
    },
    {
      img: "/gurugram.jpeg",
      cityName: "Gurgaon DLF Phase 3",
      totalProperties: "150+ Properties Available",
      startingPrice: "From ₹55 Lakhs",
    },
    {
      img: "/pune.jpeg",
      cityName: "Mumbai Andheri West",
      totalProperties: "200+ Listings",
      startingPrice: "From ₹80 Lakhs",
    },
    {
      img: "/banglore.jpeg",
      cityName: "Bangalore Whitefield",
      totalProperties: "170+ Flats & Villas",
      startingPrice: "From ₹60 Lakhs",
    },
    {
      img: "/haydrabad.jpeg",
      cityName: "Hyderabad Gachibowli",
      totalProperties: "110+ Properties",
      startingPrice: "From ₹50 Lakhs",
    },
    {
      img: "/noida2.jpeg",
      cityName: "Pune Hinjewadi",
      totalProperties: "130+ Residential Units",
      startingPrice: "From ₹42 Lakhs",
    },
    {
      img: "/lknw.jpeg",
      cityName: "Lucknow Gomti Nagar",
      totalProperties: "90+ Listings",
      startingPrice: "From ₹35 Lakhs",
    },
    {
      img: "/mussorie.jpeg",
      cityName: "Mussoorie",
      totalProperties: "99+ Listings",
      startingPrice: "From ₹85 Lakhs",
    },
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Residential",
    "Commercial",
    "Lands",
    "More Filter..",
  ];
  const newPropertiesData = [
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Agricultural Land in Sohna Road, Gurgaon",
      para: "Fertile land ideal for organic farming and agro projects.",
      price: "95,00,000",
      currencyType: "INR",
      address: {
        area: "Sohna Road",
        city: "Gurgaon",
        pLocation: "Near Badshahpur",
      },
      typ: "Agricultural Land",
      bhk: "NA",
      size: "2 Acres",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "1BHK Studio Apartment in Bandra West, Mumbai",
      para: "Stylish studio apartment in prime area near cafes and beach.",
      price: "1,10,00,000",
      currencyType: "INR",
      address: {
        area: "Bandra West",
        city: "Mumbai",
        pLocation: "Near Carter Road",
      },
      typ: "Studio Apartment",
      bhk: "1BHK",
      size: "550 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "3BHK Row House in Kharadi, Pune",
      para: "Row house with terrace, parking, and modular kitchen.",
      price: "85,00,000",
      currencyType: "INR",
      address: {
        area: "Kharadi",
        city: "Pune",
        pLocation: "Near World Trade Center",
      },
      typ: "Row House",
      bhk: "3BHK",
      size: "1500 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Luxury Beachside Villa in North Goa",
      para: "Exclusive villa with sea view, pool, and wooden interiors.",
      price: "5,75,00,000",
      currencyType: "INR",
      address: {
        area: "Anjuna",
        city: "Goa",
        pLocation: "Beach Facing",
      },
      typ: "Villa",
      bhk: "4BHK",
      size: "5000 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Modern Duplex in Jubilee Hills, Hyderabad",
      para: "Stylish duplex apartment with smart home automation.",
      price: "3,40,00,000",
      currencyType: "INR",
      address: {
        area: "Jubilee Hills",
        city: "Hyderabad",
        pLocation: "Near Film Nagar",
      },
      typ: "Duplex",
      bhk: "3BHK",
      size: "2800 sq.ft",
    },
    {
      imgs: ["/ap1.jpeg", "/ap2.jpg"],
      title: "Furnished PG in Koramangala, Bangalore",
      para: "Affordable and comfortable stay for working professionals.",
      price: "12,000/month",
      currencyType: "INR",
      address: {
        area: "Koramangala",
        city: "Bangalore",
        pLocation: "Near Forum Mall",
      },
      typ: "PG",
      bhk: "Private Room",
      size: "300 sq.ft",
    },
  ];
const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 360; // width of one card
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };
  return (
    <section className="w-screen rounded-t-4xl flex flex-col justify-center gap-10 md:gap-20 p-10 items-center bg-white min-h-screen -mt-8">
      {/* About Us Basics Info Container*/}
      <div className="flex flex-col md:flex-row justify-between border-b-1 border-[#a99696ae] pb-4 w-[80%]">
        <div className="w-[33%] flex flex-col justify-between gap-2">
          <h1 className="text-2xl font-black font-serif">
            Our mission is to redefine real estate in the costumer favor.
          </h1>
          <div className="flex gap-3">
            <button className="px-6 py-2 border-1 border-black rounded-md cursor-pointer bg-black text-white delay-200 transition-all hover:bg-white hover:text-black">
              Call Now
            </button>
            <button className="px-6 py-2 border-1 bg-white text-black delay-200 hover:bg-black hover:text-white border-black rounded-md cursor-pointer">
              About Us
            </button>
          </div>
        </div>
        <div className="w-[33%] flex flex-col gap-3 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nostrum aperiam nesciunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta
            at beatae, nostrum voluptates rerum nisi qui earum sunt quis libero
            dolores possimus reiciendis enim sequi sit numquam fugiat iusto?
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-800 font-light">Trusted Partners</p>
          <h1 className="text-2xl font-bold font-serif">
            <strong>rightmoove</strong>
          </h1>
          <h1 className="font-serif text-xl">airbnb</h1>
          <p className="font-serif text-xl">Brandname</p>
          <p className="font-serif text-xl">Decorilla</p>
        </div>
      </div>

      {/* About Our Connections And Happy Families And Complete Real State Projects Count Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-[80%]">
        <div className="flex md:w-[33%] flex-col md:flex-row justify-center items-center gap-4">
          <h1 className="text-xl md:text-5xl font-serif">1000+</h1>
          <p className="text-gray-600 font-serif text-xl">
            Properties Sell Every Year
          </p>
        </div>
        <div className="flex md:w-[33%] flex-col md:flex-row justify-center items-center gap-4">
          <h1 className="text-xl md:text-5xl font-serif">50K+</h1>
          <p className="text-gray-600 font-serif text-xl">Happy Clients</p>
        </div>
        <div className="flex md:w-[33%] flex-col md:flex-row justify-center items-center gap-4">
          <h1 className="text-xl md:text-5xl font-serif">650+</h1>
          <p className="text-gray-600 font-serif text-xl">
            Residential & Commercial Projects Completed.
          </p>
        </div>
      </div>

      {/* Featured Property For Sell Container */}
      <div className="flex flex-col gap-3 justify-center items-center w-[80%]">
        <div className="flex justify-between items-center w-[100%] flex-wrap">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <h1 className="text-xl md:text-3xl font-bold font-mono">
              Featured Properties.
            </h1>
            <p className="px-8 font-semibold rounded-full bg-blue-300">
              See More..
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button className="px-6 py-1 cursor-pointer border-1 border-black">
              Left
            </button>
            <button className="px-6 py-1 cursor-pointer border-1 border-black">
              Right
            </button>
          </div>
        </div>

       <div className="relative">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      >
        <FaArrowLeft />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-6 p-5 scrollbar-hide"
      >
        {featuredProperties &&
          featuredProperties.map((data, idx) => (
            <FeaturedPCard
              data={data}
              key={idx}
              layout={{
                pxX: "6",
                pxY: "1",
                textSize: "md",
                gapNum: "3",
              }}
            />
          ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      >
        <FaArrowRight />
      </button>
    </div>
      </div>

      {/* Our Property Types Container */}
      <div className="flex flex-col gap-3 justify-center items-center w-[80%]">
        <div className="flex justify-between items-center w-[100%] flex-wrap">
          <div>
            <h1 className="text-xl md:text-3xl font-bold font-mono">
              Properties Types.
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button className="px-6 py-1 cursor-pointer border-1 border-black">
              Left
            </button>
            <button className="px-6 py-1 cursor-pointer border-1 border-black">
              Right
            </button>
          </div>
        </div>

        <div className="w-[100%] flex flex-col md:flex-row">
          {ourPropertiesTypes.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col items-center gap-2 p-4 shadow-md rounded-md"
            >
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center">{item.para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Discover The Neighborhoods */}
      <div className="flex flex-col gap-8 justify-center items-center w-[80%]">
        <div className="w-[100%] flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold font-mono">
            Discover The Neighborhoods.
          </h1>
          <p className="px-8 font-semibold rounded-full bg-blue-300">
            Find More.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          {neighborHoodsProperties &&
            neighborHoodsProperties.map((data, idx) => {
              return (
                <NeighborHoodsPCard data={data} key={idx}></NeighborHoodsPCard>
              );
            })}
        </div>

        <div>
          <button className="px-8 py-2 rounded-full bg-[#08b581] text-white font-bold">
            Explore More
          </button>
        </div>
      </div>

      {/* Our New Listed Properties */}
      <div className="flex flex-col gap-8 justify-center items-center w-[80%]">
        <div className="flex justify-between items-center w-[100%] flex-wrap">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 py-6">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              New Properties
            </h1>

            <div className="flex flex-wrap justify-center md:justify-between items-center gap-3">
              {filters.map((filter, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 cursor-pointer rounded-full border text-sm font-medium transition-all duration-300
              ${
                activeFilter === filter
                  ? " text-black border-blue-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <button className="px-6 py-1 cursor-pointer hidden border-1 border-black">
              Left
            </button>
            <button className="px-6 py-1 cursor-pointer hidden border-1 border-black">
              Right
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap w-[100%] gap-6">
          {newPropertiesData &&
            newPropertiesData.map((data, idx) => {
              return (
                <FeaturedPCard
                  data={data}
                  layout={{
                    pxX: "6",
                    pxY: "1",
                    textSize: "md",
                    gapNum: "3",
                  }}
                  key={idx}
                ></FeaturedPCard>
              );
            })}
        </div>

        <div>
          <button className="px-8 py-2 rounded-full bg-[#08b581] text-white font-bold">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection2;
