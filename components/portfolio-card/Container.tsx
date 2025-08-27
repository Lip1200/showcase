"use client";

import React from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import SocialLinks from "./SocialLinks";
import SubtleFilmGrain from "./SubtleFilmGrain";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-main font-mono p-[25px]">
      <div className="relative">
        <LanguageToggle />
        <motion.div 
          className="w-full h-[calc(100vh-50px)] bg-main border border-content relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <SubtleFilmGrain />
          <SocialLinks />
          {children}
        </motion.div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Container;
