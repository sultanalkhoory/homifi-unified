'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeRise, scaleIn } from '@/lib/animations';

/**
 * PerfectCoverage Section Component
 * 
 * Demonstrates whole-home WiFi coverage with UniFi mesh network.
 * Shows seamless roaming as the killer feature.
 * 
 * Layout matches PerfectLight:
 * - Left column (5/12): Text + Control Center card
 * - Right column (7/12): Floor plan visualization with coverage zones
 */
export default function PerfectCoverage() {
  // Track network state
  const [networkOn, setNetworkOn] = useState(false);
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);
  const sectionRef = useRef(null);

  // Auto-trigger network visualization on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoTriggered) {
            setTimeout(() => {
              setNetworkOn(true);
              setHasAutoTriggered(true);
            }, 800);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAutoTriggered]);

  const handleToggle = () => {
    setNetworkOn(!networkOn);
  };

  return (
    <section 
      ref={sectionRef} 
      id="perfect-coverage" 
      className="pt-8 pb-20 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Two-column grid */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Text + Control Card */}
          <motion.div
            variants={fadeRise}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 space-y-6"
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
              Perfect Coverage
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Every corner. Every device.<br />
              Always connected.
            </p>
            
            {/* Description */}
            <p className="text-gray-600 text-lg">
              Professional mesh WiFi ensures seamless roaming throughout your home. 
              Move anywhere without dropping connection—streaming, calls, smart devices all stay online.
            </p>
            
            {/* CONTROL CENTER CARD */}
            <div className="pt-4">
              <button
                onClick={handleToggle}
                className={`
                  group relative overflow-hidden
                  rounded-xl sm:rounded-2xl
                  w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[256px]
                  p-3 sm:p-4 md:p-5 lg:p-6
                  transition-all duration-500 ease-out
                  hover:scale-[1.02] active:scale-[0.98]
                  ${networkOn
                    ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-xl shadow-blue-500/20'
                    : 'bg-gray-200 shadow-lg'
                  }
                `}
                aria-label={`Toggle network ${networkOn ? 'off' : 'on'}`}
              >
                {/* Top Row: Icon + Status */}
                <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4">
                  {/* WiFi icon */}
                  <div className={`
                    p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full transition-all duration-300
                    ${networkOn 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-white/60'
                    }
                  `}>
                    <svg 
                      className={`
                        w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 
                        transition-colors duration-300
                        ${networkOn ? 'text-white' : 'text-gray-500'}
                      `}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                  </div>
                  
                  {/* Status indicator dot */}
                  <div className={`
                    h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all duration-300
                    ${networkOn 
                      ? 'bg-white shadow-lg shadow-white/50' 
                      : 'bg-gray-400'
                    }
                  `} />
                </div>
                
                {/* Bottom Row: Network name + Stats */}
                <div className="text-left">
                  <p className={`
                    text-xs sm:text-sm md:text-base font-semibold transition-colors duration-300
                    ${networkOn ? 'text-white' : 'text-gray-700'}
                  `}>
                    HomiFi Network
                  </p>
                  
                  <p className={`
                    text-[10px] sm:text-xs md:text-sm mt-0.5 transition-colors duration-300
                    ${networkOn ? 'text-white/90' : 'text-gray-500'}
                  `}>
                    {networkOn ? '18 devices • 100% coverage' : 'Network Off'}
                  </p>
                </div>
                
                {/* Glow effect when on */}
                {networkOn && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Coverage Visualization */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7"
          >
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-50 border border-gray-200">
              
              {/* Floor Plan Base - always visible */}
              <div className="absolute inset-0 p-8 md:p-12">
                {/* Simple floor plan illustration */}
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Room outlines */}
                  <rect x="20" y="20" width="160" height="120" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                  <rect x="180" y="20" width="200" height="120" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                  <rect x="20" y="140" width="360" height="140" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                  
                  {/* Room labels */}
                  <text x="100" y="85" textAnchor="middle" fill="#9ca3af" fontSize="14" fontWeight="500">Living</text>
                  <text x="280" y="85" textAnchor="middle" fill="#9ca3af" fontSize="14" fontWeight="500">Kitchen</text>
                  <text x="200" y="215" textAnchor="middle" fill="#9ca3af" fontSize="14" fontWeight="500">Bedrooms</text>
                  
                  {/* Access Point locations - shown when network is on */}
                  {networkOn && (
                    <>
                      {/* AP 1 - Living Room */}
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      >
                        <circle cx="100" cy="60" r="6" fill="#3b82f6" />
                        <circle cx="100" cy="60" r="4" fill="white" />
                      </motion.g>
                      
                      {/* AP 2 - Kitchen */}
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                      >
                        <circle cx="280" cy="60" r="6" fill="#3b82f6" />
                        <circle cx="280" cy="60" r="4" fill="white" />
                      </motion.g>
                      
                      {/* AP 3 - Hallway */}
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                      >
                        <circle cx="200" cy="180" r="6" fill="#3b82f6" />
                        <circle cx="200" cy="180" r="4" fill="white" />
                      </motion.g>
                    </>
                  )}
                </svg>
              </div>

              {/* Coverage Gradient Overlay - animates in when network is on */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: networkOn ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 35% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
                    radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                    radial-gradient(circle at 50% 65%, rgba(139, 92, 246, 0.15) 0%, transparent 40%)
                  `
                }}
              />

              {/* Animated device icon showing seamless roaming */}
              {networkOn && (
                <motion.div
                  initial={{ x: '15%', y: '25%' }}
                  animate={{ 
                    x: ['15%', '45%', '70%', '50%', '15%'],
                    y: ['25%', '25%', '30%', '60%', '25%']
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: 'linear',
                    times: [0, 0.25, 0.5, 0.75, 1]
                  }}
                  className="absolute w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500"
                >
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.5 4.5c.28 0 .5.22.5.5v10.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V5c0-.28.22-.5.5-.5zm3 0c.28 0 .5.22.5.5v10.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V5c0-.28.22-.5.5-.5z"/>
                  </svg>
                </motion.div>
              )}

              {/* Coverage stats overlay */}
              {networkOn && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-3 text-sm">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">100%</p>
                      <p className="text-xs text-gray-600">Coverage</p>
                    </div>
                    <div className="w-px h-8 bg-gray-300" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">18</p>
                      <p className="text-xs text-gray-600">Devices</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
