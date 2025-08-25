import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaGitlab } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-gray-50 text-gray-600 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* Section About */}
        <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
          <div className="font-bold text-[16px]">About</div>

          {/* Icônes alignées horizontalement */}
          <div className="flex flex-row items-center justify-center space-x-6 my-[15px]">
            <a
              href="https://www.linkedin.com/in/lip1200"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
            >
              <div className="flex flex-row items-center">
                <RxLinkedinLogo size={30} />
                <span className="ml-[6px]">LinkedIn</span>
              </div>
            </a>
            <a
              href="https://github.com/Lip1200"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
            >
              <div className="flex flex-row items-center">
                <RxGithubLogo size={30} />
                <span className="ml-[6px]">GitHub</span>
              </div>
            </a>
            <a
              href="https://gitlab.unige.ch/Filipe.Ramos"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
            >
              <div className="flex flex-row items-center">
                <FaGitlab size={30} />
                <span className="ml-[6px]">GitLab</span>
              </div>
            </a>
          </div>

          {/* Lien Contact */}
          <p className="my-[15px]">
            <a
              href="mailto:***REMOVED***"
              className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
            >
              Contact
            </a>
          </p>
        </div>

        {/* Footer Text */}
        <div className="mb-[20px] text-[15px] text-center">
          Filipe Ramos 2024 MIT
        </div>
      </div>
    </div>
  );
};

export default Footer;
