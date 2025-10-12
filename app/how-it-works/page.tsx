'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

/**
 * How It Works - Premium Apple-Style Page
 * 
 * Full-screen vertical sections with scroll-snap
 * Sticky iPhone mockup that changes per step
 * Zero new assets - uses existing room photos + code overlays
 */

type Step = {
  number: string;
  title: string;
  description: string;
  descriptionMobile: string;
  features?: string[];
  screenType: 'plan' | 'wifi' | 'devices' | 'automation' | 'control';
};

export default function HowItWorksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      number: '01',
      title: 'Design Your Smart Home Plan',
      description: 'We start by understanding your space and lifestyle. No two homes are alike—your automation should reflect how you live.',
      descriptionMobile: 'Understanding your space and lifestyle. Your automation reflects how you live.',
      features: ['Custom zone mapping', 'Routine analysis', 'Priority setting'],
      screenType: 'plan'
    },
    {
      number: '02',
      title: 'Build Your Wi-Fi Foundation',
      description: 'Enterprise-grade Wi-Fi covers every corner. No dead zones, no dropouts. Every device communicates instantly and securely.',
      descriptionMobile: 'Enterprise Wi-Fi covers every corner. No dead zones.',
      features: ['Full coverage', 'Secure network', 'Fast connectivity'],
      screenType: 'wifi'
    },
    {
      number: '03',
      title: 'Install & Integrate Devices',
      description: 'From lighting to climate control—we handle everything. No programming knowledge required. Works with Apple Home, Google, or Alexa.',
      descriptionMobile: 'We handle everything. No programming knowledge required.',
      features: ['No coding', 'Apple Home ready', 'Expert installation'],
      screenType: 'devices'
    },
    {
      number: '04',
      title: 'Configure & Automate',
      description: '"Good morning" opens curtains. "Movie time" dims lights. Your home responds automatically—no coding, no complexity.',
      descriptionMobile: 'Scenes respond automatically. No coding needed.',
      features: ['Voice scenes', 'Time triggers', 'Auto routines'],
      screenType: 'automation'
    },
    {
      number: '05',
      title: 'Enjoy + Support',
      description: 'Control with Siri, Alexa, or Google. Use your iPhone as HomeKey. Monitor on Apple TV. Three months complimentary support included.',
      descriptionMobile: 'Voice control, HomeKey, Apple TV. Support included.',
      features: ['Voice control', 'HomeKey', 'Apple TV', '3-month support'],
      screenType: 'control'
    }
  ];

  // Track scroll position for active step
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const step = Math.floor(scrollY / windowHeight);
      setActiveStep(Math.min(step, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Intro */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-black mb-8 leading-[1.1]"
          >
            Five steps to your<br />
            perfectly orchestrated home
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            From consultation to control—we handle everything so you don't have to.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Steps Container with scroll-snap */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {steps.map((step, index) => (
          <section
            key={index}
            className="min-h-screen flex items-center px-4 md:px-8 lg:px-12 relative"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                
                {/* Left: Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="md:col-span-5 space-y-6"
                >
                  {/* Giant step number */}
                  <div className="relative">
                    <span 
                      className="text-[120px] md:text-[160px] lg:text-[200px] font-thin leading-none text-gray-100 select-none"
                      style={{ 
                        WebkitTextStroke: '1px rgba(0,0,0,0.05)'
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-[1.1] -mt-8 md:-mt-12">
                    {step.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                    <span className="md:hidden">{step.descriptionMobile}</span>
                    <span className="hidden md:inline">{step.description}</span>
                  </p>

                  {/* Feature badges */}
                  {step.features && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {step.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-xs font-medium
                            bg-gray-100 text-gray-700 border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Right: iPhone with dynamic screen */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="md:col-span-7 flex justify-center md:justify-end"
                >
                  <div className="relative">
                    {/* iPhone Frame */}
                    <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] bg-black rounded-[45px] md:rounded-[50px] p-2 shadow-2xl">
                      <div className="relative w-full h-full bg-white rounded-[37px] md:rounded-[42px] overflow-hidden">
                        
                        {/* Dynamic screen content based on step */}
                        <StepScreen screenType={step.screenType} isActive={activeStep === index} />

                        {/* Screen glare */}
                        <div
                          className="absolute inset-0 pointer-events-none rounded-[37px] md:rounded-[42px]"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 25%, transparent 50%)'
                          }}
                        />

                        {/* Dynamic Island */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[85px] h-[22px] bg-black rounded-full z-30">
                          <div className="flex items-center justify-center h-full relative">
                            <div className="absolute left-3 w-1.5 h-1.5 bg-gray-900 rounded-full" />
                            <div className="absolute right-3 w-3 h-0.5 bg-gray-900 rounded-full" />
                          </div>
                        </div>

                        {/* Time */}
                        <div className="absolute top-2 left-4 text-white text-sm font-medium z-30 drop-shadow-sm">
                          9:41
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Vertical progress indicator */}
            <div className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
              <div className="flex flex-col items-center gap-3">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const element = document.querySelectorAll('section')[i + 1];
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative"
                  >
                    <div
                      className={`w-1.5 h-8 rounded-full transition-all duration-300 ${
                        i === activeStep
                          ? 'bg-black h-12'
                          : 'bg-gray-300 group-hover:bg-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight text-black mb-8"
          >
            Ready to see your<br />home in perfect sync?
          </motion.h2>

          <motion.a
            href="/#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-black text-white font-semibold text-lg
              shadow-xl hover:shadow-2xl
              transition-all duration-300"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/**
 * StepScreen Component
 * Dynamic iPhone screen content for each step
 * Pure code - no image assets needed
 */
function StepScreen({ screenType, isActive }: { screenType: string; isActive: boolean }) {
  switch (screenType) {
    case 'plan':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 p-6 overflow-hidden"
        >
          {/* Blueprint grid background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center pt-8 pb-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Your Home Layout</h3>
              <p className="text-xs text-gray-600">Custom zone mapping</p>
            </motion.div>

            {/* Isometric Floor Plan Container */}
            <div className="flex-1 flex items-center justify-center perspective-1000 relative">
              
              {/* Heat map overlay - animated flow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)
                  `,
                  filter: 'blur(30px)'
                }}
              />

              {/* Floor plan - isometric grid */}
              <div 
                className="relative w-64 h-64"
                style={{
                  transform: 'rotateX(60deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Living Room */}
                <motion.div
                  initial={{ opacity: 0, z: -50 }}
                  animate={{ opacity: 1, z: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute top-0 left-0 w-28 h-28"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Room box */}
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300 rounded-lg shadow-lg">
                    {/* Room label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                      <span className="text-[10px] font-semibold text-gray-900 mb-1">Living Room</span>
                      
                      {/* Devices - pop in sequentially */}
                      <div className="flex gap-1">
                        {['💡', '🌡️', '🪟'].map((icon, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8 + i * 0.15 }}
                            className="text-xs"
                          >
                            {icon}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Kitchen */}
                <motion.div
                  initial={{ opacity: 0, z: -50 }}
                  animate={{ opacity: 1, z: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-0 right-0 w-28 h-28"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-indigo-300 rounded-lg shadow-lg">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                      <span className="text-[10px] font-semibold text-gray-900 mb-1">Kitchen</span>
                      <div className="flex gap-1">
                        {['💡', '🔌'].map((icon, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.0 + i * 0.15 }}
                            className="text-xs"
                          >
                            {icon}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Bedroom */}
                <motion.div
                  initial={{ opacity: 0, z: -50 }}
                  animate={{ opacity: 1, z: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-0 left-0 w-28 h-28"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-lg shadow-lg">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                      <span className="text-[10px] font-semibold text-gray-900 mb-1">Bedroom</span>
                      <div className="flex gap-1">
                        {['💡', '🌡️', '🔒'].map((icon, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.2 + i * 0.15 }}
                            className="text-xs"
                          >
                            {icon}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Office */}
                <motion.div
                  initial={{ opacity: 0, z: -50 }}
                  animate={{ opacity: 1, z: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute bottom-0 right-0 w-28 h-28"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-cyan-300 rounded-lg shadow-lg">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                      <span className="text-[10px] font-semibold text-gray-900 mb-1">Office</span>
                      <div className="flex gap-1">
                        {['💡', '🔌'].map((icon, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.4 + i * 0.15 }}
                            className="text-xs"
                          >
                            {icon}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connecting lines - draw between rooms */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(10px)' }}>
                  {/* Living to Kitchen */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    x1="28%" y1="50%" x2="72%" y2="50%"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  {/* Living to Bedroom */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    x1="50%" y1="28%" x2="50%" y2="72%"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>

            {/* Stats footer - animated counter */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex justify-around items-center py-3 px-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200"
            >
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.9, type: 'spring' }}
                  className="text-lg font-bold text-blue-600"
                >
                  12
                </motion.p>
                <p className="text-[9px] text-gray-600">Devices</p>
              </div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.0, type: 'spring' }}
                  className="text-lg font-bold text-indigo-600"
                >
                  4
                </motion.p>
                <p className="text-[9px] text-gray-600">Zones</p>
              </div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.1, type: 'spring' }}
                  className="text-lg font-bold text-green-600"
                >
                  100%
                </motion.p>
                <p className="text-[9px] text-gray-600">Coverage</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    case 'wifi':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 overflow-hidden"
        >
          {/* Dark grid pattern (like UniFi) */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center pt-8 pb-4"
            >
              <h3 className="text-lg font-semibold text-white mb-1">Network Coverage</h3>
              <p className="text-xs text-cyan-400">Enterprise-grade Wi-Fi</p>
            </motion.div>

            {/* Coverage Map Container */}
            <div className="flex-1 relative flex items-center justify-center">
              
              {/* Floor outline (simple house shape) */}
              <div className="relative w-56 h-56">
                {/* House outline */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <motion.rect
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    x="20" y="40" width="160" height="140"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  {/* Room dividers */}
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    x1="100" y1="40" x2="100" y2="180"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    x1="20" y1="110" x2="180" y2="110"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                </svg>

                {/* Access Point 1 - Living Room (Center-Left) */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex: 20 }}
                >
                  {/* Signal rings - animate outward */}
                  {[1, 2, 3].map((ring, i) => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 -m-4"
                      animate={{
                        scale: [1, 2.5, 2.5],
                        opacity: [0.6, 0.2, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeOut"
                      }}
                    >
                      <div className="w-12 h-12 rounded-full border-2 border-cyan-400" />
                    </motion.div>
                  ))}

                  {/* AP Icon */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                    {/* Pulse indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-400"
                    />
                  </div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <span className="text-[9px] font-medium text-cyan-400">AP1</span>
                  </motion.div>
                </motion.div>

                {/* Access Point 2 - Bedroom (Top-Right) */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
                  className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex: 20 }}
                >
                  {/* Signal rings */}
                  {[1, 2, 3].map((ring, i) => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 -m-4"
                      animate={{
                        scale: [1, 2.5, 2.5],
                        opacity: [0.6, 0.2, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 0.3 + i * 0.8,
                        ease: "easeOut"
                      }}
                    >
                      <div className="w-12 h-12 rounded-full border-2 border-blue-400" />
                    </motion.div>
                  ))}

                  {/* AP Icon */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-400"
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <span className="text-[9px] font-medium text-blue-400">AP2</span>
                  </motion.div>
                </motion.div>

                {/* Coverage heat map overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(circle at 25% 50%, rgba(6, 182, 212, 0.4) 0%, transparent 40%),
                      radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.4) 0%, transparent 40%)
                    `,
                    filter: 'blur(25px)',
                    mixBlendMode: 'screen'
                  }}
                />

                {/* Connection line between APs */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    x1="25%" y1="50%" x2="75%" y2="25%"
                    stroke="rgba(6, 182, 212, 0.6)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>

            {/* Stats Grid - UniFi style */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="grid grid-cols-3 gap-2 px-2"
            >
              {/* Speed */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2.5 border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[9px] text-gray-400 uppercase tracking-wide">Speed</span>
                </div>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.0, type: 'spring' }}
                  className="text-sm font-bold text-white"
                >
                  1 Gbps
                </motion.p>
              </div>

              {/* Devices */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2.5 border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-[9px] text-gray-400 uppercase tracking-wide">Devices</span>
                </div>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.1, type: 'spring' }}
                  className="text-sm font-bold text-white"
                >
                  12
                </motion.p>
              </div>

              {/* Coverage */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2.5 border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-[9px] text-gray-400 uppercase tracking-wide">Coverage</span>
                </div>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.2, type: 'spring' }}
                  className="text-sm font-bold text-white"
                >
                  100%
                </motion.p>
              </div>
            </motion.div>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="flex items-center justify-center gap-2 mt-3"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-400"
              />
              <span className="text-[10px] text-green-400 font-medium">All Systems Optimal</span>
            </motion.div>
          </div>
        </motion.div>
      );

    case 'devices':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 p-6 overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center pt-6 pb-2"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Device Installation</h3>
              <p className="text-xs text-orange-600">Expert setup, zero complexity</p>
            </motion.div>

            {/* Installation Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-3"
            >
              {/* Progress bar */}
              <div className="bg-white/60 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-orange-200">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.6, duration: 2, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-orange-400 to-amber-500"
                />
              </div>
              
              {/* Progress text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
                className="flex items-center justify-center gap-1.5 mt-2"
              >
                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] text-green-600 font-medium">Installation Complete</span>
              </motion.div>
            </motion.div>

            {/* Device List - Sequential Installation */}
            <div className="flex-1 space-y-2 overflow-hidden">
              
              {/* Living Room Lights */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-sm border border-orange-100 relative overflow-hidden"
              >
                {/* Success flash */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="absolute inset-0 bg-green-400"
                />
                
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-md">
                    💡
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Living Room Lights</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        transition={{ delay: 0.9 }}
                        className="flex items-center gap-1"
                      >
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                        <span className="text-[9px] text-green-600 font-medium">Connected</span>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Smart Curtains */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-sm border border-orange-100 relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute inset-0 bg-green-400"
                />
                
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl shadow-md">
                    🪟
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Smart Curtains</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        transition={{ delay: 1.3 }}
                        className="flex items-center gap-1"
                      >
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                        <span className="text-[9px] text-green-600 font-medium">Connected</span>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Thermostat */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6, type: 'spring', stiffness: 100 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-sm border border-orange-100 relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="absolute inset-0 bg-green-400"
                />
                
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-xl shadow-md">
                    🌡️
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Thermostat</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        transition={{ delay: 1.7 }}
                        className="flex items-center gap-1"
                      >
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                        <span className="text-[9px] text-green-600 font-medium">Connected</span>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Door Lock */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.0, type: 'spring', stiffness: 100 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-sm border border-orange-100 relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  className="absolute inset-0 bg-green-400"
                />
                
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-xl shadow-md">
                    🔒
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Smart Lock</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        transition={{ delay: 2.1 }}
                        className="flex items-center gap-1"
                      >
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                        <span className="text-[9px] text-green-600 font-medium">Connected</span>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.2, type: 'spring', stiffness: 200 }}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Security Camera */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.4, type: 'spring', stiffness: 100 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-sm border border-orange-100 relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ delay: 2.6, duration: 0.5 }}
                  className="absolute inset-0 bg-green-400"
                />
                
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-xl shadow-md">
                    📹
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Security Camera</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        transition={{ delay: 2.5 }}
                        className="flex items-center gap-1"
                      >
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                        <span className="text-[9px] text-green-600 font-medium">Connected</span>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.6, type: 'spring', stiffness: 200 }}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Platform Badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.9 }}
              className="mt-3 flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm rounded-2xl p-2.5 border border-orange-100"
            >
              <span className="text-[9px] text-gray-600 font-medium">Works with:</span>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-white flex items-center justify-center text-[8px]">🍎</div>
                <div className="w-4 h-4 rounded bg-white flex items-center justify-center text-[8px]">G</div>
                <div className="w-4 h-4 rounded bg-white flex items-center justify-center text-[8px]">A</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    case 'automation':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 p-6"
        >
          {/* Automation scenes */}
          <div className="h-full flex flex-col">
            <div className="text-center pt-12 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Scenes</h3>
              <p className="text-xs text-gray-600">Tap to activate</p>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-3">
              {[
                { name: 'Good Morning', icon: '☀️', time: '7:00 AM', color: 'from-amber-400 to-orange-500' },
                { name: 'Movie Time', icon: '🎬', time: 'Manual', color: 'from-purple-400 to-pink-500' },
                { name: 'Good Night', icon: '🌙', time: '10:30 PM', color: 'from-indigo-400 to-blue-500' },
                { name: "I'm Home", icon: '🏠', time: 'Location', color: 'from-green-400 to-emerald-500' }
              ].map((scene, i) => (
                <motion.div
                  key={scene.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square rounded-2xl bg-white/80 backdrop-blur-sm p-4 shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${scene.color} flex items-center justify-center text-2xl mb-2`}>
                    {scene.icon}
                  </div>
                  <p className="text-xs font-semibold text-gray-900">{scene.name}</p>
                  <p className="text-[10px] text-gray-500">{scene.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      );

    case 'control':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-6 overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent opacity-50" />

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center pt-6 pb-3"
            >
              <h3 className="text-lg font-semibold text-white mb-1">Your Home, Anywhere</h3>
              <p className="text-xs text-emerald-400">Complete Apple ecosystem</p>
            </motion.div>

            {/* Main Control Center Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="mb-4"
            >
              <div className="rounded-3xl p-5 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 shadow-xl relative overflow-hidden">
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                
                <div className="relative">
                  {/* Top row: Icon + Status */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-white shadow-lg"
                    />
                  </div>

                  {/* Room info */}
                  <div className="mb-2">
                    <h4 className="text-white font-semibold text-base">Living Room</h4>
                    <p className="text-white/90 text-xs">All systems active</p>
                  </div>

                  {/* Quick stats */}
                  <div className="flex gap-3 text-white/90 text-[10px]">
                    <span>💡 Lights On</span>
                    <span>🌡️ 22°C</span>
                    <span>🪟 Open</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Apple Ecosystem Grid */}
            <div className="flex-1 grid grid-cols-2 gap-2">
              
              {/* Voice Control - Siri */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-3 border border-white/10 relative overflow-hidden"
              >
                {/* Siri wave animation */}
                <motion.div
                  animate={{
                    scaleX: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl"
                />
                
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-white text-xs font-semibold mb-0.5">Siri</p>
                  <p className="text-white/60 text-[9px]">"Good night"</p>
                </div>
              </motion.div>

              {/* HomeKey */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, type: 'spring' }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-3 border border-white/10 relative overflow-hidden"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <p className="text-white text-xs font-semibold mb-0.5">HomeKey</p>
                  <p className="text-white/60 text-[9px]">Tap to unlock</p>
                </div>

                {/* NFC waves */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full border-2 border-orange-400"
                />
              </motion.div>

              {/* Apple Watch */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-3 border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-2 shadow-lg border-2 border-gray-600">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white text-xs font-semibold mb-0.5">Watch</p>
                <p className="text-white/60 text-[9px]">Quick access</p>
              </motion.div>

              {/* Apple TV */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, type: 'spring' }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-3 border border-white/10 relative overflow-hidden"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                  <p className="text-white text-xs font-semibold mb-0.5">Apple TV</p>
                  <p className="text-white/60 text-[9px]">Live camera</p>
                </div>

                {/* Recording indicator */}
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-2 right-2 flex items-center gap-1"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                </motion.div>
              </motion.div>
            </div>

            {/* Voice Command Example */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-4 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2.5 border border-white/10"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
              />
              <span className="text-white/90 text-xs font-medium">"Hey Siri, I'm home"</span>
            </motion.div>

            {/* Support Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-3 text-center"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-emerald-400 text-[10px] font-medium">3 months support included</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    default:
      return null;
  }
}
