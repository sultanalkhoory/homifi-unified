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
        className="py-20 px-6 bg-gradient-to-br from-slate-50/50 to-blue-50/50"
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
              Managed from your phone.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">

            {/* Stacked UniFi Products */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full h-72">
                {/* Product 1 - UDR */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-4 top-8 w-36 h-36 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 rotate-[-6deg]"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/products/unifi/udr.png"
                      alt="UniFi Dream Router"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* Product 2 - Switch */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 -translate-x-1/2 top-14 w-36 h-36 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 z-10"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/products/unifi/switch.png"
                      alt="UniFi Switch"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* Product 3 - U7 Pro */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute right-4 top-20 w-36 h-36 bg-white rounded-2xl shadow-2xl p-4 border border-blue-100 z-20 rotate-[6deg]"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/products/unifi/u7-pro.png"
                      alt="U7 Pro Access Point"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Professional WiFi Coverage
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enterprise-grade access points. No dead zones. Every corner covered.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Network Security
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  VLANs isolate IoT devices. Built-in firewall. Real-time threat detection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Scales Effortlessly
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Start with one access point. Add more anytime. Grows with your property.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm text-center">
                  The same infrastructure used by offices and hotels worldwide.
                </p>
              </div>
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

            {/* Featured Products */}
            <div className="space-y-6 mb-8">

              {/* Nature 7 Pro */}
              <div className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mb-3 h-40 flex items-center justify-center border border-yellow-100">
                  <Image
                    src="/products/lifesmart/nature-7-pro.png"
                    alt="LifeSmart Nature 7 Pro"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-black mb-1 text-center text-sm">Nature 7 Pro</h3>
                <p className="text-xs text-gray-600 text-center">
                  Smart control hub for lighting and devices
                </p>
              </div>

              {/* Nature Mini Pro */}
              <div className="group">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-3 h-40 flex items-center justify-center border border-blue-100">
                  <Image
                    src="/products/lifesmart/nature-mini-pro.png"
                    alt="LifeSmart Nature Mini Pro Thermostat"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-black mb-1 text-center text-sm">Nature Mini Pro</h3>
                <p className="text-xs text-gray-600 text-center">
                  Thermostat for precise climate control
                </p>
              </div>

              {/* Nature Switch */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 mb-3 h-40 flex items-center justify-center border border-gray-100">
                  <Image
                    src="/products/lifesmart/nature-switch.png"
                    alt="LifeSmart Nature Switch"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-black mb-1 text-center text-sm">Nature Switch</h3>
                <p className="text-xs text-gray-600 text-center">
                  Smart switches for every room
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
                <span className="text-black text-sm">Professional. Reliable. Secure.</span>
              </p>

              <p>
                <strong className="text-black">LifeSmart</strong> runs your devices.
                <br />
                <span className="text-black text-sm">Open protocols. Industry standard.</span>
              </p>

              <p>
                <strong className="text-black">Apple, Google, or Alexa</strong> controls it.
                <br />
                <span className="text-black text-sm">Your choice. Your system.</span>
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-black text-sm mb-6">
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
