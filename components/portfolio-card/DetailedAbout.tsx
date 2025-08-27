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

const DetailedAbout = () => {
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
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
        >
          <div className="space-y-6">
            {/* Expérience */}
            <section>
              <h3 className="text-primary font-semibold mb-3">{t.labels.experience}</h3>
              {t.personalInfo.experience.map((exp: any) => (
                <div key={exp.title} className="mb-4">
                  <h4 className="font-medium text-primary">{exp.title}</h4>
                  <p className="text-sm text-content">{exp.company} • {exp.period}</p>
                  <p className="text-sm text-content mt-1">{exp.description}</p>
                </div>
              ))}
            </section>

            {/* Éducation */}
            <section>
              <h3 className="text-primary font-semibold mb-3">{t.labels.education}</h3>
              {t.personalInfo.education.map((edu: any) => (
                <div key={edu.degree} className="mb-3">
                  <h4 className="font-medium text-primary">{edu.degree}</h4>
                  <p className="text-sm text-content">{edu.school} • {edu.year}</p>
                </div>
              ))}
            </section>

            {/* Compétences */}
            <section>
              <h3 className="text-primary font-semibold mb-3">{t.labels.skills}</h3>
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-primary">{t.labels.frontend}: </span>
                  <span className="text-sm text-content">{t.personalInfo.skills.frontend.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">{t.labels.backend}: </span>
                  <span className="text-sm text-content">{t.personalInfo.skills.backend.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">{t.labels.devops}: </span>
                  <span className="text-sm text-content">{t.personalInfo.skills.devops.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">{t.labels.ai}: </span>
                  <span className="text-sm text-content">{t.personalInfo.skills.ai.join(", ")}</span>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Fade gradient en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default DetailedAbout;
