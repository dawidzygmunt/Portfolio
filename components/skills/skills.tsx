import React from "react";

import { SkillContainer } from "./skillContainer";
import { SingleSkill } from "./singleSkill";

import { skills } from "@/data/constants";

export const Skills = () => {
  return (
    <div
      id="Skills"
      className="text-white mt-1 font-semibold container mx-auto p-4"
    >
      <span className="text-slate-100 text-5xl md:text-6xl items-center justify-center text-center block mb-3">
        Skills
      </span>
      <p className="text-center mb-4 sm:px-15 px-5 lg:px-72 text-slate-300 text-md md:text-lg">
        I am an full-stack developer with a passion for creating innovative
        solutions. My skills encompass a wide spectrum of domains, allowing me
        to work efficiently in both front-end and back-end areas.{" "}
      </p>
      <div className="flex flex-wrap items-center justify-center pt-5 px-22">
        {skills.map((skill) => (
          <SkillContainer key={skill.title} title={skill.title}>
            {skill.skills.map((item) => (
              <SingleSkill key={item.name} name={item.name} src={item.image} />
            ))}
          </SkillContainer>
        ))}
      </div>
    </div>
  );
};
