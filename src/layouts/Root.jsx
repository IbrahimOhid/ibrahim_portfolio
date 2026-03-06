import React from "react";
import Header from "./Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skill from "../components/Skill/Skill";
import Experience from "../components/Experience/Experience";
import Project from "../components/Project/Project";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="font-Inter bg-gradient-to-b from-teal-900 to-gray-900 px-4 sm:px-4">
      <Header />
      <AboutMe />
      <Experience />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
};

export default Root;
