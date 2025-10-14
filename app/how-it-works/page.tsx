'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';
import StepPlan from './components/StepPlan';
import StepWifi from './components/StepWifi';
import StepDevices from './components/StepDevices';
import StepAutomation from './components/StepAutomation';
import StepControl from './components/StepControl';

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      id: 0, 
      title: 'Design Your Plan', 
      subtitle: 'Custom zone mapping',
      component: StepPlan 
    },
    { 
      id: 1, 
      title: 'Enterprise Wi-Fi', 
      subtitle: 'Fast, secure coverage',
      component: StepWifi 
    },
    { 
      id: 2, 
      title: 'Connect Devices', 
      subtitle: 'All platforms supported',
      component: StepDevices 
    },
    { 
      id: 3, 
      title: 'Automate', 
      subtitle: 'Voice & tap controls',
      component: StepAutomation 
    },
    { 
      id: 4, 
      title: 'Enjoy & Support', 
      subtitle: 'Full Apple ecosystem',
      component: StepControl 
    }
  ];

  const ActiveComponent = steps[activeStep].component;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6"
          >
            How It Works
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-12"
          >
            Professional setup in 5 simple steps. No programming knowledge required.
          </motion.p>
        </div>
      </section>

      {/* Step Navigation */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`
                  relative px-4 py-3 rounded-xl transition-all duration-300
                  ${activeStep === index 
                    ? 'bg-black text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${activeStep === index 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-500'
                    }
                  `}>
                    {index + 1}
                  </div>
                  
                  <div className="text-left">
                    <p className="font-semibold text-sm">{step.title}</p>
                    <p className={`text-xs ${activeStep === index ? 'text-white/70' : 'text-gray-500'}`}>
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[16/10] bg-white rounded-3xl shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <ActiveComponent isActive={true} fullScreen={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`
                px-6 py-3 rounded-full font-medium transition-all
                ${activeStep === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-black text-white hover:scale-105 shadow-lg'
                }
              `}
            >
              ← Previous
            </button>

            <div className="text-sm text-gray-500">
              Step {activeStep + 1} of {steps.length}
            </div>

            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className={`
                px-6 py-3 rounded-full font-medium transition-all
                ${activeStep === steps.length - 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-black text-white hover:scale-105 shadow-lg'
                }
              `}
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
