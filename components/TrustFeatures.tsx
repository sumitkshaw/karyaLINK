"use client";

import { TRUST_FEATURES } from "@/constants";

const TrustFeatures = () => {
  return (
    <section id="trust" className="section-padding bg-white">
      <div className="max-container padding-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="bold-40 lg:bold-52 text-gray-900 mb-4">
            Built on Trust & Transparency
          </h2>
          <p className="regular-20 text-gray-600">
            Every feature is designed to build and maintain trust between service providers and customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-gray-10 rounded-2xl p-6 border border-gray-100 card-hover"
            >
              {/* Feature Icon (Emoji) */}
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              {/* Feature Title */}
              <h3 className="bold-20 text-gray-900 mb-3">{feature.title}</h3>
              
              {/* Feature Description */}
              <p className="regular-14 text-gray-600 mb-4">
                {feature.description}
              </p>
              
              {/* Feature Badge */}
              <div className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
                <span>✓</span>
                <span>Trust Feature</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge Example */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="bold-32 text-gray-900 mb-4">
                Digital Reputation Card
              </h3>
              <p className="regular-18 text-gray-600 mb-6">
                Each verified provider gets a unique digital reputation card showing their verified history, ratings, and credentials.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm">Background Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm">Skill Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm">Customer Rated</span>
                </div>
              </div>
            </div>
            
            {/* Reputation Card Mockup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">👷</span>
                </div>
                <div>
                  <div className="bold-18 text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">Verified Plumber</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Experience</span>
                  <span className="text-sm font-medium">8 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Rating</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">4.8/5.0</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Jobs Completed</span>
                  <span className="text-sm font-medium">142+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Locality</span>
                  <span className="text-sm font-medium">South Delhi</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">KaryaLINK Verified ID: KL#PL789012</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;