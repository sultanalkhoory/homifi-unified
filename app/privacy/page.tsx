'use client';

import Link from 'next/link';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: November 9, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              HomiFi ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website homifi.ae and use our smart home installation services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">2.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Fill out a contact form or consultation request</li>
              <li>Request a quote or schedule an installation</li>
              <li>Contact us via email, phone, or WhatsApp</li>
              <li>Subscribe to our newsletter or updates</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property address</li>
              <li>Project details and requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Geographic location (country/city level)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">2.3 Cookies and Tracking Technologies</h3>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website. For detailed information, please see our <Link href="/cookies" className="text-blue-600 hover:underline">Cookies Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Service Delivery:</strong> To provide consultations, quotes, installations, and customer support</li>
              <li><strong>Communication:</strong> To respond to your inquiries and send service-related updates</li>
              <li><strong>Improvement:</strong> To understand how customers use our website and services</li>
              <li><strong>Marketing:</strong> To send promotional materials (with your consent)</li>
              <li><strong>Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
              <li><strong>Safety:</strong> To prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">4.1 Service Providers</h3>
            <p className="text-gray-700 leading-relaxed">
              We may share your information with trusted third-party service providers who assist us in:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Website hosting and maintenance</li>
              <li>Email delivery services</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer relationship management (CRM)</li>
              <li>Payment processing</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">4.2 Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government agencies).
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">4.3 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Encryption of data in transit (SSL/TLS)</li>
              <li>Secure server infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Typically:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Customer data: Retained during active relationship and up to 7 years after project completion for warranty and legal purposes</li>
              <li>Marketing data: Retained until you unsubscribe or request deletion</li>
              <li>Analytics data: Aggregated and anonymized after 26 months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              Under applicable data protection laws (including GDPR and UAE data protection regulations), you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Restriction:</strong> Request restriction of processing your data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Objection:</strong> Object to processing of your data for marketing purposes</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (without affecting lawfulness of previous processing)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:info@homifi.ae" className="text-blue-600 hover:underline">info@homifi.ae</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than the United Arab Emirates. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites (e.g., Instagram, WhatsApp). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700"><strong>HomiFi</strong></p>
              <p className="text-gray-700 mt-2">Email: <a href="mailto:info@homifi.ae" className="text-blue-600 hover:underline">info@homifi.ae</a></p>
              <p className="text-gray-700">WhatsApp: <a href="https://wa.me/971505547744" className="text-blue-600 hover:underline">+971 50 554 7744</a></p>
              <p className="text-gray-700">Website: <a href="https://homifi.ae" className="text-blue-600 hover:underline">homifi.ae</a></p>
            </div>
          </section>

        </div>

        {/* Back to home link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
