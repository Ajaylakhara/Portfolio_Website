import React, { useState } from "react";

const Contact = ({isDark=(false)} ) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
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
              className={`w-full p-3 rounded ${isDark ? "bg-white text-gray-900" : "bg-black text-gray-200"} border-solid border-1  border-gray-400 focus:ring-2 focus:ring-gray-200 `}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full p-3 rounded ${isDark ? "bg-white text-gray-900" : "bg-black text-gray-200"} border-solid border-1  border-gray-400 focus:ring-2 focus:ring-gray-200 `}
              required
            />
            <textarea
              placeholder="Your Message"
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