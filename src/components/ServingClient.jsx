import React from "react";

const ServingClient = () => {
  const timelineData = [
    {
      year: "1971",
      title: "Founded in London",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      year: "1986",
      title: "Firm Expansion",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      year: "1991",
      title: "Landmark Case Victory",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <section className="max-w-[1620px] mx-auto px-20  ">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Sider*/}
        <div className="w-full md:w-1/2 ">
          <div className="flex flex-col gap-1">
            <img
              src="/lowimge.png"
              alt="Law Scales"
              className=" h-[470px] w-[650px] object-cover mb-4"
            />
            <img
              src="/lowimge2.png"
              alt="Lawyer"
              className="h-[470px] w-[650px] object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content and Timeline */}
        <div className="w-full md:w-1/2 relative">
          <h2 className="text-3xl md:text-4xl max-w-[550px] text-gray-800 leading-tight mb-24">
            Serving clients in every area of law since 1971 with experience and
            dedication.
          </h2>

          <div className="space-y-34 relative">
            {timelineData.map((item, index) => (
              <div key={index} className="group relative pr-16">
                <h3 className="text-4xl text-gray-800 mb-2">{item.year}</h3>
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="text-xl font-medium text-gray-700">
                    {item.title}
                  </h4>
                  <div className="h-[1px] w-20 bg-primary"></div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            ))}

            {/* right side */}
            <div className="absolute right-0 top-0 h-full flex flex-col items-center">
              <div className="flex items-center gap-7 ">
                <div className="w-[1px] h-48 bg-primary mb-18"></div>
                <div className="flex flex-col gap-6 mb-18">
                  <img
                    src="/arrow-left (1).png"
                    alt="arrow top"
                    className="h-[50px]"
                  />
                  <img
                    src="/arrow-left (1).png"
                    alt="arrow bottom"
                    className="rotate-180 h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServingClient;
