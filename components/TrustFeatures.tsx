"use client";

import { useState } from "react";
import { TRUST_FEATURES } from "@/constants";

const TrustFeatures = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="trust" className="section-padding bg-gradient-to-b from-white via-gray-10/20 to-white">
      <div className="max-container padding-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-blue-50 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-700">Trust & Safety First</span>
          </div>
          <h2 className="bold-40 lg:bold-52 text-gray-900 mb-4">
            Built on <span className="text-primary-600">Trust & Transparency</span>
          </h2>
          <p className="regular-20 text-gray-600">
            Every feature is designed to build and maintain trust between service providers and customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              className="relative group"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 rounded-2xl transform transition-all duration-500 ${
                hoveredFeature === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}></div>
              
              <div className={`relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 h-full ${
                hoveredFeature === index ? 'shadow-xl -translate-y-1 border-primary-200' : 'shadow-sm'
              }`}>
                {/* Feature Icon with gradient */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-primary-50 to-blue-100 border border-primary-100 flex items-center justify-center transition-all duration-300`}>
                    <span className="text-2xl transform transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </span>
                  </div>
                  
                  {/* Decorative indicator */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Feature Title */}
                <h3 className="bold-20 text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Feature Description */}
                <p className="regular-14 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Badge Example */}
        <div className="mt-20 relative">
          {/* Background decorative elements */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-primary-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 rounded-3xl p-8 md:p-12 border border-primary-100 shadow-lg overflow-hidden">
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-200/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="bold-32 text-gray-900 mb-2">
                      Digital Reputation Card
                    </h3>
                    <p className="text-sm text-primary-600 font-medium">Verified Identity & Performance</p>
                  </div>
                </div>
                
                <p className="regular-18 text-gray-600 mb-8 leading-relaxed">
                  Each verified provider gets a unique digital reputation card showing their verified history, ratings, and credentials—transparency you can trust.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "🔒", label: "Background Verified", color: "bg-green-100 text-green-700" },
                    { icon: "🎓", label: "Skill Certified", color: "bg-blue-100 text-blue-700" },
                    { icon: "⭐", label: "Customer Rated", color: "bg-yellow-100 text-yellow-700" },
                    { icon: "📈", label: "Performance Tracked", color: "bg-purple-100 text-purple-700" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                      <div className={`w-10 h-10 rounded-lg ${item.color.split(' ')[0]} flex items-center justify-center`}>
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => console.log("Learn more clicked")}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                >
                  <span>How we verify professionals</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              {/* Enhanced Reputation Card Mockup */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-2xl border border-gray-200 transform hover:-translate-y-1 transition-transform duration-300">
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                          <span className="text-3xl">👷</span>
                        </div>
                        {/* Verified badge */}
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="bold-20 text-gray-900">Rajesh Kumar</div>
                        <div className="text-sm text-gray-600 mb-1">Verified Plumber • 8 years</div>
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-sm ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700 ml-1">4.8/5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Jobs Completed", value: "142+", trend: "+12%", color: "bg-blue-50 text-blue-700" },
                      { label: "Response Time", value: "24 mins", trend: "Fast", color: "bg-green-50 text-green-700" },
                      { label: "Repeat Clients", value: "68%", trend: "High", color: "bg-purple-50 text-purple-700" },
                      { label: "Issue Resolved", value: "99%", trend: "Excellent", color: "bg-orange-50 text-orange-700" },
                    ].map((stat, index) => (
                      <div key={index} className={`${stat.color.split(' ')[0]} rounded-xl p-3 text-center`}>
                        <div className="bold-18 mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                        <div className="text-xs font-medium mt-1">{stat.trend}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Specialization</span>
                      <span className="text-sm font-medium text-gray-900">Pipe Repair, Installation</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Locality</span>
                      <span className="text-sm font-medium text-gray-900">South Delhi</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Languages</span>
                      <span className="text-sm font-medium text-gray-900">Hindi, English</span>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">KaryaLINK Verified ID: KL#PL789012</div>
                      <div className="text-xs px-3 py-1 bg-primary-50 text-primary-700 rounded-full">
                        Premium Pro
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats indicator */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 border border-gray-200">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Trust Score</div>
                    <div className="bold-18 text-primary-600">9.2/10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="bold-24 text-gray-900 mb-4">Why Delhi Trusts KaryaLINK</h3>
              <p className="regular-16 text-gray-600">
                Our verification process and transparent system ensure quality service every time
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              {[
                { value: "99.2%", label: "Verified Professionals", sub: "Rigorous checks" },
                { value: "4.8★", label: "Avg Satisfaction", sub: "Customer ratings" },
                { value: "98%", label: "Issue Resolution", sub: "Within 24 hours" },
                { value: "24min", label: "Avg Response Time", sub: "Quick replies" },
              ].map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="bold-24 text-primary-600 mb-2">{metric.value}</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;