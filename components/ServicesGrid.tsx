"use client";

import { SERVICES } from "@/constants";
import ImageWithFallback from "./ImageWithFallback";
import Link from "next/link";

const ServicesGrid = () => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-700';
      case 'orange': return 'bg-orange-100 text-orange-700';
      case 'green': return 'bg-green-100 text-green-700';
      case 'purple': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-10">
      <div className="max-container padding-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="bold-40 lg:bold-52 text-gray-900 mb-4">
            Our Verified Services in Delhi
          </h2>
          <p className="regular-20 text-gray-600">
            Choose from our carefully verified service providers across Delhi&apos;s localities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.title} 
              className="bg-white rounded-2xl p-6 border border-gray-100 card-hover flex flex-col"
            >
              {/* Service Icon */}
              <div className={`w-14 h-14 rounded-xl ${getColorClass(service.color)} flex items-center justify-center mb-4`}>
                <ImageWithFallback
                  src={service.icon}
                  alt={service.title}
                  width={28}
                  height={28}
                  fallbackEmoji={service.fallbackIcon}
                  className="w-7 h-7"
                />
              </div>
              
              {/* Service Title */}
              <h3 className="bold-20 text-gray-900 mb-2">{service.title}</h3>
              
              {/* Service Description */}
              <p className="regular-14 text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <Link 
                href={`/services/${service.title.toLowerCase()}`}
                className="text-primary-600 font-medium text-sm hover:text-primary-700 flex items-center gap-1"
              >
                Learn more
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="bold-32 text-primary-600 mb-2">100+</div>
            <div className="regular-14 text-gray-600">Verified Providers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="bold-32 text-primary-600 mb-2">4.9★</div>
            <div className="regular-14 text-gray-600">Avg. Customer Rating</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="bold-32 text-primary-600 mb-2">24h</div>
            <div className="regular-14 text-gray-600">Avg. Response Time</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="bold-32 text-primary-600 mb-2">98%</div>
            <div className="regular-14 text-gray-600">Issue Resolution Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;