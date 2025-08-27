"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Force reset to English for testing
    localStorage.removeItem("portfolio-language");
    setLanguage("en");
    localStorage.setItem("portfolio-language", "en");
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  };

  const value = useMemo(() => ({
    language,
    setLanguage: handleSetLanguage
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
