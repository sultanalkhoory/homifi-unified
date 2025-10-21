'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function AboutPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const gridPrinciples = [
    {
      title: 'No Complexity',
      short: 'One app. One ecosystem.',
      full: 'Your iPhone controls everything. No manuals. No training sessions. No IT degree required. If it is not intuitive, we do not install it.'
    },
    {
      title: 'Apple First',
      short: 'If it does not work with HomeKit, we do not install it.',
      full: 'Apple Home is the center of everything. Siri, Apple TV, CarPlay, HomeKey—it all works seamlessly or it does not leave our warehouse.'
    },
    {
      title: 'Real Support',
      short: 'WhatsApp us 9 AM - 6 PM. Seriously.',
      full: 'Three months of support included. No surprise charges. No gatekeeping. Real people who actually use this technology every day.'
    },
    {
      title: 'Honest Pricing',
      short: 'No hidden fees. Ever.',
      full: 'Fixed quotes. Transparent costs. No upsells. No ransom for basic features. What you see is what you pay. Always.'
    }
  ];

  return (
    <main className="bg-white">
      <Header />
      
      {/* SECTION 1: Anti-About Opening */}
      <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              We do not do smart homes.
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                We do homes that happen<br />to be smart.
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-gray-400 pt-8"
            >
              The difference?<br />
              You will never notice the tech.<br />
              Just the magic.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The Moment */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-black">
              The moment it clicked.
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                I was using Siri to turn off the lights.<br />
                My cameras showed up instantly on Apple TV.<br />
                I opened my garage from CarPlay without thinking about it.
              </p>
              
              <p className="text-2xl md:text-3xl font-semibold text-black">
                This is magic.
              </p>
              
              <p>
                Then I looked at what the smart home industry was actually delivering.<br />
                And I got angry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Interactive Grid of Truth */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black"
          >
            What we stand for.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                className="cursor-pointer group"
              >
                <div className={`
                  bg-white border-2 border-gray-200 rounded-2xl p-8 
                  transition-all duration-300
                  ${expandedCard === index ? 'shadow-2xl border-black' : 'hover:shadow-xl hover:border-gray-300'}
                `}>
                  <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                    {principle.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {principle.short}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCard === index ? 'auto' : 0,
                      opacity: expandedCard === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-base text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                      {principle.full}
                    </p>
                  </motion.div>

                  <div className="mt-4 text-sm text-gray-400">
                    {expandedCard === index ? '− Less' : '+ More'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Problems We Saw */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold mb-20 text-center"
          >
            What we kept seeing.
          </motion.h2>

          <div className="space-y-16">
            {[
              {
                title: 'Apps that hold you hostage',
                description: 'Ugly interfaces from 2010. Forced to use the integrator app forever. No Apple Home. No Google. No choice. Just trapped.'
              },
              {
                title: 'Expensive mistakes',
                description: 'Someone installed six UniFi access points—professional-grade WiFi. Then connected them to a cheap router. Completely defeated the purpose.'
              },
              {
                title: 'People who do not actually care',
                description: 'Integrators who do not use the systems they install. Salespeople who do not understand Apple Home. Companies that see smart homes as just another upsell.'
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border-l-4 border-white pl-8"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {problem.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Philosophy - Cinematic Text */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
              Technology should<br />be invisible.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
              Intelligence should<br />be intuitive.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
              Luxury should<br />be effortless.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1 }}
            className="text-center pt-16"
          >
            <h2 className="text-5xl md:text-7xl font-semibold text-black leading-tight">
              This is HomiFi.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Our Promise */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold mb-20 text-center text-black"
          >
            What we promise.
          </motion.h2>

          <div className="space-y-16">
            {[
              {
                number: '01',
                title: 'Apple Home, first',
                description: 'If it does not work seamlessly with Apple Home, we will not install it. Your iPhone is your remote. Period.'
              },
              {
                number: '02',
                title: 'Enterprise WiFi, done right',
                description: 'UniFi throughout—APs, switches, router, everything. No cheap shortcuts. No half-measures.'
              },
              {
                number: '03',
                title: 'Your ecosystem, your choice',
                description: 'Want Google Home? Alexa? Our app? All of the above? Your call. We make it work.'
              },
              {
                number: '04',
                title: 'Honest support',
                description: 'WhatsApp us 9 AM - 6 PM. Three months included. No surprise charges. No ransom.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-2">
                  <span className="text-5xl md:text-6xl font-bold text-gray-300">
                    {item.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: The Vision */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              We have not done<br />our first install yet.
            </h2>

            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
              And that is exactly why<br />we will do it right.
            </p>

            <div className="space-y-6 text-xl md:text-2xl text-gray-400 leading-relaxed pt-12">
              <p>
                We are not the biggest.
              </p>
              <p>
                We are not the oldest.
              </p>
              <p className="text-white font-semibold text-2xl md:text-3xl pt-4">
                We are just doing it right.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
              Want to be our first?
            </h2>

            <p className="text-xl text-gray-600">
              We are ready. Are you?
            </p>

            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors duration-200 shadow-2xl"
            >
              Let's Talk
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <p className="text-sm text-gray-500 pt-8">
              Based in Dubai · Apple Home First · Powered by UniFi
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
