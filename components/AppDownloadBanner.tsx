"use client";

import Image from "next/image";

const AppDownloadBanner = () => {
  const handleAndroidDownload = () => {
    console.log("Android Download clicked");
    window.open("https://play.google.com/store/apps/details?id=com.karyalink", "_blank");
  };

  const handleIOSDownload = () => {
    console.log("iOS Download clicked");
    window.open("https://apps.apple.com/app/karyalink", "_blank");
  };

  const services = [
    { name: "Plumbing", icon: "🚰", color: "bg-blue-100 text-blue-700" },
    { name: "Electrician", icon: "⚡", color: "bg-yellow-100 text-yellow-700" },
    { name: "Chef", icon: "👨‍🍳", color: "bg-red-100 text-red-700" },
    { name: "Tutor", icon: "📚", color: "bg-purple-100 text-purple-700" },
    { name: "Cleaning", icon: "🧹", color: "bg-green-100 text-green-700" },
    { name: "Carpenter", icon: "🔨", color: "bg-orange-100 text-orange-700" },
  ];

  const digitalCards = [
    { name: "Rajesh Kumar", role: "Verified Plumber", rating: "4.8★", jobs: "142+", color: "bg-blue-50" },
    { name: "Priya Sharma", role: "Certified Electrician", rating: "4.9★", jobs: "89+", color: "bg-yellow-50" },
    { name: "Amit Patel", role: "Expert Chef", rating: "4.7★", jobs: "67+", color: "bg-red-50" },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-container padding-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-16">
          {/* Content Side */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="bold-32 lg:bold-40 text-gray-900 mb-4">
                Download the <span className="text-primary-600">KaryaLINK</span> App
              </h2>
              <p className="regular-18 text-gray-600 mb-6 leading-relaxed">
                Access Delhi's most trusted local services platform. Book verified professionals, 
                track in real-time, and manage all your service needs from one app.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="bold-20 text-gray-900">Available Services:</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {services.map((service) => (
                  <div 
                    key={service.name} 
                    className={`${service.color} rounded-lg p-3 text-center border border-gray-100`}
                  >
                    <div className="text-2xl mb-1">{service.icon}</div>
                    <div className="text-xs font-medium">{service.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAndroidDownload} 
                  className="flex items-center gap-4 bg-gray-900 text-white rounded-xl px-6 py-4 hover:bg-gray-800 transition-colors"
                >
                  {/* Android Logo SVG */}
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6"
                  >
                    <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.78-1.14-6.09-1.14-8.87,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.66,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
                  </svg>
                  
                  <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="font-bold text-lg">Google Play</div>
                  </div>
                </button>
                
                <button 
                  onClick={handleIOSDownload} 
                  className="flex items-center gap-4 bg-white text-gray-900 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Apple Logo SVG */}
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6"
                  >
                    <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.76,3.28-.76,2,.76,3.3.73,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/>
                  </svg>
                  
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="font-bold text-lg">App Store</div>
                  </div>
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">4.9/5</div>
                  <div className="text-xs text-gray-500">from 2,500+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Mockup */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[36px] p-4 shadow-xl">
                {/* Phone Screen */}
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden">
                  {/* App Screenshot */}
                  <div className="aspect-[9/19] relative">
                    {/* Mockup Content */}
                    <div className="absolute inset-0 p-4">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                          <Image
                            src="/logo-mobile.png"
                            alt="KaryaLINK"
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <div className="text-gray-900">
                          <div className="font-bold text-base">KaryaLINK</div>
                          <div className="text-xs text-gray-500">Verified Services</div>
                        </div>
                      </div>
                      
                      {/* Digital Cards Section */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-semibold text-gray-900">Top Professionals</h4>
                          <div className="text-xs text-primary-600 font-medium">View All</div>
                        </div>
                        <div className="space-y-3">
                          {digitalCards.map((card, index) => (
                            <div 
                              key={index} 
                              className={`${card.color} rounded-xl p-3 border border-gray-100`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-sm font-semibold text-gray-900">{card.name}</div>
                                <div className="text-sm font-bold text-yellow-600">{card.rating}</div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="text-xs text-gray-600">{card.role}</div>
                                <div className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded-full">
                                  {card.jobs} jobs
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Categories */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Book a Service</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
                            <div className="text-2xl mb-2">🚰</div>
                            <div className="text-xs font-medium">Plumbing</div>
                          </div>
                          <div className="bg-yellow-50 rounded-xl p-3 text-center border border-yellow-100">
                            <div className="text-2xl mb-2">⚡</div>
                            <div className="text-xs font-medium">Electrician</div>
                          </div>
                          <div className="bg-red-50 rounded-xl p-3 text-center border border-red-100">
                            <div className="text-2xl mb-2">👨‍🍳</div>
                            <div className="text-xs font-medium">Chef</div>
                          </div>
                          <div className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
                            <div className="text-2xl mb-2">🧹</div>
                            <div className="text-xs font-medium">Cleaning</div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
                        <div className="flex justify-around">
                          <div className="text-center">
                            <div className="text-primary-600 text-xl">🏠</div>
                            <div className="text-xs text-primary-600 font-medium">Home</div>
                          </div>
                          <div className="text-center">
                            <div className="text-gray-400 text-xl">📅</div>
                            <div className="text-xs text-gray-400">Bookings</div>
                          </div>
                          <div className="text-center">
                            <div className="text-gray-400 text-xl">👤</div>
                            <div className="text-xs text-gray-400">Profile</div>
                          </div>
                          <div className="text-center">
                            <div className="text-gray-400 text-xl">⚙️</div>
                            <div className="text-xs text-gray-400">More</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-800 rounded-b-xl"></div>
              </div>
              
              {/* Floating Elements - Minimal */}
              <div className="absolute -top-4 -right-4 bg-primary-600 text-white rounded-lg p-3 border border-white">
                <div className="text-center">
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-xs">Daily Users</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-lg p-3 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <div className="font-bold text-lg">4.9★</div>
                  <div className="text-xs">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;