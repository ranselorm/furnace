import React from "react";
import ServiceCard from "./ServiceCard";
import BuyCard from "./BuyCard";
import Gallery from "./Gallery";

const ServicesSection: React.FC = () => {
  const services = [
    {
      image: "/images/banner1.jpg",
      icon: "game-icons:furnace",
      title: "FURNACES",
      description:
        "Our industry-leading heating products are highly automated with controllable temperatures.",
      linkText: "LEARN MORE",
      linkHref: "/furnaces",
    },
    {
      image: "/images/banner2.png",
      icon: "mdi:water-boiler",
      title: "BOILERS",
      description:
        "With tailored solutions for industry, our boilers offer precise temperature control and powerful performance.",
      linkText: "COMMERCIAL HVAC SYSTEMS",
      linkHref: "/commercial-hvac",
    },
    {
      image: "/images/banner3.png",
      title: "KILNS",
      icon: "lucide:flame",
      description:
        "For over 25 years, we've proudly offered a diverse and varied range of heating solutions that are safe and reliable for Industry and Mining companies",
      linkText: "RESIDENTIAL HEATING",
      linkHref: "/residential-heating",
    },
    {
      image: "/images/banner3.png",
      title: "CALCINATION OVENS",
      icon: "material-symbols:oven",
      description:
        "Having replaced bricks with cast grooved refractory slabs, our calcine ovens have become the most preferred calcination ovens for mining companies.",
      linkText: "RESIDENTIAL HEATING",
      linkHref: "/residential-heating",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-0 text-center">
        <div className="">
          <h2 className="section-title md:max-w-4xl mx-auto">
            Find the right heating / thermal equipment for your solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16">
          {services.map((service, index) => (
            <ServiceCard
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

export default ServicesSection;
