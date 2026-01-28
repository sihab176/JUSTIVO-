import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Subscribesection = () => {
  return (
    <section className="max-w-[1620px] mx-auto">
      <div className="flex justify-center items-center bg-[#BE7D6026] py-18">
        <div className="relative">
          <input
            className=" border-primary  border-b w-[500px] h-[50px] px-4 shadow focus:outline-none"
            type="text"
            placeholder="Enter you email.."
          />
          <button className="absolute flex items-center text-primary border-b border-primary right-5 top-1/2 transform -translate-y-1/2 text-lg">
            Subscribe <span className="text-primary -rotate-22"><FaArrowRightLong /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribesection;
