import React, { useState } from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import Link from "next/link";

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
const FeaturedProducts: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleCardClick = (product: any) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-dark text-white p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl">FEATURED PRODUCTS</h2>
              <p className="mt-4 text-base font-bold">
                Browse Cesar Systems And Products
              </p>
            </div>
            <Link
              href="/products"
              className="bg-white text-secondary font-bold py-3 px-6 rounded mt-6 text-center"
            >
              SEE ALL
            </Link>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, index) => (
              <FeaturedProductCard
                key={index}
                image={product.image}
                title={product.title}
                description="Click to view details"
                onClick={() => handleCardClick(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
