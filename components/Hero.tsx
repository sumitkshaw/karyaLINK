"use client";

import Button from "./Button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleDownloadAndroid = () => {
    console.log("Download Android clicked");
    // Add your download logic here
  };

  const handleDownloadIOS = () => {
    console.log("Download iOS clicked");
    // Add your download logic here
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Add scroll-triggered animation for stats
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-item');
            stats.forEach((stat, index) => {
              setTimeout(() => {
                stat.classList.add('pop-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="gradient-bg overflow-hidden"
    >
      <div className="max-container padding-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-16 lg:py-20">
          {/* Left Content */}
          <div className={`flex flex-col gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full w-fit">
                <span className="text-sm font-medium">Currently Piloting in Delhi</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                </span>
              </div>
              
              <h1 className="bold-40 lg:bold-64 text-gray-900 leading-tight">
                Connecting <span className="text-primary-600">Verified</span> Local Professionals with{' '}
                <span className="relative">
                  Right-Fit Customers
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary-500 to-primary-300 rounded-full"></span>
                </span>
              </h1>
              
              <p className="regular-20 text-gray-600 lg:max-w-[90%] transition-all duration-1000 delay-300">
                KaryaLINK replaces word-of-mouth with verified trust systems for Delhi&apos;s local services. 
                Get access to trusted plumbers, electricians, and tutors with verified backgrounds.
              </p>
            </div>

            {/* Stats
            <div className="flex flex-wrap gap-6">
              {[
                { value: "100+", label: "Verified Pros", delay: "delay-100" },
                { value: "4.9★", label: "Avg Rating", delay: "delay-200" },
                { value: "12+", label: "Delhi Areas", delay: "delay-300" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`stat-item flex flex-col transition-all duration-500 opacity-0 transform -translate-y-4 ${stat.delay}`}
                >
                  <span className="bold-32 text-primary-600">
                    {stat.value}
                  </span>
                  <span className="regular-16 text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="button"
                title="Join Waitlist"
                variant="btn_primary"
                onClick={() => console.log("Join Waitlist")}
                className="transform hover:-translate-y-0.5 transition-transform duration-300 active:scale-95"
              />
              <Button 
                type="button"
                title="For Service Providers →"
                variant="btn_outline"
                onClick={() => console.log("For Service Providers")}
                className="group transform hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                icon={
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                }
              />
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="text-sm text-gray-700 font-medium flex items-center gap-2">
                <span>Get Our Mobile App</span>
                <span className="animate-bounce">👇</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownloadAndroid}
                  className="flex items-center justify-center gap-3 bg-gray-900 text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shadow-lg"
                >
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
                  className="flex items-center justify-center gap-3 bg-white text-gray-900 border border-gray-200 rounded-xl px-6 py-3 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shadow-lg"
                >
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
                🎉 Now available on Google Play and App Store
              </p>
            </div>
          </div>

          {/* Right Visual - Single Mobile Phone Mockup */}
          <div className={`relative flex justify-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-4xl p-6 md:p-8 border border-gray-100 shadow-2xl overflow-hidden max-w-md mx-auto">
              
              {/* Single Phone Mockup */}
              <div className="relative w-full max-w-xs mx-auto">
                {/* Phone Container */}
                <div className="relative w-full h-[520px] md:h-[540px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[40px] shadow-2xl mx-auto">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-b-2xl z-10"></div>
                  
                  {/* Phone Screen */}
                  <div className="absolute inset-4 bg-gradient-to-b from-white to-gray-50 rounded-3xl overflow-hidden shadow-inner">
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                          <Image
                            src="/logo-mobile.png"
                            alt="KaryaLINK"
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-lg tracking-tight">KaryaLINK</div>
                          <div className="text-xs opacity-90">Verified Services</div>
                        </div>
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 overflow-y-auto h-[380px] scrollbar-hide">
                      {/* Active Bookings */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          Active Bookings
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">2</span>
                        </h3>
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Plumbing Service</div>
                                <div className="text-xs text-gray-600">Rajesh • <span className="text-green-600 font-medium">20 min away</span></div>
                              </div>
                              <div className="text-blue-600 font-bold text-lg">→</div>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Electrical Repair</div>
                                <div className="text-xs text-gray-600">Amit • <span className="text-primary-600 font-medium">4.9★</span> • Verified</div>
                              </div>
                              <div className="text-green-600 font-bold text-lg">✓</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Services */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Services</h3>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { icon: "🚰", label: "Plumber", color: "from-blue-100 to-blue-50 text-blue-700" },
                            { icon: "⚡", label: "Electrician", color: "from-yellow-100 to-yellow-50 text-yellow-700" },
                            { icon: "📚", label: "Tutor", color: "from-purple-100 to-purple-50 text-purple-700" },
                            { icon: "🔨", label: "Repair", color: "from-orange-100 to-orange-50 text-orange-700" },
                            { icon: "🧹", label: "Clean", color: "from-green-100 to-green-50 text-green-700" },
                            { icon: "🔧", label: "Other", color: "from-gray-100 to-gray-50 text-gray-700" },
                          ].map((service, index) => (
                            <div 
                              key={index} 
                              className={`bg-gradient-to-br ${service.color} border border-gray-200 rounded-xl p-2 text-center`}
                            >
                              <div className="text-2xl mb-1">{service.icon}</div>
                              <div className="text-xs font-semibold">{service.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">App Stats</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: "5K+", label: "Users", color: "from-blue-50 to-white" },
                            { value: "4.9★", label: "Rating", color: "from-green-50 to-white" },
                            { value: "500+", label: "Daily", color: "from-purple-50 to-white" },
                          ].map((stat, index) => (
                            <div 
                              key={index} 
                              className={`bg-gradient-to-b ${stat.color} rounded-xl p-3 text-center border border-gray-100`}
                            >
                              <div className="font-bold text-gray-900 text-lg">{stat.value}</div>
                              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Coming Soon Features */}
                      <div className="mb-2">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Coming Soon</h3>
                        <div className="space-y-2">
                          {[
                            { icon: "💬", label: "Live Chat", desc: "Instant chat", color: "bg-blue-100" },
                            { icon: "📹", label: "Video Calls", desc: "Remote help", color: "bg-purple-100" },
                            { icon: "📊", label: "Analytics", desc: "Service insights", color: "bg-green-100" },
                          ].map((feature, index) => (
                            <div 
                              key={index} 
                              className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl"
                            >
                              <div className={`w-10 h-10 ${feature.color} rounded-xl flex items-center justify-center shadow-sm`}>
                                <span className="text-xl">{feature.icon}</span>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900">{feature.label}</div>
                                <div className="text-xs text-gray-600">{feature.desc}</div>
                              </div>
                              <div className="text-gray-400">→</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-inner">
                      <div className="flex justify-around p-3">
                        {[
                          { icon: "🏠", label: "Home", active: true },
                          { icon: "📅", label: "Book", active: false },
                          { icon: "👤", label: "Profile", active: false },
                          { icon: "⚙️", label: "More", active: false },
                        ].map((item, index) => (
                          <div 
                            key={index} 
                            className={`text-center ${item.active ? 'text-primary-600' : 'text-gray-400'}`}
                          >
                            <div className="text-xl mb-1">{item.icon}</div>
                            <div className={`text-xs ${item.active ? 'font-semibold' : ''}`}>{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Badges - Static, no animations */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['Live Track', 'Secure Pay', '24/7 Support', 'Reviews', 'Schedule', '+ More'].map((tab, index) => (
                  <div 
                    key={index} 
                    className={`text-xs px-3 py-1.5 rounded-full ${
                      index === 5 
                        ? 'bg-primary-100 text-primary-700 font-semibold' 
                        : 'bg-white border border-gray-200 text-gray-700'
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .pop-in {
          animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(-4px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Hero;