"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define navigation links with their hrefs
  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/groups", label: "Groups" },
    { href: "/trade", label: "Trade" },
    { href: "/calendar", label: "Calendar" },
    { href: "/events", label: "Events" },
  ];

  return (
    <div>
      <hr />
      <nav className="bg-neutral text-foreground h-16">
        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:flex flex-row flex-wrap justify-center items-center font-bold text-lg md:text-xl max-w-7xl mx-auto h-full">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={`flex flex-row px-8 transition-colors duration-300 ease-in-out h-full items-center rounded-lg ${
                pathname === link.href ? "bg-primary text-white" : ""
              }`}
            >
              <Link
                href={link.href}
                className="flex items-center h-full w-full text-center"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Navigation - hamburger button */}
        <div className="md:hidden flex justify-between items-center h-full px-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-foreground hover:text-white hover:bg-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="font-bold text-xl">
            <Link href="/">BCS</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={toggleMenu}
        />
        
        {/* Slide-out Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-neutral text-foreground shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-foreground hover:text-white hover:bg-primary"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 mb-2 rounded-lg text-lg font-bold transition-colors duration-300 ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;