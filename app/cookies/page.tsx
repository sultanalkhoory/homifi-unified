'use client';

import Link from 'next/link';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function CookiesPolicy() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookies Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: November 9, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Cookies allow us to recognize your device and remember information about your visit, such as your preferences and how you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              HomiFi uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and improve our services. We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Essential Website Functionality:</strong> To enable core features and ensure the website operates correctly</li>
              <li><strong>Performance and Analytics:</strong> To understand how visitors interact with our website</li>
              <li><strong>User Experience:</strong> To remember your preferences and settings</li>
              <li><strong>Marketing and Advertising:</strong> To deliver relevant advertisements and measure campaign effectiveness</li>
              <li><strong>Security:</strong> To protect against fraudulent activity and ensure secure browsing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">3.1 Strictly Necessary Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              These cookies are essential for the website to function properly. They enable basic features like page navigation, secure access to certain areas, and form submissions. The website cannot function properly without these cookies.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm text-gray-600"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1 mt-2">
                <li>Session management cookies</li>
                <li>Security and authentication cookies</li>
                <li>Load balancing cookies</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Session or up to 24 hours</p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">3.2 Performance and Analytics Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              These cookies collect information about how visitors use our website, such as which pages are visited most often and whether users receive error messages. This helps us improve website performance and user experience.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm text-gray-600"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1 mt-2">
                <li><strong>Google Analytics (_ga, _gid, _gat):</strong> Tracks website usage, visitor behavior, and traffic sources</li>
                <li><strong>Google Tag Manager (_gtm):</strong> Manages tracking codes and marketing tags</li>
                <li><strong>Hotjar (_hj*):</strong> Records user interactions to understand behavior patterns</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Up to 2 years</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Data collected:</strong> Pages viewed, time on site, browser type, device type, geographic location, referral source</p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">3.3 Functionality Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              These cookies allow the website to remember choices you make (such as language preferences or region) and provide enhanced, personalized features.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm text-gray-600"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1 mt-2">
                <li>Language and region preferences</li>
                <li>Contact form auto-fill information</li>
                <li>User interface customization settings</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Up to 1 year</p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">3.4 Targeting and Advertising Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              These cookies track your browsing activity across websites to deliver advertisements that are relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm text-gray-600"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1 mt-2">
                <li><strong>Google Ads (_gcl_au):</strong> Delivers personalized ads and measures conversions</li>
                <li><strong>Facebook Pixel (_fbp, _fbc):</strong> Tracks conversions from Facebook ads and builds custom audiences</li>
                <li><strong>LinkedIn Insight Tag:</strong> Measures ad campaign performance and retargets visitors</li>
                <li><strong>Instagram/Meta Pixel:</strong> Tracks engagement from social media campaigns</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Up to 2 years</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Data collected:</strong> Browsing behavior, ad interactions, demographic information, interests</p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">3.5 Social Media Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              These cookies enable social media features and allow you to share content from our website on social platforms. They also track your interaction with social media widgets embedded on our site.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm text-gray-600"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1 mt-2">
                <li>Instagram share and embed cookies</li>
                <li>Facebook like and share buttons</li>
                <li>WhatsApp integration cookies</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Varies by platform, up to 2 years</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              In addition to our own cookies, we use third-party services that may set cookies on your device. These third parties have their own privacy and cookie policies, which we encourage you to review:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a></li>
              <li><strong>Google Ads:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Policy</a></li>
              <li><strong>Facebook/Meta:</strong> <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Meta Privacy Policy</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. How to Control and Delete Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to accept or reject cookies. You can control cookie preferences through:
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">5.1 Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed">
              Most web browsers allow you to manage cookies through their settings. You can set your browser to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Block all cookies</li>
              <li>Accept only first-party cookies</li>
              <li>Delete cookies when you close the browser</li>
              <li>Notify you before accepting cookies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Browser-specific instructions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">5.2 Opt-Out Tools</h3>
            <p className="text-gray-700 leading-relaxed">
              You can opt out of specific tracking services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Google Analytics:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              <li><strong>Google Ads:</strong> Visit <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ad Settings</a></li>
              <li><strong>Facebook:</strong> Adjust settings in <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Ad Preferences</a></li>
              <li><strong>Network Advertising Initiative:</strong> <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NAI Opt-Out Tool</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">5.3 Mobile Device Settings</h3>
            <p className="text-gray-700 leading-relaxed">
              On mobile devices, you can limit ad tracking:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>iOS:</strong> Settings → Privacy → Tracking → Disable "Allow Apps to Request to Track"</li>
              <li><strong>Android:</strong> Settings → Privacy → Ads → Opt out of Ads Personalization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. Impact of Disabling Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Please note that disabling cookies may affect your experience on our website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Some features may not function correctly</li>
              <li>You may need to re-enter information on each visit</li>
              <li>Personalization features will not work</li>
              <li>We will not be able to remember your preferences</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Strictly necessary cookies cannot be disabled as they are essential for website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. Cookie Duration</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are stored for different durations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Remain on your device for a set period (from days to years) or until you manually delete them</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. Do Not Track Signals</h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activity tracked. Currently, there is no industry standard for how DNT signals should be handled. Our website does not currently respond to DNT signals, but we comply with your browser's cookie settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our business practices. We encourage you to review this policy periodically. The "Last updated" date at the top indicates when the policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. More Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For more information about how we handle your personal data, please see our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              For general information about cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about our use of cookies, please contact us:
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
