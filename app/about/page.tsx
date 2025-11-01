'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Header />

      {/* Hero - Add subtle gradient */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/10 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl text-center space-y-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] text-gray-900">
            Smart homes<br />
            shouldn't be<br />
            <span className="font-semibold">this complicated.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
          >
            So we fixed it.
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

      {/* Why We Started - Warmer gradient */}
      <section className="py-32 px-4 bg-gradient-to-br from-orange-50/30 via-pink-50/20 to-purple-50/20">
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

            <div className="space-y-8 text-xl text-gray-500 leading-relaxed">
              <p>
                We kept meeting people stuck with expensive systems they couldn't control. Locked to one vendor. Waiting days for support to change a light schedule. Paying again for something they already bought.
              </p>
              <p className="text-gray-900 font-medium">
                We do it differently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We're Different - More vibrant gradient */}
      <section className="py-32 px-4 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-purple-50/40 relative overflow-hidden">
        {/* Enhanced orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl"
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
                title: 'We use open devices',
                desc: 'Not proprietary hardware. Our devices work with Apple Home, Google Home, and Alexa. Want to switch platforms tomorrow? You can. Want to use all three? You can. Your choice.',
                accent: 'hover:border-blue-400'
              },
              {
                title: 'You control everything',
                desc: "Your app. Your scenes. Your automations. No calling us to change a light schedule. We set it up, we train you, then it's yours.",
                accent: 'hover:border-purple-400'
              },
              {
                title: 'We actually stick around',
                desc: "Three months of included support after install. WhatsApp us, we respond. Need help six months later? We're still here.",
                accent: 'hover:border-indigo-400'
              },
              {
                title: 'We install universal systems',
                desc: "Not our system. Industry-standard devices that any integrator can service. We disappear tomorrow? You're not stuck.",
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
                <p className="text-lg text-gray-500 leading-relaxed max-w-3xl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Colorful numbers */}
      <section className="py-32 px-4 bg-gradient-to-br from-white via-purple-50/15 to-pink-50/20">
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
                detail: 'Villas, apartments, townhouses. Full integration or single rooms. You decide the scope.',
                number: '01',
                color: 'text-blue-400'
              },
              {
                space: 'Offices',
                detail: 'Meeting rooms, lighting zones, access control. Managed by your team, not ours.',
                number: '02',
                color: 'text-purple-400'
              },
              {
                space: 'Hotels',
                detail: 'Guest controls, staff overrides, energy management. Scales to any property size.',
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
                <p className="text-gray-500 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Statement - Gradient button */}
      <section className="py-40 px-4 bg-gradient-to-br from-blue-50/20 via-indigo-50/15 to-purple-50/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-gray-900">
              Smart homes<br />
              shouldn't make you<br />
              <span className="font-semibold">feel stupid.</span>
            </h2>
            
            <motion.a
              href="/how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-900 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              See How We Do It
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
