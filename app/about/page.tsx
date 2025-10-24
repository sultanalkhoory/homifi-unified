'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl text-center space-y-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] text-black">
            Smart homes<br />
            shouldn't be<br />
            <span className="font-semibold">this complicated.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            So we fixed it.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <div className="w-6 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Problems - Gradient */}
      <section className="py-32 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold mb-20 max-w-3xl"
          >
            The industry had problems.<br />
            <span className="text-white/70">We had opinions.</span>
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
                  <div className="text-sm text-red-300 font-medium uppercase tracking-wider">Problem</div>
                  <p className="text-xl text-white/70 line-through decoration-red-300/50">{item.problem}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-emerald-300 font-medium uppercase tracking-wider">Solution</div>
                  <p className="text-2xl font-semibold text-white">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
              Two founders.<br />
              One engineer. One not.<br />
              Both tired of the same thing.
            </h2>

            <div className="space-y-8 text-xl text-gray-600 leading-relaxed">
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

      {/* Philosophy */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black"
          >
            What we believe
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Open over closed',
                desc: 'Your home works with Apple, Google, Alexa. Not locked to one.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Simple over complex',
                desc: 'If it needs a manual, we failed.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Service over sale',
                desc: 'Install is day one. Support is every day after.',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${belief.gradient} opacity-5 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                <div className="relative bg-white rounded-3xl p-10 border border-gray-200 h-full shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-black">{belief.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{belief.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-black">
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
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                space: 'Offices',
                detail: 'Meeting rooms that work. Climate that adapts. Secure access made simple.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                space: 'Hotels',
                detail: 'Guest comfort. Staff control. Energy efficiency. All from one system.',
                gradient: 'from-orange-500 to-red-500'
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
                <div className={`text-6xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-semibold text-black">{item.space}</h3>
                <p className="text-gray-600 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-negotiables */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-16"
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
                className="flex items-start gap-6 border-l-2 border-gray-700 hover:border-blue-400 transition-colors pl-8 py-2"
              >
                <span className="text-blue-400 font-mono text-sm min-w-[3rem] font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-xl md:text-2xl font-light">{item.rule}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-40 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-black">
              Smart homes<br />
              shouldn't make you<br />
              <span className="font-semibold">feel stupid.</span>
            </h2>
            
            <motion.a
              href="/#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
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
