import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

interface BuyCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const BuyCard: React.FC<BuyCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 md:w-[350px] h-96">
      {/* Content */}
      <div className="p-6 flex flex-col items-center justify-center gap-y-6">
        <Icon icon={icon} fontSize={60} color="#d67d00" />
        <h3 className="text-lg text-black uppercase">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <Link
          href={linkHref}
          className="bg-dark font-bold mt-4 inline-block uppercase py-4 px-8"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default BuyCard;