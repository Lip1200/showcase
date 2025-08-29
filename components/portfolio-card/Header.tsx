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
    <div className="w-64 h-80 text-content m-7 absolute top-0 left-0">
      <h1 className="font-light text-4xl pb-2" style={{ color: 'var(--color-primary)' }}>
        {t.personalInfo.name}
      </h1>
      <div 
        className="flex transition-opacity duration-300"
        style={{ opacity: titleOpacity, color: 'var(--color-content)' }}
      >
        <Typewriter text={t.personalInfo.title} delay={400} typeSpeed={70} />
      </div>
      
      <ul className="list-none cursor-pointer pt-8" style={{ color: 'var(--color-primary)' }}>
        <li className="pt-3 font-black">
          <button 
            onClick={(e) => handleNavigation('home', e)} 
            className={`no-underline hover:text-accent transition-colors bg-transparent border-none cursor-pointer font-black ${currentPage === 'home' ? 'text-accent' : ''}`}
            style={{ color: currentPage === 'home' ? 'var(--color-accent)' : 'var(--color-primary)' }}
          >
            {t.navigation.home}
          </button>
        </li>
        <li className="pt-3 font-black">
          <button 
            onClick={(e) => handleNavigation('projects', e)} 
            className={`no-underline hover:text-accent transition-colors bg-transparent border-none cursor-pointer font-black ${currentPage === 'projects' ? 'text-accent' : 'text-primary'}`}
          >
            {t.navigation.projects}
          </button>
        </li>
        <li className="pt-3 font-black">
          <button 
            onClick={(e) => handleNavigation('about', e)} 
            className={`no-underline hover:text-accent transition-colors bg-transparent border-none cursor-pointer font-black ${currentPage === 'about' ? 'text-accent' : 'text-primary'}`}
          >
            {t.navigation.about}
          </button>
        </li>
        <li className="pt-3 font-black">
          <button 
            onClick={(e) => handleNavigation('contact', e)} 
            className={`no-underline hover:text-accent transition-colors bg-transparent border-none cursor-pointer font-black ${currentPage === 'contact' ? 'text-accent' : 'text-primary'}`}
          >
            {t.navigation.contact}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
