import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import designer from '../assets/skill-img/designer.jpg';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);

  // Slow Count-up Function
  const animateCount = () => {
    let yearCount = 0;
    let projectCount = 0;

    // Years: Count +1 every 400ms
    const yearInterval = setInterval(() => {
      yearCount++;
      setYears(yearCount);
      if (yearCount >= 2) clearInterval(yearInterval);
    }, 400);

    // Projects: Count +5 every 50ms
    const projectInterval = setInterval(() => {
      projectCount += 5;
      setProjects(projectCount);
      if (projectCount >= 100) {
        setProjects(100); 
        clearInterval(projectInterval);
      }
    }, 50);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16 md:py-24 max-w-6xl mx-auto"
    >
      {/* Left Side - Image and Stats */}
      <motion.div
        className="relative flex-1 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={designer}
          alt="Team"
          className="rounded-lg w-full max-w-md object-cover"
        />
        <div className="absolute flex items-center justify-center top-4 left-4 bg-white p-2 rounded shadow-md gap-2">
          <p className="text-green-600 text-3xl font-bold">{years}</p>
          <p className="text-gray-600 font-bold">Years of Success</p>
        </div>
        <div className="absolute flex items-center justify-center bottom-4 left-4 bg-white p-2 rounded shadow-md gap-1">
          <p className="text-purple-600 text-3xl font-bold">{projects}+</p>
          <p className="text-gray-600 font-bold">Total Projects</p>
        </div>
      </motion.div>

      {/* Right Side - Text */}
      <div className="flex-1">
        <motion.p
          className="text-[#31A8FF] font-semibold text-[19px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I'm a Designer
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight mt-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I Can Design Anything
          <br />
          You Want
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Hello there! I'm a graphic designer and web designer, and I'm very passionate and dedicated to my work. With 6+ years experience as a professional graphic designer and web designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
        </motion.p>
        <motion.button
          href="/book-demo"
          className="relative overflow-hidden pointer-coarse: border border-[#31A8FF] text-white font-medium px-5 py-2 rounded-full group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="absolute inset-0 bg-[#31A8FF] translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-[#31A8FF] transition-colors duration-500">
            Hire Me
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default AboutSection;
