'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const features = [
    {
      badge: 'EFFORTLESS',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-700',
      badgeBorder: 'border-amber-200',
      title: 'Automation that doesn\'t require a PhD',
      desc: 'Lighting. Climate. Security. Create routines with a tap. No coding. No cryptic menus.',
      gradient: 'from-amber-400 to-orange-500',
      emoji: '⚡',
      order: 'normal'
    },
    {
      badge: 'SIMPLE',
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      badgeBorder: 'border-emerald-200',
      title: 'Professional install. You just live here.',
      desc: 'We handle everything. Our engineers set it up. You enjoy it. Zero programming knowledge required.',
      gradient: 'from-emerald-400 to-teal-500',
      emoji: '🔧',
      order: 'reverse'
    },
    {
      badge: 'UNIFIED',
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-700',
      badgeBorder: 'border-blue-200',
      title: 'Your ecosystem, your rules',
      desc: 'Apple Home. Google. Alexa. Pick one or all three. Everything syncs perfectly in one place.',
      gradient: 'from-blue-400 to-indigo-500',
      emoji: '🔗',
      order: 'normal'
    },
    {
      badge: 'INSTANT',
      badgeBg: 'bg-red-50',
      badgeText: 'text-red-700',
      badgeBorder: 'border-red-200',
      title: 'Know what matters, instantly',
      desc: 'Motion. Doors. Temperature shifts. Real-time notifications. Right on your phone. No delays.',
      gradient: 'from-red-400 to-pink-500',
      emoji: '🔔',
      order: 'reverse'
    },
    {
      badge: 'HANDS-FREE',
      badgeBg: 'bg-cyan-50',
      badgeText: 'text-cyan-700',
      badgeBorder: 'border-cyan-200',
      title: '"Hey Siri, goodnight"',
      desc: 'Siri. Alexa. Google. Say it once. Everything responds. Works everywhere—your phone, watch, speakers.',
      gradient: 'from-cyan-400 to-blue-500',
      emoji: '🎤',
      order: 'normal'
    },
    {
      badge: 'APPLE FIRST',
      badgeBg: 'bg-gray-100',
      badgeText: 'text-gray-700',
      badgeBorder: 'border-gray-300',
      title: 'Built for Apple, seriously',
      desc: 'HomeKey (your iPhone is your key). Apple TV integration. Apple Watch control. If it doesn\'t work with HomeKit, we don\'t install it.',
      gradient: 'from-gray-800 to-gray-600',
      emoji: '🍎',
      order: 'reverse'
    }
  ];

  const values = [
    { num: '01', title: 'No Complexity', desc: 'If your parents can\'t use it, neither can we.' },
    { num: '02', title: 'No Hidden Fees', desc: 'Fixed quotes. Transparent. No ransom for features.' },
    { num: '03', title: 'No Compromises', desc: 'We refuse to install cheap shortcuts.' },
    { num: '04', title: 'Real Support', desc: 'WhatsApp us 9–6. Three months included. Seriously.' }
  ];

  const founders = [
    { role: 'Co-Founder & CTO', desc: 'Infrastructure is sacred. Refuses to cut corners.' },
    { role: 'Co-Founder & CEO', desc: 'Technology should disappear. You shouldn\'t notice it.' }
  ];

  return (
    <main className="bg-white overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-white pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl text-center space-y-8"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none text-black">
            We refuse<br />
            <span className="font-semibold">to compromise.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light"
          >
            No hidden fees. No overcomplicated systems. No excuses.<br />Just homes that work.
          </motion.p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <div className="w-6 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-32 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-24"
          >
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                variants={itemVariants} 
                className={`grid md:grid-cols-12 gap-12 items-center ${feature.order === 'reverse' ? 'md:[direction:rtl]' : ''}`}
              >
                <div className="md:col-span-5 space-y-4">
                  <div className={`inline-block px-3 py-1 ${feature.badgeBg} border ${feature.badgeBorder} rounded-full text-xs font-semibold ${feature.badgeText}`}>
                    {feature.badge}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-semibold text-black">{feature.title}</h3>
                  <p className="text-lg text-gray-600">{feature.desc}</p>
                </div>
                <div className={`md:col-span-7 bg-gradient-to-br ${feature.gradient} aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                  <motion.div
                    animate={feature.emoji === '⚡' ? { rotate: 360 } : feature.emoji === '🔧' ? { scale: [1, 1.1, 1] } : feature.emoji === '🔗' ? { x: [0, 20, 0] } : feature.emoji === '🔔' ? { scale: [1, 1.2, 1] } : feature.emoji === '🎤' ? { y: [0, -15, 0] } : { rotate: [0, 360] }}
                    transition={feature.emoji === '⚡' ? { duration: 20, repeat: Infinity, ease: 'linear' } : { duration: feature.emoji === '🔔' ? 2 : feature.emoji === '🔗' ? 3 : feature.emoji === '🎤' ? 2.5 : feature.emoji === '🍎' ? 30 : 3, repeat: Infinity }}
                    className="text-9xl opacity-20"
                  >
                    {feature.emoji}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-5xl md:text-6xl font-semibold mb-16"
          >
            Our non-negotiables
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border-l-2 border-gray-700 pl-8 py-4 hover:border-white transition-colors duration-300"
              >
                <div className="text-sm font-semibold text-gray-500 mb-2">{item.num}</div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-lg mb-16 font-light"
          >
            Built by engineers<br />who got tired of broken systems.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="border-t border-gray-200 pt-8"
              >
                <p className="text-sm text-gray-500 font-medium mb-4">{person.role}</p>
                <p className="text-gray-600">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center space-y-8"
          >
            <p className="text-5xl md:text-6xl font-light text-black leading-tight">
              "Finally, a smart home that just works."
            </p>
            <div className="space-y-2">
              <p className="text-lg font-medium text-black">Real person</p>
              <p className="text-sm text-gray-500">Villa Owner, UAE</p>
            </div>
          </motion.blockquote>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 bg-black text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mx-auto text-center space-y-10"
        >
          <h2 className="text-6xl md:text-7xl font-light tracking-tight">
            Ready?
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Book a consultation. Tour the showroom. Or just chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Let's Talk
            </button>
            <button className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors">
              See Showroom
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
