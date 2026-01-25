"use client";

import { useState } from "react";
import { SERVICES } from "@/constants";
import ImageWithFallback from "./ImageWithFallback";
import Link from "next/link";

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': 
        return {
          bgFrom: 'from-blue-50',
          bgTo: 'to-blue-100',
          border: 'border-blue-200',
          text: 'text-blue-700',
          darkText: 'text-blue-600',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-200',
          gradientFrom: 'from-blue-400',
          gradientTo: 'to-blue-600'
        };
      case 'orange': 
        return {
          bgFrom: 'from-orange-50',
          bgTo: 'to-orange-100',
          border: 'border-orange-200',
          text: 'text-orange-700',
          darkText: 'text-orange-600',
          iconBg: 'bg-gradient-to-br from-orange-100 to-orange-200',
          gradientFrom: 'from-orange-400',
          gradientTo: 'to-orange-600'
        };
      case 'green': 
        return {
          bgFrom: 'from-green-50',
          bgTo: 'to-green-100',
          border: 'border-green-200',
          text: 'text-green-700',
          darkText: 'text-green-600',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-200',
          gradientFrom: 'from-green-400',
          gradientTo: 'to-green-600'
        };
      case 'purple': 
        return {
          bgFrom: 'from-purple-50',
          bgTo: 'to-purple-100',
          border: 'border-purple-200',
          text: 'text-purple-700',
          darkText: 'text-purple-600',
          iconBg: 'bg-gradient-to-br from-purple-100 to-purple-200',
          gradientFrom: 'from-purple-400',
          gradientTo: 'to-purple-600'
        };
      default: 
        return {
          bgFrom: 'from-gray-50',
          bgTo: 'to-gray-100',
          border: 'border-gray-200',
          text: 'text-gray-700',
          darkText: 'text-gray-600',
          iconBg: 'bg-gradient-to-br from-gray-100 to-gray-200',
          gradientFrom: 'from-gray-400',
          gradientTo: 'to-gray-600'
        };
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-10 via-white to-gray-10">
      <div className="max-container padding-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="bold-40 lg:bold-52 text-gray-900 mb-4">
            Our Verified <span className="text-primary-600">Services</span> in Delhi
          </h2>
          <p className="regular-20 text-gray-600">
            Choose from our carefully verified service providers across Delhi&apos;s localities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <div 
                key={service.title}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Floating background effect */}
                <div className={`absolute inset-0 bg-gradient-to-b ${colors.bgFrom} ${colors.bgTo} rounded-2xl transform transition-all duration-300 ${
                  hoveredCard === index ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                }`} />
                
                <div 
                  className={`
                    relative bg-white rounded-2xl p-6 border ${colors.border} 
                    flex flex-col h-full
                    transition-all duration-300
                    group-hover:shadow-xl group-hover:-translate-y-1
                    ${hoveredCard === index ? 'shadow-lg' : 'shadow-sm'}
                  `}
                >
                  {/* Service Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    
                    {/* Decorative dot */}
                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo}`}></div>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="bold-20 text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="regular-14 text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags?.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link 
                      href={`/services/${service.title.toLowerCase()}`}
                      className="inline-flex items-center gap-2 font-medium text-sm group/link"
                    >
                      <span className={`${colors.darkText} transition-all duration-300 group-hover/link:pr-1`}>
                        Learn more
                      </span>
                      <span className={`inline-block transform transition-all duration-300 group-hover/link:translate-x-1 ${colors.text}`}>
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Verified Providers", icon: "👥", color: "bg-blue-50 text-blue-600" },
              { value: "4.9★", label: "Avg. Customer Rating", icon: "⭐", color: "bg-yellow-50 text-yellow-600" },
              { value: "24h", label: "Avg. Response Time", icon: "⚡", color: "bg-green-50 text-green-600" },
              { value: "98%", label: "Issue Resolution Rate", icon: "✅", color: "bg-purple-50 text-purple-600" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full ${stat.color.split(' ')[0]} flex items-center justify-center mb-3`}>
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <div className="bold-32 text-gray-900 mb-2">{stat.value}</div>
                  <div className="regular-14 text-gray-600 leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl px-6 py-4 border border-primary-100">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-lg">📌</span>
              </div>
              <div className="text-left">
                <p className="regular-16 text-gray-700">
                  <span className="font-semibold text-primary-600">Available in 12+ Delhi areas</span> • South Delhi, Central Delhi, West Delhi, and more
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <Link 
              href="/services"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore All Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              Book trusted professionals in just 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;