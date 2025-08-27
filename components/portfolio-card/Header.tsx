"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Typewriter from "./Typewriter";
import { useTranslation } from "./useTranslation";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcul de l'opacité basé sur le scroll (fade quand on scroll vers le haut)
  const titleOpacity = Math.max(0, 1 - scrollY / 100);

  return (
    <div className="w-64 h-80 text-content m-7 absolute top-0 left-0">
      <h1 className="font-light text-4xl pb-2 text-primary">
        {t.personalInfo.name}
      </h1>
      <div 
        className="flex text-content transition-opacity duration-300"
        style={{ opacity: titleOpacity }}
      >
        <Typewriter text={t.personalInfo.title} delay={400} typeSpeed={70} />
      </div>
      
      <ul className="list-none cursor-pointer pt-8 text-primary">
        <li className="pt-3 font-black">
          <Link href="/portfolio-card" className="no-underline text-primary hover:text-accent transition-colors">
            {t.navigation.home}
          </Link>
        </li>
        <li className="pt-3 font-black">
          <Link href="/portfolio-card/projects" className="no-underline text-primary hover:text-accent transition-colors">
            {t.navigation.projects}
          </Link>
        </li>
        <li className="pt-3 font-black">
          <Link href="/portfolio-card/about" className="no-underline text-primary hover:text-accent transition-colors">
            {t.navigation.about}
          </Link>
        </li>
        <li className="pt-3 font-black">
          <Link href="/portfolio-card/contact" className="no-underline text-primary hover:text-accent transition-colors">
            {t.navigation.contact}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
