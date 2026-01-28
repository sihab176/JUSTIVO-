import React from "react";

import { FaArrowRight } from "react-icons/fa6";

const RecentNews = () => {
  const newsData = [
    {
      id: 1,
      category: "NEWS",
      date: "June 2025",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
      title:
        "When should you hire a lawyer? A practical guide for individuals & businesses",
      // isPrimary: true
    },
    {
      id: 2,
      category: "NEWS",
      date: "June 2025",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=600",
      title:
        "Divorce and child custody: what you need to know in the United States of America",
      isPrimary: false,
    },
    {
      id: 3,
      category: "NEWS",
      // date: "June 2025",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
      title:
        "How we achieved a landmark victory in a office workplace harassment case",
      isPrimary: false,
    },
  ];

  return (
    <section className="max-w-[1620px] mx-auto  pb-20  ">
      {/* Header */}
      <div className="flex items-center gap-4 ml-20">
         <div className="flex items-center gap-[200px] mb-16  pb-4 ">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
          News
        </span>
        <h2 className="text-4xl text-gray-800">Our recent news</h2>
        </div>
        <div className="h-[1px] w-[800px] bg-primary mb-18"></div>
     </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 right-0 ml-20">
        {newsData.map((news) => (
          <div key={news.id} className="group cursor-pointer">
            {/* Meta Info */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C18C72]"></div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  {news.category}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                {news.date}
              </span>
            </div>

            {/* Image Container */}
            <div className="overflow-hidden mb-6">
              <img
                src={news.image}
                alt={news.title}
                className=" h-[320px] w-[600px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>

            {/* Content & Action */}
            <div className="flex items-start justify-between gap-4">
              <h3
                className={`text-lg leading-snug transition-colors duration-300 ${
                  news.isPrimary
                    ? "text-[#C18C72] underline underline-offset-8"
                    : "text-gray-700 hover:text-[#C18C72]"
                }`}
              >
                {news.title}
              </h3>

              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  news.isPrimary
                    ? "bg-[#C18C72] border-[#C18C72] text-white"
                    : "border-gray-200 text-gray-400 group-hover:bg-[#C18C72] group-hover:text-[#ffffff]"
                }`}
              >
                <FaArrowRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentNews;
