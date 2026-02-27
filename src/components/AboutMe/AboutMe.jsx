import React from "react";
import MyImage from "/image/Ibrahim.jpg";
import FacebookSvg from "/utilsImage/facebook.svg";

const AboutMe = () => {
  return (
    <div>
      <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-white  text-lg text-justify">
              My name is Mohammad Ibrahim, I build performant web applications
              using React.js and the modern web stack. From my internship at
              Amir IT Ltd to my current projects, I’ve focused on mastering the
              art of responsive, data-driven interfaces.
            </p>
            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="#"
                data-tippy-content="@facebook_handle"
              >
                <img src={FacebookSvg} alt="Facebook" className="h-6" />

              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
