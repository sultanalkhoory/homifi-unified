'use client';
import { motion } from 'framer-motion';
import { fadeRise, staggerUp, childUp } from '@/lib/animations';

export default function BenefitsSection() {
  // Key benefits data - 4 cards
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Automate Your Routines',
      description: 'Set up automation for lighting, climate, and security with simple tap-and-go controls. No coding, no complexity.',
      mobileDescription: 'Simple automation for lights, climate, and security. No coding needed.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Seamless Integrations',
      description: 'Works with Apple Home, Google Home, and Amazon Alexa. Connect your favorite smart devices—all in one place.',
      mobileDescription: 'Works with Apple Home, Google Home, and Alexa.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: 'Voice Control Everything',
      description: '"Hey Siri, good night." Works with Siri, Alexa, and Google Assistant for effortless hands-free control.',
      mobileDescription: 'Control with Siri, Alexa, or Google Assistant.',
      color: 'from-cyan-400 to-teal-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Built for Apple',
      description: 'Deep integration with Apple Home, HomeKey, and Apple TV. Your iPhone becomes your key, your TV your security monitor.',
      mobileDescription: 'Apple Home, HomeKey, and Apple TV integration.',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Section Header */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-black mb-3 md:mb-4">
            Smart home, simplified.
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your home—effortless automation, seamless control, and intelligent design.
          </p>
        </motion.div>

        {/* Benefits Grid - adjusted gap for mobile */}
        <motion.div
          variants={staggerUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={childUp}
              className="group relative"
            >
              {/* Card - smaller padding on mobile */}
              <div className="relative h-full bg-white rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                
                {/* Icon with gradient background - smaller on mobile */}
                <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                {/* Title - smaller on mobile */}
                <h3 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3">
                  {benefit.title}
                </h3>

                {/* Description - shorter text on mobile, full on desktop */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  <span className="md:hidden">{benefit.mobileDescription}</span>
                  <span className="hidden md:inline">{benefit.description}</span>
                </p>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <a 
            href="#perfect-light"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            See It In Action
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
