'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

/**
 * About Us Page - "We Fixed Smart Homes"
 * Story-driven, problem → solution, personal and bold
 */
export default function AboutPage() {
  
  const solutions = [
    {
      problem: 'Horror Stories',
      problemDetail: 'Disconnects, delays, unresponsive systems',
      solution: 'Rock-Solid Reliability',
      solutionDetail: 'Enterprise WiFi. Professional installation. Zero surprises.',
      icon: '⚡'
    },
    {
      problem: 'Support Ransom',
      problemDetail: 'AED 500 to add a scene? Really?',
      solution: '3 Months Included',
      solutionDetail: 'WhatsApp support. Firmware updates. Scene setup. Free.',
      icon: '🤝'
    },
    {
      problem: 'App Hostage',
      problemDetail: 'Trapped in one crappy app forever',
      solution: 'Your Choice, Your Way',
      solutionDetail: 'Apple Home, Google, Alexa—or our app. You decide.',
      icon: '📱'
    },
    {
      problem: 'Price Games',
      problemDetail: 'Hidden fees, knowledge tax',
      solution: 'Honest Pricing',
      solutionDetail: 'Fixed quotes. No surprises. What you see is what you pay.',
      icon: '💰'
    }
  ];

  return (
    <main className="bg-white">
      <Header />
      
      {/* Section 1: The Opening */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-black leading-tight mb-6">
            Smart homes shouldn't<br />make you feel stupid.
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12"
          >
            <svg className="w-6 h-6 mx-auto text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-20 md:py-32 bg-black text-white px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-12">
              We've seen it all.
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>The disconnects. The delays. The unresponsive lights.</p>
              
              <p>The integrator who charges you AED 500 just to add a scene.</p>
              
              <p>The app that looks like it was designed in 2005—and you're stuck with it.</p>
              
              <p>The salesperson who takes advantage because you don't speak 'tech.'</p>
              
              <p className="text-white font-medium pt-6 md:pt-8">
                We're two Emirati engineers.<br />
                And we got tired of watching people get trapped in their own homes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section className="py-20 md:py-32 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-center mb-12 md:mb-20 text-black"
          >
            So we built HomiFi.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                
                {/* Problem */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500 text-xl">❌</span>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.problem}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">{item.problemDetail}</p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500 text-xl">✅</span>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.solution}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">{item.solutionDetail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Who We Are */}
      <section className="py-20 md:py-32 bg-gray-50 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-black">
              Who We Are
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                Two Emirati engineers who believe technology should work for people, 
                not the other way around.
              </p>
              
              <p>
                We've installed systems in homes across Dubai.<br />
                We've fixed disasters left by other companies.<br />
                We've listened to horror stories over countless cups of coffee.
              </p>
              
              <p className="font-medium text-black pt-4">
                Now, we're doing it right.
              </p>
              
              <p className="text-gray-600">
                HomiFi is what smart homes should have been from the beginning:
              </p>
              
              <p className="text-2xl md:text-3xl font-semibold text-black">
                Simple. Honest. Reliable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: The Promise */}
      <section className="py-20 md:py-32 bg-black text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-4 md:space-y-6 text-xl md:text-2xl leading-relaxed">
              <p>You'll never pay us to add a scene.</p>
              <p>You'll never be trapped in a bad app.</p>
              <p>You'll never wonder if you're being overcharged.</p>
            </div>
            
            <div className="pt-8 md:pt-12 space-y-4">
              <p className="text-2xl md:text-4xl font-semibold">
                This is smart home, done right.
              </p>
              <p className="text-2xl md:text-4xl font-semibold">
                This is HomiFi.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8"
            >
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
