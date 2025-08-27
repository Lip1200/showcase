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
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const staggerContainer = () => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
});

const ContainerSlideIn = motion.div;

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-[58%] h-[60%] text-content absolute top-[25%] right-[5%] font-mono z-[100]">
      {/* Fade gradient en haut */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="h-full overflow-y-auto portfolio-scroll px-4 pt-8 pb-8"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <ContainerSlideIn variants={fadeIn("left", "tween", 1.4, 1)}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2 text-primary">{t.labels.email}</h3>
              <p>
                <a 
                  href={`mailto:${t.personalInfo.email}`}
                  className="text-accent hover:text-primary transition-colors underline"
                >
                  {t.personalInfo.email}
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2 text-primary">{t.labels.github}</h3>
              <p>
                <a 
                  href={t.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors underline"
                >
                  {t.personalInfo.github}
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2 text-primary">{t.labels.linkedin}</h3>
              <p>
                <a 
                  href={t.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors underline"
                >
                  {t.personalInfo.linkedin}
                </a>
              </p>
            </div>
          </div>
        </ContainerSlideIn>
      </motion.div>
      
      {/* Fade gradient en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Contact;
