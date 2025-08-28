"use client";

import React from "react";
import {
  motion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
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

interface ContainerSlideInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variants?: Variants;
}

export const ContainerSlideIn = ({
  children,
  variants,
  ...props
}: ContainerSlideInProps) => (
  <motion.div {...props} variants={variants} className="relative">
    {children}
  </motion.div>
);

interface Project {
  name: string;
  projects: string;
  year: string;
  url: string;
  web: string;
}

const Projects = () => {
  const { t } = useTranslation();
  
  // Function to determine platform type based on URL
  const getPlatformInfo = (url: string) => {
    if (url.includes('github.com')) {
      return {
        type: 'github',
        icon: (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )
      };
    } else if (url.includes('gitlab')) {
      return {
        type: 'gitlab',
        icon: (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
          </svg>
        )
      };
    } else {
      return {
        type: 'web',
        icon: (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        )
      };
    }
  };
  
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
        {t.projects.map((exp: Project, i: number) => (
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
              <div className="mx-5 flex justify-end mt-5 clear-both">
                <Link 
                  href={exp.url} 
                  target="_blank" 
                  className="hover:opacity-70 transition-opacity"
                  title={`View on ${getPlatformInfo(exp.url).type}`}
                >
                  <div className="bg-primary rounded-full w-6 h-6 cursor-pointer flex items-center justify-center text-bg">
                    {getPlatformInfo(exp.url).icon}
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
