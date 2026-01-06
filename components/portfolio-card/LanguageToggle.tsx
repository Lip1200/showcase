"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const displayLanguage = language === "en" ? "FR" : "EN";

  return (
    <div className="absolute top-[-30px] right-0 z-50">
      <button
        onClick={toggleLanguage}
        className="text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
      >
        {displayLanguage}
      </button>
    </div>
  );
};

export default LanguageToggle;
