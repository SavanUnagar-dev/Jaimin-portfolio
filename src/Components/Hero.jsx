import React, { useState, useEffect } from "react";
import "./Hero.css";
import Jaimin from "../assets/Jaimin/jaimin-hero.png";

import figmaIcon from "../assets/hero-icon/figma.png";
import aiIcon from "../assets/hero-icon/ai.webp";
import psIcon from "../assets/hero-icon/ps.png";
import xdIcon from "../assets/hero-icon/xd.png";

import bgImage from "../assets/background/paint-border.avif";

const icons = [
  {
    name: "Figma",
    icon: figmaIcon,
    position: "bottom-16 left-1/3 transform -translate-x-1/2",
  },
  {
    name: "AI",
    icon: aiIcon,
    position: "md:top-[140px] left-8 md:left-10 top-[50px]",
  },
  {
    name: "PS",
    icon: psIcon,
    position: "top-[100px] right-4 md:right-12",
  },
  {
    name: "XD",
    icon: xdIcon,
    position: "bottom-8 right-12 md:right-16",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const texts = ["UX/UI Designer", "Graphics Designer", "Product Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="px-4 py-15 min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
        {/* Left Section */}
        <div className="flex-1 space-y-3 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="text-xl md:text-2xl font-medium text-orange-500">
            Hello, I'm
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Jaimin <br className="md:hidden" /> Jikadra
          </h1>

          <h2 className="text-xl md:text-2xl font-medium">
            I am a{" "}
            <span className="text-orange-500 font-semibold">
              <span className="block animate-slide-up-down">{texts[index]}</span>
            </span>
          </h2>

          <p className="text-gray-500 max-w-md mx-auto lg:mx-0">
            I'm a creative designer based in India, and I'm very passionate and
            dedicated to my work.
          </p>

          {/* Button and Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center lg:justify-start">
            <a
              href="/about"
              className="relative overflow-hidden border border-[#ff5722] text-white font-medium px-5 py-2 rounded-full group"
            >
              <span className="absolute inset-0 bg-[#ff5722] translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-[#ff5722] transition-colors duration-500">
                About Me
              </span>
            </a>

            <div className="flex gap-4 text-xl text-black">
              <a href="#" className="hover:text-orange-500">
                Bē
              </a>
              <a href="#" className="hover:text-orange-500">
                💹
              </a>
              <a href="#" className="hover:text-orange-500">
                in
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-10 md:mt-0 relative order-1 lg:order-2 w-full max-w-md mx-auto lg:mx-0">
          <img
            src={Jaimin}
            alt="Jaimin"
            className="w-[280px] md:w-[370px] lg:w-[410px] mx-auto object-cover"
          />

          {/* Floating Icons */}
          {icons.map((item, index) => (
            <div key={index} className={`absolute ${item.position}`}>
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-bounce"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 flex justify-center w-full">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-black rounded-full flex items-start justify-center p-1">
          <div className="w-0.5 h-2 md:h-3 bg-black animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
