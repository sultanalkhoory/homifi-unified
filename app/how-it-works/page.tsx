'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import StepPlan from './components/StepPlan';
import StepWifi from './components/StepWifi';
import StepDevices from './components/StepDevices';
import StepAutomation from './components/StepAutomation';
import StepControl from './components/StepControl';

/**
 * How It Works - Premium Apple-Style Page
 * 
 * Steps 1-3: Full-screen visualizations (no iPhone - backend/setup)
 * Steps 4-5: iPhone mockups (user-facing app experience)
 */

type Step = {
  number: string;
  title: string;
  description: string;
  descriptionMobile: string;
  features?: string[];
  screenType: 'plan' | 'wifi' | 'devices' | 'automation' | 'control';
  showPhone: boolean;
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
      screenType: 'plan',
      showPhone: false
    },
    {
      number: '02',
      title: 'Build Your Wi-Fi Foundation',
      description: 'Enterprise-grade Wi-Fi covers every corner. No dead zones, no dropouts. Every device communicates instantly and securely.',
      descriptionMobile: 'Enterprise Wi-Fi covers every corner. No dead zones.',
      features: ['Full coverage', 'Secure network', 'Fast connectivity'],
      screenType: 'wifi',
      showPhone: false
    },
    {
      number: '03',
      title: 'Install & Integrate Devices',
      description: 'From lighting to climate control—we handle everything. No programming knowledge required. Works with Apple Home, Google, or Alexa.',
      descriptionMobile: 'We handle everything. No programming knowledge required.',
      features: ['No coding', 'Apple Home ready', 'Expert installation'],
      screenType: 'devices',
      showPhone: false
    },
    {
      number: '04',
      title: 'Configure & Automate',
      description: '"Good morning" opens curtains. "Movie time" dims lights. Your home responds automatically—no coding, no complexity.',
      descriptionMobile: 'Scenes respond automatically. No coding needed.',
      features: ['Voice scenes', 'Time triggers', 'Auto routines'],
      screenType: 'automation',
      showPhone: true
    },
    {
      number: '05',
      title: 'Enjoy + Support',
      description: 'Control with Siri, Alexa, or Google. Use your iPhone as HomeKey. Monitor on Apple TV. Three months complimentary support included.',
      descriptionMobile: 'Voice control, HomeKey, Apple TV. Support included.',
      features: ['Voice control', 'HomeKey', 'Apple TV', '3-month support'],
      screenType: 'control',
      showPhone: true
    }
  ];

  // Track scroll position for active step (accounting for hero section)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Subtract 1 to account for hero section
      const step = Math.floor(scrollY / windowHeight) - 1;
      // Clamp between 0 and steps.length - 1
      setActiveStep(Math.max(0, Math.min(step, steps.length - 1)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <main className="bg-white">
      
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

                {/* Right: Visualization (iPhone or Full-screen) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="md:col-span-7 flex justify-center md:justify-end"
                >
                  {step.showPhone ? (
                    // Steps 4-5: iPhone Frame
                    <div className="relative">
                      <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] bg-black rounded-[45px] md:rounded-[50px] p-2 shadow-2xl">
                        <div className="relative w-full h-full bg-white rounded-[37px] md:rounded-[42px] overflow-hidden">
                          
                          {/* Screen content - render appropriate step component */}
                          {step.screenType === 'automation' && <StepAutomation />}
                          {step.screenType === 'control' && <StepControl />}

                          {/* Screen glare */}
                          <div
                            className="absolute inset-0 pointer-events-none rounded-[37px] md:rounded-[42px] z-10"
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
                  ) : (
                    // Steps 1-3: Full-screen visualization (no iPhone frame)
                    <div className="w-full max-w-2xl">
                      {step.screenType === 'plan' && <StepPlan isActive={activeStep === index} fullScreen />}
                      {step.screenType === 'wifi' && <StepWifi isActive={activeStep === index} fullScreen />}
                      {step.screenType === 'devices' && <StepDevices isActive={activeStep === index} fullScreen />}
                    </div>
                  )}
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
    </main>
  );
}

/**
 * StepScreen Component
 * Dynamic screen content for each step
 * fullScreen prop: true for Steps 1-3, false for Steps 4-5
 */
