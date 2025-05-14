import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Pixel Perfect',
      description:
        'I believe in perfect things at any cost. My art will prove that its pixel is perfect.',
    },
    {
      icon: '🎨',
      title: 'High Quality',
      description:
        'I am not finished until you are 100% happy and satisfied. I am confident that I can meet your needs with High Quality work.',
    },
    {
      icon: '💡',
      title: 'Awesome Idea',
      description:
        'I will craft a distinctive artwork with unique idea which will stay in the mind of your customers and transport your message in a powerful way.',
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-[#F0F8FF] via-white to-[#F0F8FF] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-14">
          Why Choose Me?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full min-h-[340px] flex flex-col justify-between transform hover:scale-105 transition duration-300 border-t-4 border-[#31A8FF]"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div>
                <div className="flex justify-center mb-6 relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#31A8FF] to-blue-300 text-white text-5xl flex items-center justify-center shadow-lg border-4 border-white">
                    {feature.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-white border-2 border-[#31A8FF] rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-snug">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
