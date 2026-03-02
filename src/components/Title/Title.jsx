import React from "react";

const Title = ({value}) => {
  return (
    <div>
      {/* Title */}
      <div class="flex flex-col gap-2  mb-8 md:mb-10 justify-center mx-auto items-center" >
      <h2 class="text-4xl text-white font-semibold">{value}</h2>
      <span class="block w-16 h-[3px] bg-teal-400 rounded"></span>
      <span class="block w-8 h-[3px] bg-teal-300 rounded"></span>
    </div>
    </div>
  );
};

export default Title;
