import { motion } from "motion/react";
import AboutImage from "/image/about_image.jpg";
import { socialIcons } from "../../data/socialIcon";
import Title from "../Title/Title";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="relative py-16 overflow-hidden  mx-auto "
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      viewport={{ once: false }}
    >
      <Title value={"About Me"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={AboutImage}
            alt="Mohammad Ibrahim"
            className="w-full  rounded-2xl object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
            I build performant web applications using React.js and modern
            technologies. Focused on clean UI, scalability, and smooth UX.
          </p>

          {/* Social Buttons */}
          <div className="mt-8 sm:mt-10 flex justify-center md:justify-start gap-4 sm:gap-5">
            {socialIcons.map(({ id, icon: Icon, link }) => (
              <a
                key={id}
                href={`${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative 
                             w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                             flex items-center justify-center
                             rounded-xl sm:rounded-2xl
                             backdrop-blur-lg
                             border border-teal-300
                             shadow-md
                             transition-all duration-300
                             group"
              >
                {/* Gradient Glow */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 transition duration-500 
                                   bg-gradient-to-tr from-teal-400 via-teal-500 to-teal-500 
                                   blur-xl"
                ></span>

                {/* Icon Auto Balance */}
                <Icon
                  className="relative z-10 
                               w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7
                               text-white transition-transform duration-300 
                               group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
