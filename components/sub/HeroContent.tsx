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
        <div className="flex flex-col gap-4 mt-6 max-w-[600px] w-auto">
          <h1 className="text-5xl font-bold text-gray-900">
            Shaping tomorrow&apos;s tech today
          </h1>
          <p className="text-gray-600">
            Final-year IT student passionate about innovative projects.
          </p>
        </div>


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
