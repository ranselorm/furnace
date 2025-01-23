import React from "react";
import ProductHero from "@/components/ProductHero";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/Services";
import WhereToBuy from "@/components/WhereToBuy";
import Accessories from "@/components/Accessories";

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
      "Reliable and energy-efficient boilers designed for producing high-pressure steam or hot water for industrial and commercial heating needs.",
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
      "Built this incinerator for Movis Logistics for the incineration of cyanide packages.",
  },
  {
    image: "/images/kiln.jpg",
    title: "KILNS",

    description:
      "A carbon regeneration kiln being built by Caesar Furnace for Asante Gold - Mensin.",
  },
  {
    image: "/images/cruci.jpg",
    title: "CRUCIBLES",

    description:
      "Durable, high-performance containers designed for melting and holding metals at high temperatures in industrial and laboratory settings.",
  },

  {
    image: "/images/burner.png",
    title: "DIESEL AND GAS BURNERS",

    description:
      "Efficient diesel and gas burners engineered to deliver precise heat control and optimized fuel consumption for various industrial applications.",
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
      <div className="container mx-auto px-4 md:px-20 py-16">
        <h3 className="text-3xl mb-6">Explore Our Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6">
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
      <Accessories />
      <WhyChooseUs />
      <ServicesSection />
      {/* <GetSupport /> */}
      <WhereToBuy />
    </section>
  );
};

export default Products;
