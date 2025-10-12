'use client';

import { motion } from 'framer-motion';
import { fadeRise, staggerUp, childUp } from '@/lib/animations';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

/**
 * How It Works - Standalone Page
 * 
 * Accessible from header navigation
 * Responsive design that adapts between mobile and desktop
 * 5-step walkthrough of the HomiFi installation process
 */

type Step = {
  number: string;
  title: string;
  description: string;
  descriptionMobile: string;
  icon: React.ReactNode;
  color: string;
};

export default function HowItWorksPage() {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Design Your Smart Home Plan',
      description: 'We start by understanding your space and lifestyle. No two homes are alike—your automation should reflect how you live, not force you into preset templates. We map out zones, routines, and priorities for a unified experience.',
      descriptionMobile: 'We understand your space and lifestyle. Map out zones, routines, and priorities for a unified experience tailored to how you live.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: 'from-blue-400 to-indigo-500'
    },
    {
      number: '02',
      title: 'Build Your Wi-Fi Foundation',
      description: 'Every smart home begins with a strong network. We design and install enterprise-grade Wi-Fi that covers every corner—no dead zones, no dropouts. Your home stays connected, and every device communicates instantly and securely.',
      descriptionMobile: 'Enterprise-grade Wi-Fi covers every corner. No dead zones, no dropouts. Every device communicates instantly and securely.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      color: 'from-cyan-400 to-teal-500'
    },
    {
      number: '03',
      title: 'Install & Integrate Devices',
      description: 'From lighting and curtains to cameras and climate control—we handle the installation. No programming knowledge required. Everything connects seamlessly and is ready to use, all connected through Apple Home, Google Home, or Alexa.',
      descriptionMobile: 'We handle everything—lighting, curtains, cameras, climate. No programming knowledge required. Connects seamlessly to Apple Home, Google, or Alexa.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-amber-400 to-orange-500'
    },
    {
      number: '04',
      title: 'Configure & Automate',
      description: 'We set up personalized scenes and automations tailored to your daily routine. "Good morning" opens curtains and adjusts lighting. "Movie time" dims everything and closes shades. Your home responds automatically—no coding, no complexity.',
      descriptionMobile: 'Personalized scenes respond automatically. "Good morning" opens curtains. "Movie time" dims lights. No coding, no complexity.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-purple-400 to-pink-500'
    },
    {
      number: '05',
      title: 'Enjoy + Support',
      description: 'Your system is ready. Control everything with your voice through Siri, Alexa, or Google. Use your iPhone as your HomeKey. Monitor your home on Apple TV. We include three months of complimentary support—paid plans available after for ongoing assistance.',
      descriptionMobile: 'Control with Siri, Alexa, or Google. Use iPhone as HomeKey. Monitor on Apple TV. Three months complimentary support included.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          
          {/* Page Header */}
          <motion.div
            variants={fadeRise}
            initial="hidden"
            animate="show"
            className="text-center mb-12 md:mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-4 md:mb-6">
              How It Works
            </h1>
            <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              From Wi-Fi to automations—five simple steps to your perfectly connected home.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={staggerUp}
            initial="hidden"
            animate="show"
            className="space-y-6 md:space-y-12 max-w-5xl mx-auto"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={childUp}
              >
                {/* Step Card */}
                <div 
                  className="relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-10
                    backdrop-blur-xl bg-white/70 border border-white/50
                    shadow-lg hover:shadow-2xl transition-shadow duration-500"
                >
                  {/* Background gradient overlay */}
                  <div 
                    className={`absolute inset-0 opacity-5 bg-gradient-to-br ${step.color}`}
                    style={{ mixBlendMode: 'multiply' }}
                  />

                  <div className="relative z-10">
                    {/* Header: Number + Icon */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-200">
                        {step.number}
                      </span>
                      <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-3 md:mb-4">
                      {step.title}
                    </h2>

                    {/* Description - responsive text */}
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                      <span className="md:hidden">{step.descriptionMobile}</span>
                      <span className="hidden md:inline">{step.description}</span>
                    </p>

                    {/* Key feature badges */}
                    {index === 2 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/90 text-xs font-medium text-gray-700 border border-gray-200">
                          No coding required
                        </span>
                        <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/90 text-xs font-medium text-gray-700 border border-gray-200">
                          Apple Home ready
                        </span>
                      </div>
                    )}

                    {index === 4 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/90 text-xs font-medium text-gray-700 border border-gray-200">
                          Siri voice control
                        </span>
                        <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/90 text-xs font-medium text-gray-700 border border-gray-200">
                          HomeKey
                        </span>
                        <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/90 text-xs font-medium text-gray-700 border border-gray-200">
                          Apple TV
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connecting line (except last step) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-3 md:py-4">
                    <div className="w-0.5 h-8 md:h-12 bg-gradient-to-b from-gray-300 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 md:mt-16"
          >
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Ready to see your home in sync?
            </p>
            <a 
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full
                backdrop-blur-xl bg-white/70 border border-white/50
                text-black font-semibold text-base md:text-lg
                shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95
                transition-all duration-300"
            >
              Get Started
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
