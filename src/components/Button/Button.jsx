import React from "react";

const Button = ({ value }) => {
  return (
    <div>
      <button className="relative text-[1rem] font-medium border border-2 border-teal-400 text-white px-6 py-2 inline cursor-pointer text-4xl font-bold before:bg-teal-500 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
        {value}
      </button>
    </div>
  );
};

export default Button;
