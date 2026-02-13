"use client";

const Terms = () => {

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>By accessing and using KaryaLINK's services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
          <p className="mt-3">These terms apply to all users of the platform, including service providers (Professionals) and service seekers (Customers).</p>
        </>
      )
    },
    {
      title: "2. Service Description",
      content: (
        <>
          <p>KaryaLINK is a platform that facilitates connections between verified local service professionals and customers in Delhi. Our services include:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Background verification of service professionals</li>
            <li>Digital reputation management and tracking</li>
            <li>Booking and scheduling services</li>
            <li>Secure payment processing</li>
            <li>Dispute resolution support</li>
          </ul>
          <p className="mt-3">We act as an intermediary and do not directly provide the services booked through our platform.</p>
        </>
      )
    },
    {
      title: "3. User Registration",
      content: (
        <>
          <p>To use certain features of KaryaLINK, you must register for an account. You agree to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security of your password</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
          <p className="mt-3">We reserve the right to refuse service, terminate accounts, or remove content at our discretion.</p>
        </>
      )
    },
    {
      title: "4. Service Provider Terms",
      content: (
        <>
          <p>Service providers on KaryaLINK agree to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Complete our verification process including background checks</li>
            <li>Provide services with professionalism and skill</li>
            <li>Honor booked appointments and be punctual</li>
            <li>Use transparent pricing with no hidden charges</li>
            <li>Maintain required licenses and certifications</li>
            <li>Carry appropriate insurance where required</li>
          </ul>
          <p className="mt-3">Professionals are responsible for their own taxes and legal compliance.</p>
        </>
      )
    },
    {
      title: "5. Customer Responsibilities",
      content: (
        <>
          <p>Customers using KaryaLINK agree to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Provide accurate service requirements and location details</li>
            <li>Be present or available at the scheduled time</li>
            <li>Provide a safe working environment for professionals</li>
            <li>Make timely payments for services rendered</li>
            <li>Provide honest feedback and ratings</li>
            <li>Report any issues within 24 hours of service completion</li>
          </ul>
        </>
      )
    },
    {
      title: "6. Payments and Fees",
      content: (
        <>
          <p>All prices are displayed in Indian Rupees (₹) and include applicable taxes.</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Customers pay the quoted price through our secure payment gateway</li>
            <li>Service providers receive payments weekly, minus our service fee</li>
            <li>Our current service fee is 15% of the service value</li>
            <li>Cancellation fees may apply as per our cancellation policy</li>
            <li>Refunds are processed within 7-10 business days</li>
          </ul>
        </>
      )
    },
    {
      title: "7. Cancellation Policy",
      content: (
        <>
          <p className="font-medium text-gray-900">Customer Cancellation:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Free cancellation up to 2 hours before service</li>
            <li>50% charge for cancellations within 2 hours</li>
            <li>Full charge for no-shows or same-day cancellations</li>
          </ul>
          <p className="font-medium text-gray-900 mt-4">Provider Cancellation:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Providers must give 4 hours notice for cancellations</li>
            <li>Repeated cancellations may lead to account suspension</li>
            <li>We arrange alternative providers for cancelled bookings</li>
          </ul>
        </>
      )
    },
    {
      title: "8. Dispute Resolution",
      content: (
        <>
          <p>In case of disputes between customers and service providers:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Both parties must attempt to resolve issues directly first</li>
            <li>If unresolved, contact KaryaLINK support within 24 hours</li>
            <li>We may temporarily hold payments during investigation</li>
            <li>Our decision in disputes is final and binding</li>
            <li>Serious disputes may be referred to legal authorities</li>
          </ul>
        </>
      )
    },
    {
      title: "9. Liability Limitations",
      content: (
        <>
          <p>KaryaLINK's liability is limited to the service fee collected for the specific booking. We are not liable for:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Direct damages exceeding the service value</li>
            <li>Indirect, incidental, or consequential damages</li>
            <li>Acts or omissions of service providers</li>
            <li>Quality of services rendered by professionals</li>
            <li>Third-party tools or integrations</li>
          </ul>
        </>
      )
    },
    {
      title: "10. Modifications to Terms",
      content: (
        <>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our platform. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
          <p className="mt-3">Major changes will be communicated via email or in-app notifications.</p>
        </>
      )
    },
    {
      title: "11. Governing Law",
      content: (
        <p>These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi.</p>
      )
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-container padding-container">
        {/* Header - Light blue bubble, dark blue text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4 border border-blue-100">
            <span className="text-sm font-medium text-blue-700">Legal & Compliance</span>
          </div>
          <h1 className="bold-32 lg:bold-40 text-gray-900 mb-4 tracking-tight">
            Terms & <span className="text-blue-600">Conditions</span>
          </h1>
          <p className="regular-18 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your agreement with KaryaLINK – designed with transparency and fairness in mind.
          </p>
        </div>

       

        {/* Main content - max-w-5xl for better readability */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction card - Light blue background, dark blue accents */}
          <div className="bg-blue-50/40 rounded-2xl p-6 md:p-8 mb-10 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-700 font-serif text-xl">
                ⚖️
              </div>
              <div>
                <p className="text-gray-800 leading-relaxed text-lg font-light">
                  Welcome to KaryaLINK. These Terms & Conditions govern your use of our platform that connects verified local service professionals with customers in Delhi. By accessing or using KaryaLINK, you agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Sections - improved typography, better contrast */}
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  {/* Light blue bubble with dark blue text */}
                  <span className="text-blue-700 font-medium text-sm bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100 flex-shrink-0">
                    {section.title.split('.')[0]}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900 text-lg mb-3 leading-tight">
                      {section.title.split('.').slice(1).join('.').trim()}
                    </h2>
                    <div className="text-gray-700 text-sm md:text-base space-y-3 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;