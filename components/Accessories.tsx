import React from "react";
import AccessoriesCard from "./AccessoriesCard";

const products = [
  {
    image: "/images/cement.jpg",
    title: "REFRACTORY CEMENT",

    description:
      "High-performance cement designed for extreme heat resistance, ideal for industrial furnaces and kilns in mining and manufacturing applications",
  },
  {
    image: "/images/blanket.jpg",
    title: "REFRACTORY FIBRE/ BLANKET/KAWOOL",

    description:
      "Lightweight and durable thermal insulation material, engineered to withstand high temperatures, providing efficient energy-saving solutions in industrial setups",
  },
  {
    image: "/images/cruci.jpg",
    title: "CRUCIBLES",

    description:
      "Durable, high-performance containers designed for melting and holding metals at high temperatures in industrial and laboratory settings",
  },
  {
    image: "/images/burner.jpg",
    title: "BURNERS",

    description:
      "Efficient diesel and gas burners engineered to deliver precise heat control and optimized fuel consumption for various industrial applications",
  },
];

const Accessories = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-20 py-16">
        <h3 className="text-3xl mb-6">Explore Our Accessories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6">
          {products.map((product, index) => (
            <AccessoriesCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
