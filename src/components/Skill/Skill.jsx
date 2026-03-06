import React from "react";
import { skillIcons } from "../../data/socialIcon";
import Title from "../Title/Title";

const Skill = () => {
  return (
    <div>
      <section className="relative py-16 overflow-hidden mx-auto" id="skills">
        <Title value={"Skills"} />

        <div>
          <div className="flex container flex-col md:flex-row items-center md:items-start gap-2 w-full justify-center">
            {/* Left Side  */}
            <div className="md:w-1/2  justify-center">
              <div
                className="grid 
                  grid-cols-4 
                  sm:grid-cols-4 
                  lg:grid-cols-5 
                  gap-4"
              >
                {skillIcons.map(({ id, skillIcon: SkillIcon, label }) => (
                  <div key={id} className="group flex justify-center">
                    <div
                      className="
            w-20 h-20
            sm:w-24 sm:h-24
            lg:w-28 lg:h-28
            bg-secondary
            rounded-xl
            border-2 border-dotted border-gray-500
            hover:border-teal-400
            shadow-md
            flex flex-col items-center justify-center
            transition-all duration-300
            
          "
                    >
                      {/* Icon */}
                      <SkillIcon
                        className="
              w-6 h-6
              sm:w-7 sm:h-7
              lg:w-8 lg:h-8
              text-white
              transition-transform duration-300
              group-hover:scale-110
            "
                      />

                      <p className="text-xs sm:text-sm mt-2 text-gray-200">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0 text-white">
              <div className=" p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
                {/* Vertical Text */}
                <div className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-14 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
                  <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto" />
                  <p>All Skills</p>
                </div>
                {/* Main Heading */}
                <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight">
                  Explore My Expertise &amp; Tech Stack
                </h2>
              </div>
              <p className="p-3  text-sm leading-relaxed">
                These are the tools and technologies that I use daily to develop
                web applications. With a strong foundation in frontend, I focus
                on delivering clean, maintainable code and intuitive user
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
