"use client";

const Privacy = () => {
  // Helper to render last updated date consistently
 

  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-medium text-gray-900 mb-1">Personal Information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, email address, and phone number</li>
              <li>Address and location details for service booking</li>
              <li>Profile pictures (for service providers)</li>
              <li>Payment information through secure gateways</li>
              <li>Government IDs for verification (service providers)</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900 mb-1">Service Information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Service requests and requirements</li>
              <li>Booking history and preferences</li>
              <li>Ratings and reviews given/received</li>
              <li>Communication with service professionals</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900 mb-1">Technical Information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Device information and IP address</li>
              <li>Browser type and operating system</li>
              <li>Usage data and app interactions</li>
              <li>Location data for service matching</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Provide and improve our services</li>
            <li>Verify service provider credentials</li>
            <li>Process bookings and payments</li>
            <li>Send service updates and notifications</li>
            <li>Match customers with appropriate professionals</li>
            <li>Maintain Digital Reputation Cards</li>
            <li>Resolve disputes and provide support</li>
            <li>Ensure platform safety and security</li>
            <li>Send promotional communications (with consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      )
    },
    {
      title: "3. Information Sharing",
      content: (
        <>
          <p>We share information in these limited circumstances:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>With Service Professionals:</strong> Necessary contact and location details for service completion</li>
            <li><strong>With Customers:</strong> Service provider profiles, ratings, and verification status</li>
            <li><strong>With Payment Processors:</strong> Required payment information for transaction processing</li>
            <li><strong>With Legal Authorities:</strong> When required by law or to protect rights and safety</li>
            <li><strong>During Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
          </ul>
          <p className="mt-3 font-medium text-blue-800">We do not sell your personal information to third parties.</p>
        </>
      )
    },
    {
      title: "4. Data Security",
      content: (
        <>
          <p>We implement appropriate security measures including:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>SSL encryption for data transmission</li>
            <li>Secure payment gateway integration</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and authentication</li>
            <li>Data backup and recovery systems</li>
            <li>Employee privacy training</li>
          </ul>
          <p className="mt-3 text-sm italic">While we strive to protect your information, no system is 100% secure. Please use strong passwords and notify us immediately of any security concerns.</p>
        </>
      )
    },
    {
      title: "5. Data Retention",
      content: (
        <>
          <p>We retain your information for as long as necessary to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Provide services you request</li>
            <li>Maintain business records</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Improve our services</li>
          </ul>
          <p className="mt-3">Inactive accounts are deactivated after 24 months, with data anonymized after 36 months.</p>
        </>
      )
    },
    {
      title: "6. Your Rights and Choices",
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data (subject to legal requirements)</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Export your data in machine-readable format</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 text-sm">
            To exercise these rights, contact us at <a href="mailto:contact.karyalink@gmail.com" className="text-blue-700 font-medium hover:underline">contact.karyalink@gmail.com</a>
          </div>
        </>
      )
    },
    {
      title: "7. Cookies and Tracking",
      content: (
        <>
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Remember your preferences and settings</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Improve user experience</li>
            <li>Personalize content and recommendations</li>
            <li>Enable certain features and functions</li>
          </ul>
          <p className="mt-3">You can control cookies through your browser settings, but disabling them may affect platform functionality.</p>
        </>
      )
    },
    {
      title: "8. Third-Party Services",
      content: (
        <>
          <p>Our platform may integrate with third-party services including:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Payment gateways (Razorpay, Stripe)</li>
            <li>Map services (Google Maps)</li>
            <li>Analytics tools (Google Analytics)</li>
            <li>Communication platforms (WhatsApp, SMS)</li>
          </ul>
          <p className="mt-3">These services have their own privacy policies. We encourage you to review them.</p>
        </>
      )
    },
    {
      title: "9. Children's Privacy",
      content: (
        <>
          <p>KaryaLINK is not intended for users under 18 years of age. We do not knowingly collect information from children. If we become aware of such collection, we will take steps to delete the information.</p>
          <p className="mt-3">Parents or guardians who believe their child has provided us with personal information should contact us immediately.</p>
        </>
      )
    },
    {
      title: "10. Policy Updates",
      content: (
        <>
          <p>We may update this Privacy Policy periodically. We will notify you of significant changes through:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Email notifications to registered users</li>
            <li>In-app notifications and banners</li>
            <li>Updated "last updated" date on this page</li>
          </ul>
          <p className="mt-3">Continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </>
      )
    },
    {
      title: "11. Important Notice",
      content: (
        <p>
          By using KaryaLINK's services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with any part of this policy, please do not use our services.
        </p>
      )
    }
  ];


  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-container padding-container">
        {/* Header - Light blue bubble, dark blue text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4 border border-blue-100">
            <span className="text-sm font-medium text-blue-700">Data & Privacy</span>
          </div>
          <h1 className="bold-32 lg:bold-40 text-gray-900 mb-4 tracking-tight">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="regular-18 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your privacy matters. We are committed to transparency in how we collect and use your data.
          </p>
        </div>

        

        {/* Main content - max-w-5xl for better readability */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction card - Light blue background, dark blue accents */}
          <div className="bg-blue-50/40 rounded-2xl p-6 md:p-8 mb-10 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-700 font-serif text-xl">
                🛡️
              </div>
              <div>
                <p className="text-gray-800 leading-relaxed text-lg font-light">
                  At KaryaLINK, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform to connect with verified local service professionals in Delhi.
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

          {/* Last updated subtle badge */}
          
        </div>
      </div>
    </section>
  );
};

export default Privacy;