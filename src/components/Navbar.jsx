import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      // We look at 35% down the screen to determine the active section
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      // If we are at the very bottom of the page, activate the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = sections[sections.length - 1]?.id || "";
      }

      // If we are at the top, default to home
      if (window.scrollY < 100) {
        currentSection = "home";
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)]">

          {/* Left: Logo */}
          <Link
            to="/"
            onClick={() => {
              setActiveSection("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <span className="text-4xl font-handwritten font-bold tracking-normal text-[#000000]">
              AL<span style={{ color: "#FF6321" }}>.</span>
            </span>
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <div
            className="hidden md:flex items-center gap-1 relative z-10"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {["Home", "Projects", "About", "Experience",
              "Process", "Case Study"].map((item) => {
                const itemId = item.toLowerCase().replace(/\s+/g, "-");
                const isActive = activeSection === itemId || (activeSection === "" && item === "Home");
                return (
                  <a
                    key={item}
                    href={`#${itemId}`}
                    onMouseEnter={() => setHoveredSection(itemId)}
                    onClick={() => setActiveSection(itemId)}
                    className={`relative px-4 py-2 text-[14px] font-semibold transition-colors duration-200 rounded-full ${isActive ? "text-white" : "text-gray-500 hover:text-[#FF6321]"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-bg"
                        className="absolute inset-0 bg-[#FF6321] rounded-full -z-10 shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {hoveredSection === itemId && !isActive && (
                      <motion.div
                        layoutId="hover-nav-bg"
                        className="absolute inset-0 bg-[#FF6321]/10 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item}</span>
                  </a>
                );
              })}
          </div>

          {/* Right: CTA & Mobile Menu */}
          <div className="flex items-center gap-4 z-10">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block bg-[#1A1A1A] hover:bg-[#FF6321] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-sm cursor-pointer"
            >
              Let's Talk
            </motion.a>
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