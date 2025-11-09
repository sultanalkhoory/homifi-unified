'use client';

import { motion } from 'framer-motion';

/**
 * PerfectWiFi - Shared Component (Desktop + Mobile)
 *
 * Shows UniFi enterprise networking with professional iPhone video demo
 *
 * Layout:
 * - Desktop: Two-column grid (iPhone video left, benefits right)
 * - Mobile: Stacked (iPhone top, benefits bottom)
 */
export default function PerfectWiFi() {
  return (
    <section
      id="perfect-wifi"
      className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-slate-50/50 to-blue-50/50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
          >
            Network Foundation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-black mb-6"
          >
            Perfect WiFi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Enterprise-grade infrastructure. Managed from your phone.
          </motion.p>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: iPhone Frame with Video */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* iPhone Frame - Desktop size */}
                <div className="hidden md:block relative bg-black rounded-[3rem] p-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]" style={{ width: '300px' }}>
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.8rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                    {/* Dynamic Island */}
                    <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-full z-10 shadow-lg"></div>

                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src="/video/unifi-app-demo.mov"
                    />
                  </div>
                </div>

                {/* iPhone Frame - Mobile size */}
                <div className="md:hidden relative bg-black rounded-[2.5rem] p-[3px] shadow-[0_15px_50px_rgba(0,0,0,0.3)]" style={{ width: '250px' }}>
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.3rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                    {/* Dynamic Island */}
                    <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-[100px] h-[22px] bg-black rounded-full z-10 shadow-lg"></div>

                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src="/video/unifi-app-demo.mov"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Benefits */}
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
        </motion.div>
      </div>
    </section>
  );
}
