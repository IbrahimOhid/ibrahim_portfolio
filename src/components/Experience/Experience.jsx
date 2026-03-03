import React from "react";
import Title from "../Title/Title";
import { experienceData } from "../../data/experience";

const Experience = () => {
  return (
    <div>
      <Title value={"Experience"} />
      <div className=" flex justify-center items-center">
        
          <div>
            <div className="flex justify-center items-center">
              <div className="w-full md:w-8/12 mx-auto">
                {experienceData.map((eData) => (
                  <div
                    key={eData.id}
                    className="bg-gray-900 
                   rounded-xl 
                   shadow-md shadow-gray-800
                   transition-all duration-500
                   mb-6 p-4 md:p-6"
                  >
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      {/* Left */}
                      <div className="flex items-center gap-4">
                        <img
                          className="w-14 h-14 hidden md:block rounded-full 
                         ring-2 ring-green-500 
                         shadow-lg shadow-green-500/40"
                          src={eData.logo}
                          alt={eData.companyName}
                        />

                        <div>
                          <h4 className="text-xl md:text-2xl font-semibold uppercase text-white">
                            {eData.companyName}
                          </h4>
                          <p className="text-sm md:text-base text-gray-300">
                            {eData.designation}
                          </p>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="text-sm md:text-base text-gray-300 text-left md:text-right">
                        <p>{eData.duration}</p>
                        <p>{eData.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mt-4">
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                        {eData.jobDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Experience;
