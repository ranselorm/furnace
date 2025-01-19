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

const Divider: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-auto text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3361235/pexels-photo-3361235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex flex-col items-center py-20 h-full text-center px-4 md:px-20 container mx-auto">
        <p className="mt-2 text-base md:text-xl md:max-w-4xl text-white text-center leading-relaxed">
          At Caesar Furnace, we combine innovation and expertise to deliver
          world-class thermal solutions tailored to your industrial needs. Our
          commitment to quality and precision has made us a trusted partner in
          the mining and manufacturing sectors.
        </p>
      </div>
    </section>
  );
};

export default Divider;
