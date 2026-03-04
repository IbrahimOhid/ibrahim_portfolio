import React from "react";
import Title from "../Title/Title";
import { projectData } from "../../data/projectData";

const Project = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Title */}
        <Title value={"Projects"} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projectData.map((project) => (
            <div
              key={project.id}
              className=" shadow-lg border border-teal-300
                         "
            >
              {/* Image */}
             <div className="h-48 overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-white text-sm leading-normal text-justify">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technology.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-teal-500/20 px-3 py-1 text-xs font-medium text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href="#"
                  className="mt-6 inline-flex items-center text-teal-400 hover:text-teal-300 transition"
                >
                  View case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;