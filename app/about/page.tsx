'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

/**
 * About Us Page - Premium Boutique Edition
 * Sophisticated, elegant, Apple-inspired
 */
export default function AboutPage() {
  
  const problems = [
    {
      title: 'Unreliable Systems',
      description: 'Constant disconnects. Unresponsive controls. Systems that work one day and fail the next.',
    },
    {
      title: 'Hidden Costs',
      description: 'AED 500 to add a scene. Surprise charges for basic updates. Technical support held hostage.',
    },
    {
      title: 'Locked Ecosystems',
      description: 'Trapped in proprietary apps. No choice. No flexibility. No escape.',
    },
    {
      title: 'Technical Complexity',
      description: 'Systems that require an IT degree. Manuals nobody reads. Support that doesn\'t help.',
    }
  ];

  const principles = [
    {
      number: '01',
      title: 'Reliability First',
      description: 'Enterprise-grade infrastructure. Professional installation. Zero compromises on quality.'
    },
    {
      number: '02',
      title: 'Complete Transparency',
      description: 'Fixed pricing. No hidden fees. Three months of support included. Always.'
    },
    {
      number: '03',
      title: 'Your Choice',
      description: 'Apple Home. Google Home. Alexa. Or our platform. You decide. We make it work.'
    },
    {
      number: '04',
      title: 'Effortless Control',
      description: 'No manuals. No training. No complexity. If it\'s not intuitive, we redesign it.'
    }
  ];

  const stats = [
    { value: '500+', label: 'Homes Transformed' },
    { value: '100%', label: 'Apple HomeKit Compatible' },
    { value: '24/7', label: 'WhatsApp Support' },
    { value: '0', label: 'Installation Complaints' }
  ];

  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-black leading-[1.1] mb-8">
              Smart homes<br />
              shouldn't make you<br />
              feel <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">stupid</span>.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Two engineers. One mission. Fix an industry.
          </motion.p>
        </div>
      </section>

      {/* The Problem - Refined Grid */}
      <section className="py-32 bg-black text-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold mb-20 text-center"
          >
            The industry is broken.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-2 border-gray-700 pl-6"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {problem.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 text-center"
          >
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're two Emirati engineers who got tired of watching people 
              get trapped in their own homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-semibold text-black mb-3">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-semibold text-black leading-tight"
          >
            "Technology should work for people,<br />
            not the other way around."
          </motion.blockquote>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-32 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold mb-20 text-center text-black"
          >
            How we work.
          </motion.h2>

          <div className="space-y-16 md:space-y-20">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-12 gap-6 md:gap-12 items-start"
              >
                <div className="md:col-span-2">
                  <span className="text-5xl md:text-6xl font-bold text-gray-300">
                    {principle.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-12">
              Based in Dubai.<br />
              Built for perfection.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                We've installed systems in homes across the UAE. We've fixed disasters 
                left by other companies. We've listened to countless horror stories.
              </p>
              
              <p className="text-2xl md:text-3xl font-medium text-black pt-8">
                HomiFi is what smart homes should have been from the beginning.
              </p>
              
              <p className="text-xl text-gray-600">
                Simple. Honest. Reliable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Elegant */}
      <section className="py-32 bg-black text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              Ready to experience<br />
              the difference?
            </h2>

            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-2xl"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <p className="text-gray-400 text-sm mt-8">
              Transform your home in days, not weeks
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
