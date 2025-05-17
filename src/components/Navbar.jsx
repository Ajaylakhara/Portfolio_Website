import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ toggleTheme, isDark }) {
  return (
    <nav
      className="fixed w-full py-4 shadow-md z-50 top-0 transition-colors duration-300 "
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1
          className={`text-2xl font-bold ${
            isDark ? "text-black" : "text-white"
          }`}
        >
          AL
        </h1>
        <div className="flex items-center space-x-6">
          <ul className="flex text-xl space-x-6">
            <li>
              <Link to="/Portfolio_Website"className={`cursor-pointer ${
                  isDark
                    ? "text-gray-900 hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                } transition-colors duration-300`} > Home
              </Link>
            </li>
          
              <li>
                 <Link to="/about"className={`cursor-pointer ${
                  isDark
                    ? "text-gray-900 hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                } transition-colors duration-300`} > About
              </Link> 
              </li>
          
              <li>
                <Link to="/projects"className={`cursor-pointer ${
                  isDark
                    ? "text-gray-900 hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                } transition-colors duration-300`} > Projects
              </Link>
              </li>
            
              <li>
            <Link to="/contact"className={`cursor-pointer ${
                  isDark
                    ? "text-gray-900 hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                } transition-colors duration-300`} > Contact
              </Link>
              </li>

          </ul>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDark ? "bg-gray-200 text-black" : "bg-black text-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
