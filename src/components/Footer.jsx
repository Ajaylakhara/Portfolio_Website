import React from "react";
import { Link } from "react-scroll";

export default function Footer({ isDark = false }) {
  return (
    <footer className="py-6 text-center dark:   relative transition-colors duration-300">
      <div
        className={`"container mx-auto px-6 border-t ${
          isDark
            ? "text-gray-600 border-gray-900 "
            : "text-gray-400 border-gray-100"
        }`}
      >
        <p>© 2025 Ajay Lakhara  | All Rights Reserved</p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="https://github.com/Ajaylakhara"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? "hover:text-gray-200 " : "hover:text-gray-900"}
            transition-colors duration-300`}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-lakhara-9159b0190/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? "hover:text-gray-200 " : "hover:text-gray-900"}
            transition-colors duration-300`}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <Link
        to="home"
        smooth
        duration={500}
        className={`absolute right-6 bottom-6 p-2  ${
          isDark ? "text-black" : "text-white"
        } rounded-full hover:bg-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}
        aria-label="Back to top"
      >
        ↑
      </Link>
    </footer>
  );
}

// dark:
