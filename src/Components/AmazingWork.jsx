import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import img from "../assets/amzingWork/Mocup2orig.webp";

const filters = ["All", "Packaging and Label", "Logo", "Brochures", "Branding"];

const portfolioData = [
  { id: 1, category: "Packaging and Label", image: img },
  { id: 2, category: "Packaging and Label", image: img },
  { id: 3, category: "Packaging and Label", image: img },
  { id: 4, category: "Logo", image: img },
  { id: 5, category: "Brochures", image: img },
  { id: 6, category: "Branding", image: img },
  { id: 7, category: "Branding", image: img },
  { id: 8, category: "Branding", image: img },
];

const AmazingWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <>
      <section id="portfolio" className="text-center py-16 px-4 max-w-6xl mx-auto">
        <h4 className="text-[#31A8FF] text-lg font-semibold mb-2">
          Portfolio
        </h4>
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          My Amazing Works
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10">
          We Make Your Brand The Talk Of The Town We Visualise. We
          <br className="hidden sm:block" />
          Communicate. We Adapt
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-lg font-medium transition-colors ${
                activeFilter === filter ? "text-[#31A8FF]" : "text-black"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: filters.indexOf(filter) * 0.1 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={item.image}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.button
          href="/book-demo"
          className="relative mt-4 overflow-hidden pointer-coarse: border border-[#31A8FF] text-white font-medium px-5 py-2 rounded-full group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="absolute inset-0 bg-[#31A8FF] translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-[#31A8FF] transition-colors duration-500">
            Learn More
          </span>
        </motion.button>
      </section>
    </>
  );
};

export default AmazingWork;
