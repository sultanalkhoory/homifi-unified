'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';
import HeroFloating from './components/HeroFloating';
import StepDesign from './components/StepDesign';
import StepInstall from './components/StepInstall';
import StepCustomize from './components/StepCustomize';
import StepSupport from './components/StepSupport';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useContactModal();

  const steps = [
    { 
      id: 0, 
      title: 'We Design Your Home', 
      subtitle: 'We assess your space and create a custom plan',
      component: StepDesign 
    },
    { 
      id: 1, 
      title: 'We Install Everything', 
      subtitle: 'Everything installed, connected, and ready to use',
      component: StepInstall 
    },
    { 
      id: 2, 
      title: 'You Customize More', 
      subtitle: 'Simple taps to create scenes and automation—no coding needed',
      component: StepCustomize 
    },
    { 
      id: 3, 
      title: 'We Support You', 
      subtitle: 'Ongoing help, maintenance, and updates whenever needed',
      component: StepSupport 
    }
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.querySelectorAll('.step-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToStep = (index: number) => {
    const sections = containerRef.current?.querySelectorAll('.step-section');
    if (sections && sections[index]) {
      const element = sections[index] as HTMLElement;
      const top = element.offsetTop;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white">
      <Header />
      
      {/* Progress Indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => scrollToStep(index)}
              className="group relative"
              aria-label={`Go to step ${index + 1}: ${step.title}`}
            >
              <div className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeStep === index ? 'bg-black scale-150' : 'bg-gray-300 hover:bg-gray-400'}
              `} />
              
              <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <div className="bg-black text-white text-xs px-3 py-1.5 rounded-lg">
                  {step.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <HeroFloating />

      {/* Steps Container */}
      <div ref={containerRef}>
        {steps.map((step, index) => {
          const ActiveComponent = step.component;
          const isLastStep = index === steps.length - 1;
          
          return (
            <section
              key={step.id}
              className={`step-section flex items-center justify-center px-4 
                min-h-screen 
                ${isLastStep 
                  ? 'py-12 pb-16 md:py-20 md:pb-24' 
                  : 'py-20'
                }`}
            >
              <div className="max-w-7xl mx-auto w-full">
                
                {/* Step Header - FIX: Added amount threshold + will-change for hardware acceleration */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ 
                    once: false, 
                    margin: "-100px",
                    amount: 0.3 // Requires 30% visibility before triggering
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ willChange: 'transform, opacity' }} // Hardware acceleration prevents layout thrashing
                  className="text-center mb-8 md:mb-12"
                >
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600">
                    {step.subtitle}
                  </p>
                </motion.div>

                {/* Step Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-150px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative max-w-6xl mx-auto 
                    ${isLastStep 
                      ? 'min-h-[400px] md:aspect-[16/10]' 
                      : 'aspect-[16/10]'
                    }`}
                >
                  <ActiveComponent isActive={activeStep === index} fullScreen={true} />
                </motion.div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Final CTA with proper spacing */}
      <section className="flex items-center justify-center px-4 py-16 md:py-24 lg:min-h-screen bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-6">
            Ready to transform your home?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Professional installation. Simple setup. Perfect automation.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
