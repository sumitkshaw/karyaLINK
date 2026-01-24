"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveItem(sectionId);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'trust', label: 'Trust Features' },
    { id: 'pilot', label: 'Pilot Areas' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-container padding-container flexBetween py-4">
        {/* Logo with responsive images */}
        <Link href="/" className="flex items-center gap-3">
          {/* Mobile Logo */}
          <div className="block md:hidden">
            <Image
              src="/logo-pc.png"
              alt="KaryaLINK Logo"
              width={200}
              height={180}
              className="object-contain"
            />
          </div>
          
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Image
              src="/logo-pc.png"
              alt="KaryaLINK Logo"
              width={180}
              height={40}
              className="object-contain h-10"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-gray-700 font-medium transition-all duration-300 ${
                    activeItem === item.id 
                      ? 'text-primary-600 font-semibold' 
                      : 'group-hover:text-primary-600 group-hover:font-semibold'
                  }`}
                  onMouseEnter={() => setActiveItem(item.id)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span className={`
                    absolute left-0 -bottom-1 h-0.5 bg-primary-600 transition-all duration-300
                    ${activeItem === item.id 
                      ? 'w-full opacity-100' 
                      : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }
                  `} />
                </button>
              </div>
            ))}
          </div>

          {/* Join Waitlist Button */}
          <Button 
            type="button"
            title="Join Waitlist"
            variant="btn_primary"
            onClick={() => console.log("Join Waitlist clicked")}
            className="min-w-[140px]"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <Button 
            type="button"
            title="Join Waitlist"
            variant="btn_primary"
            onClick={() => console.log("Join Waitlist clicked")}
            className="text-sm px-4 py-2"
          />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <div className="padding-container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  py-3 px-2 text-gray-700 font-medium rounded-lg transition-all duration-200 text-left
                  ${activeItem === item.id 
                    ? 'text-primary-600 font-semibold bg-primary-50' 
                    : 'hover:text-primary-600 hover:font-semibold hover:bg-gray-50'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;