import React from "react";
import ProductHero from "@/components/ProductHero";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/Services";
import WhereToBuy from "@/components/WhereToBuy";
import Accessories from "@/components/Accessories";
import Gallery from "@/components/Gallery";
import { products } from "@/data";

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
      <Gallery />
      <WhereToBuy />
    </section>
  );
};

export default Products;
