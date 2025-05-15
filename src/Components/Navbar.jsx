"use client";
import React, { useState, useEffect } from "react";
import JJ from "../assets/Jaimin/jj.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:px-4 md:py-4 fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={JJ} alt="Logo" className="w-15" />
          <span className="text-2xl font-bold">
            Jai<span className="text-[#31A8FF]">min</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-[#31A8FF] font-medium">
            Home
          </a>
          <a
            href="#about"
            className="text-black font-medium hover:text-[#31A8FF]"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-black font-medium hover:text-[#31A8FF]"
          >
            Portfolio
          </a>
          <a
            href="#service"
            className="text-black font-medium hover:text-[#31A8FF]"
          >
            Service
          </a>
          <a href="#blog" className="text-black font-medium hover:text-[#31A8FF]">
            Blog
          </a>

          <button className="relative overflow-hidden border border-[#31A8FF] text-black font-medium px-5 py-2 rounded-full group">
            <span className="absolute inset-0 bg-[#31A8FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white">Book Demo</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mr-3">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none p-2 rounded-md bg-transparent"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay and Menu Links */}
      {/* Add smooth fade-in animation using transition */}
      <div
        className={`fixed top-16 left-0 w-full bg-white flex flex-col items-center space-y-6 py-8 shadow-lg z-50 md:hidden
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <a
          href="/"
          className="text-[#31A8FF] font-medium text-lg"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="text-black font-medium hover:text-[#31A8FF] text-lg"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#portfolio"
          className="text-black font-medium hover:text-[#31A8FF] text-lg"
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </a>
        <a
          href="#service"
          className="text-black font-medium hover:text-[#31A8FF] text-lg"
          onClick={() => setIsOpen(false)}
        >
          Service
        </a>
        <a
          href="#blog"
          className="text-black font-medium hover:text-[#31A8FF] text-lg"
          onClick={() => setIsOpen(false)}
        >
          Blog
        </a>
        <a
          href="#book-demo"
          className="relative overflow-hidden border border-[#31A8FF] text-black font-medium px-6 py-2 rounded-full group text-lg"
          onClick={() => setIsOpen(false)}
        >
          <span className="absolute inset-0 bg-[#31A8FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white">Book Demo</span>
        </a>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
