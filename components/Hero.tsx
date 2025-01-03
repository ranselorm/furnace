import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const images = [
    "/images/banner1.jpg", // Replace with your image paths
    "/images/banner2.png",
    "/images/banner3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative h-[70vh] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-2xl md:text-5xl uppercase tracking-[4px]">
          Highly Efficient Heating <br /> and Cooling Solutions
        </h1>
        <p className="mt-4 text-base md:text-lg font-bold">
          Residential and Commercial Products
        </p>
        <button className="mt-6 bg-secondary text-white font-bold py-3 px-8 rounded uppercase transition">
          Our Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
