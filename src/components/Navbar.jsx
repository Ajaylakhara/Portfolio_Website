import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-4xl font-handwritten font-bold tracking-normal text-[#000000]">
              Aj<span style={{ color: "#FF6321" }}></span>
            </span>
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {["Home", "Projects", "About", "Experience", 
              "Process", "Case Study"].map((item) => {
              const itemId = item.toLowerCase().replace(/\s+/g, "-");
              const isActive = activeSection === itemId || (activeSection === "" && item === "Home");
              return (
                <a
                  key={item}
                  href={`#${itemId}`}
                  style={{ position: "relative" }}
                  className={`relative px-4 py-2 text-[14px] font-semibold transition-colors ${
                    isActive ? "text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-bg"
                      style={{ position: "absolute" }}
                      className="absolute inset-0 bg-[#FF6321] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10" style={{ position: "relative" }}>{item}</span>
                </a>
              );
            })}
          </div>

          {/* Right: CTA & Mobile Menu */}
          <div className="flex items-center gap-4 z-10">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block bg-[#1A1A1A] hover:bg-[#FF6321] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-sm"
            >
              Let's Talk
            </motion.button>
            <button aria-label="Open Mobile Menu" className="md:hidden text-gray-800 hover:text-[#FF6321] transition-colors">
              <Menu size={24} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;