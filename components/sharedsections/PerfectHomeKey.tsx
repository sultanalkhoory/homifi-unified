'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeRise } from '@/lib/animations';

type LockState = 'locked' | 'unlocking' | 'unlocked';

export default function PerfectHomeKey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lockState, setLockState] = useState<LockState>('locked');
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Auto-trigger unlock when section enters viewport
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

  // Hide hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const triggerUnlock = () => {
    if (lockState !== 'locked') return;
    
    setLockState('unlocking');
    setShowHint(false);
    
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
            Unlock your home with just a tap. Your iPhone or Apple Watch becomes your key.
          </p>
        </motion.div>

        {/* Interactive Door Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="mx-auto w-full max-w-4xl">
            
            {/* Clickable Scene Container */}
            <motion.div 
              onClick={triggerUnlock}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-visible shadow-2xl cursor-pointer"
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
                    {/* Corner screws */}
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

                  {/* Handle lever */}
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

                  {/* Radiating pulse */}
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

              {/* iPhone - Original Design */}
              <motion.div
                animate={{
                  x: lockState === 'locked' ? 0 : -60,
                  rotateY: lockState === 'locked' ? -8 : 0,
                  scale: lockState === 'locked' ? 0.98 : 1,
                  y: lockState === 'locked' ? [0, -3, 0] : 0
                }}
                transition={{ 
                  x: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  rotateY: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute right-[8%] top-1/2 -translate-y-1/2 z-30"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <div className="relative w-[120px] h-[240px] sm:w-[180px] sm:h-[360px] md:w-[240px] md:h-[480px]">
                  {/* iPhone bezel */}
                  <div className="relative w-full h-full bg-black rounded-[28px] sm:rounded-[38px] md:rounded-[45px] p-[2px] sm:p-[3px] md:p-[4px] shadow-[0_0_0_2px_#1a1a1a,0_0_60px_rgba(0,0,0,0.4)]">
                    {/* Screen area */}
                    <div className="relative w-full h-full bg-black rounded-[22px] sm:rounded-[30px] md:rounded-[37px] overflow-hidden">
                      
                      {/* Lock Screen Wallpaper */}
                      <div className="absolute inset-0">
                        <img 
                          src="/iphone-homekey-screen.png" 
                          alt="iPhone Lock Screen"
                          className="absolute w-full h-full object-cover"
                          style={{ 
                            top: '-2%',
                            imageRendering: 'crisp-edges',
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden'
                          }}
                          loading="eager"
                          decoding="sync"
                        />
                      </div>

                      {/* Screen glare */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[22px] sm:rounded-[30px] md:rounded-[37px]"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 25%, transparent 50%, transparent 75%, rgba(255,255,255,0.02) 100%)',
                        }}
                      />

                      {/* Dynamic Island - Original Sizing */}
                      <div className="absolute top-1 sm:top-1.5 md:top-2 left-1/2 -translate-x-1/2 z-40">
                        <motion.div
                          animate={{
                            width: lockState === 'locked' 
                              ? '70px'
                              : lockState === 'unlocking' || lockState === 'unlocked' 
                              ? ['70px', '140px']
                              : '70px',
                            height: lockState === 'unlocking' || lockState === 'unlocked' ? '36px' : '26px'
                          }}
                          transition={{ 
                            width: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                            height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                          }}
                          className="bg-black rounded-full overflow-hidden"
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
                                    className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"
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
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{ zIndex: 50 }}
                  >
                    <div className="bg-black/70 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg">
                      Tap to unlock
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        </motion.div>

        {/* Apple HomeKey + Wallet Badge */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Apple HomeKey stored securely in Apple Wallet</span>
        </motion.div>
      </div>
    </section>
  );
}
