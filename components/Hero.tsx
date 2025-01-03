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
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Highly Efficient Heating <br /> and Cooling Solutions
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Residential and Commercial HVAC Products
        </p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition">
          Our Products
        </button>
      </div>
    </div>
  );
};

export default Hero;
