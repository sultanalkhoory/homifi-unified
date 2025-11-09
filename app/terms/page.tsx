'use client';

import Link from 'next/link';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: November 9, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and HomiFi ("Company," "we," "our," or "us") concerning your access to and use of our website (homifi.ae) and smart home automation services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="text-gray-700 leading-relaxed">
              HomiFi provides professional smart home automation services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Smart home consultation and design</li>
              <li>Installation of smart lighting systems</li>
              <li>Climate control automation (HVAC, thermostats)</li>
              <li>Security system integration (cameras, sensors, door locks)</li>
              <li>Apple HomeKit and Apple HomeKey integration</li>
              <li>Voice assistant integration (Siri, Alexa, Google Assistant)</li>
              <li>UniFi and LifeSmart ecosystem integration</li>
              <li>System configuration and training</li>
              <li>Ongoing support and maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Service Engagement Process</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">3.1 Consultation and Quote</h3>
            <p className="text-gray-700 leading-relaxed">
              All projects begin with a free initial consultation. Following the consultation, we will provide a detailed quote outlining the scope of work, equipment, costs, and timeline.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">3.2 Acceptance</h3>
            <p className="text-gray-700 leading-relaxed">
              Your acceptance of the quote (via signature, email confirmation, or deposit payment) constitutes a binding agreement to proceed with the project under these Terms.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">3.3 Site Access</h3>
            <p className="text-gray-700 leading-relaxed">
              You agree to provide reasonable access to your property during agreed-upon hours for consultation, installation, and follow-up services. You are responsible for ensuring the work area is accessible and safe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">4.1 Pricing</h3>
            <p className="text-gray-700 leading-relaxed">
              All prices are quoted in UAE Dirhams (AED) and are inclusive of VAT unless otherwise stated. Prices are valid for 30 days from the date of quotation.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.2 Payment Schedule</h3>
            <p className="text-gray-700 leading-relaxed">
              Unless otherwise agreed in writing, payment terms are as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>50% deposit upon acceptance of quote</li>
              <li>25% upon equipment delivery</li>
              <li>25% upon project completion and client approval</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">4.3 Late Payments</h3>
            <p className="text-gray-700 leading-relaxed">
              Invoices are due within 7 days of issuance unless otherwise stated. Late payments may incur a fee of 2% per month on the outstanding balance.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.4 Additional Costs</h3>
            <p className="text-gray-700 leading-relaxed">
              Any additional work or equipment requested beyond the original scope will be quoted separately and requires written approval before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Warranties and Guarantees</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">5.1 Workmanship Warranty</h3>
            <p className="text-gray-700 leading-relaxed">
              We warrant that all installation work will be performed in a professional and workmanlike manner. We provide a 1-year warranty on our installation workmanship from the date of project completion.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">5.2 Equipment Warranty</h3>
            <p className="text-gray-700 leading-relaxed">
              Equipment and hardware are covered by the manufacturer's warranty. We will assist with warranty claims but are not responsible for manufacturer defects or warranty fulfillment.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">5.3 Exclusions</h3>
            <p className="text-gray-700 leading-relaxed">
              Warranties do not cover:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Damage caused by improper use, negligence, or accidents</li>
              <li>Modifications or repairs performed by third parties</li>
              <li>Normal wear and tear</li>
              <li>Acts of God (flooding, lightning, fire, etc.)</li>
              <li>Internet or network connectivity issues outside our control</li>
              <li>Third-party software or cloud service failures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cancellation and Refunds</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">6.1 Client Cancellation</h3>
            <p className="text-gray-700 leading-relaxed">
              You may cancel the project with the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Before equipment order:</strong> Full refund minus 10% administrative fee</li>
              <li><strong>After equipment order:</strong> Refund of amount paid minus equipment costs and 20% administrative fee</li>
              <li><strong>After installation begins:</strong> No refund; payment for completed work is due</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">6.2 Company Cancellation</h3>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to cancel the project if you fail to provide site access, make required payments, or breach these Terms. In such cases, payment for work completed is due, with no refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Our total liability shall not exceed the total amount paid by you for the specific service giving rise to the claim</li>
              <li>We are not liable for indirect, incidental, special, consequential, or punitive damages</li>
              <li>We are not liable for loss of data, loss of profits, or business interruption</li>
              <li>We are not responsible for third-party products, services, or cloud platforms (Apple HomeKit, Google Home, Amazon Alexa, etc.)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Provide accurate information about your property and requirements</li>
              <li>Ensure adequate electrical infrastructure and internet connectivity</li>
              <li>Maintain a stable internet connection (required for smart home functionality)</li>
              <li>Secure your network with strong passwords</li>
              <li>Keep software and firmware updated on connected devices</li>
              <li>Use the system in accordance with manufacturer guidelines</li>
              <li>Not tamper with or modify installed equipment without our approval</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of HomiFi or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of our services is also governed by our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. Please review it to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our smart home solutions integrate with third-party platforms (Apple HomeKit, Google Home, Amazon Alexa, UniFi, LifeSmart, etc.). These services are governed by their respective terms and privacy policies. We are not responsible for third-party service availability, changes, or discontinuation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless HomiFi, its officers, employees, and contractors from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Your breach of these Terms</li>
              <li>Your misuse of the installed systems</li>
              <li>Your violation of any laws or third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">13.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the United Arab Emirates.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">13.2 Dispute Process</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. If negotiation fails, disputes shall be resolved through arbitration in Dubai, UAE, in accordance with UAE arbitration laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, labor disputes, government restrictions, equipment failures, or supply chain disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">16. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">17. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy and any written agreements for specific projects, constitute the entire agreement between you and HomiFi regarding the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>
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
