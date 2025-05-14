import { MapPin, Mail } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow 10 digits in phone
    if (name === "phone") {
      const onlyNums = value.replace(/\D/g, "");
      if (onlyNums.length <= 10) {
        setForm({ ...form, [name]: onlyNums });
      }
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const { name, email, phone, subject, message } = form;
    const whatsappNumber = "917778870725"; 

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `📩 New Contact Form Submission:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n📝 Subject: ${subject}\n💬 Message: ${message}`
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-[#31A8FF] font-semibold">Contact Me</p>
        <h2 className="text-4xl font-bold mb-2">I Want To Hear From You</h2>
        <p className="text-gray-500">
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left side - Info */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-4 rounded-full">
              <MapPin className="text-red-600" />
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
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <textarea
            name="message"
            placeholder="Write your message here"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#31A8FF] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#31A8FF] transition"
          >
            Submit via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
