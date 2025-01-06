import React from "react";

const WhoIsCesar: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-20 text-center">
        {/* Heading */}
        <h2 className="section-title">WHO ARE WE?</h2>
        <p className="text-sub mt-4">
          HVAC Solutions Made In America Since 1916
        </p>

        {/* Description */}
        <div className="mt-8 space-y-6 text-gray-600">
          <p>
            For over 100 years, Cesar Furnace has delivered industry-leading
            heating and cooling solutions for homes and businesses. It all
            started in 1916, when Cesar Furnace started building gas steam
            radiators in Los Angeles under Cesar Furnace Radiator Company.
          </p>
          <p>
            Cesar Furnace’ commitment to quality was clear from the start—and
            the company’s product line expanded over the years to include
            gas-fired heating, gravity wall heating, and counterflow furnaces.
            By 1954, Cesar Furnace had become a nationwide leader in HVAC
            solutions, with a distribution and sales network that stretched
            across the United States.
          </p>
          <p>
            Our reputation for quality products has only continued to grow. In
            1986, Cesar Furnace acquired Hydro-Aire/LANCO, a major manufacturer
            of fan coils and air handlers. Then, in 1996, the product line was
            expanded to include room console heaters. Today, we’re proud to
            offer more fan coil sizes and configurations than any other HVAC
            company in the United States.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsCesar;
