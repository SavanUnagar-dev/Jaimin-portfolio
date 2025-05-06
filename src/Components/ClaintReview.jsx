import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import BgImg from "../assets/background/background-.avif";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      quote: `jaimin is actually amazing! 100% recommend. Not only is she extremely creative which is extremely helpful if you don't have an exact idea of what you want in mind...`,
      name: "Mike Anderson",
      company: "AB Group",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      quote: `Incredible work! Very responsive, highly professional, and extremely talented. I was impressed from start to finish.`,
      name: "Sarah Johnson",
      company: "Creative Studio",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      quote: `Top-notch service! She delivered exactly what we envisioned. Will definitely collaborate again.`,
      name: "Robert Lee",
      company: "TechNova",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
  ];

  return (
    <div
      className="relative w-full py-20 bg-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="text-center my-16 px-4">
        <h4 className="text-orange-500 font-semibold text-lg mb-2">
          Testimonials
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What My Clients Say
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base">
          Good things come for those who work hard, and that's why our clientele
          appreciate My efforts.
        </p>
      </div>

      {/* Carousel Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <FaQuoteLeft className="text-4xl text-orange-500 mx-auto mb-6" />

        <Swiper
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed mb-8">
                {t.quote}
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-black">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots BELOW everything */}
        <div className="custom-pagination mt-8 flex justify-center gap-2"></div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
