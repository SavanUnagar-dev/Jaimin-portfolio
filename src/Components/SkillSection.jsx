import React, { useEffect, useState, useRef } from "react";
import skill from "../assets/skill-img/skill.jpg";

const skills = [
  { name: "illustrator", percent: 95, color: "bg-orange-500" },
  { name: "photoshop", percent: 95, color: "bg-blue-500" },
  { name: "figma", percent: 85, color: "bg-purple-500" },
  { name: "xd", percent: 85, color: "bg-pink-400" },
];

export default function SkillSection() {
  const [progress, setProgress] = useState(skills.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setProgress(skills.map((skill) => skill.percent));
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
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
      ref={sectionRef}
      className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-center gap-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      {/* Left Content */}
      <div className="bg-white bg-opacity-90 p-6 sm:p-8 md:p-10 rounded-xl w-full md:w-1/2">
        <p className="text-orange-500 font-semibold text-lg">Design is Life</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">
          I Develop Skills Regularly <br /> to Keep Me Update
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Most common methods for designing websites that work well on <br />
          desktop is responsive and adaptive design
        </p>

        <div className="mt-8 space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black capitalize">
                  {skill.name}
                </span>
                <span className="text-sm text-red-500 font-semibold">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                <div
                  className={`${skill.color} h-full rounded-full transition-all duration-[2000ms]`}
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={skill}
          alt="Skill"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl"
        />
      </div>
    </section>
  );
}
