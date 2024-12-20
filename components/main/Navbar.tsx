import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaGitlab, FaEnvelope } from "react-icons/fa"; // Import de l'icône d'enveloppe
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/UnigeLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Filipe Ramos
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Ajout des labels aux icônes sociales */}
        <div className="flex flex-row gap-5">
          <a
            href="mailto:filipe.ramos8@gmail.com"
            className="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lip1200"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
            aria-label="LinkedIn"
          >
            <RxLinkedinLogo size={24} />
          </a>
          <a
            href="https://github.com/Lip1200"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
            aria-label="GitHub"
          >
            <RxGithubLogo size={24} />
          </a>
          <a
            href="https://gitlab.unige.ch/Filipe.Ramos"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
            aria-label="GitLab"
          >
            <FaGitlab size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
