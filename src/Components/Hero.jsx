import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import Jaimin from "../assets/Jaimin/jaimin-hero.png";

import figmaIcon from "../assets/hero-icon/figma-icon.png";
import aiIcon from "../assets/hero-icon/ai.png";
import psIcon from "../assets/hero-icon/ps.png";
import xdIcon from "../assets/hero-icon/xd.png";

import { FaDribbble } from "react-icons/fa";

import bgImage from "../assets/background/paint-border.avif";

const icons = [
  {
    name: "Figma",
    icon: figmaIcon,
    position:
      "md:bottom-22 bottom-16 left-1/4 md:left-1/4 transform -translate-x-1/2",
  },
  {
    name: "AI",
    icon: aiIcon,
    position: "md:top-[140px] left-8 md:left-10 top-[50px]",
  },
  {
    name: "PS",
    icon: psIcon,
    position: "w-15 md:top-[100px] top-[60px] right-4 md:right-12",
  },
  {
    name: "XD",
    icon: xdIcon,
    position: "md:bottom-14 bottom-14 right-12 md:right-16",
  },
];

const texts = ["Graphics Designer", "Product Designer", "UI/UX Designer"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const currentText = texts[index];
    const delay = currentText === "Graphics Designer" ? 3000 : 1500;

    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-4 py-15 min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-2 md:space-y-6 text-left order-2 lg:order-1"
        >
          <div className="text-xl md:text-2xl font-medium text-[#31A8FF]">
            Hello, I'm
          </div>

          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-black"
          >
            Jaimin Jikadra
          </motion.h1>

          <h2 className="text-xl md:text-2xl font-medium flex items-center">
            I am a{" "}
            <motion.span
              className="text-[#31A8FF] font-semibold ml-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={texts[index]}
            >
              {texts[index]}
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 max-w-md lg:mx-0"
          >
            I'm a creative designer based in India, and I'm very passionate and
            dedicated to my work.
          </motion.p>

          {/* Button and Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-start gap-4 mt-4 sm:mt-6"
          >
            <a
              href="/about"
              className="relative overflow-hidden border border-[#31A8FF] text-white font-medium px-5 py-2 rounded-full group"
            >
              <span className="absolute inset-0 bg-[#31A8FF] translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-[#31A8FF] transition-colors duration-500">
                About Me
              </span>
            </a>
            <div className="flex gap-4 text-xl text-black">
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#31A8FF]"
              >
                Bē
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#31A8FF]"
              >
                <FaDribbble className="mt-1 text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#31A8FF]"
              >
                in
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 mt-10 md:mt-0 relative order-1 lg:order-2 w-full max-w-md mx-auto lg:mx-0"
        >
          <motion.img
            src={Jaimin}
            alt="Jaimin"
            className="w-[280px] md:w-[370px] lg:w-[410px] mx-auto object-cover"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Floating Icons */}
          {icons.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.position}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-bounce"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute mt-4 md:mt-0 bottom-8 flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-black rounded-full flex items-start justify-center p-1">
          <div className="w-0.5 h-2 md:h-3 bg-black animate-bounce"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
