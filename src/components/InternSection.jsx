import React from "react";

const InternSection = () => {
  return (
    <section className="max-w-[1620px] mx-auto">
      <div className="relative  w-full   overflow-hidden min-h-[600px] flex items-center justify-center gap-20">
        {/* Top Right Image */}
        <div className="absolute   -top-10 right-[11%] w-48 h-64 hidden md:block">
          <img
            src="/topImage.png"
            alt="Professional"
            className=" h-[190px] w-[244px] object-cover shadow-sm"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="absolute  bottom-28 left-[12%] w-56 h-48 hidden md:block">
          <img
            src="/leftImage.png"
            alt="Intern working"
            className="w-[191px] h-[191px] object-cover shadow-sm"
          />
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-12 right-[10%] w-52 h-64 hidden md:block">
          <img
            src="/rightImage.jpg"
            alt="Young professional"
            className="w-[191px] h-[191px] object-cover shadow-sm"
          />
        </div>

        {/* Main Content  */}
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
            become our intern
          </h2>

          <p className="text-gray-500 text-[16px] md:text-base leading-relaxed mb-10 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br className="hidden md:block" />
            Eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button className="inline-flex items-center gap-3 bg-[#BC8167] text-white px-[24px] py-4 text-[20px] font-medium hover:bg-[#a66f56] transition-all group">
            Free Consultation
            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternSection;
