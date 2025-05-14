import { useState } from "react";
import { ChevronUp } from "lucide-react";
import React from 'react'

const faqData = [
  {
    question: "What Other Services you offer?",
    answer:
      "My expertise is taking ideas and transforming them into a visual and professional design. I can design logos, branding, posters, flyers, brochures, business cards, annual reports, roll-ups, banners, and even website and application design and development. Please feel free to contact me and we will find the best deal for what you need.",
  },
  {
    question: "What kind of file I received?",
    answer:
      "The final files are print-ready, 300dpi high quality in the format you need, including bleeds and crop marks. It is best to ask your printing house for their specific requirements, and include them before placing the order.",
  },
  {
    question: "What software do you use?",
    answer:
      "For graphic design purposes, I use the latest version of Adobe Photoshop and Adobe Illustrator. For web or app design Adobe XD or Figma.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">FAQ</h1>
      <p className="text-center text-gray-600 mb-10">
        here are some of the frequently asked questions or{" "}
        <a href="#" className="text-[#31A8FF]">
          Contact me?
        </a>
      </p>

      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex justify-between items-center text-left"
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <ChevronUp
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
              size={20}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
