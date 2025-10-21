'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function AboutPage() {

  return (
    <main className="bg-white">
      <Header />
      
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-black leading-[1.1]">
              Before our<br />
              first install.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We wanted to tell you why we're doing this.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE MOMENT */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-semibold">
              The moment it clicked.
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                I was using Siri to turn off the lights.<br />
                My cameras showed up instantly on Apple TV.<br />
                I opened my garage from CarPlay without thinking about it.
              </p>
              
              <p>
                And I thought: <span className="text-white font-medium">"This is magic."</span>
              </p>
              
              <p>
                Then I looked at what the smart home industry was actually delivering.<br />
                And I got angry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEMS - Story Format */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold mb-20 text-center text-black"
          >
            What we kept seeing.
          </motion.h2>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="border-l-4 border-black pl-8"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Apps that hold you hostage
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Ugly interfaces from 2010. Forced to use the integrator's app forever. 
                No Apple Home. No Google. No choice. Just trapped.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="border-l-4 border-black pl-8"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Expensive mistakes
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Someone installed six UniFi access points—professional-grade WiFi.<br />
                Then connected them to a cheap router.<br />
                <span className="font-medium text-black">Completely defeated the purpose.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-4 border-black pl-8"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                People who don't actually care
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Integrators who don't use the systems they install.<br />
                Salespeople who don't understand Apple Home.<br />
                Companies that see smart homes as just another upsell.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE DECISION */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
              So we're fixing it.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Two engineers from Dubai who actually love this technology.<br />
              Who use Apple Home every single day.<br />
              Who understand UniFi isn't just about fast WiFi—it's about reliability.
            </p>

            <p className="text-2xl md:text-3xl font-semibold text-black pt-8">
              We haven't done our first install yet.<br />
              And that's exactly why we'll do it right.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR PROMISE - Numbered */}
      <section className="py-32 px-4">
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
                description: 'If it doesn\'t work seamlessly with Apple Home, we won\'t install it. Your iPhone is your remote. Period.'
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

      {/* THE VISION */}
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
              Our vision is simple.
            </h2>

            <div className="space-y-8 text-xl md:text-2xl text-gray-300 leading-relaxed">
              <p>
                Change how people in Dubai think about smart homes.
              </p>
              
              <p>
                Show them it can be <span className="text-white font-medium">seamless</span>.<br />
                Show them it can be <span className="text-white font-medium">honest</span>.<br />
                Show them it can actually <span className="text-white font-medium">elevate their lives</span>.
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-400 pt-8">
              We're not the biggest.<br />
              We're not the oldest.<br />
              <span className="text-white font-semibold">We're just doing it right.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4">
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
              We're ready. Are you?
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

            <p className="text-sm text-gray-500">
              Based in Dubai · Obsessed with Apple Home · Powered by UniFi
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
