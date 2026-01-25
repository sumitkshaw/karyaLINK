"use client";

import { useState, useEffect, useRef } from "react";
import { HOW_IT_WORKS } from "@/constants";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && isMobile) {
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.children[0]?.clientWidth || 0;
        const gap = 32;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));
        
        if (newIndex >= 0 && newIndex < HOW_IT_WORKS.length) {
          setActiveStep(newIndex);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    if (scrollContainerRef.current && isMobile) {
      const container = scrollContainerRef.current;
      const card = container.children[index] as HTMLElement;
      const cardWidth = card.offsetWidth;
      const gap = 32;
      const scrollPosition = index * (cardWidth + gap) - (container.offsetWidth - cardWidth) / 2;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollNext = () => {
    if (activeStep < HOW_IT_WORKS.length - 1) {
      scrollToStep(activeStep + 1);
    }
  };

  const scrollPrev = () => {
    if (activeStep > 0) {
      scrollToStep(activeStep - 1);
    }
  };

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-container padding-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="bold-40 lg:bold-52 text-gray-900 mb-4">
            How KaryaLINK <span className="text-primary-600">Works</span>
          </h2>
          <p className="regular-20 text-gray-600">
            Three simple steps to transform how Delhi finds trusted local services
          </p>
        </div>

        {/* Mobile Steps Indicator Only - No arrows here */}
        {isMobile && (
          <div className="flex justify-center gap-3 mb-8">
            {HOW_IT_WORKS.map((step, index) => (
              <button
                key={step.number}
                onClick={() => scrollToStep(index)}
                className={`w-10 h-2 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-primary-600 w-12' 
                    : 'bg-gray-200'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Steps Container with arrows only on sides */}
        <div className="relative">
          {/* Mobile Arrows only beside cards */}
          {isMobile && (
            <>
              <button
                onClick={scrollPrev}
                disabled={activeStep === 0}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 z-10 ${
                  activeStep === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:bg-gray-50'
                }`}
                aria-label="Previous step"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={scrollNext}
                disabled={activeStep === HOW_IT_WORKS.length - 1}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 z-10 ${
                  activeStep === HOW_IT_WORKS.length - 1
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:bg-gray-50'
                }`}
                aria-label="Next step"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div 
            ref={scrollContainerRef}
            className="md:grid md:grid-cols-3 gap-8 lg:gap-12 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide"
            style={{
              display: isMobile ? 'flex' : 'grid',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {HOW_IT_WORKS.map((step, index) => (
              <div 
                key={step.number} 
                className={`
                  relative flex-shrink-0 w-full md:flex-shrink md:w-auto 
                  snap-center md:snap-none
                  ${isMobile ? 'min-w-[85vw] mx-4 first:ml-0 last:mr-0' : ''}
                `}
              >
                <div 
                  className={`
                    relative flex flex-col items-center text-center p-8 rounded-3xl 
                    bg-gradient-to-b from-gray-10 to-white 
                    border border-gray-100 
                    transition-all duration-300
                    ${activeStep === index && isMobile ? 'ring-2 ring-primary-100 shadow-lg' : 'shadow-sm hover:shadow-md'}
                    h-full
                  `}
                >
                  {/* Step Number Badge */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center shadow-sm">
                      <span className="bold-40 text-primary-700">{step.number}</span>
                    </div>
                    
                    {/* Decorative circles */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-200 opacity-50"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary-300 opacity-30"></div>
                  </div>
                  
                  {/* Step Icon */}
                  <div className="text-5xl mb-6">{step.icon}</div>
                  
                  {/* Step Title */}
                  <h3 className="bold-24 text-gray-900 mb-6">{step.title}</h3>
                  
                  {/* Step Description - Enhanced */}
                  <div className="space-y-4 mb-8">
                    <p className="regular-16 text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Additional details for each step */}
                    {index === 0 && (
                      <div className="text-left bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <p className="regular-14 text-gray-600">
                          • Browse 100+ verified professionals<br/>
                          • Filter by rating, distance & availability<br/>
                          • View complete work history
                        </p>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="text-left bg-green-50 rounded-xl p-4 border border-green-100">
                        <p className="regular-14 text-gray-600">
                          • See real-time availability<br/>
                          • Transparent pricing upfront<br/>
                          • Secure instant booking
                        </p>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="text-left bg-purple-50 rounded-xl p-4 border border-purple-100">
                        <p className="regular-14 text-gray-600">
                          • Live tracking & updates<br/>
                          • Multiple secure payment options<br/>
                          • Leave ratings & reviews
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Step Benefits */}
                  <div className="w-full mt-auto">
                    <div className="flex flex-wrap justify-center gap-2">
                      {step.benefits?.map((benefit, benefitIndex) => (
                        <span 
                          key={benefitIndex} 
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    
                    {/* Estimated time */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">
                        {index === 0 && "Typically takes 2-3 minutes"}
                        {index === 1 && "Instant booking confirmation"}
                        {index === 2 && "Real-time service updates"}
                      </p>
                    </div>
                  </div>
                  
                  {/* Desktop Connector Line (not for last item) */}
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary-200 to-primary-100"></div>
                      <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Instructions */}
        {isMobile && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Swipe or tap arrows to navigate
            </p>
          </div>
        )}

        {/* Current Step Counter (Mobile) */}
        {isMobile && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="text-sm text-gray-500">
              Step <span className="font-bold text-primary-600">{activeStep + 1}</span> of {HOW_IT_WORKS.length}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <div className="text-left">
              <h3 className="bold-24 text-gray-900 mb-2">Ready to Experience Better Services?</h3>
              <p className="regular-16 text-gray-600">
                Join thousands of Delhi residents who trust KaryaLINK for their daily needs
              </p>
            </div>
            <button 
              onClick={() => console.log("Get Started clicked")}
              className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-300 whitespace-nowrap"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        
        .snap-center {
          scroll-snap-align: center;
        }
        
        @media (min-width: 768px) {
          .snap-x {
            scroll-snap-type: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;