import React, { useEffect, useRef, useState } from "react";

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
      if (yearCount >= 6) clearInterval(yearInterval);
    }, 400);

    // Projects: Count +5 every 50ms
    const projectInterval = setInterval(() => {
      projectCount += 5;
      setProjects(projectCount);
      if (projectCount >= 300) {
        setProjects(300); // stop exactly at 300
        clearInterval(projectInterval);
      }
    }, 100);
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
    <section ref={sectionRef} className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16 md:py-24 max-w-6xl mx-auto">
      {/* Left Side - Image and Stats */}
      <div className="relative flex-1 flex justify-center">
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
      </div>

      {/* Right Side - Text */}
      <div className="flex-1">
        <p className="text-orange-600 font-semibold text-xl">I'm a Designer</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2 mb-6">
          I Can Design Anything<br />You Want
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Hello there! I'm a graphic designer and web designer, and I'm very passionate and dedicated to my work. With 6+ years experience as a professional graphic designer and web designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
        </p>
        <button
              href="/book-demo"
              className="relative overflow-hidden pointer-coarse: border border-[#ff5722] text-white font-medium px-5 py-2 rounded-full group"
            >
              <span className="absolute inset-0 bg-[#ff5722] translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-[#ff5722] transition-colors duration-500">
                Hire Me
              </span>
            </button>
      </div>
    </section>
  );
};

export default AboutSection;
