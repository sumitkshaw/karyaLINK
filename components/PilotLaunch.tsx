"use client";

import { PILOT_AREAS } from "@/constants";
import Button from "./Button";
import Image from "next/image";

const PilotLaunch = () => {
  return (
    <section id="pilot" className="section-padding bg-gradient-to-br from-gray-10 to-gray-50">
      <div className="max-container padding-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">🚀 Limited Time Offer</span>
            </div>
            
            <h2 className="bold-40 lg:bold-52 text-gray-900 mb-6">
              Currently Piloting in Select Delhi Localities
            </h2>
            
            <p className="regular-20 text-gray-600 mb-8">
              Be among the first to experience verified local services in your area. 
              Join our exclusive Delhi pilot program and get priority access to trusted professionals.
            </p>
            
            {/* Pilot Areas */}
            <div className="mb-8">
              <h3 className="bold-20 text-gray-900 mb-4">Available in these areas:</h3>
              <div className="flex flex-wrap gap-3">
                {PILOT_AREAS.map((area) => (
                  <div 
                    key={area} 
                    className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="button"
                title="Join Delhi Waitlist"
                variant="btn_primary"
                onClick={() => console.log("Join Waitlist clicked")}
              />
              <Button 
                type="button"
                title="For Service Providers →"
                variant="btn_outline"
                onClick={() => console.log("Service Providers clicked")}
              />
            </div>
            
            {/* Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm">Early Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm">Priority Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm">Special Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm">Beta Features</span>
              </div>
            </div>
          </div>
          
          {/* Map Section with map.png background */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl overflow-hidden">
              {/* Map Background */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/map.png"
                  alt="Delhi Map"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay to make map slightly transparent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-white/20" />
                
                {/* Delhi Area Dots */}
                <div className="absolute inset-0">
                  {[
                    { top: '20%', left: '40%', area: 'South Delhi' },
                    { top: '30%', left: '60%', area: 'GK' },
                    { top: '40%', left: '30%', area: 'Dwarka' },
                    { top: '50%', left: '50%', area: 'Mayur Vihar' },
                    { top: '60%', left: '70%', area: 'Noida' },
                    { top: '70%', left: '45%', area: 'Gurugram' },
                  ].map((dot, index) => (
                    <div key={index} className="absolute">
                      {/* Connection Dot */}
                      <div
                        className={`absolute w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow-lg animate-pulse`}
                        style={{ top: dot.top, left: dot.left }}
                      >
                        {/* Area Label */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1.5 rounded-lg shadow-md text-xs font-medium text-gray-900">
                          {dot.area}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="40%" y1="20%" x2="50%" y2="50%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" opacity="0.8" />
                  <line x1="60%" y1="30%" x2="50%" y2="50%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" opacity="0.8" />
                  <line x1="30%" y1="40%" x2="50%" y2="50%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" opacity="0.8" />
                  <line x1="70%" y1="60%" x2="50%" y2="50%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" opacity="0.8" />
                  <line x1="45%" y1="70%" x2="50%" y2="50%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" opacity="0.8" />
                </svg>
                
                {/* Center Hub (KaryaLINK) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <Image
                    src="/logo-mobile.png"
                    alt="KaryaLINK"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div> {/* ← THIS DIV WAS MISSING */}
              
              {/* Stats Overlay */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-blue-50 rounded-xl p-4">
                  <div className="bold-20 text-primary-600 mb-1">500+</div>
                  <div className="text-xs text-gray-600">Early Signups</div>
                </div>
                <div className="text-center bg-orange-50 rounded-xl p-4">
                  <div className="bold-20 text-orange-600 mb-1">12</div>
                  <div className="text-xs text-gray-600">Delhi Areas</div>
                </div>
                <div className="text-center bg-green-50 rounded-xl p-4">
                  <div className="bold-20 text-green-600 mb-1">94%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">🚀</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Pilot Phase</div>
                  <div className="text-xs text-gray-500">Limited spots available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotLaunch;