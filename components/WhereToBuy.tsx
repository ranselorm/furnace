import React from "react";
import BuyCard from "./BuyCard";

const projects = [
  {
    icon: "hugeicons:repair",
    title: "REPAIR SERVICES",
    description:
      "Our expert technicians specialize in diagnosing and repairing issues promptly, ensuring you stay comfortable year-round.",
    linkText: "LEARN MORE",
    linkHref: "/contact",
  },
  {
    icon: "ic:baseline-home-repair-service",
    title: "SERVICING SOLUTIONS",
    description:
      "Regular servicing keeps your furnace running at peak performance while saving on energy costs. Book a servicing appointment today!",
    linkText: "COMMERCIAL HVAC SYSTEMS",
    linkHref: "/contact",
  },
];

const WhereToBuy: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-auto text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/7519887/pexels-photo-7519887.jpeg?auto=compress&cs=tinysrgb&w')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center py-20 h-full text-center px-4 md:px-20 container mx-auto">
        <h1 className="text-2xl md:text-4xl uppercase">
          REPAIRING AND SERVICING
        </h1>
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
