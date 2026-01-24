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
          {/* Mobile Logo - Adjusted size */}
          <div className="block lg:hidden">
            <Image
              src="/logo-pc.png"
              alt="KaryaLINK Logo"
              width={160}
              height={36}
              className="object-contain h-9"
            />
          </div>
          
          {/* Desktop Logo */}
          <div className="hidden lg:block">
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
                    absolute left-0 -bottom-1 h-0.5 bg-primary-500 transition-all duration-300
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

        {/* Mobile Header - Join Waitlist + Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <Button 
            type="button"
            title="Join Waitlist"
            variant="btn_primary"
            onClick={() => console.log("Join Waitlist clicked")}
            className="text-sm px-3 py-2 h-10"
          />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
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

      {/* Mobile Menu - Clean design without Join Waitlist button */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <div className="padding-container py-4 flex flex-col">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative py-4 px-3 text-gray-700 font-medium transition-all duration-200 text-left
                  border-b border-gray-100 last:border-b-0
                  ${activeItem === item.id 
                    ? 'text-primary-600 bg-primary-50/50' 
                    : 'active:bg-gray-50'
                  }
                `}
                onTouchStart={() => setActiveItem(item.id)}
                onTouchEnd={() => setActiveItem(null)}
              >
                <div className="flex items-center justify-between">
                  <span className={`transition-all duration-200 ${
                    activeItem === item.id ? 'font-semibold' : ''
                  }`}>
                    {item.label}
                  </span>
                  {/* Subtle arrow indicator */}
                  <svg 
                    className={`w-4 h-4 transition-all duration-200 ${
                      activeItem === item.id ? 'opacity-100 translate-x-0 text-primary-500' : 'opacity-0 -translate-x-1'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                {/* Subtle active indicator line */}
                <div className={`
                  absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-300 transition-all duration-300
                  ${activeItem === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'}
                `} />
              </button>
            ))}
            
            {/* Contact/Support item */}
            <div className="pt-4 pb-2 px-3 border-t border-gray-100 mt-2">
              <div className="text-xs text-gray-500 font-medium mb-1">Need help?</div>
              <a 
                href="mailto:contact.karyalink@gmail.com" 
                className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
              >
                contact.karyalink@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/10 backdrop-blur-sm z-40 top-[72px]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;