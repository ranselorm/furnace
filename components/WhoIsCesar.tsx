import React from "react";

const WhoIsCesar: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-20 text-center md:max-w-5xl">
        {/* Heading */}
        <h2 className="section-title md:max-w-3xl mx-auto">Who are we?</h2>
        {/* <p className="text-sub mt-4">Leading The Future Of Thermal Equipment</p> */}

        {/* Description */}
        <div className="mt-8 space-y-6 text-gray-600 leading-loose">
          <p>
            For over 25 years, Caesar Furnace has delivered industry-leading
            heating and thermal equipment and solutions for Mining Companies and
            Industry. It all started in 2006, when Caesar Furnace started
            designing and building remote controlled gold smelting furnaces for
            Mining Companies in Ghana, in order to prevent operators from
            getting close to high temperature furnaces.
          </p>

          <p>
            Caesar Furnace’s commitment to quality was clear from the start—and
            the company’s product line expanded over the years to include all
            kinds of kilns, driers, boilers and incinerators across all mining
            companies and Industries. Our reputation for quality products has
            only continued to grow earning CAESAR FURNACE a goodwill in the
            mining sector of the country.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsCesar;
