import React from "react";
import one from "../assets/blog/1.jpg";
import two from "../assets/blog/2.jpg";
import three from "../assets/blog/3.jpg";

const blogPosts = [
  {
    title: "Who needs a professionally designed website?",
    category: "website design",
    date: "01 Nov",
    image: one,
  },
  {
    title: "What Makes a Good Package Design?",
    category: "Packaging Design",
    date: "23 Aug",
    image: two,
  },
  {
    title: "What is meant by a logo, and how can you create one?",
    category: "professional logo",
    date: "05 June",
    image: three,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h4 className="text-[#31A8FF] font-semibold mb-2">From My Blog</h4>
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Recent Updates, Blog,
          <br />
          Tips, Tricks & More
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                {post.date}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[#31A8FF] font-semibold text-sm capitalize">
                {post.category}
              </p>
              <h3 className="font-bold text-lg mt-2 text-gray-800">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
