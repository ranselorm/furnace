import Link from "next/link";
import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-20 text-center max-w-5xl w-full">
        {/* Heading */}
        <h2 className="section-title">WHY Cesar</h2>
        <p className="section-subtitle">
          We Strive To Build A More Comfortable Life For Everyone!
        </p>

        {/* Description */}
        <div className="mt-6 text-gray-600 space-y-6">
          <p>
            The Cesar name is synonymous with the highest quality and most
            popular line of HVACR products to fit any residential or commercial
            need, including gas and electric furnaces, fan coils and air
            handlers. Cesar is headquartered at its 400,000 square feet
            manufacturing complex situated on over 18 acres of land in San
            Bernardino County, CA.
          </p>
          <p>
            Cesar’ products are installed in residential homes, hotels, casinos,
            museums, dormitories, and apartment complexes and are featured in
            many historically significant landmarks including Columbia
            University, The Smithsonian Institute and onboard Air Force One. Our
            products are sold nationwide through a network of authorized HVAC&R
            representatives, wholesalers, and retailers.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-10">
          <Link
            href="/our-story"
            className="bg-secondary text-white font-bold py-3 px-6"
          >
            OUR STORY
          </Link>
          <a
            href="/our-mission"
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
