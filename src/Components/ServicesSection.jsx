import React from "react";
import BgImg from "../assets/background/abstract-soft-colorful.avif"

const services = [
  {
    title: "Logo Design",
    price: "$59",
    description:
      "My Logo Design Services will provide your company with a brand image that will stand out in the eyes of your consumers and clients, and also make visual communication more understandable & appealing.",
    iconBg: "bg-orange-100",
    icon: "🎨", // Replace with image/icon
    highlightColor: "text-orange-500",
  },
  {
    title: "Graphic Design",
    price: "$199",
    description:
      "I am offering many kinds of graphics-related services. like poster, banner, label, product, business card, brand identity, etc. at the best price.",
    iconBg: "bg-green-100",
    icon: "🖼️", // Replace with image/icon
    highlightColor: "text-orange-500",
  },
  {
    title: "UI/UX Design",
    price: "$299",
    description:
      "Make the user experience a smooth trip. Our design principles are always to put the user first, create straightforward, easy-to-navigate interfaces, and provide a smooth end-to-end experience.",
    iconBg: "bg-purple-100",
    icon: "🧑‍💻", // Replace with image/icon
    highlightColor: "text-orange-500",
  },
  {
    title: "Web Design",
    price: "$399",
    description:
      "I am committed to offering outstanding web design services that will assist you in establishing a competitive online presence. By building unique design solutions, we advance both the clients' & company's paths.",
    iconBg: "bg-yellow-100",
    icon: "💻", // Replace with image/icon
    highlightColor: "text-orange-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="service" className="relative z-10 py-16 px-4 sm:px-6 lg:px-20 bg-white">
      {/* Background Illustration (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <img
          src={BgImg}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h4 className="text-[#31A8FF] text-lg font-semibold">Services</h4>
        <h2 className="text-4xl font-bold mt-2">What I Do for Clients</h2>
        <p className="mt-2 text-gray-500 max-w-xl mx-auto">
          This is what we do to keep our hunger for great work satisfied
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-10 flex gap-4 transform transition-all duration-500 hover:rotate-[1deg] hover:scale-[1.03] hover:shadow-xl hover:-translate-y-2 cursor-pointer"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${service.iconBg}`}
            >
              <span>{service.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-900 font-medium mt-1">
                Starts from{" "}
                <span className={`${service.highlightColor}`}>
                  {service.price}
                </span>
              </p>
              <p className="text-gray-500 mt-2 text-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
