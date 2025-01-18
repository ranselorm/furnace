import React from "react";
import Link from "next/link";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-20 text-center m:dmax-w-5xl w-full">
        {/* Heading */}
        <h2 className="section-title">Why Caesar</h2>
        <p className="section-subtitle">
          We Strive To Build A More Comfortable Life For Everyone!
        </p>

        {/* Description */}
        <div className="mt-6 text-gray-600 space-y-6 leading-loose">
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

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-10">
          <Link
            href="/about"
            className="bg-secondary text-white font-bold py-3 px-6"
          >
            OUR STORY
          </Link>
          <a
            href="/about"
            className="bg-secondary text-white font-bold py-3 px-6"
          >
            OUR MISSION
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
