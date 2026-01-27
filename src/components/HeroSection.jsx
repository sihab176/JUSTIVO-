import React from "react";
import HeroLogo from "./HeroLogo";

const HeroSection = () => {
  const text = "We will solve your problem today — ";
  const links = ["DRIBBLE", "BEHANCE", "GITHUB", "LINKEDIN", "FACEBOOK"];
  return (
    <section>
      <div className="flex items-center gap-[295px] max-w-7xl  mx-auto">
        <h1 className="text-[100px] ">
          Justice. Advocacy. <br />{" "}
          <span className="text-primary ">Results.</span>
        </h1>
        <HeroLogo />
      </div>
     
      <section className=" flex max-w-[1620px] mx-auto">
        <div className=" flex flex-col-reverse justify-around items-center  py-10 w-22 border-r border-gray-100 ">
          {links.map((link, index) => (
            <span
              key={index}
              className={`text-xs font-bold tracking-[0.2em] transition-colors cursor-pointer
          [writing-mode:vertical-lr] rotate-180 
          ${link === "DRIBBLE" ? "text-orange-400" : "text-gray-400 hover:text-black"}
        `}
            >
              {link}
            </span>
          ))}
        </div>

        {/* ✅ col-span এখানে */}
        <div className=" ">
          <img
            className="w-[1620px] h-[600px] object-cover"
            src="/e5d0b2b7575c811e2b9e88c9f72b409184f07f9a.jpg"
            alt=""
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
