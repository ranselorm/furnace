import React from "react";
import ProductHero from "@/components/ProductHero";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/Services";
import WhereToBuy from "@/components/WhereToBuy";

const products = [
  {
    image: "/images/furn.jpg",
    title: "SMELTING FURNACES",

    description:
      "Built for Asanko Gold, FGR Bogosu, Mensin Gold Bibiani, Gold Recovery Tema, and Chirano Goldmines.",
  },
  {
    image: "/images/calcine.jpg",
    title: "CALCINE OVENS",

    description:
      "Built this Calcine Oven for Mensin Gold Bibiani, AngloGold Ashanti (Iduapriem Tarkwa), Asanko Gold, FGR Bogosu, former AGC Obuasi mines.",
  },
  {
    image: "/images/boiler.jpg",
    title: "BOILERS",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
  {
    image: "/images/incen.jpg",
    title: "INCINERATORS",

    description:
      "Built this incinerator and wet scrubber at the Caesar Furnace & Kilns Commercial Incineration Center in Kumasi.",
  },
  {
    image: "/images/dryer.jpg",
    title: "DRYERS",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
  {
    image: "/images/kiln.jpg",
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
    image: "/images/burner.png",
    title: "DIESEL AND GAS BURNERS",

    description:
      "A compact, reliable gas wall heater for small to medium-sized spaces.",
  },
];

const Products = () => {
  return (
    <section className="bg-gray-100">
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
      <WhyChooseUs />
      <ServicesSection />
      {/* <GetSupport /> */}
      <WhereToBuy />
    </section>
  );
};

export default Products;
