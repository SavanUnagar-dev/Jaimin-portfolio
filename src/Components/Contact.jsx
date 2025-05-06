import { MapPin, Mail } from "lucide-react";
import React from 'react'


export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-red-500 font-semibold">Contact Me</p>
        <h2 className="text-4xl font-bold mb-2">I Want To Hear From You</h2>
        <p className="text-gray-500">
          Please fill out the form on this section to contact with me. Or call between
          9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left side - Info */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-4 rounded-full">
              <MapPin className="text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-500">Surat, Gujarat, India</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-full">
              <Mail className="text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-500">jaiminjikadra521@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="w-full md:w-2/3 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <textarea
            placeholder="Write your message here"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
