'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * CTA Section - Links to How It Works page
 * 
 * Matches the style of the CTA on the How It Works page
 * Clean, centered, Apple-minimal
 */
export default function CTAHowItWorks() {
  return (
    <section className="flex items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-6">
          See how it all comes together.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Professional installation. Expert setup. Zero hassle.
        </p>
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-xl"
        >
          How It Works
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
