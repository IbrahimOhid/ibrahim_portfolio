import React from "react";
import { Link } from "react-router-dom";
import { SlArrowUp } from "react-icons/sl";
import Button from "../components/Button/Button";

const Footer = () => {
  const WhatsAppLink = "https://web.whatsapp.com/send?phone=8801834598910";

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-teal-400 mt-20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-8 place-items-center text-center">

        {/* Logo */}
        <div
          to="/"
          onClick={scrollTop}
          className="font-bold text-xl tracking-wider text-teal-300 hover:text-white transition"
        >
          IBRAHIM.
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
          High level experience in web design and development knowledge,
          producing quality work.
        </p>

        {/* CTA Button */}
        <Button link={WhatsAppLink} value={"Contact Us"} />

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-teal-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
            © {new Date().getFullYear()} Mohammad Ibrahim. Developed by{" "}
            <a
              href="https://www.facebook.com/iCoxtechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-300 hover:text-white underline"
            >
              iCox
            </a>
          </p>

          {/* Scroll Top */}
          <button
            onClick={scrollTop}
            className="flex items-center justify-center 
                       w-10 h-10 sm:w-11 sm:h-11 
                       rounded-full border border-teal-400
                       text-teal-300 hover:text-white
                       hover:border-white
                       transition"
          >
            <SlArrowUp className="text-lg sm:text-xl" />
          </button>

        </div>
      </div>

    </footer>
  );
};

export default Footer;