'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeRise } from '@/lib/animations';

type LockState = 'locked' | 'unlocking' | 'unlocked';

/**
 * PerfectHomeKey Section - Apple-Level Polish
 * 
 * IMPROVEMENTS APPLIED:
 * 1. iPhone approach with 3D perspective + NFC waves
 * 2. Lock mechanical rotation + bolt retract animation
 * 3. Multi-stage Dynamic Island expansion
 * 4. Idle state animations (breathing glow, floating)
 * 5. Ambient lighting changes on unlock
 */
export default function PerfectHomeKey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lockState, setLockState] = useState<LockState>('locked');
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);

  // Auto-trigger when section enters viewport
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

  // Trigger unlock sequence
  const triggerUnlock = () => {
    if (lockState !== 'locked') return;
    
    setLockState('unlocking');
    
    setTimeout(() => {
      setLockState('unlocked');
      
      setTimeout(() => {
        setLockState('locked');
      }, 1800);
    }, 1200);
  };

  // Handle Control Center card click
  const handleCardClick = () => {
    if (lockState === 'locked') {
      triggerUnlock();
    }
  };

  const getStatusText = () => {
    if (lockState === 'unlocking') return 'Unlocking...';
    if (lockState === 'unlocked') return 'Unlocked';
    return 'Locked';
  };

  const getCardColors = () => {
    if (lockState === 'unlocking') {
      return 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-xl shadow-blue-500/15';
    }
    if (lockState === 'unlocked') {
      return 'bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-xl shadow-green-500/15';
    }
    return 'bg-gray-200 shadow-lg';
  };

  return (
    <section 
      ref={containerRef} 
      id="perfect-homekey" 
      className="pt-8 pb-20 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Centered Header */}
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

        {/* Main Scene: Door + Lock + iPhone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="mx-auto w-full max-w-4xl">
            
            {/* Scene Container */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* IMPROVEMENT 5: Ambient lighting overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: lockState === 'unlocked' 
                    ? 'radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)'
                    : 'transparent'
                }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Door Edge (left 35%) */}
              <div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-gray-100 to-gray-50 border-r-2 border-gray-200">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              </div>

              {/* IMPROVEMENT 2: Smart Lock with mechanical rotation + bolt */}
              <div className="absolute left-[28%] top-1/2 -translate-y-1/2 z-20">
                <motion.div 
                  className={`
                    w-20 h-20 md:w-24 md:h-24 rounded-full transition-all duration-500
                    ${lockState === 'unlocking'
                      ? 'bg-gradient-to-br from-blue-400 to-blue-500 shadow-xl shadow-blue-500/40'
                      : lockState === 'unlocked'
                      ? 'bg-gradient-to-br from-green-400 to-green-500 shadow-xl shadow-green-500/40'
                      : 'bg-gradient-to-br from-gray-700 to-gray-800 shadow-xl'
                    }
                  `}
                  // Lock body rotates when unlocking
                  animate={{
                    rotate: lockState === 'unlocked' ? 15 : 0
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: lockState === 'unlocking' ? 0.3 : 0
                  }}
                >
                  {/* Lock center with bolt animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-500
                      ${lockState === 'unlocking'
                        ? 'bg-blue-600'
                        : lockState === 'unlocked'
                        ? 'bg-green-600'
                        : 'bg-gray-900'
                      }
                    `}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.svg 
                          className="w-5 h-5 md:w-6 md:h-6 text-white"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          // Icon rotates + scales
                          animate={{
                            rotate: lockState === 'unlocked' ? 90 : 0,
                            scale: lockState === 'unlocking' ? 0.9 : 1
                          }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {lockState === 'unlocked' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 014-4 4 4 0 014 4m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          )}
                        </motion.svg>
                      </div>
                    </div>

                    {/* Bolt retract indicator */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 w-6 h-1 bg-white/40 rounded-full"
                      animate={{
                        x: lockState === 'unlocked' ? -12 : 0,
                        opacity: lockState === 'unlocked' ? 0 : 0.4
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  {/* IMPROVEMENT 4: Idle breathing glow */}
                  {lockState === 'locked' && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gray-400"
                      animate={{
                        opacity: [0, 0.15, 0],
                        scale: [0.95, 1.05, 0.95]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ filter: 'blur(6px)' }}
                    />
                  )}

                  {/* Unlock glow ring */}
                  {lockState !== 'locked' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.3, 1.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full ${
                        lockState === 'unlocking' ? 'bg-blue-400' : 'bg-green-400'
                      }`}
                      style={{ filter: 'blur(8px)' }}
                    />
                  )}

                  {/* Radiating pulse on unlock */}
                  {lockState === 'unlocking' && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-400"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 1.8, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  )}
                </motion.div>
              </div>

              {/* IMPROVEMENT 1: iPhone with 3D perspective + NFC waves */}
              <motion.div
                animate={{
                  x: lockState === 'locked' ? 0 : lockState === 'unlocking' ? -60 : -60,
                  rotateY: lockState === 'locked' ? -8 : 0,
                  scale: lockState === 'locked' ? 0.98 : 1,
                  y: lockState === 'locked' ? [0, -3, 0] : 0 // Floating when idle
                }}
                transition={{ 
                  x: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  rotateY: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute right-[10%] top-1/2 -translate-y-1/2 z-30"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                {/* iPhone Frame */}
                <div className="relative w-32 md:w-40 lg:w-44">
                  {/* Titanium frame */}
                  <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-[2.5rem] md:rounded-[3rem] p-1.5 shadow-2xl">
                    
                    {/* Screen */}
                    <div className="relative aspect-[9/19.5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-black">
                      
                      {/* HomeKey Card Interface */}
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
                        {/* Status bar */}
                        <div className="absolute top-8 left-0 right-0 flex justify-between px-4 text-white text-[8px] font-semibold">
                          <span>9:41</span>
                          <div className="flex gap-1 items-center">
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                          </div>
                        </div>

                        {/* HomeKey Card - Centered */}
                        <motion.div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%]"
                          animate={{
                            scale: lockState === 'unlocking' ? 1.05 : 1
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20">
                            {/* House icon with glow */}
                            <div className="flex justify-center mb-2">
                              <motion.div 
                                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center relative"
                                animate={{
                                  boxShadow: lockState === 'unlocking' 
                                    ? '0 0 20px rgba(249, 115, 22, 0.6)'
                                    : '0 0 0 rgba(249, 115, 22, 0)'
                                }}
                              >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                              </motion.div>
                            </div>
                            
                            {/* Text */}
                            <div className="text-center">
                              <p className="text-white text-[10px] font-semibold mb-0.5">Front Door</p>
                              <p className="text-white/70 text-[8px]">
                                {lockState === 'unlocking' ? 'Unlocking...' : 'Hold Near Reader'}
                              </p>
                            </div>

                            {/* NFC waves - animated */}
                            <div className="flex justify-center mt-2 relative">
                              {/* NFC icon base */}
                              <svg className="w-8 h-3 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 12c0-2.2.9-4.2 2.3-5.7l1.4 1.4C6.6 8.8 6 10.3 6 12s.6 3.2 1.7 4.3l-1.4 1.4C4.9 16.2 4 14.2 4 12zm14 0c0-2.2-.9-4.2-2.3-5.7l-1.4 1.4c1.1 1.1 1.7 2.6 1.7 4.3s-.6 3.2-1.7 4.3l1.4 1.4c1.4-1.5 2.3-3.5 2.3-5.7z"/>
                              </svg>

                              {/* Animated NFC waves when unlocking */}
                              {lockState === 'unlocking' && (
                                <>
                                  <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: [0.8, 1.3, 1.3], opacity: [0, 0.6, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                  >
                                    <div className="w-6 h-6 border-2 border-blue-400 rounded-full" />
                                  </motion.div>
                                  <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: [0.8, 1.3, 1.3], opacity: [0, 0.4, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                                  >
                                    <div className="w-8 h-8 border-2 border-blue-400 rounded-full" />
                                  </motion.div>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* IMPROVEMENT 3: Multi-stage Dynamic Island */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40">
                        <motion.div
                          animate={{
                            width: lockState === 'locked' ? '35px' 
                              : lockState === 'unlocking' ? '70px' 
                              : '90px',
                            height: lockState === 'locked' ? '12px' 
                              : lockState === 'unlocking' ? '20px'
                              : '28px'
                          }}
                          transition={{ 
                            duration: 0.4, 
                            ease: [0.22, 1, 0.36, 1],
                            delay: lockState === 'unlocking' ? 0.1 : 0
                          }}
                          className="bg-black rounded-full flex items-center justify-center overflow-hidden relative"
                        >
                          {/* Idle state - just pill */}
                          {lockState === 'locked' && (
                            <div className="w-full h-full" />
                          )}

                          {/* Expanded state - unlock notification */}
                          <AnimatePresence mode="wait">
                            {lockState !== 'locked' && (
                              <motion.div
                                key={lockState}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-1 px-1.5"
                              >
                                {/* House icon or checkmark with draw-in animation */}
                                {lockState === 'unlocking' ? (
                                  <motion.svg 
                                    className="w-2.5 h-2.5 text-white flex-shrink-0" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={2}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                  >
                                    <motion.path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                  </motion.svg>
                                ) : (
                                  <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ 
                                      type: 'spring', 
                                      stiffness: 500, 
                                      damping: 20,
                                      delay: 0.1
                                    }}
                                  >
                                    <motion.svg 
                                      className="w-2.5 h-2.5 text-white flex-shrink-0" 
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24" 
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

                                {/* Text with staggered appearance */}
                                <motion.span
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.15, duration: 0.3 }}
                                  className="text-white text-[7px] font-medium whitespace-nowrap"
                                >
                                  {lockState === 'unlocking' ? 'Unlocking...' : 'Unlocked'}
                                </motion.span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>

                      {/* Screen glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 pointer-events-none" />
                    </div>
                  </div>

                  {/* Soft shadow from iPhone onto door */}
                  <motion.div
                    className="absolute -left-4 top-0 bottom-0 w-8"
                    animate={{
                      opacity: lockState === 'locked' ? 0.1 : 0.2,
                      x: lockState === 'locked' ? 0 : -20
                    }}
                    style={{
                      background: 'radial-gradient(ellipse at right, rgba(0,0,0,0.2) 0%, transparent 70%)',
                      filter: 'blur(10px)'
                    }}
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Control Center Card */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center"
        >
          <button
            onClick={handleCardClick}
            disabled={lockState !== 'locked'}
            className={`
              relative overflow-hidden rounded-xl sm:rounded-2xl
              w-full max-w-[200px] sm:max-w-[220px] md:max-w-[260px]
              p-4 sm:p-5 md:p-6
              transition-all duration-500 ease-out
              ${lockState === 'locked' ? 'hover:scale-[1.02] active:scale-[0.98] cursor-pointer' : 'cursor-default'}
              ${getCardColors()}
            `}
          >
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className={`
                p-2 md:p-3 rounded-full transition-all duration-300
                ${lockState !== 'locked' ? 'bg-white/20 backdrop-blur-sm' : 'bg-white/60'}
              `}>
                <svg 
                  className={`
                    w-6 h-6 md:w-7 md:h-7 
                    transition-colors duration-300
                    ${lockState !== 'locked' ? 'text-white' : 'text-gray-500'}
                  `}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  {lockState === 'unlocked' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 014-4 4 4 0 014 4m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  )}
                </svg>
              </div>
              
              <div className={`
                h-2 w-2 rounded-full transition-all duration-300
                ${lockState === 'unlocked' 
                  ? 'bg-white shadow-lg shadow-white/50' 
                  : lockState === 'unlocking'
                  ? 'bg-white shadow-lg shadow-white/50 animate-pulse'
                  : 'bg-gray-400'
                }
              `} />
            </div>
            
            <div className="text-left">
              <p className={`
                text-sm md:text-base font-semibold transition-colors duration-300
                ${lockState !== 'locked' ? 'text-white' : 'text-gray-700'}
              `}>
                Front Door
              </p>
              
              <p className={`
                text-xs md:text-sm mt-0.5 transition-colors duration-300
                ${lockState !== 'locked' ? 'text-white/90' : 'text-gray-500'}
              `}>
                {getStatusText()}
              </p>
            </div>
            
            {lockState !== 'locked' && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </button>
        </motion.div>

        {/* Apple Wallet Badge */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Stored securely in Apple Wallet</span>
        </motion.div>
      </div>
    </section>
  );
}
