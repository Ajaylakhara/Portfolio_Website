import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  { title: "Building a Portfolio with React", date: "March 15, 2025", excerpt: "How I built my personal portfolio using React and Tailwind CSS." },
  { title: "Exploring Next.js Features", date: "February 20, 2025", excerpt: "A deep dive into server-side rendering and static site generation." },
  { title: "UI/UX Tips for Developers", date: "January 10, 2025", excerpt: "Key principles to improve your design skills as a developer." },
];

const Blog = ({ isDark = false }) => {
  return (
    <section id="blog" className="py-20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-6xl font-bold text-center mb-8  ${isDark ? "text-black" : "text-white"}`}
        >
          Recent Blog Posts
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${isDark ? "bg-black" : "bg-white"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className={`text-2xl font-bold ${isDark ? "text-white" :"text-gray-900"}`}>{post.title}</h3>
              <p className={`"text-xl ${isDark ? "text-gray-600": "text-gray-400"} mt-2"`}>{post.date}</p>
              <p className={`" text-sm ${isDark ? "text-gray-300" : "text-gray-600"} mt-2"`}>{post.excerpt}</p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-500 hover:underline"
                onClick={(e) => e.preventDefault()} // Placeholder link
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;