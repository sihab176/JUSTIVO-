import React from "react";

const HeroLogo = () => {
  const text = "We will solve your problem today — ";
  return (
    <div className="flex items-center justify-center ">
      <div className="relative flex items-center justify-center w-[150px] h-[150px]">
        <div className="absolute w-6 h-6 bg-orange-100 rounded-full z-10 shadow-sm"></div>
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
            />
          </defs>
          <text className="text-[24px] font-serif fill-gray-800 tracking-widest">
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default HeroLogo;
