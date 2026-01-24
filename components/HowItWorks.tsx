"use client";

import { HOW_IT_WORKS } from "@/constants";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-container padding-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="bold-40 lg:bold-52 text-gray-900 mb-4">
            How KaryaLINK Works
          </h2>
          <p className="regular-20 text-gray-600">
            Three simple steps to transform how Delhi finds trusted local services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {HOW_IT_WORKS.map((step, index) => (
            <div 
              key={step.number} 
              className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-gray-10 border border-gray-100 card-hover"
            >
              {/* Step Number */}
              <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <span className="bold-32 text-primary-600">{step.number}</span>
              </div>
              
              {/* Step Icon (Emoji) */}
              <div className="text-4xl mb-4">{step.icon}</div>
              
              {/* Step Title */}
              <h3 className="bold-24 text-gray-900 mb-4">{step.title}</h3>
              
              {/* Step Description */}
              <p className="regular-16 text-gray-600 mb-6">{step.description}</p>
              
              {/* Connector Line (not for last item) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-primary-200" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary-50 rounded-2xl px-8 py-6">
            <p className="regular-20 text-gray-900 mb-4">
              Ready to experience trusted local services?
            </p>
            <button className="btn_primary px-8 py-3">
              Join Our Delhi Pilot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;