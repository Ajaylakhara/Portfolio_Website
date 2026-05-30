import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial theme setup
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen bg-background text-text`}>
      <AppRoutes isDark={isDark} />
    </div>
  );
};

export default App;
