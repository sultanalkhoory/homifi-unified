'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeRise } from '@/lib/animations';

type LockState = 'locked' | 'unlocking' | 'unlocked';

/**
 * Perfect Entry Section - Apple HomeKey Integration
 * 
 * Showcases Apple Wallet integration for home entry.
 * Entire scene is clickable for intuitive interaction.
 */
export default function PerfectHomeKey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lockState, setLockState] = useState<LockState>('locked');
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-trigger unlock animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoTriggered) {
            setTimeout(() => {
              triggerUnlock();
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

  // Hide hint after 4 seconds or after first interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Unlock sequence
  const triggerUnlock = () => {
    if (lockState !== 'locked') return;
    
    setLockState('unlocking');
    
    if (!hasInteracted) {
      setHasInteracted(true);
      setShowHint(false);
    }
    
    setTimeout(() => {
      setLockState('unlocked');
      
      setTimeout(() => {
        setLockState('locked');
      }, 1800);
    }, 1200);
  };

  return (
    <section 
      ref={containerRef} 
      id="perfect-homekey" 
      className="pt-8 pb-20 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6">
            Perfect Entry
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Unlock your home with just a tap. Your iPhone or Apple Watch becomes your key—
            stored securely in Apple Wallet.
          </p>
        </motion.div>

        {/* Interactive Door Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto w-full max-w-4xl">
            
            {/* Clickable Scene Container */}
            <motion.div 
              onClick={triggerUnlock}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              
              {/* Ambient lighting */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: lockState === 'unlocked' 
                    ? 'radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)'
                    : 'transparent'
                }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Door Edge */}
              <div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-gray-100 to-gray-50 border-r-2 border-gray-200">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              </div>

              {/* Door Handle with Pulsing Indicator */}
              <div className="absolute left-[28%] top-1/2 -translate-y-1/2 z-20">
                <div className="relative w-24 h-32 md:w-28 md:h-36">
                  
                  {/* Base plate */}
                  <div className={`
                    absolute inset-0 rounded-2xl transition-all duration-500
                    ${lockState === 'unlocking'
                      ? 'bg-gradient-to-br from-blue-400 to-blue-500 shadow-xl shadow-blue-500/40'
                      : lockState === 'unlocked'
                      ? 'bg-gradient-to-br from-green-400 to-green-500 shadow-xl shadow-green-500/40'
                      : 'bg-gradient-to-br from-gray-700 to-gray-800 shadow-xl'
                    }
                  `}>
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-900/30" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-900/30" />
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-900/30" />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-900/30" />

                    {/* Pulsing glow when locked */}
                    {lockState === 'locked' && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-blue-400"
                        animate={{
                          opacity: [0, 0.3, 0],
                          scale: [0.95, 1.1, 0.95]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{ filter: 'blur(8px)' }}
                      />
                    )}
                  </div>

                  {/* Handle lever - rotates down when unlocking */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 md:w-24 md:h-7"
                    style={{ originX: 0.2, originY: 0.5 }}
                    animate={{
                      rotate: lockState === 'unlocked' ? 35 : 0
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.22, 1, 0.36, 1],
                      delay: lockState === 'unlocking' ? 0.4 : 0
                    }}
                  >
                    <div className={`
                      w-full h-full rounded-full transition-colors duration-300
                      ${lockState === 'unlocked' ? 'bg-green-300' : 'bg-gray-300'}
                      shadow-lg
                    `} />
                  </motion.div>

                  {/* Glow effect during state changes */}
                  {lockState !== 'locked' && (
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ${
                        lockState === 'unlocking' ? 'bg-blue-400' : 'bg-green-400'
                      }`}
                      style={{ filter: 'blur(12px)' }}
                      initial={{ opacity: 0.6, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.3 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  )}

                  {/* Radiating pulse on unlock */}
                  {lockState === 'unlocking' && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 1.3, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  )}
                </div>
              </div>

              {/* iPhone with Apple Wallet HomeKey */}
              <motion.div
                animate={{
                  x: lockState === 'locked' ? 0 : -60,
                  rotateY: lockState === 'locked' ? -8 : 0,
                  scale: lockState === 'locked' ? 0.98 : 1,
                  y: lockState === 'locked' ? 4 : 0
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute left-[55%] sm:left-[58%] top-1/2 -translate-y-1/2 z-30"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative">
                  {/* iPhone frame */}
                  <div className="relative w-32 h-64 sm:w-36 sm:h-72 md:w-40 md:h-80 bg-black rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden border-[3px] sm:border-4 border-gray-800">
                    
                    {/* Lock screen background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500" />
                    
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50">
                      <motion.div
                        className="bg-black rounded-full overflow-hidden"
                        animate={{
                          width: lockState === 'unlocking' || lockState === 'unlocked' ? '140px' : '80px',
                          height: lockState === 'unlocking' || lockState === 'unlocked' ? '36px' : '26px'
                        }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <AnimatePresence mode="wait">
                          {(lockState === 'unlocking' || lockState === 'unlocked') && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2 px-4 h-full"
                            >
                              {lockState === 'unlocked' && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.2, type: "spring" }}
                                  className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center"
                                >
                                  <motion.svg 
                                    className="w-3 h-3 text-white" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <motion.path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      d="M5 13l4 4L19 7"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ duration: 0.4, ease: "easeOut" }}
                                    />
                                  </motion.svg>
                                </motion.div>
                              )}

                              <motion.span
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15, duration: 0.3 }}
                                className="text-white text-[7px] sm:text-[9px] md:text-xs font-medium whitespace-nowrap"
                              >
                                {lockState === 'unlocking' ? 'Unlocking...' : 'Unlocked'}
                              </motion.span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </div>

                  {/* iPhone shadow on door */}
                  <motion.div
                    className="absolute -left-2 sm:-left-3 md:-left-5 top-0 bottom-0 w-4 sm:w-6 md:w-10"
                    animate={{
                      opacity: lockState === 'locked' ? 0.1 : 0.2,
                      x: lockState === 'locked' ? 0 : -8
                    }}
                    style={{
                      background: 'radial-gradient(ellipse at right, rgba(0,0,0,0.2) 0%, transparent 70%)',
                      filter: 'blur(8px)'
                    }}
                  />
                </div>
              </motion.div>

              {/* "Tap to unlock" hint */}
              <AnimatePresence>
                {showHint && lockState === 'locked' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
                  >
                    <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                      Tap to unlock
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        </motion.div>

        {/* Apple integration note */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">
            Works seamlessly with Apple Home, Apple Watch, and Apple Wallet
          </p>
        </motion.div>
      </div>
    </section>
  );
}
