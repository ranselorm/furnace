import React from "react";
import ProductCard from "@/components/ProductCard";
import ProductHero from "@/components/ProductHero";

const products = [
  {
    image: "/images/bg.jpg",
    title: "AH Horizontal Basic / AV Vertical Basic",

    description:
      "This is a high-performance, energy-efficient product designed to meet your needs.",
  },
  {
    image: "/images/bg.jpg",
    title: "AH Horizontal Deluxe / AV Vertical Deluxe",

    description:
      "This deluxe model provides superior comfort with innovative design.",
  },
  {
    image: "/images/bg.jpg",
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
        subtitle="This is our subtitle"
        backgroundImage="/images/bg.jpg"
      />
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 bg-gray-200 py-16">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
