"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-[25px] left-[25px] z-50 flex gap-2 text-xs font-mono text-content -rotate-90 origin-bottom-left">
      <button
        onClick={() => setTheme("light")}
        className={`transition-colors ${
          theme === "light"
            ? "text-primary"
            : "text-content hover:text-primary"
        }`}
      >
        {theme === "light" ? "■" : "□"} LIGHT
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`transition-colors ${
          theme === "dark"
            ? "text-primary"
            : "text-content hover:text-primary"
        }`}
      >
        {theme === "dark" ? "■" : "□"} DARK
      </button>
    </div>
  );
};

export default ThemeToggle;
