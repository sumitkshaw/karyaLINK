"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/karyalink', '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-container padding-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Tagline Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo-mobile.png"
                    alt="KaryaLINK Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="bold-20 text-white">KaryaLINK</div>
                  <div className="text-xs text-gray-400">Delhi's Trusted Services</div>
                </div>
              </div>
              <p className="regular-14 text-gray-400 leading-relaxed">
                Connecting verified local professionals with right-fit customers in Delhi through trust and transparency.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="bold-18 text-white mb-4">Quick Links</h4>
            <ul className="regular-14 flex flex-col gap-3 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-primary-300 transition-colors flex items-center gap-2">
                  <span className="text-primary-400">→</span>
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-primary-300 transition-colors flex items-center gap-2">
                  <span className="text-primary-400">→</span>
                  <span>How It Works</span>
                </Link>
              </li>
              <li>
                <Link href="/providers" className="hover:text-primary-300 transition-colors flex items-center gap-2">
                  <span className="text-primary-400">→</span>
                  <span>For Providers</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-300 transition-colors flex items-center gap-2">
                  <span className="text-primary-400">→</span>
                  <span>Pricing</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col gap-4">
            <h4 className="bold-18 text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 mb-1">Email</span>
                <a 
                  href="mailto:contact.karyalink@gmail.com" 
                  className="text-white hover:text-primary-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-primary-400">✉️</span>
                  <span>contact.karyalink@gmail.com</span>
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 mb-1">Office</span>
                <div className="text-white flex items-center gap-2">
                  <span className="text-primary-400">📍</span>
                  <span>Kalkaji, Delhi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="flex flex-col gap-4">
            <h4 className="bold-18 text-white mb-4">Follow Our Journey</h4>
            <p className="regular-14 text-gray-400 mb-6">
              Join our community for updates, success stories, and service tips
            </p>
            
            {/* Instagram Button */}
            <div className="space-y-4">
              <button
                onClick={handleInstagramClick}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-6 py-3 transition-colors w-fit"
              >
                <div className="relative w-5 h-5">
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-medium">Follow @karyalink</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Links & Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="regular-14 text-gray-400">
                © {new Date().getFullYear()} KaryaLINK. All rights reserved.
              </p>
              <p className="regular-12 text-gray-500 mt-1">
                Building Delhi's most trusted local services network
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/terms" className="regular-14 text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <div className="w-px h-4 bg-gray-700"></div>
              <Link href="/privacy" className="regular-14 text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <div className="w-px h-4 bg-gray-700"></div>
              <Link href="/faq" className="regular-14 text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;