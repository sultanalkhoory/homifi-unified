'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Desktop Ecosystem Page - Real Tech Stack
 * Focused on actual products: Unifi, LifeSmart, Apple/Google/Alexa
 */
export default function DesktopEcosystem() {

  const sectionReveal = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      mass: 0.8
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-black mb-6">
            What Makes It Work
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We don't hide behind fancy names. Here's exactly what we use and why.
          </p>
        </motion.div>
      </section>

      {/* Platform Integration */}
      <motion.section
        {...sectionReveal}
        className="py-32 px-8"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
              Control It Your Way
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your platform. Or use all three at once. Your call.
            </p>
          </div>

          {/* Platform Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <Image
                src="/badges/works-with-apple-home.webp"
                alt="Works with Apple Home"
                width={180}
                height={52}
                className="h-12 w-auto"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <Image
                src="/badges/works-with-google-home.webp"
                alt="Works with Google Home"
                width={180}
                height={52}
                className="h-12 w-auto"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <Image
                src="/badges/works-with-alexa.webp"
                alt="Works with Amazon Alexa"
                width={180}
                height={52}
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Use your iPhone. Ask Google. Tell Alexa. Switch between them. Use all three.
              <br />
              <span className="text-black font-medium">The system doesn't care.</span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* UniFi Network */}
      <motion.section
        {...sectionReveal}
        className="py-32 px-8 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Network Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              UniFi Networking
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The same network infrastructure used by businesses, hotels, and enterprises worldwide.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-10">

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Professional WiFi Coverage
                  </h3>
                  <p className="text-gray-600">
                    No dead zones. No dropouts. Enterprise-grade access points that cover every corner of your property.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Built-In Security
                  </h3>
                  <p className="text-gray-600">
                    VLANs to isolate IoT devices. Firewall rules. Threat detection. Your network is locked down.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Scales Effortlessly
                  </h3>
                  <p className="text-gray-600">
                    Start with one access point. Add more as needed. The system grows with your property.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Not Locked In
                  </h3>
                  <p className="text-gray-600">
                    Any UniFi-certified technician can manage your network. We're not the only ones who can help.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500">
                This is what offices and hotels use for a reason.
                <br />
                <span className="text-black font-medium">It works.</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* LifeSmart Devices */}
      <motion.section
        {...sectionReveal}
        className="py-32 px-8"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              Smart Devices
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              LifeSmart Hardware
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Open protocol devices that work with everything. Not locked to one ecosystem.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl">

            {/* Device Categories */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Lighting</h3>
                <p className="text-sm text-gray-600">
                  Switches, dimmers, smart bulbs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">❄️</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Climate</h3>
                <p className="text-sm text-gray-600">
                  AC control, thermostats, sensors
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🪟</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Curtains & Blinds</h3>
                <p className="text-sm text-gray-600">
                  Motorized curtains, automated blinds
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🔐</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Security</h3>
                <p className="text-sm text-gray-600">
                  Door locks, sensors, access control
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">📹</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Cameras</h3>
                <p className="text-sm text-gray-600">
                  Doorbells, security cameras
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-slate-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">📡</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Sensors</h3>
                <p className="text-sm text-gray-600">
                  Motion, door/window, leak detection
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl font-bold">✓</span>
                <p className="text-gray-600">
                  <strong className="text-black">Zigbee and Matter protocols.</strong> Industry standards that any integrator can work with.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl font-bold">✓</span>
                <p className="text-gray-600">
                  <strong className="text-black">Long battery life.</strong> Sensors that last 1-2 years, not months.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl font-bold">✓</span>
                <p className="text-gray-600">
                  <strong className="text-black">Up to 500 devices.</strong> 800-meter range. Blazing fast response times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Bottom Line */}
      <motion.section
        {...sectionReveal}
        className="py-32 px-8 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-4xl mx-auto">

          <div className="bg-white border border-gray-200 rounded-3xl p-12 md:p-16 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">
              Here's The Deal
            </h2>

            <div className="space-y-6 text-lg mb-10">
              <p>
                <strong className="text-black">UniFi</strong> handles your network.
                <br />
                <span className="text-black">Professional. Reliable. Secure.</span>
              </p>

              <p>
                <strong className="text-black">LifeSmart</strong> runs your devices.
                <br />
                <span className="text-black">Open protocols. Industry standard.</span>
              </p>

              <p>
                <strong className="text-black">Apple, Google, or Alexa</strong> controls it all.
                <br />
                <span className="text-black">Your choice. Your system.</span>
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xl text-black">
                No proprietary lock-in. No hidden dependencies.
                <br />
                <span className="text-2xl text-black font-semibold">Just a system that works.</span>
              </p>
            </div>

            <motion.a
              href="/how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-10 px-10 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-900 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              See How We Install It
            </motion.a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
