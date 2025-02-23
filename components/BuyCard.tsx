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

const BuyCard: React.FC<BuyCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 md:w-[350px] h-96">
      <div className="p-6 flex flex-col items-center justify-center gap-y-6">
        <Icon icon={icon} fontSize={60} color="#d67d00" />
        <h3 className="text-lg text-black uppercase">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <Link href="/contact" className="bg-dark px-6 py-2 mt-4 uppercase">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default BuyCard;
