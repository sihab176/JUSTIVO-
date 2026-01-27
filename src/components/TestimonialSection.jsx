"use client";
import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";

const TestimonialSection = () => {
  // স্লাইডার বা ট্যাব কন্ট্রোল করার জন্য স্টেট
  const [activeTab, setActiveTab] = useState("James Walker");

  const testimonials = [
    {
      name: "James Walker",
      location: "From USA",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
    },
    {
      name: "James Walker",
      location: "From USA",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
    },
  ];

  const current =
    testimonials.find((t) => t.name === activeTab) || testimonials[1];

  return (
    <section className="max-w-[1620px] mx-auto">
      <div className="relative w-full bg-[#051925] py-24 px-6 overflow-hidden text-center">
        {/* Quotation  */}
        <div className="absolute bottom-10 right-28 ">
          <img src="/quote 1.png" alt="Quotation" className="w-[200px] h-[200px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => (
              <IoStarSharp key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>

          <p className="text-gray-300 text-lg md:text-xl  leading-relaxed font-light mb-12">
            {current.text}
          </p>

          <div className="flex flex-col items-center mb-16">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-14 h-14 rounded-full border-2 border-gray-600 mb-4 object-cover"
            />
            <h4 className="text-white text-lg font-medium">{current.name}</h4>
            <p className="text-gray-500 text-sm uppercase tracking-widest">
              {current.location}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10  pt-3 mb-10">
            {[
              "Mostahid Patwary",
              "Grace Morgan",
              "Benjamin Scott",
              "James Walker",
              "Emma Wallace",
            ].map((name) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`text-sm tracking-wide transition-all duration-300 pb-2 border-b-2 ${
                  activeTab === name
                    ? "text-white border-white font-semibold"
                    : "text-gray-500 border-transparent hover:text-gray-300"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white text-sm border-b border-gray-500 pb-1 hover:border-white transition-all group"
          >
            Check out our google review
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
