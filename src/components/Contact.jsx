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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate message sent and reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 text-center transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className={`text-6xl font-bold ${isDark ? "text-black" : "text-white"} mb-8`}>Get in Touch</h2>
        {isSubmitted ? (
          <p className="text-blue-500 text-xl">Message sent successfully!</p>
        ) : (
          <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              className={`w-full p-3 rounded ${isDark ? "bg-white text-gray-900" : "bg-black text-gray-200"} border border-gray-400 focus:ring-2 focus:ring-gray-200`}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className={`w-full p-3 rounded ${isDark ? "bg-white text-gray-900" : "bg-black text-gray-200"} border border-gray-400 focus:ring-2 focus:ring-gray-200`}
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              name="message"
              className={`w-full p-3 rounded ${isDark ? "bg-white text-gray-900" : "bg-black text-gray-200"} border border-gray-400 focus:ring-2 focus:ring-gray-200`}
              rows="4"
              required
            ></textarea>
            <button className={`${isDark ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-black hover:text-white"} px-6 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;