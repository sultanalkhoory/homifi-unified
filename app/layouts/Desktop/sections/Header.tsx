'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function AboutPage() {

// Animated counter for stats
const AnimatedCounter = ({ end, suffix = '' }) => {
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

// Key selling points - emphasizing no-code, easy install, and seamless integration
const features = [
{
icon: (
<svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
<path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
title: 'No-Code Automation',
description: 'Set up lighting, climate, and security routines in minutes. Zero programming needed.'
},
{
icon: (
<svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
title: 'Anyone Can Install',
description: 'Simple enough for your parents to set up. No IT degree required.'
},
{
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
icon: (
<svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
title: 'Instant Alerts',
description: 'Real-time notifications about what matters. Right on your phone.'
},
{
icon: (
<svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
title: 'Voice Everywhere',
description: 'Siri, Alexa, Google Assistant. Control everything with your voice.'
},
{
// Apple integration is paramount - HomeKey feature
icon: (
<svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
<rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
<path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
),
title: 'Apple HomeKey',
description: 'Unlock your home with your iPhone or Apple Watch. Premium Apple ecosystem integration.'
}
];

// Platform integrations - showcasing Apple, Google, Alexa
const platforms = [
{
name: 'Apple Home',
icon: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
<path d="M12 2L3 9v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-9-7z"/>
</svg>
),
description: 'Native HomeKit integration with HomeKey and Apple TV support'
},
{
name: 'Google Home',
icon: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
<path d="M12 3L4 9v12h16V9l-8-6zM12 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
</svg>
),
description: 'Full Google Assistant support for voice control'
},
{
name: 'Amazon Alexa',
icon: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
<circle cx="12" cy="12" r="10"/>
<path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2"/>
</svg>
),
description: 'Complete Alexa integration for smart home control'
}
];

const stats = [
{ value: 5, suffix: 'min', label: 'Average Setup Time' },
{ value: 100, suffix: '%', label: 'No Programming Needed' },
{ value: 3, suffix: '+', label: 'Platform Support' }
];

return (
<main className="bg-white">
<Header />

{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
<div className="absolute inset-0">
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
</div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  className="relative max-w-5xl mx-auto text-center z-10"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="inline-block mb-6"
  >
    <div className="px-6 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
      Smart Home Made Simple
    </div>
  </motion.div>

  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-gray-900 leading-tight">
    Your Home.<br />Smarter. Simpler.
  </h1>

  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
    Professional smart home automation that anyone can use. No programming, no complexity—just your home working the way you want it to.
  </p>

  {/* Stats showcase */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
        className="text-center"
      >
        <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
        </div>
        <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
      </motion.div>
    ))}
  </div>
</motion.div>
</section>

{/* Features Grid - emphasizing key selling points */}
<section className="py-24 px-4 bg-white">
<div className="max-w-7xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      Everything you need.<br />Nothing you don't.
    </h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Automation, voice control, instant alerts—all without writing a single line of code.
    </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
      >
        <div className="text-blue-600 mb-4">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    ))}
  </div>
</div>
</section>

{/* Platform Integration Section - Apple, Google, Alexa */}
<section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
<div className="max-w-7xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      Choose Your Platform
    </h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Seamlessly integrates with Apple Home, Google Home, and Amazon Alexa. Pick your favorite—or use them all.
    </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {platforms.map((platform, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="p-10 rounded-3xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 text-center"
      >
        <div className="flex justify-center mb-6 text-gray-700">
          {platform.icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {platform.name}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {platform.description}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Apple ecosystem callout - emphasizing Apple integration */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Built for the Apple Ecosystem
      </h3>
      <p className="text-lg text-gray-300 mb-6">
        Premium Apple HomeKey integration lets you unlock your door with iPhone or Apple Watch. Works seamlessly with Apple TV as a home hub. The most sophisticated Apple Home experience available.
      </p>
      <div className="flex justify-center gap-4 text-sm text-gray-400">
        <span>• HomeKit Native</span>
        <span>• Apple HomeKey</span>
        <span>• Apple TV Integration</span>
        <span>• Siri Control</span>
      </div>
    </div>
  </motion.div>
</div>
</section>

{/* CTA Section */}
<section className="relative py-32 px-4 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
<div className="absolute inset-0 opacity-20">
  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
</div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8 }}
  className="relative max-w-4xl mx-auto text-center text-white z-10"
>
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
    Ready to upgrade your home?
  </h2>
  <p className="text-xl md:text-2xl text-gray-300 mb-12">
    Tour our showroom. Or start with a free consultation.
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
</section>

<Footer />
</main>
);
}
