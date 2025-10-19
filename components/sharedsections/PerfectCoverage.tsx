'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * PerfectCoverage - Shared Component (Desktop + Mobile)
 * 
 * Shows enterprise mesh WiFi coverage with UniFi-style APs
 * 
 * Layout:
 * - Desktop: Two-column side-by-side (text left, visualization right)
 * - Mobile: Stacked (text top, visualization bottom)
 */
export default function PerfectCoverage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showNetwork, setShowNetwork] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Auto-trigger network when section enters view
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
      className="pt-8 pb-20 md:py-20 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Two-column grid: text left, visualization right */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* LEFT COLUMN: Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
              Perfect WiFi
            </h2>
            
            {/* Subheading - Shorter on mobile */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              <span className="md:hidden">Seamless coverage. Everywhere.</span>
              <span className="hidden md:inline">Every corner. Every device.<br />Always connected.</span>
            </p>
            
            {/* Description */}
            <p className="text-gray-600 text-lg">
              Professional mesh WiFi ensures seamless roaming throughout your home. 
              Move anywhere without dropping connection—streaming, calls, smart devices all stay online.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="relative w-full rounded-3xl shadow-xl border border-gray-200 overflow-hidden bg-gradient-to-br from-gray-50 to-white" 
                 style={{ paddingBottom: '100%' }}>
              <div className="absolute inset-0">
                
                <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  
                  {/* Floor Plan - 3 rooms (compact square layout) */}
                  <motion.rect 
                    x="40" y="40" width="140" height="140" 
                    fill="none" stroke="#d1d5db" strokeWidth="2" rx="8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <motion.rect 
                    x="180" y="40" width="180" height="140" 
                    fill="none" stroke="#d1d5db" strokeWidth="2" rx="8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <motion.rect 
                    x="40" y="180" width="320" height="180" 
                    fill="none" stroke="#d1d5db" strokeWidth="2" rx="8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  
                  {/* Room Labels */}
                  <motion.text 
                    x="110" y="115" textAnchor="middle" 
                    fill="#9ca3af" fontSize="16" fontWeight="500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Living
                  </motion.text>
                  <motion.text 
                    x="270" y="115" textAnchor="middle" 
                    fill="#9ca3af" fontSize="16" fontWeight="500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Kitchen
                  </motion.text>
                  <motion.text 
                    x="200" y="275" textAnchor="middle" 
                    fill="#9ca3af" fontSize="16" fontWeight="500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Bedrooms
                  </motion.text>

                  {/* Network Coverage */}
                  {showNetwork && (
                    <>
                      {/* Full Coverage Heatmap */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                      >
                        <motion.rect 
                          x="40" y="40" width="140" height="140" 
                          fill="url(#fullCoverageGradient)"
                          rx="8"
                          animate={{ opacity: [0.3, 0.4, 0.3] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.rect 
                          x="180" y="40" width="180" height="140" 
                          fill="url(#fullCoverageGradient)"
                          rx="8"
                          animate={{ opacity: [0.3, 0.4, 0.3] }}
                          transition={{ duration: 4, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.rect 
                          x="40" y="180" width="320" height="180" 
                          fill="url(#fullCoverageGradient)"
                          rx="8"
                          animate={{ opacity: [0.3, 0.4, 0.3] }}
                          transition={{ duration: 4, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.g>

                      {/* AP 1 - Living Room */}
                      <motion.g>
                        <motion.circle 
                          cx="110" cy="145" r="45"
                          fill="url(#coverageGradient)"
                          initial={{ r: 0, opacity: 0 }}
                          animate={{ r: 45, opacity: [0, 0.2, 0.15, 0.2] }}
                          transition={{ 
                            r: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }
                          }}
                        />
                        <motion.g
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.3, type: 'spring', stiffness: 300 }}
                        >
                          <circle cx="110" cy="145" r="8" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <motion.circle 
                            cx="110" cy="145" r="11" fill="none" stroke="#3b82f6" strokeWidth="2"
                            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.circle 
                            cx="110" cy="145" r="2.5" fill="#3b82f6"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.g>
                      </motion.g>

                      {/* AP 2 - Kitchen */}
                      <motion.g>
                        <motion.circle 
                          cx="270" cy="145" r="45"
                          fill="url(#coverageGradient)"
                          initial={{ r: 0, opacity: 0 }}
                          animate={{ r: 45, opacity: [0, 0.2, 0.15, 0.2] }}
                          transition={{ 
                            r: { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 3, delay: 1.2, repeat: Infinity, ease: "easeInOut" }
                          }}
                        />
                        <motion.g
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.5, type: 'spring', stiffness: 300 }}
                        >
                          <circle cx="270" cy="145" r="8" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <motion.circle 
                            cx="270" cy="145" r="11" fill="none" stroke="#3b82f6" strokeWidth="2"
                            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.circle 
                            cx="270" cy="145" r="2.5" fill="#3b82f6"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.g>
                      </motion.g>

                      {/* AP 3 - Bedrooms */}
                      <motion.g>
                        <motion.circle 
                          cx="200" cy="300" r="45"
                          fill="url(#coverageGradient)"
                          initial={{ r: 0, opacity: 0 }}
                          animate={{ r: 45, opacity: [0, 0.2, 0.15, 0.2] }}
                          transition={{ 
                            r: { duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 3, delay: 1.4, repeat: Infinity, ease: "easeInOut" }
                          }}
                        />
                        <motion.g
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.7, type: 'spring', stiffness: 300 }}
                        >
                          <circle cx="200" cy="300" r="8" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <motion.circle 
                            cx="200" cy="300" r="11" fill="none" stroke="#3b82f6" strokeWidth="2"
                            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.circle 
                            cx="200" cy="300" r="2.5" fill="#3b82f6"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.g>
                      </motion.g>
                    </>
                  )}

                  {/* Gradients */}
                  <defs>
                    <radialGradient id="coverageGradient">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="fullCoverageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Stats Card */}
                {showNetwork && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center px-4"
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
      </div>
    </section>
  );
}
