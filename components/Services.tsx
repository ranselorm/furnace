import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      image: "/images/banner1.jpg", // Replace with your image paths
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-20 text-center">
        {/* Header */}
        <div className="">
          <h2 className="section-title">
            FIND THE RIGHT HVAC <br className="hidden md:flex" />
            SOLUTION
          </h2>
          <p className="section-subtitle">
            Experience Innovation And Efficiency
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
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

export default ServicesSection;
