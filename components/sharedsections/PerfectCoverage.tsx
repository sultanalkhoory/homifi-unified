'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * PerfectCoverage - Shared Component (Desktop + Mobile)
 * 
 * Shows enterprise mesh WiFi coverage with:
 * - Clean floor plan (3 rooms)
 * - UniFi-style access points with breathing LED rings
 * - Full coverage heatmap across all rooms
 * - Compact stats: "3 Access Points • 100% Coverage"
 * 
 * Responsive:
 * - Desktop: Full-width visualization
 * - Mobile: Full-width (no iPhone frame for consistency with other shared sections)
 */
export default function PerfectCoverage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showNetwork, setShowNetwork] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Auto-trigger network visualization when section enters view
  useEffect(() => {
    if (isInView && !showNetwork) {
      const timer = setTimeout(() => setShowNetwork(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, showNetwork]);

  return (
    <section 
      ref={containerRef} 
      id="perfect-coverage"
      className="py-16 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-3">
            Perfect WiFi
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-4">
            Complete coverage.<br />
            Seamless roaming.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise mesh network ensures strong WiFi everywhere.
          </p>
        </motion.div>

        {/* Coverage Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Container with aspect ratio */}
          <div className="relative w-full" style={{ paddingBottom: '140%' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              
              <svg viewBox="0 0 280 560" className="w-full h-full">
                
                {/* Floor Plan - 3 rooms */}
                <motion.rect 
                  x="20" y="80" width="120" height="160" 
                  fill="none" stroke="#d1d5db" strokeWidth="2" rx="6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.rect 
                  x="140" y="80" width="120" height="160" 
                  fill="none" stroke="#d1d5db" strokeWidth="2" rx="6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.rect 
                  x="20" y="240" width="240" height="200" 
                  fill="none" stroke="#d1d5db" strokeWidth="2" rx="6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                
                {/* Room Labels */}
                <motion.text 
                  x="80" y="165" textAnchor="middle" 
                  fill="#9ca3af" fontSize="13" fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Living
                </motion.text>
                <motion.text 
                  x="200" y="165" textAnchor="middle" 
                  fill="#9ca3af" fontSize="13" fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Kitchen
                </motion.text>
                <motion.text 
                  x="140" y="345" textAnchor="middle" 
                  fill="#9ca3af" fontSize="13" fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Bedrooms
                </motion.text>

                {/* Network Coverage with UniFi-style APs */}
                {showNetwork && (
                  <>
                    {/* Full Coverage Heatmap - Shows complete coverage across all rooms */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    >
                      {/* Living Room - full coverage */}
                      <motion.rect 
                        x="20" y="80" width="120" height="160" 
                        fill="url(#fullCoverageGradient)"
                        rx="6"
                        animate={{ 
                          opacity: [0.3, 0.4, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Kitchen - full coverage */}
                      <motion.rect 
                        x="140" y="80" width="120" height="160" 
                        fill="url(#fullCoverageGradient)"
                        rx="6"
                        animate={{ 
                          opacity: [0.3, 0.4, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          delay: 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Bedrooms - full coverage */}
                      <motion.rect 
                        x="20" y="240" width="240" height="200" 
                        fill="url(#fullCoverageGradient)"
                        rx="6"
                        animate={{ 
                          opacity: [0.3, 0.4, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          delay: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.g>

                    {/* AP 1 - Living Room */}
                    <motion.g>
                      {/* Localized coverage emphasis around AP */}
                      <motion.circle 
                        cx="80" cy="200" r="35"
                        fill="url(#coverageGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ 
                          r: 35, 
                          opacity: [0, 0.2, 0.15, 0.2]
                        }}
                        transition={{ 
                          r: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                          opacity: { 
                            duration: 3, 
                            delay: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                      
                      {/* UniFi AP - White disc with LED ring */}
                      <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3, type: 'spring', stiffness: 300 }}
                      >
                        {/* AP body */}
                        <circle cx="80" cy="200" r="7" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                        
                        {/* LED ring - breathing blue light */}
                        <motion.circle 
                          cx="80" cy="200" r="9"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Center LED dot */}
                        <motion.circle 
                          cx="80" cy="200" r="2"
                          fill="#3b82f6"
                          animate={{ 
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.g>
                    </motion.g>

                    {/* AP 2 - Kitchen */}
                    <motion.g>
                      {/* Localized coverage emphasis */}
                      <motion.circle 
                        cx="200" cy="200" r="35"
                        fill="url(#coverageGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ 
                          r: 35, 
                          opacity: [0, 0.2, 0.15, 0.2]
                        }}
                        transition={{ 
                          r: { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                          opacity: { 
                            duration: 3, 
                            delay: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                      
                      <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5, type: 'spring', stiffness: 300 }}
                      >
                        <circle cx="200" cy="200" r="7" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                        <motion.circle 
                          cx="200" cy="200" r="9"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.7,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.circle 
                          cx="200" cy="200" r="2"
                          fill="#3b82f6"
                          animate={{ 
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.7,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.g>
                    </motion.g>

                    {/* AP 3 - Bedrooms */}
                    <motion.g>
                      {/* Localized coverage emphasis */}
                      <motion.circle 
                        cx="140" cy="370" r="35"
                        fill="url(#coverageGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ 
                          r: 35, 
                          opacity: [0, 0.2, 0.15, 0.2]
                        }}
                        transition={{ 
                          r: { duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
                          opacity: { 
                            duration: 3, 
                            delay: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                      
                      <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7, type: 'spring', stiffness: 300 }}
                      >
                        <circle cx="140" cy="370" r="7" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                        <motion.circle 
                          cx="140" cy="370" r="9"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.9,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.circle 
                          cx="140" cy="370" r="2"
                          fill="#3b82f6"
                          animate={{ 
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.9,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.g>
                    </motion.g>
                  </>
                )}

                {/* SVG Gradients */}
                <defs>
                  {/* Localized AP coverage gradient */}
                  <radialGradient id="coverageGradient">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Full coverage heatmap gradient */}
                  <linearGradient id="fullCoverageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Stats Card - Compact and clean */}
              {showNetwork && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center px-4 md:px-8"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl px-4 py-2.5 shadow-lg border border-gray-200">
                    <p className="text-xs text-gray-700 font-medium text-center">
                      <span className="text-blue-600 font-semibold">3 Access Points</span>
                      {' • '}
                      <span className="text-blue-600 font-semibold">100% Coverage</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
