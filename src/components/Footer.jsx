import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#051925] max-w-[1620px] mx-auto text-white pt-24 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Background Watermark (Lady Justice Illustration) */}
      <div className="absolute left-[25%] top-1/2 -translate-y-1/2  pointer-events-none">
        <img
          src="/Vector.png"
          alt="Justice Watermark"
          className="w-[400px] h-[400px] opacity-20
               filter sepia hue-rotate-200 saturate-400 mt-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className=" flex justify-between  mb-20">
          {/* Section 1: Branding & Socials */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-4xl  leading-tight">
              Together, we build smarter <br /> legal outcomes
            </h2>
            <div className="flex gap-6 text-sm text-gray-400">
              {["Linkedin", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  {social} <FaArrowRight size={12} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-28">
            {/* Section 2: Contact Info */}
            <div className="flex flex-col md:flex-row lg:flex-col gap-12 lg:pl-10">
              <div className="space-y-2">
                <p className="text-gray-300 text-xl">contact@emailcom</p>
                <p className="text-gray-300 text-xl">consultancy@emailcom</p>
              </div>
              <div className="space-y-1">
                <a
                  href="#"
                  className="text-gray-400 text-sm flex items-center gap-1 hover:text-white transition-colors"
                >
                  Google Maps <FaArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Section 3: Address & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
              <div className="text-gray-400 text-sm leading-relaxed">
                612-7 Roanoke Rd,
                <br />
                Toronto, ON M3A 1E3,
                <br />
                Canada
              </div>
              <div className="space-y-2 text-xl font-light">
                <p>+1-416-8241228</p>
                <p>+1-416-8241228</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            2025thememarch All right reserved
          </p>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs text-gray-400 uppercase tracking-widest">
            {[
              "Home",
              "About Us",
              "Practice Areas",
              "Our Team",
              "Case Studies",
              "Blog",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
