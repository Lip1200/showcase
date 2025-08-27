"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "./useTranslation";

const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  const getX = () => {
    if (direction === "left") return 100;
    if (direction === "right") return -100;
    return 0;
  };
  
  const getY = () => {
    if (direction === "up") return 100;
    if (direction === "down") return -100;
    return 0;
  };

  return {
    hidden: {
      x: getX(),
      y: getY(),
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

const staggerContainer = (staggerChildren?: number, delayChildren?: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const ContainerSlideIn = ({ children, variants, ...props }: any) => (
  <motion.div {...props} variants={variants} className="relative">
    {children}
  </motion.div>
);

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[58%] h-[60%] text-content absolute top-[25%] right-[5%] font-mono z-[100]">
      {/* Fade gradient en haut */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="h-full overflow-y-auto overflow-x-hidden p-4 portfolio-scroll"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <ContainerSlideIn variants={fadeIn("left", "tween", 1.4, 1)}>
          <div className="pt-4">
            <p className="pb-4">
              {t.personalInfo.longDescription}
            </p>
            <p className="pb-4">
              {t.messages.primaryTechs} {t.personalInfo.skills.frontend.slice(0, 4).join(", ")}, {t.personalInfo.skills.backend.slice(0, 3).join(", ")}.
            </p>
            <p className="pb-4">
              {t.messages.lookingForPosition}
            </p>
            <p className="pb-4">
              {t.messages.motivators}
            </p>
            <p className="pb-4">
              {t.messages.goal}
            </p>
            <p className="pb-4">
              {t.messages.workTogether}
            </p>
          </div>
        </ContainerSlideIn>
      </motion.div>
      
      {/* Fade gradient en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default About;
