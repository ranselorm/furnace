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
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative h-[75vh] w-full overflow-hidden"
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
        <h1
          className="text-xl md:text-6xl uppercase font-semibold"
          style={{ lineHeight: 1.3 }}
        >
          Highly Efficient Heating <br className="hidden md:flex" /> Systems and
          Solutions
        </h1>
        <p className="mt-4 text-base md:text-xl font-bold">
          Industrial and Mineral processing furnaces, boilers, <br />
          driers and kilns
        </p>
        <button className="mt-6 bg-secondary text-white font-bold py-3 px-8 uppercase transition">
          Our Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
