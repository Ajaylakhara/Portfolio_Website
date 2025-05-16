import React, { useState } from "react";
import { Link } from "react-router-dom"; // Using react-router-dom for navigation

const Contact = ({ isDark = false }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }, 3000);
  };

  return (
    <section
      className={`py-20 text-center transition-colors duration-300 `}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl font-bold mb-4 leading-tight ${
            isDark
              ? " bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent"
              : " bg-gradient-to-r from-gray-500 to-gray-200 bg-clip-text text-transparent"
          }`}
        >
          Contact | Ajay Lakhara
        </h2>
        <p
          className={`text-xl mb-10 ${
            isDark ? "text-gray-600" : "text-gray-300"
          }`}
        >
          Get in Touch with Me
        </p>
        {isSubmitted ? (
          <div className="max-w-xl mx-auto p-6 bg-green-100 rounded-lg">
            <p className="text-green-700 text-xl font-semibold">
              Message sent successfully!
            </p>
          </div>
        ) : (
          <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-4 rounded-lg border ${
                isDark
                  ? " text-black border-gray-700 focus:ring-gray-500"
                  : " text-white border-gray-300 focus:ring-gray-400"
              } focus:ring-2 focus:outline-none`}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full p-4 rounded-lg border ${
                isDark
                    ? " text-black border-gray-700 focus:ring-gray-500"
                  : " text-white border-gray-300 focus:ring-gray-400"
              } focus:ring-2 focus:outline-none`}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full p-4 rounded-lg border ${
                isDark
                   ? " text-black border-gray-700 focus:ring-gray-500"
                  : " text-white border-gray-300 focus:ring-gray-400"
              } focus:ring-2 focus:outline-none`}
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                isDark
                  ? "bg-black text-white hover:bg-white hover:text-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10">
          <Link
            to="/faqs"
            className={`text-lg font-semibold ${
              isDark
                ? "text-gray-900 hover:text-gray-200"
                : "text-gray-200 hover:text-gray-900"
            } transition-colors duration-300`}
          >
            FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;