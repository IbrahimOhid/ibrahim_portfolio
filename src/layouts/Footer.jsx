import React from "react";
import { Link } from "react-router-dom";
import { SlArrowUp } from "react-icons/sl";
import Button from "../components/Button/Button";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-teal-300 mt-20">
      <div className="w-full flex items-center justify-center pt-10 flex-col gap-5 pb-24 px-4">
        <Link
          to="/"
          className="font-bold text-2xl tracking-wider text-teal-300"
        >
          IBRAHIM.
        </Link>

        <p className="text-sm text-gray-400 text-center max-w-xl">
          High level experience in web design and development knowledge,
          producing quality work.
        </p>

        <Button value={"Contact Us"} />
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-3 left-0 right-0 px-4 flex items-center justify-between">
        <p className="text-sm text-white">
          Copyright © {new Date().getFullYear()} by Mohammad Ibrahim | Developed
          By <a href="https://www.facebook.com/iCoxtechnologies" className="font-bold underline" target="_blank"><span>i</span>
          <span>Cox</span></a>
        </p>

        <SlArrowUp
          onClick={scrollTop}
          className="p-2 rounded-full border border-teal-400 hover:border-white cursor-pointer text-2xl  text-teal-300 hover:text-white  transition"
        />
      </div>
    </footer>
  );
};

export default Footer;
