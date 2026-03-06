import React from "react";
import Title from "../Title/Title";
import { projectData } from "../../data/projectData";
import NewButton from "../Button/NewButton";
import { motion } from "motion/react";

const Project = () => {
  return (
    <motion.section
      id="projects"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      viewport={{ once: false }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <Title value={"Projects"} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => {
            const { id, image, title, description, projectLink } = project;
            return (
              <div
                key={id}
                className=" shadow-lg border border-teal-300  overflow-hidden rounded-md"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden ">
                  <img
                    src={image}
                    alt={title}
                    className="w-fit object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{title}</h3>

                  <p className="mt-2 text-white text-sm text-justify">
                    {description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-teal-400/40 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={projectLink}
                    className="mt-6 inline-flex items-center text-teal-400 hover:text-teal-300 transition"
                    target="_blank"
                  >
                    <NewButton value={"Live"} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
