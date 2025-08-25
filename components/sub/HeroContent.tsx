"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"; // Import des icônes
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
        >
          <SparklesIcon className="text-primary mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">IT Specialist &nbsp;</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto"
        >
          <span>
            Shaping tomorrow&apos;s
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              tech{" "}
            </span>
            today
          </span>
        </motion.div>



        <div className="flex gap-4 mt-5">
          <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            <Link
              href="#cv"
              className="text-white flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>

          <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            <Link
              href="/cv.pdf"
              download
              className="text-white flex items-center gap-2"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              My CV
            </Link>
          </div>
        </div>
      </div>

      {/* QR Code */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative w-[50%] max-w-[300px] h-[300px]">
          <Image
            src="/QrCode.svg"
            alt="work icons"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
