'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function AboutPage() {
  return (
    <main className="bg-gray-50 overflow-hidden">
      <Header />

      {/* Hero - Light background, dark text */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
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
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed"
          >
            So we fixed it.
          </motion.p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-600 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Problems - Light gradient, ALL TEXT DARK AND VISIBLE */}
      <section className="py-32 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold mb-20 max-w-3xl text-gray-900"
          >
            The industry had problems.<br />
            <span className="text-gray-600">We had opinions.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                problem: 'Seven apps to control one home',
                solution: 'One app. Everything.'
              },
              {
                problem: 'Locked to one vendor forever',
                solution: 'Your home. Your choice.'
              },
              {
                problem: 'Support that disappears after install',
                solution: 'We stick around.'
              },
              {
                problem: 'Proprietary systems that fight each other',
                solution: 'Open standards. Everything talks.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <div className="text-sm text-red-700 font-semibold uppercase tracking-wider">Problem</div>
                  <p className="text-xl text-gray-600 line-through decoration-red-400">{item.problem}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-emerald-700 font-semibold uppercase tracking-wider">Solution</div>
                  <p className="text-2xl font-semibold text-gray-900">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Two founders.<br />
              One engineer. One not.<br />
              Both tired of the same thing.
            </h2>

            <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
              <p>
                Multiple apps for one home. Proprietary ecosystems that trap you. Service providers who vanish after the sale. Support that makes you regret asking.
              </p>
              <p>
                We built what we wanted to buy.<br />
                A system that just works.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy - Light gray gradient */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-16 text-center text-gray-900"
          >
            What we believe
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Open over closed',
                desc: 'Your home works with Apple, Google, Alexa. Not locked to one.',
                accent: 'border-blue-300 hover:shadow-blue-100'
              },
              {
                title: 'Simple over complex',
                desc: 'If it needs a manual, we failed.',
                accent: 'border-purple-300 hover:shadow-purple-100'
              },
              {
                title: 'Service over sale',
                desc: 'Install is day one. Support is every day after.',
                accent: 'border-orange-300 hover:shadow-orange-100'
              }
            ].map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-white rounded-3xl p-10 border-2 ${belief.accent} h-full shadow-md hover:shadow-xl transition-all`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{belief.title}</h3>
                <p className="text-gray-700 leading-relaxed">{belief.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Subtle gradient */}
      <section className="py-32 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
              Homes. Offices. Hotels.
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Any space that needs to be smarter without being harder.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                space: 'Homes',
                detail: 'Villas to apartments. Lighting to security. Built for how you actually live.',
                number: '01'
              },
              {
                space: 'Offices',
                detail: 'Meeting rooms that work. Climate that adapts. Secure access made simple.',
                number: '02'
              },
              {
                space: 'Hotels',
                detail: 'Guest comfort. Staff control. Energy efficiency. All from one system.',
                number: '03'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="text-8xl font-bold text-gray-900">
                  {item.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{item.space}</h3>
                <p className="text-gray-700 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-negotiables - LIGHT GRADIENT, NOT DARK */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-16 text-gray-900"
          >
            Non-negotiables
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {[
              { rule: 'If it locks you in, we refuse to install it.' },
              { rule: 'If it needs seven apps, we find another way.' },
              { rule: 'If support disappears, so do we.' },
              { rule: 'If it is complicated, it is not ready.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 border-l-4 border-gray-300 hover:border-blue-500 transition-colors pl-8 py-2"
              >
                <span className="text-blue-600 font-mono text-lg min-w-[3rem] font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-xl md:text-2xl font-light text-gray-900">{item.rule}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-40 px-4 bg-gradient-to-b from-white to-gray-50">
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
              href="/#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
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