function StepScreen({ 
  screenType, 
  isActive, 
  fullScreen = false 
}: { 
  screenType: string; 
  isActive: boolean;
  fullScreen?: boolean;
}) {
  switch (screenType) {
    case 'plan':
      // STEP 1: Full-screen isometric 3D floor plan (no iPhone)
      return (
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isActive ? 1 : 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-12 overflow-hidden`}
        >
          {/* Blueprint grid background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: fullScreen ? '30px 30px' : '20px 20px'
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
                Your Home Layout
              </h3>
              <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
                Custom zone mapping
              </p>
            </motion.div>

            {/* Isometric Floor Plan - LARGER */}
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
                  filter: 'blur(40px)'
                }}
              />

              {/* Floor plan - isometric grid */}
              <div 
                className={`relative ${fullScreen ? 'w-96 h-96' : 'w-64 h-64'}`}
                style={{
                  transform: 'rotateX(60deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
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

                {/* Living Room */}
                <motion.div
                  initial={{ opacity: 0, z: -50 }}
                  animate={{ opacity: 1, z: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute top-0 left-0 w-28 h-28"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300 rounded-lg shadow-lg">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                      <span className="text-[10px] font-semibold text-gray-900 mb-1">Living Room</span>
                      
                      {/* Devices - pop in */}
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

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(10px)' }}>
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    x1="28%" y1="50%" x2="72%" y2="50%"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
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

            {/* Stats footer */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex justify-around items-center py-4 px-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200"
            >
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.9, type: 'spring' }}
                  className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-blue-600`}
                >
                  12
                </motion.p>
                <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Devices</p>
              </div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.0, type: 'spring' }}
                  className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-indigo-600`}
                >
                  4
                </motion.p>
                <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Zones</p>
              </div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.1, type: 'spring' }}
                  className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-green-600`}
                >
                  100%
                </motion.p>
                <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Coverage</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    case 'wifi':
      // STEP 2: Full-screen UniFi-style network dashboard (no iPhone)
      return (
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isActive ? 1 : 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-12 overflow-hidden`}
        >
          {/* Dark grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: fullScreen ? '40px 40px' : '30px 30px'
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-white mb-2`}>
                Network Coverage
              </h3>
              <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-cyan-400`}>
                Enterprise-grade Wi-Fi
              </p>
            </motion.div>

            {/* Coverage Map - LARGER */}
            <div className="flex-1 relative flex items-center justify-center">
              
              {/* Floor outline */}
              <div className={`relative ${fullScreen ? 'w-96 h-96' : 'w-56 h-56'}`}>
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

                {/* Access Point 1 */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex: 20 }}
                >
                  {/* Signal rings */}
                  {[1, 2, 3].map((ring, i) => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 -m-6"
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
                      <div className={`${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border-2 border-cyan-400`} />
                    </motion.div>
                  ))}

                  {/* AP Icon */}
                  <div className={`relative ${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50`}>
                    <svg className={`${fullScreen ? 'w-8 h-8' : 'w-6 h-6'} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                    {/* Pulse */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute top-1 right-1 ${fullScreen ? 'w-3 h-3' : 'w-2 h-2'} rounded-full bg-green-400`}
                    />
                  </div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className={`absolute ${fullScreen ? '-bottom-8' : '-bottom-6'} left-1/2 -translate-x-1/2 whitespace-nowrap`}
                  >
                    <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} font-medium text-cyan-400`}>AP1</span>
                  </motion.div>
                </motion.div>

                {/* Access Point 2 */}
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
                      className="absolute inset-0 -m-6"
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
                      <div className={`${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border-2 border-blue-400`} />
                    </motion.div>
                  ))}

                  {/* AP Icon */}
                  <div className={`relative ${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/50`}>
                    <svg className={`${fullScreen ? 'w-8 h-8' : 'w-6 h-6'} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className={`absolute top-1 right-1 ${fullScreen ? 'w-3 h-3' : 'w-2 h-2'} rounded-full bg-green-400`}
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className={`absolute ${fullScreen ? '-bottom-8' : '-bottom-6'} left-1/2 -translate-x-1/2 whitespace-nowrap`}
                  >
                    <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} font-medium text-blue-400`}>AP2</span>
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
                    filter: 'blur(30px)',
                    mixBlendMode: 'screen'
                  }}
                />

                {/* Connection line */}
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

            {/* Stats Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="grid grid-cols-3 gap-3 px-2"
            >
              {/* Speed */}
              <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10`}>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide`}>Speed</span>
                </div>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.0, type: 'spring' }}
                  className={`${fullScreen ? 'text-lg' : 'text-sm'} font-bold text-white`}
                >
                  1 Gbps
                </motion.p>
              </div>

              {/* Devices */}
              <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10`}>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide`}>Devices</span>
                </div>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.1, type: 'spring' }}
                  className={`${fullScreen ? 'text-lg' : 'text-sm'} font-bold text-white`}
                >
                  12
                </motion.p>
              </div>

              {/* Coverage */}
              <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10`}>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide`}>Coverage</span>
                </div>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.2, type: 'spring' }}
                  className={`${fullScreen ? 'text-lg' : 'text-sm'} font-bold text-white`}
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
              className="flex items-center justify-center gap-2 mt-4"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-400"
              />
              <span className={`${fullScreen ? 'text-sm' : 'text-[10px]'} text-green-400 font-medium`}>
                All Systems Optimal
              </span>
            </motion.div>
          </div>
        </motion.div>
      );

    case 'devices':
      // STEP 3: Full-screen installation dashboard (no iPhone)
      return (
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isActive ? 1 : 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 p-6 md:p-12 overflow-hidden`}
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
              className="text-center mb-6"
            >
              <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
                Device Installation
              </h3>
              <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-orange-600`}>
                Expert setup, zero complexity
              </p>
            </motion.div>

            {/* Installation Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              {/* Progress bar */}
              <div className={`bg-white/60 rounded-full ${fullScreen ? 'h-3' : 'h-2'} overflow-hidden backdrop-blur-sm border border-orange-200`}>
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
                className="flex items-center justify-center gap-2 mt-3"
              >
                <svg className={`${fullScreen ? 'w-5 h-5' : 'w-3 h-3'} text-green-500`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={`${fullScreen ? 'text-sm' : 'text-[10px]'} text-green-600 font-medium`}>
                  Installation Complete
                </span>
              </motion.div>
            </motion.div>

            {/* Device List - Sequential Installation */}
            <div className="flex-1 space-y-3 overflow-hidden">
              
              {/* Device cards appear sequentially */}
              {[
                { emoji: '💡', name: 'Living Room Lights', color: 'from-amber-400 to-orange-500', delay: 0.8 },
                { emoji: '🪟', name: 'Smart Curtains', color: 'from-cyan-400 to-blue-500', delay: 1.2 },
                { emoji: '🌡️', name: 'Thermostat', color: 'from-teal-400 to-emerald-500', delay: 1.6 },
                { emoji: '🔒', name: 'Smart Lock', color: 'from-gray-600 to-gray-800', delay: 2.0 },
                { emoji: '📹', name: 'Security Camera', color: 'from-red-400 to-pink-500', delay: 2.4 }
              ].map((device, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: device.delay, type: 'spring', stiffness: 100 }}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl ${fullScreen ? 'p-5' : 'p-3'} shadow-sm border border-orange-100 relative overflow-hidden`}
                >
                  {/* Success flash */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ delay: device.delay + 0.2, duration: 0.5 }}
                    className="absolute inset-0 bg-green-400"
                  />
                  
                  <div className="relative flex items-center gap-4">
                    <div className={`${fullScreen ? 'w-14 h-14' : 'w-10 h-10'} rounded-xl bg-gradient-to-br ${device.color} flex items-center justify-center ${fullScreen ? 'text-2xl' : 'text-xl'} shadow-md`}>
                      {device.emoji}
                    </div>
                    <div className="flex-1">
                      <p className={`${fullScreen ? 'text-base' : 'text-sm'} font-semibold text-gray-900`}>
                        {device.name}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: 'auto' }}
                          transition={{ delay: device.delay + 0.1 }}
                          className="flex items-center gap-1"
                        >
                          <div className="w-1 h-1 rounded-full bg-green-500" />
                          <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-green-600 font-medium`}>
                            Connected
                          </span>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: device.delay + 0.2, type: 'spring', stiffness: 200 }}
                    >
                      <svg className={`${fullScreen ? 'w-7 h-7' : 'w-5 h-5'} text-green-500`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Platform Badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.9 }}
              className={`mt-6 flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-orange-100`}
            >
              <span className={`${fullScreen ? 'text-sm' : 'text-[9px]'} text-gray-600 font-medium`}>
                Works with:
              </span>
              <div className="flex items-center gap-2">
                <div className={`${fullScreen ? 'w-6 h-6' : 'w-4 h-4'} rounded bg-white flex items-center justify-center ${fullScreen ? 'text-sm' : 'text-[8px]'}`}>
                  🍎
                </div>
                <div className={`${fullScreen ? 'w-6 h-6' : 'w-4 h-4'} rounded bg-white flex items-center justify-center ${fullScreen ? 'text-sm' : 'text-[8px]'}`}>
                  G
                </div>
                <div className={`${fullScreen ? 'w-6 h-6' : 'w-4 h-4'} rounded bg-white flex items-center justify-center ${fullScreen ? 'text-sm' : 'text-[8px]'}`}>
                  A
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    case 'automation':
    case 'control':
      // STEPS 4-5: Keep existing iPhone screen designs
      // (These will be wrapped in iPhone frame by parent component)
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {screenType === 'automation' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                )}
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {screenType === 'automation' ? 'Automation UI' : 'Control UI'}
            </h3>
            <p className="text-sm text-gray-600">
              {screenType === 'automation' ? 'Voice & tap scenes' : 'Full Apple ecosystem'}
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
}
