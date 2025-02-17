"use client";

import React, { useState } from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
  "/images/gallery9.jpg",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-20">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl group cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[250px] md:h-[350px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full view"
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 text-white text-4xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
