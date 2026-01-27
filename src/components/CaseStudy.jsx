import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const CaseStudy = () => {
  const cases = [
    {
      id: 1,
      image: "/case1.jpg",
      title: "Secured $2.5m settlement in construction injury case",
    },
    {
      id: 2,
      image: "/case2.png",
      title: "Won full custody for father in complex divorce case",
      hasOverlay: true, // স্পেশাল হোভার ইফেক্টের জন্য
    },
    {
      id: 3,
      image: "/case3.jpg",
      title: "Cleared wrongfully accused client in criminal defense case",
    },
    {
      id: 4,
      image: "/case4.jpg",
      title: "Closed a major m&a deal with full legal oversight",
    },
  ];

  return (
    <section className=" px-6 py-20 max-w-[1620px] mx-auto  flex flex-col md:flex-row bg-white font-serif">
      {/* Left Side: Vertical Title */}
      <div className="md:w-2/13 ml-10">
        <h2 className="text-4xl text-gray-800   top-10">Case study</h2>
      </div>

      {/* Right Side: Case Grid */}
      <div className="md:w-11/13 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
        {cases.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-[600px] h-[440px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />

              {item.hasOverlay && (
                <div className="absolute inset-0 bg-black/40 bg-blur-sm flex items-center  w-[520px] h-[400px] my-4 mx-auto justify-center ">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FaArrowUp className="w-6 h-6 text-orange-700  rotate-34" />
                  </div>
                </div>
              )}
            </div>

            <h3 className="text-[24px] text-gray-700 leading-snug max-w-[90%]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
