import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ toggleTheme, isDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 top-0 backdrop-blur-md bg-opacity-70 transition-colors duration-300 ${isDark ? "bg-white/70" : "bg-black/70"}`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <h1 className={`text-2xl font-bold ${isDark ? "text-black" : "text-white"}`}>AL</h1>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className={`${isDark ? "text-black" : "text-white"}`} /> : <Menu className={`${isDark ? "text-black" : "text-white"}`} />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex text-xl space-x-6">
            <li><Link to="/" className={`cursor-pointer ${isDark ? "text-gray-900 hover:text-gray-600" : "text-white hover:text-gray-300"} transition-colors duration-300`}>Home</Link></li>
            <li><Link to="/about" className={`cursor-pointer ${isDark ? "text-gray-900 hover:text-gray-600" : "text-white hover:text-gray-300"} transition-colors duration-300`}>About</Link></li>
            <li><Link to="/projects" className={`cursor-pointer ${isDark ? "text-gray-900 hover:text-gray-600" : "text-white hover:text-gray-300"} transition-colors duration-300`}>Projects</Link></li>
            <li><Link to="/contact" className={`cursor-pointer ${isDark ? "text-gray-900 hover:text-gray-600" : "text-white hover:text-gray-300"} transition-colors duration-300`}>Contact</Link></li>
          </ul>
          <button onClick={toggleTheme} className={`p-2 rounded-full ${isDark ? "bg-gray-200 text-black" : "bg-black text-white"} focus:outline-none focus:ring-2 focus:ring-blue-400`} aria-label="Toggle theme">
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-4 transition-all duration-300 ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
          <ul className="space-y-4 text-xl">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
          <div className="mt-4">
            <button onClick={toggleTheme} className={`p-2 rounded-full ${isDark ? "bg-gray-200 text-black" : "bg-black text-white"} focus:outline-none focus:ring-2 focus:ring-blue-400`}>
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}