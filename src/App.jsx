import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark" : ""
      }`}
    >
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className={`h-full ${isDark ? "bg-gray-900" : "bg-gray-200"} transition-all duration-300`}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <AppRoutes isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;
