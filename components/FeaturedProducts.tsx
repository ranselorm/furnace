import React, { useState } from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import Link from "next/link";
import { products } from "@/data";

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
                key={product.slug}
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
