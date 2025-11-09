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
        className="py-32 px-8 bg-gradient-to-br from-slate-50/50 to-blue-50/50"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Network Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              UniFi Networking
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade infrastructure. Managed from your phone.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Stacked UniFi Products */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-md h-96">
                  {/* Product 1 - UDR (Back Left) */}
                  <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -8 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="absolute left-0 top-12 w-56 h-56 bg-white rounded-3xl shadow-xl p-6 border border-gray-100"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src="/products/unifi/udr.png"
                        alt="UniFi Dream Router"
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Product 2 - Switch (Middle) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute left-16 top-20 w-56 h-56 bg-white rounded-3xl shadow-2xl p-6 border border-gray-200 z-10"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src="/products/unifi/switch.png"
                        alt="UniFi Switch"
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Product 3 - U7 Pro (Front Right) */}
                  <motion.div
                    initial={{ opacity: 0, x: 30, rotate: 10 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 8 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute right-0 top-28 w-56 h-56 bg-white rounded-3xl shadow-2xl p-6 border border-blue-100 z-20"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src="/products/unifi/u7-pro.png"
                        alt="U7 Pro Access Point"
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Professional WiFi Coverage
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enterprise-grade access points. No dead zones. Every corner covered.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Network Security
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    VLANs isolate IoT devices. Built-in firewall. Real-time threat detection.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Scales Effortlessly
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Start with one access point. Add more anytime. Grows with your property.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600">
                    The same infrastructure used by offices and hotels worldwide.
                  </p>
                </div>
              </div>

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

            {/* Featured Products */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">

              {/* Nature 7 Pro */}
              <div className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 mb-4 h-64 flex items-center justify-center border border-yellow-100 group-hover:shadow-lg transition-shadow">
                  <Image
                    src="/products/lifesmart/nature-7-pro.png"
                    alt="LifeSmart Nature 7 Pro"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-black mb-2 text-center">Nature 7 Pro</h3>
                <p className="text-sm text-gray-600 text-center">
                  Smart control hub for lighting and devices
                </p>
              </div>

              {/* Nature Mini Pro */}
              <div className="group">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 mb-4 h-64 flex items-center justify-center border border-blue-100 group-hover:shadow-lg transition-shadow">
                  <Image
                    src="/products/lifesmart/nature-mini-pro.png"
                    alt="LifeSmart Nature Mini Pro Thermostat"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-black mb-2 text-center">Nature Mini Pro</h3>
                <p className="text-sm text-gray-600 text-center">
                  Thermostat for precise climate control
                </p>
              </div>

              {/* Nature Switch */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 mb-4 h-64 flex items-center justify-center border border-gray-100 group-hover:shadow-lg transition-shadow">
                  <Image
                    src="/products/lifesmart/nature-switch.png"
                    alt="LifeSmart Nature Switch"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-black mb-2 text-center">Nature Switch</h3>
                <p className="text-sm text-gray-600 text-center">
                  Smart switches for every room
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
