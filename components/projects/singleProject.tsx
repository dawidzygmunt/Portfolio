"use client";
import React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Modal } from "../modals/Modal";
import { SingleTech } from "./singleTech";

interface SingleProjectProps {
  src: string;
  techstack: string[];
  title: string;
  date: string;
  description: string;
  webapp: string;
}

export const SingleProject: React.FC<SingleProjectProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const additionalclass = isModalOpen
    ? ""
    : "hover:bg-[#2b2b3f] hover:-translate-y-5 ";

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Usuń styl overflow, gdy komponent zostanie odmontowany
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="text-white">
      {isModalOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <Modal
            src={props.src}
            title={props.title}
            date={props.date}
            techstack={props.techstack}
            description={props.description}
            isOpen={isModalOpen}
            webapp={props.webapp}
            onClose={() => setIsModalOpen(false)}
          />,
          document.body
        )}

      <div
        className={`bg-[#232333] min-w-[220px] max-w-[600px] lg:w-[350px] lg:h-[380px] p-3 rounded-xl text-white sm:m-5 my-5 transition-all duration-500 btn-modal ${additionalclass}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex justify-center">
          <img src={props.src} alt="project image" />
        </div>
        <div className="flex flex-wrap my-2">
          {props.techstack.map((tech, index) => (
            <SingleTech key={index} name={tech} />
          ))}
        </div>
        <p className="text-left text-xl font-semibold">{props.title}</p>
        <p className="text-left text-xxs text-slate-400">{props.date}</p>
        <p className="text-left text-xs font-light text-slate-200 line-clamp-4">
          {props.description}
        </p>
      </div>
    </div>
  );
};
