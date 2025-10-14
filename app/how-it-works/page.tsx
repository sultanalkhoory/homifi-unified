'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';
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
    <>
      {/* Fixed header navigation */}
      <Header />
      
      <main className="bg-white">
      
      {/* Hero Intro - ENHANCED */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        {/* Floating device icons - abstract shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Light bulb - top left */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-[15%] left-[10%] text-6xl opacity-20"
          >
            💡
          </motion.div>

          {/* Lock - top right */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
            className="absolute top-[20%] right-[12%] text-5xl opacity-20"
          >
            🔒
          </motion.div>

          {/* Thermostat - bottom left */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, 15, 0],
              rotate: [0, 8, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
            className="absolute bottom-[25%] left-[15%] text-5xl opacity-20"
          >
            🌡️
          </motion.div>

          {/* Camera - bottom right */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, -12, 0],
              rotate: [0, -6, 0]
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }}
            className="absolute bottom-[20%] right-[10%] text-5xl opacity-20"
          >
            📹
          </motion.div>

          {/* Window/Curtain - middle left */}
          <motion.div
            animate={{
              y: [0, 18, 0],
              x: [0, 8, 0],
              rotate: [0, 4, 0]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5
            }}
            className="absolute top-[50%] left-[8%] text-5xl opacity-15"
          >
            🪟
          </motion.div>

          {/* Voice/Speaker - middle right */}
          <motion.div
            animate={{
              y: [0, -18, 0],
              x: [0, -8, 0],
              rotate: [0, -4, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2.5
            }}
            className="absolute top-[45%] right-[15%] text-4xl opacity-15"
          >
            🔊
          </motion.div>
        </div>

        {/* Main content */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
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
    
    {/* Footer */}
    <Footer />
  </>
  );
}
