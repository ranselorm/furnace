import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
  ];

  return (
    <nav className="">
      {/* Top Bar */}
      <div className="py-2 bg-dark text-white">
        <div className="container mx-auto px-4 md:px-20 flex justify-between items-center">
          <p className="flex items-center gap-2">
            <Icon icon="ic:baseline-phone" color="#FF7C00" fontSize={24} />
            <span className="text-base font-bold">(+233) 244 537 072</span>
          </p>
          <div className="flex items-center gap-3">
            <Icon icon="ri:whatsapp-fill" fontSize={20} />
            <Icon icon="ic:sharp-facebook" fontSize={20} />
            <Icon icon="ri:instagram-fill" fontSize={20} />
            <Icon icon="mingcute:linkedin-fill" fontSize={20} />
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="shadow-md py-4">
        <main className="container mx-auto px-4 md:px-20 flex justify-between items-center bg-white">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-bold text-lg">WILLIAMS</div>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <p className="hover:text-secondary transition text-base font-medium uppercase">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
          {/* Call to Action Button */}
          <div>
            <button className="bg-secondary text-white py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </main>
      </div>
    </nav>
  );
};

export default Navbar;