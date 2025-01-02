import React from "react";
import About from "./about";
import MyResume from "./MyResume";
import Overview from "./overview";
import MySkills from "./mySkills";

const AboutMe = () => {
  return (
    <div className="bg-[#292929]">
      <About />
      <MyResume />
      <Overview />
      <MySkills />
    </div>
  );
};

export default AboutMe;
