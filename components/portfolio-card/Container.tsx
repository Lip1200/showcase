"use client";

import React from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import SocialLinks from "./SocialLinks";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-neutral-900 font-mono p-[25px]">
      <div className="relative">
        <LanguageToggle />
        <motion.div 
          className="w-full h-[calc(100vh-50px)] bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <SocialLinks />
          {children}
        </motion.div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Container;
