"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  index: number;
}

const SkillDataProvider = ({ src, width, height, alt, index }: Props) => {
  const { ref: setRef, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={setRef}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex justify-center items-center"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="object-contain transition-opacity hover:opacity-80"
      />
    </motion.div>
  );
};

export default SkillDataProvider;
