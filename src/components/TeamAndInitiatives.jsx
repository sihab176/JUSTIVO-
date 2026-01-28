import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const TeamAndInitiatives = () => {
  const team = [
    {
      name: "Alexander reed",
      image: "/Team1.jpg",
      tags: ["New York", "Senior Partner", "Head of Corporate Law"],
       socials: true,
    },
    {
      name: "Clara thompson",
      image: "/Team2.png",
      tags: ["Chicago", "Managing Partner", "Lead Business Consultant"],
      socials: true,
    },
    {
      name: "James whitmore",
      image: "/Team3.png",
      tags: [
        "Los Angeles",
        "Courtroom Strategist",
        "Criminal Defense Attorney",
      ],
       socials: true,
    },
    {
      name: "Sophia malik",
      image: "/Team4.png",
      tags: ["Houston", "Family Law Attorney", "Child Custody Specialist"],
       socials: true,
    },
  ];

  return (
    <section className="  max-w-[1620px] mx-auto ">
      <div className=" relative w-full bg-[#041C2C]  border-amber-950 pt-20  pb-[360px]  mb-66">
        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col">
                {/* Image Container */}
                {/* <div className="relative group overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[300px] object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                  />

                  {member.socials && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                      <div className="bg-white p-2 cursor-pointer hover:bg-gray-100">
                        <FaFacebook size={14} className="text-gray-800" />
                      </div>
                      <div className="bg-white p-2 cursor-pointer hover:bg-gray-100">
                        <FaTwitter size={14} className="text-gray-800" />
                      </div>
                      <div className="bg-white p-2 cursor-pointer hover:bg-gray-100">
                        <FaLinkedin size={14} className="text-gray-800" />
                      </div>
                    </div>
                  )}
                </div> */}
                <div className="relative group overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[300px] object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Social Icons */}
                  {member.socials && (
                    <div
                      className="
      absolute right-0 top-1/2 -translate-y-1/2
      flex flex-col gap-1
      translate-x-full opacity-0
      group-hover:translate-x-0 group-hover:opacity-100
      transition-all duration-500 ease-out
    "
                    >
                      <div className="bg-white p-2 cursor-pointer hover:bg-gray-100">
                        <FaFacebook size={14} className="text-gray-800" />
                      </div>
                      <div className="bg-white p-2 cursor-pointer hover:bg-gray-100">
                        <FaTwitter size={14} className="text-gray-800" />
                      </div>
                      <div className="bg-white p-2 cursor-pointer hover:bg-gray-100">
                        <FaLinkedin size={14} className="text-gray-800" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-white text-xl font-serif mb-4 capitalize">
                  {member.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest text-gray-400 border border-gray-700 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Initiatives Banner */}
        <div className="absolute right-0 ">
          <div className="relative w-[1300px] h-[550px] overflow-hidden">
            <img
              src="/TeambigImage.jpg"
              alt="Initiatives"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-12 md:p-20">
              <h2 className="text-white text-4xl md:text-5xl  max-w-xl leading-tight">
                Contributing Important <br />
                Global Initiatives
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAndInitiatives;
