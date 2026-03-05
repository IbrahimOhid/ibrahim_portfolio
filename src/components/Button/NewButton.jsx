
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";



const NewButton = ({value}) => {

    return (
        <button
            className="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  border border-teal-300 group cursor-pointer">
                  <span
                      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        
                        <MdOutlineKeyboardDoubleArrowRight className="w-5 h-5 text-white"/> 
                  </span>

                  <span
                      className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <MdOutlineKeyboardDoubleArrowRight className="w-5 h-5 text-teal-400"/> 
                  </span>

                  <span
                      className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">{value}</span>
        </button>
    );
};

export default NewButton;
              