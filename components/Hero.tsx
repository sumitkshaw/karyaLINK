"use client";

import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  const handleDownloadAndroid = () => {
    console.log("Download Android clicked");
    // Add your download logic here
  };

  const handleDownloadIOS = () => {
    console.log("Download iOS clicked");
    // Add your download logic here
  };

  return (
    <section id="hero" className="gradient-bg overflow-hidden">
      <div className="max-container padding-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-16 lg:py-20">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full w-fit">
                <span className="text-sm font-medium">Currently Piloting in Delhi</span>
              </div>
              
              <h1 className="bold-40 lg:bold-64 text-gray-900 leading-tight">
                Connecting Verified Local Professionals with Right-Fit Customers
              </h1>
              
              <p className="regular-20 text-gray-600 lg:max-w-[90%]">
                KaryaLINK replaces word-of-mouth with verified trust systems for Delhi&apos;s local services. 
                Get access to trusted plumbers, electricians, and tutors with verified backgrounds.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="bold-32 text-primary-600">100+</span>
                <span className="regular-16 text-gray-600">Verified Pros</span>
              </div>
              <div className="flex flex-col">
                <span className="bold-32 text-primary-600">4.9★</span>
                <span className="regular-16 text-gray-600">Avg Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="bold-32 text-primary-600">12+</span>
                <span className="regular-16 text-gray-600">Delhi Areas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="button"
                title="Join Waitlist"
                variant="btn_primary"
                onClick={() => console.log("Join Waitlist")}
              />
              <Button 
                type="button"
                title="For Service Providers →"
                variant="btn_outline"
                onClick={() => console.log("For Service Providers")}
              />
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="text-sm text-gray-700 font-medium">Get Our Mobile App:</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownloadAndroid}
                  className="flex items-center justify-center gap-3 bg-gray-900 text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition-colors"
                >
                  {/* Android SVG Icon */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.78-1.14-6.09-1.14-8.87,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.66,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
                  </svg>
                  <span className="font-medium">Download for Android</span>
                </button>
                <button
                  onClick={handleDownloadIOS}
                  className="flex items-center justify-center gap-3 bg-gray-100 text-gray-900 border border-gray-200 rounded-xl px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  {/* Apple SVG Icon */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.76,3.28-.76,2,.76,3.3.73,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/>
                  </svg>
                  <span className="font-medium">Download for iOS</span>
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Available on Google Play and App Store
              </p>
            </div>
          </div>

          {/* Right Visual - Single Mobile Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-4xl p-6 md:p-8 card-hover border border-gray-100 shadow-xl overflow-hidden max-w-md mx-auto">
              
              {/* Single Phone Mockup */}
              <div className="relative w-full max-w-xs mx-auto">
                {/* Phone Container */}
                <div className="relative w-full h-[520px] md:h-[540px] bg-gray-900 rounded-[40px] shadow-2xl mx-auto">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  
                  {/* Phone Screen */}
                  <div className="absolute inset-4 bg-white rounded-3xl overflow-hidden">
                    {/* App Header */}
                    <div className="bg-primary-600 text-white p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <Image
                            src="/logo-mobile.png"
                            alt="KaryaLINK"
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-lg">KaryaLINK</div>
                          <div className="text-xs opacity-90">Verified Services</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 overflow-y-auto h-[380px]">
                      {/* Active Bookings */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Active Bookings</h3>
                        <div className="space-y-3">
                          <div className="bg-blue-50 rounded-xl p-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Plumbing Service</div>
                                <div className="text-xs text-gray-600">Rajesh • 20 min away</div>
                              </div>
                              <div className="text-green-600 font-bold text-lg">→</div>
                            </div>
                          </div>
                          <div className="bg-yellow-50 rounded-xl p-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Electrical Repair</div>
                                <div className="text-xs text-gray-600">Amit • 4.9★ • Verified</div>
                              </div>
                              <div className="text-primary-600 font-bold text-lg">✓</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Services - Shorter Labels */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Services</h3>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { icon: "🚰", label: "Plumber", color: "bg-blue-100 text-blue-700" },
                            { icon: "⚡", label: "Electrician", color: "bg-yellow-100 text-yellow-700" },
                            { icon: "📚", label: "Tutor", color: "bg-purple-100 text-purple-700" },
                            { icon: "🔨", label: "Repair", color: "bg-orange-100 text-orange-700" },
                            { icon: "🧹", label: "Clean", color: "bg-green-100 text-green-700" },
                            { icon: "🔧", label: "Other", color: "bg-gray-100 text-gray-700" },
                          ].map((service, index) => (
                            <div key={index} className={`${service.color} rounded-lg p-2 text-center`}>
                              <div className="text-xl">{service.icon}</div>
                              <div className="text-xs font-medium mt-1">{service.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">App Stats</h3>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center bg-blue-50 rounded-lg p-2">
                            <div className="font-bold text-primary-600 text-sm">5K+</div>
                            <div className="text-xs text-gray-600">Users</div>
                          </div>
                          <div className="text-center bg-green-50 rounded-lg p-2">
                            <div className="font-bold text-green-600 text-sm">4.9★</div>
                            <div className="text-xs text-gray-600">Rating</div>
                          </div>
                          <div className="text-center bg-purple-50 rounded-lg p-2">
                            <div className="font-bold text-purple-600 text-sm">500+</div>
                            <div className="text-xs text-gray-600">Daily</div>
                          </div>
                        </div>
                      </div>

                      {/* Coming Soon Features */}
                      <div className="mb-2">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Coming Soon</h3>
                        <div className="space-y-2">
                          {[
                            { icon: "💬", label: "Live Chat", desc: "Instant chat" },
                            { icon: "📹", label: "Video Calls", desc: "Remote help" },
                            { icon: "📊", label: "Analytics", desc: "Service insights" },
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <span className="text-lg">{feature.icon}</span>
                              </div>
                              <div>
                                <div className="text-xs font-medium text-gray-900">{feature.label}</div>
                                <div className="text-xs text-gray-600">{feature.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                      <div className="flex justify-around p-3">
                        <div className="text-center text-primary-600">
                          <div className="text-lg">🏠</div>
                          <div className="text-xs font-medium">Home</div>
                        </div>
                        <div className="text-center text-gray-400">
                          <div className="text-lg">📅</div>
                          <div className="text-xs">Book</div>
                        </div>
                        <div className="text-center text-gray-400">
                          <div className="text-lg">👤</div>
                          <div className="text-xs">Profile</div>
                        </div>
                        <div className="text-center text-gray-400">
                          <div className="text-lg">⚙️</div>
                          <div className="text-xs">More</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Badges - Simplified */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['Live Track', 'Secure Pay', '24/7 Support', 'Reviews', 'Schedule'].map((tab, index) => (
                  <div key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                    {tab}
                  </div>
                ))}
                <div className="text-xs bg-primary-100 text-primary-700 px-3 py-1.5 rounded-full">
                  + More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero