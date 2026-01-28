
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const AchievementsAwards = () => {
    const achive=[
        {
          count: "54+",
          unit: "/Years",
          label: "of legal excellence",
          img: "/achiv4.png",
          title: "Best law firm of the year",
          desc:
            "Awarded for outstanding legal service and client satisfaction across all practice areas.",
          borderBottom: false,
        },
        {
          count: "5500+",
          unit: "/Cases",
          label: "successfully resolved",
          img: "/achiv3.png",
          title: "Top litigation firm – national legal excellence awards",
          desc:
            "Recognized for exceptional courtroom performance and high-profile case victories.",
          borderBottom: false,
        },
        {
          count: "850K+",
          unit: "/Areas",
          label: "handled across jurisdictions",
          img: "/achiv2.jpg",
          title: "Best client choice award for legal services",
          desc:
            "Honored for consistent client satisfaction, trust, and long-term relationships.",
          borderBottom: false,
        },
        {
          count: "10K+",
          unit: "/Hours",
          label: "of courtroom representation",
          img: "/Team1.jpg",
          title: "Client choice award for legal services",
          desc:
            "Honored for consistent client satisfaction, trust, and long-term relationships.",
          borderBottom: true,
        },
      ]
  return (
    <section className="max-w-7xl mx-auto  pb-20 ">


      {achive.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 "
        >
          {/* LEFT COUNTER */}
          <div className="w-full md:w-1/4">
            <h1 className="text-6xl flex items-center text-gray-900 leading-none">
              {item.count}
              <span className="text-sm font-light ml-2 mt-2">
                {item.unit}
              </span>
            </h1>
            <p className="text-sm tracking-widest mt-2">
              {item.label}
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex-shrink-0">
            <img
              src={item.img}
              alt="achievement"
              className="w-32 h-32 object-cover rounded-[40px_4px_40px_4px]"
            />
          </div>

          {/* CONTENT GRID */}
          <div
            className={`w-full border-t ${
              item.borderBottom ? "border-b" : ""
            } border-primary/40 py-10`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_auto] items-center gap-8">

              {/* TITLE */}
              <h2 className="text-2xl text-gray-800 leading-tight text-center md:text-left">
                {item.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-relaxed text-center md:text-left">
                {item.desc}
              </p>

              {/* BUTTON */}
              <div className="flex justify-center md:justify-end">
                <button className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center group hover:bg-orange-600 transition-all duration-300">
                  <FaArrowRight className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AchievementsAwards;
