'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

// Animated counter for stats - extracted for performance
const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [end]);

  return <>{count}{suffix}</>;
};

export default function AboutPage() {
  // KEY POINTS: 6 features emphasizing no-code, easy install, and platform choice
  const features = [
    {
      // POINT 1: No-code automation
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'No-Code Automation',
      description: 'Set up lighting, climate, and security routines in minutes. Zero programming needed.'
    },
    {
      // POINT 2: Simple installation - anyone can do it
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Anyone Can Install',
      description: 'Simple enough for your parents to set up. No IT degree required.'
    },
    {
      // POINT 3: Seamless integrations - choose your platform
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6M1 12h6m6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Works With Everything',
      description: 'Apple Home, Google Home, Amazon Alexa. Choose your favorite, we connect them all.'
    },
    {
      // POINT 4: Instant notifications
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Instant Alerts',
      description: 'Real-time notifications about what matters. Right on your phone.'
    },
    {
      // POINT 5: Voice control across all platforms
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Voice Everywhere',
      description: 'Siri, Alexa, Google Assistant. Control your home with your voice.'
    },
    {
      // POINT 6: Apple integration is paramount - HomeKey & Apple TV
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Apple Integration',
      description: 'HomeKit, HomeKey, Apple TV. Seamlessly woven into your Apple ecosystem.'
    }
  ];

  return (
    <main className="bg-white">
      <Header />

      {/* Hero with gradient background */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {/* Floating orbs for visual depth */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-semibold text-white leading-[1.1] mb-6"
          >
            Built by engineers.<br />
            Designed for humans.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            500+ homes in Dubai. Zero complexity.
          </motion.p>
        </div>
      </section>

      {/* The Problem - Why HomiFi exists */}
      <section className="py-20 bg-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-100 rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50 rounded-full translate-x-48 translate-y-48" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-8">
              The industry had problems.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Unreliable systems. Hidden fees. Proprietary traps. Tech so complex you needed an IT degree just to turn on the lights.
            </p>
            <div className="inline-block px-8 py-4 bg-black text-white rounded-full text-2xl font-semibold">
              So we fixed it.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - The 6 Key Points */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              What you actually get
            </h2>
            <p className="text-xl text-gray-600">
              No fluff. Just features that work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple + Google + Alexa - POINT 3: Choose your platform */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Built for Apple. And everything else.
            </h2>
            <p className="text-xl text-gray-600">
              100% HomeKit compatible. Plus HomeKey and Apple TV integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Apple Home', desc: 'Native HomeKit with HomeKey & Apple TV hub' },
              { name: 'Google Home', desc: 'Full Assistant integration' },
              { name: 'Amazon Alexa', desc: 'Complete voice control' }
            ].map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <h3 className="text-2xl font-semibold mb-3">{platform.name}</h3>
                <p className="text-gray-600">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Meet the team
            </h2>
            <p className="text-xl text-gray-600">
              Engineers who got tired of complicated smart homes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                initials: 'SA',
                name: 'Sultan Al-Khoory',
                role: 'Co-Founder & CTO',
                bio: 'Ex-Apple engineer who believes smart homes should just work.',
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                initials: 'OM',
                name: 'Omar Al-Mansoori',
                role: 'Co-Founder & CEO',
                bio: 'IoT specialist who believes technology should serve people, not frustrate them.',
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                  {founder.initials}
                </div>
                <h3 className="text-2xl font-semibold text-center mb-2">{founder.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider text-center mb-4">{founder.role}</p>
                <p className="text-gray-600 text-center leading-relaxed">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with animated counters */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, label: 'Homes', suffix: '+' },
              { value: 100, label: 'HomeKit', suffix: '%' },
              { value: 24, label: 'Support', suffix: '/7' },
              { value: 4.9, label: 'Rating', suffix: '★' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-8 left-8 text-8xl text-gray-100 font-serif leading-none">"</div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Finally, a smart home that just works. No tech support calls. No mysterious disconnects. It's been flawless for 8 months.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  R
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rashid Al-Mansoori</p>
                  <p className="text-gray-500 text-sm">Villa Owner, Arabian Ranches</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black text-white px-4 relative overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              See it in action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Book a demo. Tour our showroom. Or start with a free consultation.
            </p>

            <motion.a
              href="/#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-2xl"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
