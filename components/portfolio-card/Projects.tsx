"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "./useTranslation";
import Link from "next/link";

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

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-[58%] h-[60%] text-content absolute top-[25%] right-[5%] font-mono z-[100]">
      {/* Fade gradient en haut */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none"></div>
      
      {/* Contenu avec scroll */}
      <motion.div
        className="h-full overflow-y-auto overflow-x-hidden p-4 portfolio-scroll"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {t.projects.map((exp: any, i: number) => (
          <ContainerSlideIn
            key={exp.name}
            variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
          >
            <div className="text-content m-7">
              <h3 className="font-normal">• {exp.name}</h3>
              <p className="font-light text-sm">{exp.projects}</p>
              <p className="text-xs font-bold float-right mt-1.5">
                {exp.year}
              </p>
              <div className="mx-5 flex justify-end mt-5 clear-both gap-2.5">
                <Link 
                  href={exp.url} 
                  target="_blank" 
                  className="hover:opacity-70 transition-opacity"
                >
                  <div className="bg-primary rounded-full w-6 h-6 cursor-pointer flex items-center justify-center">
                    <span className="text-bg text-xs font-bold">G</span>
                  </div>
                </Link>
                <Link 
                  href={exp.web} 
                  target="_blank"
                  className="hover:opacity-70 transition-opacity"
                >
                  <div className="bg-primary rounded-full w-6 h-6 cursor-pointer flex items-center justify-center">
                    <span className="text-bg text-xs font-bold">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </ContainerSlideIn>
        ))}
      </motion.div>
      
      {/* Fade gradient en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Projects;
