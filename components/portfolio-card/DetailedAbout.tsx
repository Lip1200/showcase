"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "./useTranslation";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

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

const DetailedAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[58%] h-[60%] text-black dark:text-neutral-200 absolute top-[25%] right-[5%] font-mono z-[100]">
      {/* Fade gradient en haut */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-neutral-900 to-transparent z-10 pointer-events-none"></div>
      
      {/* Contenu avec scroll */}
      <motion.div
        className="h-full overflow-y-auto overflow-x-hidden p-4 portfolio-scroll"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
        >
          <div className="space-y-6">
            {/* Expérience */}
            <section>
              <h3 className="text-black dark:text-white font-semibold mb-3">{t.labels.experience}</h3>
              {t.personalInfo.experience.map((exp: Experience) => (
                <div key={exp.title} className="mb-4">
                  <h4 className="font-medium text-black dark:text-white">{exp.title}</h4>
                  <p className="text-sm text-black dark:text-neutral-200">{exp.company} • {exp.period}</p>
                  <p className="text-sm text-black dark:text-neutral-200 mt-1">{exp.description}</p>
                </div>
              ))}
            </section>

            {/* Éducation */}
            <section>
              <h3 className="text-black dark:text-white font-semibold mb-3">{t.labels.education}</h3>
              {t.personalInfo.education.map((edu: Education) => (
                <div key={edu.degree} className="mb-3">
                  <h4 className="font-medium text-black dark:text-white">{edu.degree}</h4>
                  <p className="text-sm text-black dark:text-neutral-200">{edu.school} • {edu.year}</p>
                </div>
              ))}
            </section>

            {/* Compétences */}
            <section>
              <h3 className="text-black dark:text-white font-semibold mb-3">{t.labels.skills}</h3>
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-black dark:text-white">{t.labels.frontend}: </span>
                  <span className="text-sm text-black dark:text-neutral-200">{t.personalInfo.skills.frontend.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-black dark:text-white">{t.labels.backend}: </span>
                  <span className="text-sm text-black dark:text-neutral-200">{t.personalInfo.skills.backend.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-black dark:text-white">{t.labels.devops}: </span>
                  <span className="text-sm text-black dark:text-neutral-200">{t.personalInfo.skills.devops.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-black dark:text-white">{t.labels.ai}: </span>
                  <span className="text-sm text-black dark:text-neutral-200">{t.personalInfo.skills.ai.join(", ")}</span>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Fade gradient en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default DetailedAbout;
