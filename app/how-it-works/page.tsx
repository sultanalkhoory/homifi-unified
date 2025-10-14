'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';
import StepPlan from './components/StepPlan';
import StepWifi from './components/StepWifi';
import StepDevices from './components/StepDevices';
import StepAutomation from './components/StepAutomation';
import StepControl from './components/StepControl';

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { 
      id: 0, 
      title: 'Design Your Plan', 
      subtitle: 'We map your home into smart zones',
      component: StepPlan 
    },
    { 
      id: 1, 
      title: 'Enterprise Wi-Fi', 
      subtitle: 'Fast, secure mesh coverage everywhere',
      component: StepWifi 
    },
    { 
      id: 2, 
      title: 'Connect Everything', 
      subtitle: 'Apple Home, Google Home, or Alexa',
      component: StepDevices 
    },
    { 
      id: 3, 
      title: 'Automate Your Life', 
      subtitle: 'Voice control and tap-to-automate',
      component: StepAutomation 
    },
    { 
      id: 4, 
      title: 'Enjoy & Support', 
      subtitle: 'Full Apple ecosystem integration',
      component: StepControl 
    }
  ];

  // Track scroll position to update active step
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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to step when clicking progress indicator
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
      
      {/* Fixed Progress Indicator - subtle left side dots */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => scrollToStep(index)}
              className="group relative"
              aria-label={`Go to step ${index + 1}: ${step.title}`}
            >
              {/* Circle indicator */}
              <div className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeStep === index 
                  ? 'bg-black scale-150' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `} />
              
              {/* Tooltip on hover */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <div className="bg-black text-white text-xs px-3 py-1.5 rounded-lg">
                  {step.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section - Above the steps */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
              How It Works
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional setup in 5 simple steps.<br/>
              No programming knowledge required.
            </p>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col items-center gap-2 text-gray-400 mt-16"
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.svg
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Steps Container */}
      <div ref={containerRef}>
        {steps.map((step, index) => {
          const ActiveComponent = step.component;
          
          return (
            <section
              key={step.id}
              className="step-section min-h-screen flex items-center justify-center px-4 py-20"
            >
              <div className="max-w-7xl mx-auto w-full">
                
                {/* Step Header - animates in on scroll */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg md:text-xl text-gray-600">
                    {step.subtitle}
                  </p>
                </motion.div>

                {/* Step Content - smooth scale/fade animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-150px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[16/10] max-w-6xl mx-auto"
                >
                  <ActiveComponent isActive={activeStep === index} fullScreen={true} />
                </motion.div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Final CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Ready to transform your home?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Professional installation. Simple setup. Perfect automation.
          </p>
          <a
            href="/#hero"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
