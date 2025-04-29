"use client";
import React, { useState, useEffect } from "react";

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

  return (
    <nav className="px-4 py-4 fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold">
            Jai<span className="text-[#ff5722]">min</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-[#ff5722] font-medium">
            Home
          </a>
          <a
            href="/about"
            className="text-black font-medium hover:text-[#ff5722] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="text-black font-medium hover:text-[#ff5722] transition-colors duration-300"
          >
            Portfolio
          </a>
          <a
            href="/service"
            className="text-black font-medium hover:text-[#ff5722] transition-colors duration-300"
          >
            Service
          </a>
          <a
            href="/blog"
            className="text-black font-medium hover:text-[#ff5722] transition-colors duration-300"
          >
            Blog
          </a>

          <button href="/book-demo"
            className="relative overflow-hidden border border-[#ff5722] text-black font-medium px-5 py-2 rounded-full group"
          >
            <span className="absolute inset-0 bg-[#ff5722] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Book Demo
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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

      {/* Mobile Menu Links */}
      <div
        className={`fixed top-16 left-0 w-full bg-white flex flex-col items-center space-y-6 py-8 shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <a 
          href="/" 
          className="text-[#ff5722] font-medium text-lg"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="/about"
          className="text-black font-medium hover:text-[#ff5722] transition-colors duration-300 text-lg"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="/portfolio"
          className="text-black font-medium hover:text-[#ff5722] transition-colors duration-300 text-lg"
          onClick={toggleMenu}
        >
          Portfolio
        </a>
        <a
          href="/service"
          className="text-black font-medium hover:text-[#ff5722] transition-colors duration-300 text-lg"
          onClick={toggleMenu}
        >
          Service
        </a>
        <a
          href="/blog"
          className="text-black font-medium hover:text-[#ff5722] transition-colors duration-300 text-lg"
          onClick={toggleMenu}
        >
          Blog
        </a>

        <a
          href="/book-demo"
          className="relative overflow-hidden border border-[#ff5722] text-black font-medium px-6 py-2 rounded-full group text-lg"
          onClick={toggleMenu}
        >
          <span className="absolute inset-0 bg-[#ff5722] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            Book Demo
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;