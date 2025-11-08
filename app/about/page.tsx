'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function AboutPage() {
  const { openModal } = useContactModal();

  return (
    <main className="bg-white overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/5 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl text-center space-y-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] text-gray-900">
            Smart homes,<br />
            done right.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Open systems. Professional installation. Your control.
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <div className="w-6 h-10 border border-gray-200 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Why We Started */}
      <section className="py-32 px-4 bg-gradient-to-br from-orange-50/15 via-pink-50/10 to-purple-50/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Why we started
            </h2>

            <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
              <p>
                In Dubai, we saw homeowners stuck with expensive systems they couldn't control. Locked to one vendor. Waiting days for simple changes. Paying twice for what they already owned.
              </p>
              <p className="text-gray-900 font-medium">
                We built HomiFi to change that.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-32 px-4 bg-gradient-to-br from-blue-50/20 via-indigo-50/15 to-purple-50/20 relative overflow-hidden">
        {/* Subtle orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-20 text-gray-900"
          >
            What we do differently
          </motion.h2>

          <div className="space-y-16">
            {[
              {
                title: 'Open systems',
                desc: 'Works with Apple Home, Google Home, and Alexa. Switch platforms anytime. Use all three at once. Your choice.',
                accent: 'hover:border-blue-400'
              },
              {
                title: 'True ownership',
                desc: 'Your app. Your automations. We install, train you, then you're in control. No calls needed for simple changes.',
                accent: 'hover:border-purple-400'
              },
              {
                title: 'Real support',
                desc: 'Three months included after install. WhatsApp us, we respond. Need help later? We're still here.',
                accent: 'hover:border-indigo-400'
              },
              {
                title: 'Industry standards',
                desc: 'Universal devices any integrator can service. Not locked to us. Not locked to anyone.',
                accent: 'hover:border-cyan-400'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border-l-2 border-gray-200 ${item.accent} pl-8 transition-colors`}
              >
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 px-4 bg-gradient-to-br from-white via-purple-50/8 to-pink-50/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
              Homes. Offices. Hotels.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                space: 'Homes',
                detail: 'Villas, apartments, townhouses. Full automation or single rooms.',
                number: '01',
                color: 'text-blue-400'
              },
              {
                space: 'Offices',
                detail: 'Meeting rooms, lighting zones, access control. Managed by your team.',
                number: '02',
                color: 'text-purple-400'
              },
              {
                space: 'Hotels',
                detail: 'Guest controls, staff overrides, energy management. Any property size.',
                number: '03',
                color: 'text-pink-400'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className={`text-7xl font-light ${item.color}`}>
                  {item.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{item.space}</h3>
                <p className="text-gray-600 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-4 bg-gradient-to-br from-blue-50/10 via-indigo-50/8 to-purple-50/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
              Ready for a smarter home?
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with a free consultation.
            </p>

            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-900 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
