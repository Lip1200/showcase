"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "./data";

const Splash = () => {
  const [displayText, setDisplayText] = useState("");
  const [show, setShow] = useState(true);
  const fullText = `${personalInfo.name.split(' ')[0]}. `;

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 140);

    return () => clearInterval(typeInterval);
  }, [fullText]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div 
      className="h-screen w-screen flex justify-center items-center bg-main"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
    >
      <h1 className="text-2xl text-center text-primary flex font-mono">
        <span>{displayText}</span>
        <span className="ml-2">portfolio</span>
      </h1>
    </motion.div>
  );
};

export default Splash;
