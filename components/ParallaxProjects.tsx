import React from "react";
import ServiceCard from "./ServiceCard";

const projects = [
  {
    image: "/images/banner1.jpg",
    title: "FURNACES",
    description:
      "Our industry-leading heating products deliver comfort when and where you need it, creating the ideal indoor environment.",
    linkText: "LEARN MORE",
    linkHref: "/furnaces",
  },
  {
    image: "/images/banner2.png",
    title: "COMMERCIAL HVAC SYSTEMS",
    description:
      "With tailored solutions for multi-unit residential buildings, our systems offer precise temperature control and powerful performance.",
    linkText: "COMMERCIAL HVAC SYSTEMS",
    linkHref: "/commercial-hvac",
  },
  {
    image: "/images/banner3.png",
    title: "RESIDENTIAL HEATING",
    description:
      "For over 100 years, we've proudly offered a diverse and varied range of heating solutions that are safe and reliable for every home.",
    linkText: "RESIDENTIAL HEATING",
    linkHref: "/residential-heating",
  },
];

const ParallaxProject: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-auto text-white"
      style={{
        backgroundImage: `url('/images/parallax.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center py-20 h-full text-center px-4 md:px-20 container mx-auto">
        <h1 className="text-2xl md:text-5xl uppercase">Our Projects</h1>
        <p className="mt-2 text-base md:text-lg max-w-2xl text-gray-200 font-bold">
          Innovative Cesar furnace product applications
        </p>
        <p className="mt-4 text-sm md:text-base max-w-3xl text-gray-200">
          Cesar Furnace remains a national leader in rigorously tested HVAC
          products that deliver energy efficiency and outstanding performance.
          Find out why we&apos;re a trusted national name in heating and air
          conditioning. Take a look at some of our projects across the country.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"></div>
      </div>
    </section>
  );
};

export default ParallaxProject;
