"use client";

import React from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
  // "/images/gallery9.jpg",
  // "/images/gallery10.jpg",
  // "/images/gallery11.jpg",
  // "/images/gallery12.jpg",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-20">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl group">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[250px] md:h-[350px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
