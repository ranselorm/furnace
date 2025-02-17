import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products/Services", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative">
      <div className="py-2 bg-dark text-white">
        <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
          <p className="flex items-center gap-2">
            <Icon icon="ic:baseline-phone" color="#FF7C00" fontSize={24} />
            <span className="text-base font-bold">+233 244 537 072</span>
          </p>
          <p>caesarkofi@caesarfurnacegh.com</p>
        </div>
      </div>

      <div className="shadow-md py-4 bg-white">
        <main className="container mx-auto px-4 md:px-20 flex justify-between items-center">
          <div className="relative w-[140px] h-[60px]">
            <Link href="/">
              <img
                src="/images/lg2.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="block md:hidden text-dark text-2xl"
          >
            <Icon
              icon={isMenuOpen ? "eva:close-fill" : "ci:menu-alt-02"}
              fontSize={28}
            />
          </button>

          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            ></div>
          )}

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 h-full w-4/5 bg-white z-50 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 md:static md:h-auto md:w-auto md:flex-row md:space-y-0 md:space-x-6 md:translate-x-0`}
          >
            {/* Close Icon for Mobile */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-dark text-2xl md:hidden"
            >
              <Icon icon="eva:close-fill" fontSize={28} />
            </button>

            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <p
                  className="text-lg font-medium hover:text-secondary transition"
                  onClick={closeMenu}
                >
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Icon icon="ri:whatsapp-fill" fontSize={20} color="#FF7C00" />
            <Icon icon="ic:sharp-facebook" fontSize={20} color="#FF7C00" />
            <Icon icon="ri:instagram-fill" fontSize={20} color="#FF7C00" />
          </div>
        </main>
      </div>
    </nav>
  );
};

export default Navbar;
