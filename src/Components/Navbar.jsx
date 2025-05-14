"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import JJ from "../assets/Jaimin/jj.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menu item animations
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="md:px-4 md:py-4 fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
        <img src={JJ} alt="Logo" fill className="w-15" />
        <span className="text-2xl font-bold">
            Jai<span className="text-[#31A8FF]">min</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.a
            href="/"
            className="text-[#31A8FF] font-medium"
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ delay: 0.1 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            className="text-black font-medium hover:text-[#31A8FF]"
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ delay: 0.2 }}
          >
            About
          </motion.a>
          <motion.a
            href="#portfolio"
            className="text-black font-medium hover:text-[#31A8FF]"
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ delay: 0.3 }}
          >
            Portfolio
          </motion.a>
          <motion.a
            href="#service"
            className="text-black font-medium hover:text-[#31A8FF]"
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ delay: 0.4 }}
          >
            Service
          </motion.a>
          <motion.a
            href="#blog"
            className="text-black font-medium hover:text-[#31A8FF]"
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ delay: 0.5 }}
          >
            Blog
          </motion.a>

          <motion.button
            className="relative overflow-hidden border border-[#31A8FF] text-black font-medium px-5 py-2 rounded-full group"
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ delay: 0.6 }}
          >
            <span className="absolute inset-0 bg-[#31A8FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white">Book Demo</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu Links with Framer Motion animation */}
      <motion.div
        className="fixed top-16 left-0 w-full bg-white flex flex-col items-center space-y-6 py-8 shadow-lg z-50 md:hidden"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -200 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.a
          href="/"
          className="text-[#31A8FF] font-medium text-lg"
          onClick={toggleMenu}
          initial="hidden"
          animate="visible"
          variants={menuItemVariants}
          transition={{ delay: 0.1 }}
        >
          Home
        </motion.a>
        <motion.a
          href="#about"
          className="text-black font-medium hover:text-[#31A8FF] text-lg"
          onClick={toggleMenu}
          initial="hidden"
          animate="visible"
          variants={menuItemVariants}
          transition={{ delay: 0.2 }}
        >
          About
        </motion.a>
        <motion.a
          href="#portfolio"
          className="text-black font-medium hover:text-[#31A8FF] text-lg"
          onClick={toggleMenu}
          initial="hidden"
          animate="visible"
          variants={menuItemVariants}
          transition={{ delay: 0.3 }}
        >
          Portfolio
        </motion.a>
        <motion.a
          href="#service"
          className="text-black font-medium hover:text-[#31A8FF] text-lg"
          onClick={toggleMenu}
          initial="hidden"
          animate="visible"
          variants={menuItemVariants}
          transition={{ delay: 0.4 }}
        >
          Service
        </motion.a>
        <motion.a
          href="#blog"
          className="text-black font-medium hover:text-[#31A8FF] text-lg"
          onClick={toggleMenu}
          initial="hidden"
          animate="visible"
          variants={menuItemVariants}
          transition={{ delay: 0.5 }}
        >
          Blog
        </motion.a>

        <motion.a
          href="#book-demo"
          className="relative overflow-hidden border border-[#31A8FF] text-black font-medium px-6 py-2 rounded-full group text-lg"
          onClick={toggleMenu}
          initial="hidden"
          animate="visible"
          variants={menuItemVariants}
          transition={{ delay: 0.6 }}
        >
          <span className="absolute inset-0 bg-[#31A8FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white">Book Demo</span>
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
