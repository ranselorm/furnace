import React from "react";

const TheCesarWay: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="section-title">
            THE CAESAR WAY- IF IT IS NOT SAFE, DONT DELIVER IT
          </h2>
          <p className="section-subtitle text-gray-600 mt-4">
            Leading The Future Of Thermal Equipment
          </p>
          <p className="text-gray-600 mt-6 leading-loose">
            Caesar Furnace understood that this company had to adapt to grow.
            Today, we use Programmable Logic Control to ensure precision,
            quality and automation.
          </p>
          <p className="text-gray-600 mt-4 leading-loose">
            Above all, we're dedicated to treating our customers with respect
            and integrity. Over the years, our customers have come to expect the
            same quality from us as our industry-leading products.
          </p>
        </div>

        <div className="w-1/2 gap-4 h-[500px] flex justify-center">
          <img
            src="/images/banner2.jpg"
            alt="About Us"
            className="h-full w-full object-cover md:w-[85%]"
          />
        </div>
      </div>
    </section>
  );
};

export default TheCesarWay;
