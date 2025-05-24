import axios from "axios";
import React, { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to your API
      const response = await axios.post("http://localhost:5000/api/contact", formData);

      console.log("API Response:", response.data);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20  text-center transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className={`text-6xl font-bold ${isDark ?"text-black":"text-white "} mb-8 `}>Get in Touch</h2>
        {isSubmitted ? (
          <p className="text-blue-500 text-xl">Message sent successfully!</p>
        ) : (
          <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded ${isDark ? "bg-white text-gray-900" : "bg-black text-gray-200"} border-solid border-1  border-gray-400 focus:ring-2 focus:ring-gray-200 `}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded ${isDark ? "bg-white text-gray-900" : "bg-black text-gray-200"} border-solid border-1  border-gray-400 focus:ring-2 focus:ring-gray-200 `}
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 rounded ${isDark ? "bg-white text-gray-900" : "bg-black text-gray-200"} border-solid border-1  border-gray-400 focus:ring-2 focus:ring-gray-200 `}
              rows="4"
              required
            ></textarea>
            <button className={`${isDark ? "bg-black text-white hover:bg-white  hover:text-black" : "bg-white text-black hover:bg-black hover:text-white"} px-6 py-2 rounded-lg  transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;