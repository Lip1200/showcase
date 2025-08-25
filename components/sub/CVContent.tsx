"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/utils/motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const CVContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-10 mt-40 w-full z-[20]"
    >
      <div
        id="cv"
        className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
      >
        {/* Titre du CV */}
        <motion.div
          variants={slideInFromTop}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          className="py-[8px] px-[7px] opacity-[0.9] w-full"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Curriculum Vitae
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.p
          variants={slideInFromLeft(0.5)}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          className="text-xl mb-4 text-gray-700 w-full"
        >
          Below is a summary of my professional journey, highlighting my diverse
          experiences and skills.
        </motion.p>

        {/* Contenu du CV */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full p-8 bg-gray-100 rounded-lg shadow-lg"
        >
          {/* Expérience professionnelle */}
          <section className="mb-6 w-full">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-700 w-full">
              Having worked for over a decade as a specialized educator, I have
              honed critical interpersonal and management skills. My career
              transition into IT allowed me to find the intellectual stimulation
              I was seeking, and I am currently advancing my expertise as an AI
              Engineer.
            </p>
            <ul className="list-disc pl-5 text-lg mt-4 text-gray-700 w-full">
              <li>AI Engineer in training, IBM Badge Program (Current)</li>
              <li>IT Specialist, UNIGE (2022 - 2025)</li>
              <li>Specialized Educator, various institutions (2010 - 2022)</li>
            </ul>
          </section>

          {/* Éducation */}
          <section className="mb-6 w-full">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              Education
            </h2>
            <p className="text-lg text-gray-700 w-full">
              Bachelor&apos;s Degree in Information Systems and Service Science
              (Expected 2025)
            </p>
            <p className="text-lg text-gray-700 w-full">
              Bachelor of Arts in Social Work, specialization in Special
              Education (2017)
            </p>
          </section>

          {/* Compétences */}
          <section className="mb-6 w-full">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Skills</h2>
            <p className="text-lg text-gray-700 w-full">
              <strong>Technical Skills:</strong> C, C++, Java, Scala, Python,
              Flask, TailwindCSS, Next.js, ChromaDB, Scikit-learn, Docker,
              SQLAlchemy, ...
            </p>
            <p className="text-lg text-gray-700 mt-2 w-full">
              <strong>Interpersonal Skills:</strong> I am a facilitator of team
              cohesion, conflict resolution, active listening, adaptability,
              mentorship.
            </p>
          </section>

          {/* À propos de moi */}
          <section className="mb-6 w-full">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">About Me</h2>
            <p className="text-lg text-gray-700 w-full">
              My transition from specialized education to IT has been a
              transformative journey. In addition to my work, I am a passionate
              boxer and have recently become a father, both of which contribute
              to my determination and discipline.
            </p>
          </section>

          {/* Bouton de téléchargement du CV */}
          <motion.div
            variants={slideInFromLeft(1)}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto"
          >
            <Link
              href="/cv.pdf"
              download
              className="text-white flex items-center justify-center gap-2"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              My CV
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CVContent;
