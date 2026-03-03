import React from "react";

const Title = ({value}) => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col gap-2  mb-8 md:mb-10 justify-center mx-auto items-center" >
      <h2 className="text-4xl text-white font-semibold">{value}</h2>
     
       <span className="block w-18 h-1 bg-teal-400 rounded"></span>
      <span className="block w-10 h-0.5 bg-teal-300 rounded -mt-1"></span>
     
    </div>
    </div>
  );
};

export default Title;
