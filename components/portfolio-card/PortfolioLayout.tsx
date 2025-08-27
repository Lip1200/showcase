"use client";

import React from "react";
import Container from "./Container";
import Header from "./Header";
import { usePathname } from "next/navigation";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import DetailedAbout from "./DetailedAbout";

const PortfolioLayout = () => {
  const pathname = usePathname();

  return (
    <Container>
      <Header />
      <div key={pathname} className="w-full h-full">
        {pathname === "/portfolio-card" && <About key="about" />}
        {pathname === "/portfolio-card/projects" && <Projects key="projects" />}
        {pathname === "/portfolio-card/about" && <DetailedAbout key="detailed-about" />}
        {pathname === "/portfolio-card/contact" && <Contact key="contact" />}
      </div>
    </Container>
  );
};

export default PortfolioLayout;
