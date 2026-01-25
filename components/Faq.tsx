"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is KaryaLINK?",
          a: "KaryaLINK is a trusted platform connecting Delhi residents with verified local service professionals. We replace unreliable word-of-mouth recommendations with a transparent system of verified backgrounds, ratings, and work history for plumbers, electricians, tutors, and other local services."
        },
        {
          q: "Which areas in Delhi do you serve?",
          a: "We're currently piloting in 12+ Delhi localities including South Delhi, Central Delhi, West Delhi, Dwarka, Mayur Vihar, GK, and surrounding areas. Our coverage is expanding rapidly across the city."
        },
        {
          q: "How is KaryaLINK different from other service platforms?",
          a: "Unlike other platforms, every professional on KaryaLINK undergoes rigorous background verification, skill certification, and customer feedback validation. We provide complete transparency through Digital Reputation Cards showing work history, ratings, and verified credentials."
        }
      ]
    },
    {
      category: "For Customers",
      questions: [
        {
          q: "How do I book a service professional?",
          a: "1. Browse verified professionals in your area\n2. Check their Digital Reputation Card with ratings and work history\n3. Select your preferred time slot\n4. Book instantly with transparent pricing\n5. Track service in real-time\n6. Pay securely after service completion"
        },
        {
          q: "Are the prices fixed or negotiable?",
          a: "All prices on KaryaLINK are transparent and fixed upfront. You'll see the exact cost before booking, with no hidden charges. Our pricing is competitive and includes service guarantees."
        },
        {
          q: "What if I'm not satisfied with the service?",
          a: "Your satisfaction is guaranteed. If you're not happy with the service, we offer:\n• Free re-service within 7 days\n• Dispute resolution support\n• Refund processing within 24 hours\n• Dedicated customer support"
        },
        {
          q: "How do I track my service booking?",
          a: "After booking, you can track your service professional in real-time through the KaryaLINK app. You'll receive live location updates, estimated arrival time, and service progress notifications."
        }
      ]
    },
    {
      category: "For Service Professionals",
      questions: [
        {
          q: "How do I join KaryaLINK as a service provider?",
          a: "1. Submit your application with basic details\n2. Complete our verification process (background check & skill assessment)\n3. Create your Digital Reputation Card\n4. Get onboarded and start receiving verified customer requests\n5. Build your reputation through ratings and reviews"
        },
        {
          q: "What verification process do professionals undergo?",
          a: "Our 4-step verification includes:\n• Identity verification (Aadhar/PAN)\n• Background check\n• Skill certification assessment\n• Previous work history validation\nOnly 20% of applicants pass our strict verification standards."
        },
        {
          q: "How does payment work for professionals?",
          a: "• Secure payments through the platform\n• Weekly settlements directly to your bank account\n• Transparent commission structure\n• No hidden charges or deductions\n• Payment protection for completed services"
        },
        {
          q: "Can I see customer reviews before accepting a job?",
          a: "Yes, you can view customer profiles and their service history before accepting bookings. This helps you choose jobs that match your expertise and maintain your high ratings."
        }
      ]
    },
    {
      category: "Safety & Trust",
      questions: [
        {
          q: "How do you ensure the safety of customers?",
          a: "• All professionals are background verified\n• Live location tracking during service\n• In-app SOS button for emergencies\n• Service recorded with time stamps\n• Customer feedback system\n• Dispute resolution mechanism"
        },
        {
          q: "What is a Digital Reputation Card?",
          a: "Each verified professional has a unique Digital Reputation Card showing:\n• Verified identity and skills\n• Complete work history\n• Customer ratings and reviews\n• Response time and completion rate\n• Specializations and certifications\n• Trust score (out of 10)"
        },
        {
          q: "Are payments secure on KaryaLINK?",
          a: "Yes, we use bank-grade encryption and secure payment gateways. Payments are processed only after service completion, and we offer payment protection for both customers and professionals."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          q: "How do I download the KaryaLINK app?",
          a: "The app is available on both Google Play Store and Apple App Store. Search for 'KaryaLINK' or use the download buttons on our website."
        },
        {
          q: "Is there a customer support number?",
          a: "We provide priority support through:\n• In-app chat support (24/7)\n• Email: contact.karyalink@gmail.com\n• WhatsApp business: Coming soon\n• Dedicated helpline for pilot users"
        },
        {
          q: "What if I face technical issues with the app?",
          a: "Our tech support team is available 24/7 through:\n• In-app support chat\n• Email support\n• Remote troubleshooting\n• Regular app updates with bug fixes"
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-container padding-container">
        {/* Header - Reduced spacing */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Questions & Answers</span>
          </div>
          <h1 className="bold-32 lg:bold-40 text-gray-900 mb-4">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h1>
          <p className="regular-18 text-gray-600">
            Everything you need to know about KaryaLINK's trusted local services platform
          </p>
        </div>

        {/* FAQ Categories - Reduced gap */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {faqs.slice(0, 3).map((category, categoryIndex) => (
              <div key={category.category} className="space-y-3">
                <h2 className="bold-20 text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                    const index = categoryIndex * 10 + faqIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div 
                        key={faq.q} 
                        className="bg-white rounded-lg border border-gray-100 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full p-5 text-left flex items-center justify-between"
                        >
                          <h3 className="font-medium text-gray-900 pr-8 text-sm md:text-base">{faq.q}</h3>
                          <svg 
                            className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary-600' : 'text-gray-400'}`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-5 pt-0">
                            <div className="text-gray-600 whitespace-pre-line leading-relaxed text-sm md:text-base">
                              {faq.a}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {faqs.slice(3).map((category, categoryIndex) => (
              <div key={category.category} className="space-y-3">
                <h2 className="bold-20 text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                    const index = (categoryIndex + 3) * 10 + faqIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div 
                        key={faq.q} 
                        className="bg-white rounded-lg border border-gray-100 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full p-5 text-left flex items-center justify-between"
                        >
                          <h3 className="font-medium text-gray-900 pr-8 text-sm md:text-base">{faq.q}</h3>
                          <svg 
                            className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary-600' : 'text-gray-400'}`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-5 pt-0">
                            <div className="text-gray-600 whitespace-pre-line leading-relaxed text-sm md:text-base">
                              {faq.a}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Contact section - Simplified */}
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600">💬</span>
                </div>
                <div>
                  <h3 className="bold-18 text-gray-900 mb-1">Still have questions?</h3>
                  <p className="text-sm text-gray-600">We're here to help</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-sm">✉️</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Email Support</div>
                    <a href="mailto:contact.karyalink@gmail.com" className="text-sm text-primary-600">
                      contact.karyalink@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Simplified */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "99.2%", label: "Verified Pros" },
            { value: "4.8★", label: "Avg Rating" },
            { value: "24 min", label: "Response Time" },
            { value: "98%", label: "Resolution Rate" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="bold-20 text-primary-600 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;