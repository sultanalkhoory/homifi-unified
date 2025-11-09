'use client';

import { motion } from 'framer-motion';
import { fadeRise, scaleIn } from '@/lib/animations';

/**
 * PerfectWiFi - Shared Component (Desktop + Mobile)
 *
 * Shows UniFi enterprise networking with professional iPhone video demo
 * Matches Perfect Light section formatting
 *
 * Layout:
 * - Desktop: Two-column grid (text left, iPhone video right)
 * - Mobile: Stacked (text top, iPhone bottom)
 */
export default function PerfectWiFi() {
  return (
    <section
      id="perfect-wifi"
      className="pt-8 pb-20 md:py-28 bg-gray-50"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Two-column grid: Text on left, iPhone on right */}
        <div className="grid md:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: Text Content */}
          <motion.div
            variants={fadeRise}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 space-y-6"
          >
            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
              Perfect WiFi
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Enterprise-grade network.<br />
              Controlled from your phone.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: iPhone Frame with Video */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7"
          >
            <div className="flex justify-center md:justify-end">
              {/* iPhone Frame - Desktop size */}
              <div className="hidden md:block relative bg-black rounded-[3rem] p-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]" style={{ width: '300px' }}>
                {/* Screen */}
                <div className="relative bg-black rounded-[2.8rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                  {/* Dynamic Island */}
                  <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-full z-30 shadow-lg"></div>

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
                  <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-[100px] h-[22px] bg-black rounded-full z-30 shadow-lg"></div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
