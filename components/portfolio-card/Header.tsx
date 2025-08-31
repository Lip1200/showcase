"use client";

import React, { useEffect, useState } from "react";
import Typewriter from "./Typewriter";
import { useTranslation } from "./useTranslation";
import { Page } from "./PortfolioLayout";

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcul de l'opacité basé sur le scroll (fade quand on scroll vers le haut)
  const titleOpacity = Math.max(0, 1 - scrollY / 100);

  const handleNavigation = (page: Page, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="w-64 h-80 text-black dark:text-neutral-200 m-7 absolute top-0 left-0">
      <h1 className="font-light text-4xl pb-2 text-black dark:text-white">
        {t.personalInfo.name}
      </h1>
      <div 
        className="flex transition-opacity duration-300 text-neutral-700 dark:text-neutral-300"
        style={{ opacity: titleOpacity }}
      >
        <Typewriter text={t.personalInfo.title} delay={400} typeSpeed={70} />
      </div>
      
      <ul className="list-none cursor-pointer pt-8">
        <li className="pt-3 font-black">
          <button 
            onClick={(e) => handleNavigation('home', e)} 
            className={`no-underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors bg-transparent border-none cursor-pointer font-black ${
              currentPage === 'home' 
                ? 'text-neutral-700 dark:text-neutral-300' 
                : 'text-black dark:text-white'
            }`}
          >
            {t.navigation.home}
          </button>
        </li>
        <li className="pt-3 font-black">
          <button 
            onClick={(e) => handleNavigation('projects', e)} 
            className={`no-underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors bg-transparent border-none cursor-pointer font-black ${
              currentPage === 'projects' 
                ? 'text-neutral-700 dark:text-neutral-300' 
                : 'text-black dark:text-white'
            }`}
          >
            {t.navigation.projects}
          </button>
        </li>
        <li className="pt-3 font-black">
          <button 
            onClick={(e) => handleNavigation('about', e)} 
            className={`no-underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors bg-transparent border-none cursor-pointer font-black ${
              currentPage === 'about' 
                ? 'text-neutral-700 dark:text-neutral-300' 
                : 'text-black dark:text-white'
            }`}
          >
            {t.navigation.about}
          </button>
        </li>
        <li className="pt-3 font-black">
          <button 
            onClick={(e) => handleNavigation('contact', e)} 
            className={`no-underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors bg-transparent border-none cursor-pointer font-black ${
              currentPage === 'contact' 
                ? 'text-neutral-700 dark:text-neutral-300' 
                : 'text-black dark:text-white'
            }`}
          >
            {t.navigation.contact}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
