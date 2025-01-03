import React from "react";
import BuyCard from "./BuyCard";

const projects = [
  {
    icon: "gg:distribute-horizontal",
    title: "Find a distributor",
    description:
      "Our industry-leading heating products deliver comfort when and where you need it, creating the ideal indoor environment.",
    linkText: "LEARN MORE",
    linkHref: "/contact",
  },
  {
    icon: "ic:round-person",
    title: "Find a rep",
    description:
      "With tailored solutions for multi-unit residential buildings, our systems offer precise temperature control and powerful performance.",
    linkText: "COMMERCIAL HVAC SYSTEMS",
    linkHref: "/contact",
  },
];

const WhereToBuy: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-auto text-white"
      style={{
        backgroundImage: `url('/images/para.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center py-20 h-full text-center px-4 md:px-20 container mx-auto">
        <h1 className="text-2xl md:text-5xl uppercase">Where to buy</h1>
        <p className="mt-2 text-base md:text-lg max-w-2xl text-gray-200 font-bold">
          Kickstart Your Next HVAC Project With Cesar Furnace
        </p>
        <div className="flex gap-8 mt-16">
          {projects.map((service, index) => (
            <BuyCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
              linkHref={service.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
