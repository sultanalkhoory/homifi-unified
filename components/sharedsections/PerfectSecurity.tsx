'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeRise } from '@/lib/animations';

type SecurityState = 'clear' | 'alert' | 'notification' | 'unlocked';

/**
 * PerfectSecurity Section Component - Apple TV Edition
 * 
 * Features:
 * - Large floating TV with Apple TV UI
 * - Doorbell notification slides from top-right
 * - Unlock button triggers success notification
 * - Dismiss button closes notification
 * - No control card (removed as requested)
 * - Smooth, fluid Apple-like animations
 */
export default function PerfectSecurity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [securityState, setSecurityState] = useState<SecurityState>('clear');
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);

  /**
   * Auto-trigger doorbell notification when section enters viewport
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoTriggered) {
            setTimeout(() => {
              setSecurityState('alert');
              
              setTimeout(() => {
                setSecurityState('notification');
              }, 600);
              
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAutoTriggered]);

  /**
   * Handle Unlock action - show success notification
   */
  const handleUnlock = () => {
    setSecurityState('unlocked');
    
    // Auto-dismiss success notification after 3 seconds
    setTimeout(() => {
      setSecurityState('clear');
    }, 3000);
  };

  /**
   * Handle Dismiss action - just close notification
   */
  const handleDismiss = () => {
    setSecurityState('clear');
  };

  return (
    <section 
      ref={containerRef} 
      id="perfect-security" 
      className="pt-8 pb-20 md:py-28 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Centered Header Section */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6">
            Perfect Security
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Instant notifications when someone's at your door. Unlock remotely or dismiss — 
            all from your Apple TV, iPhone, or iPad.
          </p>
        </motion.div>

        {/* Large Centered TV Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          {/* TV Container - responsive sizing */}
          <div className="mx-auto w-[98%] md:w-[85%] lg:w-[75%]">
            
            {/* TV Frame - ultra-thin bezels */}
            <div className="relative bg-black rounded-none p-[3px] md:p-1 shadow-2xl">
              
              {/* TV Screen */}
              <div className="relative aspect-[16/9] rounded-none overflow-hidden bg-black">
                
                {/* Apple TV UI Background */}
                <img
                  src="/apple-tv-ui.png"
                  alt="Apple TV Home Screen"
                  className="w-full h-full object-cover"
                />

                {/* Subtle screen glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none" />

                {/* Doorbell Notification - slides from top-right */}
                <AnimatePresence>
                  {securityState === 'notification' && (
                    <motion.div
                      initial={{ y: -100, x: 20, opacity: 0 }}
                      animate={{ 
                        y: 0, 
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      }}
                      exit={{ 
                        y: -100, 
                        x: 20,
                        opacity: 0,
                        transition: { 
                          duration: 0.3, 
                          ease: [0.4, 0, 1, 1]
                        }
                      }}
                      className="absolute top-3 right-3 md:top-6 md:right-6 z-40 w-[40%]"
                    >
                      {/* Notification Card - liquid glass */}
                      <div className="backdrop-blur-2xl bg-white/30 rounded-2xl p-2.5 md:p-4 border border-white/50 shadow-2xl">
                        
                        {/* Header: App Icon + Title */}
                        <div className="flex items-center gap-2 mb-2.5 md:mb-3">
                          {/* Home App Icon */}
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          
                          {/* Title and timestamp */}
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold text-[10px] md:text-sm truncate">Home</p>
                            <p className="text-white/80 text-[9px] md:text-xs">Just now</p>
                          </div>
                        </div>

                        {/* Content: Thumbnail + Message */}
                        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-2.5 md:mb-3">
                          {/* Doorbell Camera Thumbnail */}
                          <div className="flex-shrink-0 mx-auto sm:mx-0">
                            <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg border-2 border-white/40">
                              <img 
                                src="/doorbell-visitor.png" 
                                alt="Front door camera view"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Message text - hidden on mobile, visible on sm+ */}
                          <div className="hidden sm:flex flex-1 flex-col justify-center text-left">
                            <p className="text-white font-semibold text-sm md:text-base leading-tight mb-1">
                              Front Door
                            </p>
                            <p className="text-white/95 text-xs md:text-sm leading-snug">
                              Someone's at your door
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons - smooth animations */}
                        <div className="flex gap-2">
                          {/* Unlock Button */}
                          <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ 
                              duration: 0.2,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            onClick={handleUnlock}
                            className="flex-1 py-2 md:py-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 
                              text-white font-semibold text-sm md:text-base shadow-lg"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                              </svg>
                              <span className="hidden sm:inline">Unlock Door</span>
                            </div>
                          </motion.button>

                          {/* Dismiss Button */}
                          <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ 
                              duration: 0.2,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            onClick={handleDismiss}
                            className="flex-1 sm:flex-shrink-0 py-2 md:py-3 sm:px-5 rounded-xl bg-white/25 backdrop-blur-sm
                              text-white font-semibold text-sm md:text-base
                              hover:bg-white/35"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="hidden sm:inline">Dismiss</span>
                            </div>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Success Notification - "Front Door Unlocked" */}
                <AnimatePresence>
                  {securityState === 'unlocked' && (
                    <motion.div
                      initial={{ y: -60, opacity: 0, scale: 0.95 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        scale: 1,
                        transition: {
                          type: 'spring',
                          stiffness: 400,
                          damping: 25
                        }
                      }}
                      exit={{ 
                        y: -60,
                        opacity: 0,
                        scale: 0.95,
                        transition: { 
                          duration: 0.3, 
                          ease: [0.4, 0, 1, 1]
                        }
                      }}
                      className="absolute top-3 right-3 md:top-6 md:right-6 z-50"
                    >
                      {/* Compact success card */}
                      <div className="backdrop-blur-2xl bg-green-500/90 rounded-2xl px-4 py-3 border border-white/30 shadow-2xl">
                        <div className="flex items-center gap-3">
                          {/* Animated lock icon */}
                          <motion.div
                            initial={{ rotate: -10, scale: 0.8 }}
                            animate={{ 
                              rotate: 0, 
                              scale: 1,
                              transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 15
                              }
                            }}
                          >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </motion.div>
                          
                          {/* Success text */}
                          <div className="text-left">
                            <motion.p 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                              className="text-white font-semibold text-sm md:text-base"
                            >
                              Front Door
                            </motion.p>
                            <motion.p 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15, duration: 0.3 }}
                              className="text-white/90 text-xs md:text-sm"
                            >
                              Unlocked
                            </motion.p>
                          </div>

                          {/* Checkmark */}
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ 
                              scale: 1, 
                              rotate: 0,
                              transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 15,
                                delay: 0.2
                              }
                            }}
                          >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
