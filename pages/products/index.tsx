import React from "react";
import ProductCard from "@/components/ProductCard";
import ProductHero from "@/components/ProductHero";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import GetSupport from "@/components/GetSupport";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/Services";

const products = [
  {
    image: "/images/product1.png",
    title: "SMELTING FURNACES",

    description:
      "This is a high-performance, energy-efficient product designed to meet your needs.",
  },
  {
    image: "/images/product1.png",
    title: "CALCINE OVENS",

    description:
      "This deluxe model provides superior comfort with innovative design.",
  },
  {
    image: "/images/product1.png",
    title: "BOILERS",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
  {
    image: "/images/product1.png",
    title: "INCINERATORS",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
  {
    image: "/images/product1.png",
    title: "DRIERS",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
  {
    image: "/images/product1.png",
    title: "ROTARY KILNS",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
  {
    image: "/images/product1.png",
    title: "CARMEL™ AC2030TNA Top Vent Gas Wall Heater",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
  {
    image: "/images/product1.png",
    title: "CARMEL™ AC2030TNA Top Vent Gas Wall Heater",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
];

const Products = () => {
  return (
    <section className="">
      <ProductHero
        title="Our Products"
        subtitle="Discover Innovative Solutions Tailored for Comfort and Efficiency."
        backgroundImage="/images/banner3.png"
      />
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 py-16">
          {products.map((product, index) => (
            <FeaturedProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
      <ServicesSection />
      <WhyChooseUs />
      {/* <GetSupport /> */}
    </section>
  );
};

export default Products;
