"use client";

const Terms = () => {
  return (
    <section className="pt-12 pb-16 bg-white">
      <div className="max-container padding-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="bold-32 lg:bold-40 text-gray-900 mb-4">
            Terms & <span className="text-primary-600">Conditions</span>
          </h1>
          <p className="regular-18 text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-gray-600 leading-relaxed">
              Welcome to KaryaLINK. These Terms & Conditions govern your use of our platform that connects verified local service professionals with customers in Delhi. By accessing or using KaryaLINK, you agree to be bound by these terms.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>By accessing and using KaryaLINK's services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
                <p>These terms apply to all users of the platform, including service providers (Professionals) and service seekers (Customers).</p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">2. Service Description</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>KaryaLINK is a platform that facilitates connections between verified local service professionals and customers in Delhi. Our services include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Background verification of service professionals</li>
                  <li>Digital reputation management and tracking</li>
                  <li>Booking and scheduling services</li>
                  <li>Secure payment processing</li>
                  <li>Dispute resolution support</li>
                </ul>
                <p>We act as an intermediary and do not directly provide the services booked through our platform.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">3. User Registration</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>To use certain features of KaryaLINK, you must register for an account. You agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
                <p>We reserve the right to refuse service, terminate accounts, or remove content at our discretion.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">4. Service Provider Terms</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Service providers on KaryaLINK agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Complete our verification process including background checks</li>
                  <li>Provide services with professionalism and skill</li>
                  <li>Honor booked appointments and be punctual</li>
                  <li>Use transparent pricing with no hidden charges</li>
                  <li>Maintain required licenses and certifications</li>
                  <li>Carry appropriate insurance where required</li>
                </ul>
                <p>Professionals are responsible for their own taxes and legal compliance.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">5. Customer Responsibilities</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Customers using KaryaLINK agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate service requirements and location details</li>
                  <li>Be present or available at the scheduled time</li>
                  <li>Provide a safe working environment for professionals</li>
                  <li>Make timely payments for services rendered</li>
                  <li>Provide honest feedback and ratings</li>
                  <li>Report any issues within 24 hours of service completion</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">6. Payments and Fees</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>All prices are displayed in Indian Rupees (₹) and include applicable taxes.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Customers pay the quoted price through our secure payment gateway</li>
                  <li>Service providers receive payments weekly, minus our service fee</li>
                  <li>Our current service fee is 15% of the service value</li>
                  <li>Cancellation fees may apply as per our cancellation policy</li>
                  <li>Refunds are processed within 7-10 business days</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">7. Cancellation Policy</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><strong>Customer Cancellation:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Free cancellation up to 2 hours before service</li>
                  <li>50% charge for cancellations within 2 hours</li>
                  <li>Full charge for no-shows or same-day cancellations</li>
                </ul>
                <p><strong>Provider Cancellation:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Providers must give 4 hours notice for cancellations</li>
                  <li>Repeated cancellations may lead to account suspension</li>
                  <li>We arrange alternative providers for cancelled bookings</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">8. Dispute Resolution</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>In case of disputes between customers and service providers:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Both parties must attempt to resolve issues directly first</li>
                  <li>If unresolved, contact KaryaLINK support within 24 hours</li>
                  <li>We may temporarily hold payments during investigation</li>
                  <li>Our decision in disputes is final and binding</li>
                  <li>Serious disputes may be referred to legal authorities</li>
                </ul>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">9. Liability Limitations</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>KaryaLINK's liability is limited to the service fee collected for the specific booking. We are not liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Direct damages exceeding the service value</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Acts or omissions of service providers</li>
                  <li>Quality of services rendered by professionals</li>
                  <li>Third-party tools or integrations</li>
                </ul>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">10. Modifications to Terms</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our platform. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
                <p>Major changes will be communicated via email or in-app notifications.</p>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">11. Governing Law</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;