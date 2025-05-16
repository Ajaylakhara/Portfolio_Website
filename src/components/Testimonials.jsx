import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Vritika Naik", role: "Regional Head @GirlScript", text: "I am amazed at Ajay ability to create intriguing designs. His work ethics are immaculate." },
  { name: "Amrit Raj", role: "Senior Developer @Ignite Solutions", text: "Ajay design proficiency is remarkable, consistently delivering top-notch work." },
  { name: "Divya Walia", role: "Senior Java Developer @Nagarro", text: "AJAy played a pivotal role in building applications with strong technical skills." },
];

const Testimonials = ({ isDark = false }) => {
  return (
    <section id="testimonials" className="py-20  transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-6xl font-bold text-center mb-8 ${ isDark ? "text-black": "text-white"}`}
        >
          What Others Say
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${isDark ? "bg-black" : "bg-white"} p-6 rounded-lg shadow-lg  `}
            >
              <p className={`${isDark ? "text-gray-300" :  "text-gray-700"} italic`}>"{testimonial.text}"</p>
              <p className={`mt-4 font-bold ${isDark ? "text-white" : "text-gray-800"}`}>{testimonial.name}</p>
              <p className={`text-sm ${isDark ? "text-gray-400": "text-gray-600"}`}>{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;