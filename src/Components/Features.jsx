import React from 'react';

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
    <section className="py-16 sm:py-20 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-sm"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-orange-300 flex items-center justify-center text-4xl sm:text-5xl">
                {feature.icon}
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white border-2 border-orange-500 rounded-full"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
