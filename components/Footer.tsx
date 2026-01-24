"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const handleInstagramClick = () => {
    // Open Instagram profile in new tab
    window.open('https://instagram.com/karyalink', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-container padding-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          
          {/* Logo and Tagline Column */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-6">
              <Image
                src="/logo-pc.png"
                alt="KaryaLINK Logo"
                width={200}
                height={40}
                className="h-10 w-auto object-contain mb-4"
                onError={(e) => {
                  // Fallback if logo doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <p className="regular-14 text-gray-400 mt-2">
                Connecting verified local professionals with right-fit customers in Delhi.
              </p>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col gap-4">
            <h4 className="bold-18 text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Email</span>
                <a 
                  href="mailto:contact.karyalink@gmail.com" 
                  className="text-white hover:text-primary-400 transition-colors"
                >
                  contact.karyalink@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Address</span>
                <span className="text-white">Kalkaji, Delhi</span>
              </div>
            </div>
          </div>

          {/* Legal Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="bold-18 text-white mb-4">Legal</h4>
            <ul className="regular-14 flex flex-col gap-3 text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/trust-safety" className="hover:text-white transition-colors">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="flex flex-col gap-4">
            <h4 className="bold-18 text-white mb-4">Follow Our Journey</h4>
            <p className="regular-14 text-gray-400 mb-4">
              Join us on Instagram for updates from Delhi&apos;s trusted service network
            </p>
            
            {/* Instagram Button */}
            <button
              onClick={handleInstagramClick}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 py-3 transition-all hover:scale-105 active:scale-95 w-fit"
            >
              <div className="relative w-6 h-6">
                {/* Instagram icon - using insta.png or fallback */}
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback SVG if insta.png doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const svg = target.parentElement?.querySelector('svg');
                    if (svg) svg.style.display = 'block';
                  }}
                />
                {/* Fallback SVG */}
                <svg 
                  className="hidden w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="font-medium">@karyalink</span>
            </button>

            <p className="regular-12 text-gray-500 mt-2">
              Follow for updates, success stories, and service tips
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="regular-14 text-gray-400">
                © {new Date().getFullYear()} KaryaLINK. All rights reserved.
              </p>
              <p className="regular-12 text-gray-500 mt-1">
                Building Delhi&apos;s most trusted local services network
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/sitemap" className="regular-12 text-gray-500 hover:text-gray-300">
                Sitemap
              </Link>
              <Link href="/accessibility" className="regular-12 text-gray-500 hover:text-gray-300">
                Accessibility
              </Link>
              <Link href="/cookies" className="regular-12 text-gray-500 hover:text-gray-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;