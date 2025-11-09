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

          <p className="text-lg text-gray-700 leading-relaxed">
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
            <p className="text-gray-700">
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

          <p className="text-center text-gray-700 text-sm">
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
            <p className="text-gray-700">
              Managed from your phone.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">

            {/* UniFi Products - Hero Center Style */}
            <div className="flex items-end justify-center gap-4 py-8 mb-8">
              {/* Product 1 - U7 Pro (Side) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <Image
                  src="/products/unifi/u7-pro.png"
                  alt="U7 Pro Access Point"
                  width={90}
                  height={90}
                  quality={100}
                  className="object-contain"
                />
              </motion.div>

              {/* Product 2 - UDR (Hero Center - Larger) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/products/unifi/udr.png"
                  alt="UniFi Dream Router"
                  width={120}
                  height={120}
                  quality={100}
                  className="object-contain"
                />
              </motion.div>

              {/* Product 3 - U7 Pro Wall (Side) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <Image
                  src="/products/unifi/u7-pro-wall.png"
                  alt="U7 Pro Wall Mount"
                  width={90}
                  height={90}
                  quality={100}
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Professional WiFi Coverage
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Enterprise-grade access points. No dead zones. Every corner covered.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Network Security
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  VLANs isolate IoT devices. Built-in firewall. Real-time threat detection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Scales Effortlessly
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Start with one access point. Add more anytime. Grows with your property.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-sm text-center">
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
            <p className="text-gray-700">
              Open protocol devices. Not locked to one ecosystem.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">

            {/* LifeSmart Products - Hero Center Style */}
            <div className="flex items-end justify-center gap-4 py-8 mb-8">
              {/* Product 1 - Nature Mini Pro (Side) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <Image
                  src="/products/lifesmart/nature-mini-pro.png"
                  alt="LifeSmart Nature Mini Pro Thermostat"
                  width={100}
                  height={100}
                  quality={100}
                  className="object-contain"
                />
              </motion.div>

              {/* Product 2 - Nature 7 Pro (Hero Center - Larger) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/products/lifesmart/nature-7-pro.png"
                  alt="LifeSmart Nature 7 Pro"
                  width={130}
                  height={130}
                  quality={100}
                  className="object-contain"
                />
              </motion.div>

              {/* Product 3 - Nature Switch (Side) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <Image
                  src="/products/lifesmart/nature-switch.png"
                  alt="LifeSmart Nature Switch"
                  width={100}
                  height={100}
                  quality={100}
                  className="object-contain"
                />
              </motion.div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">
                  <strong className="text-black">Zigbee & Matter.</strong> Industry standards.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">
                  <strong className="text-black">Long battery life.</strong> 1-2 years.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">
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
