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
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Room outlines */}
                  <rect x="20" y="20" width="160" height="120" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                  <rect x="180" y="20" width="200" height="120" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                  <rect x="20" y="140" width="360" height="140" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                  
                  {/* Room labels */}
                  <text x="100" y="50" textAnchor="middle" fill="#9ca3af" fontSize="14" fontWeight="500">Living Room</text>
                  <text x="280" y="50" textAnchor="middle" fill="#9ca3af" fontSize="14" fontWeight="500">Kitchen</text>
                  <text x="200" y="170" textAnchor="middle" fill="#9ca3af" fontSize="14" fontWeight="500">Bedrooms</text>
                  
                  {/* Access Points */}
                  {networkOn && (
                    <>
                      {/* AP 1 - Living Room */}
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      >
                        <circle cx="100" cy="80" r="8" fill="#3b82f6" opacity="0.2" />
                        <circle cx="100" cy="80" r="6" fill="#3b82f6" />
                        <circle cx="100" cy="80" r="3" fill="white" />
                      </motion.g>
                      
                      {/* AP 2 - Kitchen */}
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                      >
                        <circle cx="280" cy="80" r="8" fill="#6366f1" opacity="0.2" />
                        <circle cx="280" cy="80" r="6" fill="#6366f1" />
                        <circle cx="280" cy="80" r="3" fill="white" />
                      </motion.g>
                      
                      {/* AP 3 - Bedrooms */}
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                      >
                        <circle cx="200" cy="210" r="8" fill="#8b5cf6" opacity="0.2" />
                        <circle cx="200" cy="210" r="6" fill="#8b5cf6" />
                        <circle cx="200" cy="210" r="3" fill="white" />
                      </motion.g>
                    </>
                  )}

                  {/* Animated Device with Connection Lines */}
                  {networkOn && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {/* Connection line to nearest AP */}
                      <motion.line
                        animate={{
                          x1: [70, 150, 280, 220, 70],
                          y1: [100, 90, 90, 200, 100],
                          x2: [100, 100, 280, 200, 100],
                          y2: [80, 80, 80, 210, 80],
                          opacity: [0.6, 0.6, 0.6, 0.6, 0.6]
                        }}
                        transition={{
                          duration: 16,
                          repeat: Infinity,
                          ease: 'linear',
                          times: [0, 0.25, 0.5, 0.75, 1]
                        }}
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        opacity="0.6"
                      />

                      {/* Moving Device */}
                      <motion.g
                        animate={{
                          x: [70, 150, 280, 220, 70],
                          y: [100, 90, 90, 200, 100]
                        }}
                        transition={{
                          duration: 16,
                          repeat: Infinity,
                          ease: 'linear',
                          times: [0, 0.25, 0.5, 0.75, 1]
                        }}
                      >
                        {/* Device circle */}
                        <circle r="12" fill="white" stroke="#3b82f6" strokeWidth="2" />
                        
                        {/* WiFi signal icon */}
                        <g transform="translate(-6, -6)">
                          <path
                            d="M6 9c2.2 0 4-1.8 4-4M6 9c-2.2 0-4-1.8-4-4M6 11v1"
                            stroke="#3b82f6"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <circle cx="6" cy="13" r="1" fill="#3b82f6" />
                        </g>

                        {/* Signal strength bars */}
                        <motion.g transform="translate(8, -8)">
                          <rect x="0" y="6" width="2" height="2" fill="#10b981" rx="0.5" />
                          <rect x="3" y="4" width="2" height="4" fill="#10b981" rx="0.5" />
                          <rect x="6" y="2" width="2" height="6" fill="#10b981" rx="0.5" />
                        </motion.g>
                      </motion.g>

                      {/* Path trail showing movement */}
                      <motion.path
                        d="M 70 100 Q 110 95, 150 90 Q 215 90, 280 90 Q 250 145, 220 200 Q 145 150, 70 100"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.5 }}
                      />
                    </motion.g>
                  )}
                </svg>
              </div>

              {/* Coverage Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: networkOn ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 35% 32%, rgba(59, 130, 246, 0.12) 0%, transparent 45%),
                    radial-gradient(circle at 70% 32%, rgba(99, 102, 241, 0.12) 0%, transparent 45%),
                    radial-gradient(circle at 50% 68%, rgba(139, 92, 246, 0.12) 0%, transparent 45%)
                  `
                }}
              />

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
