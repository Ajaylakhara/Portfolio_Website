import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    setIsSubmitted(true);

    // Simulate message sent and reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };
  const contactInfo = {
  email: "ajaylakhara748@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ajay-lakhara-9159b0190/",
  Github: "https://github.com/Ajaylakhara",
  resume: "../../public/Ajay_Lakhara_Resume.pdf",
};

  return (
    <section className={`py-20 text-center transition-colors duration-300`}>
      <div>
      <motion.div className="container mx-auto px-6">
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
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10"
        >
          <h2
            className={`text-6xl font-semibold mb-4 ${
              isDark ? "text-gray-900" : "text-white"
            }`}
          >
            Contact Me
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className={`text-2xl ${
                isDark
                  ? "text-gray-500 hover:text-gray-200"
                  : "text-gray-300 hover:text-gray-900"
              } transition-colors duration-300`}
            >
              {" "}
              Email
            </a>
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${
                isDark
                  ? "text-gray-500 hover:text-gray-200"
                  : "text-gray-300 hover:text-gray-900"
              } transition-colors duration-300`}
            >
              LinkedIn
            </a>
            <a
              href={contactInfo.Github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${
                isDark
                  ? "text-gray-500 hover:text-gray-200"
                  : "text-gray-300 hover:text-gray-900"
              } transition-colors duration-300`}
            >
              GitHub
            </a>
          </div>
          <div className="mt-6 flex text-xl justify-center gap-4">
           <a href="../../public/Ajay_Lakhara_Resume.pdf" download="Ajay_Lakhara_Resume.pdf" className={`px-6 py-3 ${isDark ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black  text-white hover:bg-white hover:text-black "} rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}>
            Download Resume
          </a>
          </div>
        </motion.div>
        <motion.div className="mt-10">
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
        </motion.div>
      
      </div>
    </section>
  );
};

export default Contact;
