'use client';

import Link from 'next/link';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: November 9, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to HomiFi. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed">
              HomiFi provides smart home automation consultation, installation, and support services. Our services include but are not limited to smart lighting, climate control, security systems, and integration with various smart home platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Provide accurate and complete information when requesting services</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use the services in compliance with all applicable laws and regulations</li>
              <li>Not misuse or attempt to gain unauthorized access to our systems</li>
              <li>Ensure safe and reasonable access to your property for service delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of HomiFi or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. Service Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Specific terms for our installation and support services will be provided in separate agreements or quotations. These Terms of Service govern your use of our website and general relationship with HomiFi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, HomiFi shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services or website. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We are not responsible for interruptions, errors, or failures of third-party services or platforms integrated with our systems, including but not limited to Apple HomeKit, Google Home, Amazon Alexa, or internet service providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. Warranties and Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. While we strive to provide quality services, we do not warrant that our services will be uninterrupted, error-free, or meet all your requirements.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Equipment warranties are provided by manufacturers. We will assist with warranty claims but cannot guarantee manufacturer warranty fulfillment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website and services may contain links to third-party websites or integrate with third-party platforms. We are not responsible for the content, privacy practices, or terms of service of these external sites. Your use of third-party services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless HomiFi, its officers, employees, and contractors from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">11. Modifications to Services and Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or discontinue our services or website at any time without notice. We may also update these Terms of Service from time to time. Changes will be effective when posted on this page with an updated "Last updated" date. Continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">12. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">13. Governing Law and Disputes</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the United Arab Emirates. Any disputes arising from these Terms or your use of our services shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">14. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">15. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy and any specific service agreements, constitute the entire agreement between you and HomiFi regarding your use of our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">16. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
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
