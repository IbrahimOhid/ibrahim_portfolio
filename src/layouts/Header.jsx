
import Button from "../components/Button/Button";
import { aboutData, titleData } from "../data/HeroSectionData";
import Navbar from "./Navbar";
import MyImage from "/image/ibrahim.png";
import {motion} from 'motion/react'

const Header = () => {
  return (
    <div>
      <div className="">
        <Navbar />
        {/*  */}
        <div className="mx-auto pb-20 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-12 items-center text-white">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-semibold leading-tight">
                Hi, I’m <span className="text-teal-300">Mohammad Ibrahim</span>
              </h1>

              <p className="text-base sm:text-lg max-w-xl">
                A passionate Front-End Web Developer dedicated to creating
                user-friendly digital experiences.
              </p>

              {/* Buttons */}
              <Button value={"Hire Me"} />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {aboutData.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <h4 className="text-2xl sm:text-3xl font-bold">
                      {item.value}
                    </h4>
                    <p className="text-xs sm:text-sm text-teal-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative  lg:flex justify-center"
            >
              <div className="relative max-w-md w-full rounded-xl p-1 bg-teal-400">
                <motion.img
                  src={MyImage}
                  alt="Portfolio"
                  className="w-full h-auto object-cover rounded-lg"
                  initial={{
                    rotate: 6
                  }}
                  whileHover={{
                    rotate: 0,
                    transition:{
                        duration: 0.3,
                    }
                  }}
                />

                {/* ICON BADGES */}
                {titleData.map((item, i) => (
                  <div
                    key={i}
                    className={`absolute ${item.pos} bg-gradient-to-b from-teal-900 to-gray-900 px-3 py-1 rounded-lg shadow-lg animate-bounce  hidden lg:block`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {item.icon && (
                          <item.icon className="text-xl sm:text-2xl lg:text-3xl text-white" />
                        )}
                      </div>
                      <p className="text-sm font-semibold whitespace-nowrap">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
