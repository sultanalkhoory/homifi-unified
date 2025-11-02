'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Mobile Ecosystem Page - Real Tech Stack
 * Optimized for mobile with your actual products
 */
export default function MobileEcosystem() {

  const sectionReveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 22,
      mass: 0.6
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black mb-5">
            What Makes It Work
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Here's exactly what we use and why.
          </p>
        </motion.div>
      </section>

      {/* Platform Integration */}
      <motion.section
        {...sectionReveal}
        className="py-20 px-6"
      >
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
              Control It Your Way
            </h2>
            <p className="text-gray-600">
              Choose your platform. Or use all three.
            </p>
          </div>

          {/* Platform Badges */}
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <Image
                src="/badges/works-with-apple-home.webp"
                alt="Works with Apple Home"
                width={150}
                height={43}
                className="h-10 w-auto mx-auto"
              />
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <Image
                src="/badges/works-with-google-home.webp"
                alt="Works with Google Home"
                width={150}
                height={43}
                className="h-10 w-auto mx-auto"
              />
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <Image
                src="/badges/works-with-alexa.webp"
                alt="Works with Amazon Alexa"
                width={150}
                height={43}
                className="h-10 w-auto mx-auto"
              />
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Use your iPhone. Ask Google. Tell Alexa.
            <br />
            <span className="text-black font-medium">The system doesn't care.</span>
          </p>
        </div>
      </motion.section>

      {/* UniFi Network */}
      <motion.section
        {...sectionReveal}
        className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
              Network Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
              UniFi Networking
            </h2>
            <p className="text-gray-600">
              Enterprise-grade infrastructure for your home.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl space-y-6">

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Professional WiFi
              </h3>
              <p className="text-gray-600 text-sm">
                No dead zones. Strong signal everywhere. Access points that actually work.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Built-In Security
              </h3>
              <p className="text-gray-600 text-sm">
                Your devices stay separate from your network. Built-in firewall keeps things safe.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Scales Effortlessly
              </h3>
              <p className="text-gray-600 text-sm">
                Start with one access point. Add more as needed. Grows with your property.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-sm">
                What offices and hotels use.
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
        className="py-20 px-6"
      >
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
              Smart Devices
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
              LifeSmart Hardware
            </h2>
            <p className="text-gray-600">
              Open protocol devices. Not locked to one ecosystem.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">

            {/* Device Categories - 2 columns on mobile */}
            <div className="grid grid-cols-2 gap-6 mb-8">

              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600">L</span>
                </div>
                <h3 className="text-sm font-semibold text-black mb-1">Lighting</h3>
                <p className="text-xs text-gray-600">
                  Switches & bulbs
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-cyan-600">C</span>
                </div>
                <h3 className="text-sm font-semibold text-black mb-1">Climate</h3>
                <p className="text-xs text-gray-600">
                  AC & sensors
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-600">W</span>
                </div>
                <h3 className="text-sm font-semibold text-black mb-1">Curtains</h3>
                <p className="text-xs text-gray-600">
                  Motorized blinds
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-red-600">S</span>
                </div>
                <h3 className="text-sm font-semibold text-black mb-1">Security</h3>
                <p className="text-xs text-gray-600">
                  Locks & sensors
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">V</span>
                </div>
                <h3 className="text-sm font-semibold text-black mb-1">Cameras</h3>
                <p className="text-xs text-gray-600">
                  Doorbells & cams
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-slate-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-slate-600">M</span>
                </div>
                <h3 className="text-sm font-semibold text-black mb-1">Sensors</h3>
                <p className="text-xs text-gray-600">
                  Motion & leak
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-600">
                  <strong className="text-black">Zigbee & Matter.</strong> Industry standards.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-600">
                  <strong className="text-black">Long battery life.</strong> 1-2 years.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-600">
                  <strong className="text-black">Up to 500 devices.</strong> 800m range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Bottom Line */}
      <motion.section
        {...sectionReveal}
        className="py-20 px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-2xl mx-auto">

          <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
              Here's The Deal
            </h2>

            <div className="space-y-5 text-base mb-8">
              <p>
                <strong className="text-black">UniFi</strong> handles your network.
                <br />
                <span className="text-gray-700 text-sm">Professional. Reliable. Secure.</span>
              </p>

              <p>
                <strong className="text-black">LifeSmart</strong> runs your devices.
                <br />
                <span className="text-gray-700 text-sm">Open protocols. Industry standard.</span>
              </p>

              <p>
                <strong className="text-black">Apple, Google, or Alexa</strong> controls it.
                <br />
                <span className="text-gray-700 text-sm">Your choice. Your system.</span>
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-700 text-sm mb-6">
                No proprietary lock-in.
                <br />
                <span className="text-lg text-black font-semibold">Just a system that works.</span>
              </p>
            </div>

            <motion.a
              href="/how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-black text-white rounded-full text-base font-semibold hover:bg-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              See How We Install It
            </motion.a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
