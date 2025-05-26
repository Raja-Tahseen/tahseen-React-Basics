import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
