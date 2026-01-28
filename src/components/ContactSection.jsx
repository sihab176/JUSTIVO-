import React from "react";
import { FaArrowRight, FaMailchimp, FaMap, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ContactSection = () => {
  return (
    <section className="max-w-[1620px] mx-auto  pb-20 ">
      <section className="  ">
        <div className="grid grid-cols-15  right-0 lg:flex-row items-center gap-16 lg:gap-24 ">
          {/* Left Side: Contact Information */}
          <div className=" col-span-4 space-y-10 ml-20 ">
            {/* Location */}
            <div className="flex items-start gap-5 ">
              <div className="bg-[#C18C72] p-3 text-white">
                <IoLocationOutline size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-gray-900 font-medium">Location:</p>
                <address className="not-italic text-[#C18C72] text-sm leading-relaxed underline decoration-1 underline-offset-4">
                  612-7 Roanoke Rd, <br />
                  Toronto, ON M3A 1E3, <br />
                  Canada
                </address>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[10px] text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors"
                >
                  Google Maps <FaArrowRight size={10} className="-rotate-45" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5  ">
              <div className="bg-[#C18C72] p-3 text-white">
                <MdOutlineEmail size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-gray-900 font-medium">Email:</p>
                <p className="text-gray-700 text-lg">contact@emailcom</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="bg-[#C18C72] p-3 text-white">
                <FaPhone size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-gray-900 font-medium">Phone:</p>
                <p className="text-gray-700 text-lg">+1-416-8241228</p>
                <p className="text-gray-700 text-lg">+1-416-8241228</p>
              </div>
            </div>

            {/* Read More Button */}
            <div className="pt-4">
              <button className="border border-gray-200 px-8 py-3 text-sm text-[#C18C72] flex items-center gap-2 hover:bg-gray-50 transition-all group">
                Read More{" "}
                <FaArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form Area */}
          <div className="col-span-11 relative bg-[#F8F1ED] p-10 md:p-16">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-[#C18C72]"></div>

            <h2 className="text-4xl md:text-5xl text-gray-800 mb-12 leading-tight max-w-xl ">
              Fill out the form we will get in touch shortly
            </h2>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First name..."
                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C18C72] transition-colors placeholder:text-gray-400 text-sm"
                  />
                </div>
                {/* Last Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last name..."
                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C18C72] transition-colors placeholder:text-gray-400 text-sm"
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email..."
                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C18C72] transition-colors placeholder:text-gray-400 text-sm"
                  />
                </div>
                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone..."
                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C18C72] transition-colors placeholder:text-gray-400 text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Subject..."
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C18C72] transition-colors placeholder:text-gray-400 text-sm"
                />
              </div>

              {/* Message/First Name repeated as per image */}
              <div className="relative">
                <textarea
                  placeholder="First name..."
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C18C72] transition-colors placeholder:text-gray-400 text-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="bg-black text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
