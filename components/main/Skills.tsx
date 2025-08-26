import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const skillCategories = [
    Skill_data,
    Frontend_skill,
    Backend_skill,
    Full_stack,
    Other_skill,
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-10 scale-90 md:scale-100"
    >
      <SkillText />

      {skillCategories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
        >
          {category.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              alt={image.alt || image.Image}
              index={index}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
