"use client";

import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import DetailedAbout from "./DetailedAbout";

export type Page = 'home' | 'projects' | 'about' | 'contact';

const PortfolioLayout = ({ initialPage = 'home' }: { initialPage?: Page }) => {
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <About key="about" />;
      case 'projects':
        return <Projects key="projects" />;
      case 'about':
        return <DetailedAbout key="detailed-about" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <About key="about" />;
    }
  };

  return (
    <Container>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div key={currentPage} className="w-full h-full">
        {renderPage()}
      </div>
    </Container>
  );
};

export default PortfolioLayout;
