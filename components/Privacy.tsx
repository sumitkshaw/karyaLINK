"use client";

const Privacy = () => {
  return (
    <section className="pt-12 pb-16 bg-white">
      <div className="max-container padding-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="bold-32 lg:bold-40 text-gray-900 mb-4">
            Privacy <span className="text-primary-600">Policy</span>
          </h1>
          <p className="regular-18 text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-gray-600 leading-relaxed">
              At KaryaLINK, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform to connect with verified local service professionals in Delhi.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><strong>Personal Information:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Address and location details for service booking</li>
                  <li>Profile pictures (for service providers)</li>
                  <li>Payment information through secure gateways</li>
                  <li>Government IDs for verification (service providers)</li>
                </ul>
                
                <p><strong>Service Information:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Service requests and requirements</li>
                  <li>Booking history and preferences</li>
                  <li>Ratings and reviews given/received</li>
                  <li>Communication with service professionals</li>
                </ul>

                <p><strong>Technical Information:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Usage data and app interactions</li>
                  <li>Location data for service matching</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We use collected information to:</p>
                <ul className="list-disc pl-5 space-y-2">
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
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">3. Information Sharing</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We share information in these limited circumstances:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>With Service Professionals:</strong> Necessary contact and location details for service completion</li>
                  <li><strong>With Customers:</strong> Service provider profiles, ratings, and verification status</li>
                  <li><strong>With Payment Processors:</strong> Required payment information for transaction processing</li>
                  <li><strong>With Legal Authorities:</strong> When required by law or to protect rights and safety</li>
                  <li><strong>During Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">4. Data Security</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We implement appropriate security measures including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment gateway integration</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Data backup and recovery systems</li>
                  <li>Employee privacy training</li>
                </ul>
                <p>While we strive to protect your information, no system is 100% secure. Please use strong passwords and notify us immediately of any security concerns.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">5. Data Retention</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide services you request</li>
                  <li>Maintain business records</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our services</li>
                </ul>
                <p>Inactive accounts are deactivated after 24 months, with data anonymized after 36 months.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Export your data in machine-readable format</li>
                </ul>
                <p>To exercise these rights, contact us at contact.karyalink@gmail.com</p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">7. Cookies and Tracking</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Improve user experience</li>
                  <li>Personalize content and recommendations</li>
                  <li>Enable certain features and functions</li>
                </ul>
                <p>You can control cookies through your browser settings, but disabling them may affect platform functionality.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">8. Third-Party Services</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Our platform may integrate with third-party services including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Payment gateways (Razorpay, Stripe)</li>
                  <li>Map services (Google Maps)</li>
                  <li>Analytics tools (Google Analytics)</li>
                  <li>Communication platforms (WhatsApp, SMS)</li>
                </ul>
                <p>These services have their own privacy policies. We encourage you to review them.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">9. Children's Privacy</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>KaryaLINK is not intended for users under 18 years of age. We do not knowingly collect information from children. If we become aware of such collection, we will take steps to delete the information.</p>
                <p>Parents or guardians who believe their child has provided us with personal information should contact us immediately.</p>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="bold-24 text-gray-900 mb-4">10. Policy Updates</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We may update this Privacy Policy periodically. We will notify you of significant changes through:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Email notifications to registered users</li>
                  <li>In-app notifications and banners</li>
                  <li>Updated "last updated" date on this page</li>
                </ul>
                <p>Continued use of our services after changes constitutes acceptance of the updated policy.</p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <h3 className="bold-18 text-blue-900 mb-3">Important Notice</h3>
              <p className="text-blue-800 leading-relaxed">
                By using KaryaLINK's services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with any part of this policy, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;