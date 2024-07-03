"use client";

import React from "react";

import NavLink from "../Navbar/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const Navlinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Skills",
      path: "#Skills",
    },
    {
      title: "Experience",
      path: "#Experience",
    },
    {
      title: "Projects",
      path: "#Projects",
    },
    {
      title: "Contact",
      path: "#Contact",
    },
  ];

  return (
    <footer className="flex flex-col items-center text-white sm:container mx-auto p-4">
      <h1 className="text-[#af6c45] text-2xl logo-font font-normal">
        Dawid Zygmunt
      </h1>
      <div className="flex mt-4" id="Contact">
        <TooltipProvider delayDuration={400}>
          <Tooltip>
            <TooltipTrigger>
              <a href="mailto:dawid.zygmunt86@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-[25px] h-[25px] hover:text-red-300 transition-all duration-75 mx-4"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>dawid.zygmunt86@gmail.com</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={400}>
          <Tooltip>
            <TooltipTrigger>
              <a href="tel:696-633-888">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-[25px] h-[25px] hover:text-red-300 transition-all duration-75 mx-4"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>+48 696 633 888</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <button onClick={() => handleClick("https://github.com/dawidzygmunt")}>
          <FontAwesomeIcon
            icon={faGithub}
            className="w-[25px] h-[25px] hover:text-red-300 transition-all duration-75 mx-4"
          />
        </button>
        <button
          onClick={() => handleClick("https://www.linkedin.com/in/dz-dev/")}
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="w-[25px] h-[25px] hover:text-red-300 transition-all duration-75 mx-4"
          />
        </button>
      </div>
      <div>
        <ul className="flex mt-4 text-white flex-col sm:flex-row">
          {Navlinks.map((link, index) => (
            <li key={index}>
              <NavLink
                href={link.path}
                title={link.title}
                style="hover:text-gray-300 font-light sm:text-md"
              />
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-white text-xxs">
        © 2024 Dawid Zygmunt. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
