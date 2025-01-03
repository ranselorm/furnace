import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative h-56 w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg text-black">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={linkHref}
          className="text-orange-500 font-bold mt-4 inline-block"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
