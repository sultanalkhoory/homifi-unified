'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeRise } from '@/lib/animations';

type LockState = 'locked' | 'unlocking' | 'unlocked';

/**
 * PerfectHomeKey Section - Minimal Lock Screen + Dynamic Island Only
 * 
 * Shows iPhone with lock screen wallpaper and animated Dynamic Island
 * No extra UI elements - just the background image and island animation
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

        {/* Main Scene: Door + Handle + iPhone */}
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
              
              {/* Ambient lighting overlay */}
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

              {/* Door Handle (Level Lock style) */}
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
                    {/* Screws in corners */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-900/30" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-900/30" />
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-900/30" />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-900/30" />

                    {/* Idle breathing glow */}
                    {lockState === 'locked' && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gray-400"
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
                  </div>

                  {/* Door Handle Lever - rotates DOWN when unlocking */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 md:w-24 md:h-7"
                    style={{ originX: 0.2, originY: 0.5 }}
                    animate={{
                      rotate: lockState === 'unlocked' ? 35 : 0
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.22, 1, 0.36, 1],
                      delay: lockState === 'unlocking' ? 0.3 : 0
                    }}
                  >
                    {/* Handle body */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 shadow-lg">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-transparent to-black/20" />
                      
                      {/* Grip texture lines */}
                      <div className="absolute inset-y-2 right-4 left-8 flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-px h-full bg-gray-900/40" />
                        ))}
                      </div>
                    </div>

                    {/* Handle end cap */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-md" />
                  </motion.div>

                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg z-10">
                    <div className="absolute inset-2 rounded-full bg-gray-900">
                      {/* Status indicator LED */}
                      <motion.div 
                        className={`absolute inset-0 m-auto w-2 h-2 rounded-full transition-colors duration-300`}
                        style={{
                          backgroundColor: lockState === 'unlocking' ? '#3b82f6' 
                            : lockState === 'unlocked' ? '#10b981' 
                            : '#6b7280'
                        }}
                        animate={{
                          opacity: lockState === 'locked' ? [0.5, 1, 0.5] : 1
                        }}
                        transition={{
                          duration: 2,
                          repeat: lockState === 'locked' ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </div>

                  {/* Unlock glow ring */}
                  {lockState !== 'locked' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.4, 1.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className={`absolute inset-0 rounded-2xl ${
                        lockState === 'unlocking' ? 'bg-blue-400' : 'bg-green-400'
                      }`}
                      style={{ filter: 'blur(12px)' }}
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

              {/* iPhone Frame - VERTICAL - Smaller on mobile */}
              <motion.div
                animate={{
                  x: lockState === 'locked' ? 0 : lockState === 'unlocking' ? -60 : -60,
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
                {/* iPhone Frame - Responsive: 120px mobile, 180px tablet, 240px desktop */}
                <div className="relative w-[120px] h-[240px] sm:w-[180px] sm:h-[360px] md:w-[240px] md:h-[480px]">
                  {/* Black bezel - MUCH THINNER */}
                  <div className="relative w-full h-full bg-black rounded-[28px] sm:rounded-[38px] md:rounded-[45px] p-[2px] sm:p-[3px] md:p-[4px] shadow-[0_0_0_2px_#1a1a1a,0_0_60px_rgba(0,0,0,0.4)]">
                    {/* Screen area - WITH overflow hidden */}
                    <div className="relative w-full h-full bg-black rounded-[22px] sm:rounded-[30px] md:rounded-[37px] overflow-hidden">
                      
                      {/* Lock Screen Background - no position adjustment needed now */}
                      <div className="absolute inset-0">
                        <img 
                          src="/iphone-homekey-screen.png" 
                          alt="iPhone Lock Screen"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ 
                            imageRendering: 'crisp-edges',
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden'
                          }}
                          loading="eager"
                          decoding="sync"
                        />
                      </div>

                      {/* Subtle screen glare */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[22px] sm:rounded-[30px] md:rounded-[37px]"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 25%, transparent 50%, transparent 75%, rgba(255,255,255,0.02) 100%)',
                        }}
                      />

                      {/* Dynamic Island - ONLY UI element */}
                      <div className="absolute top-1 sm:top-1.5 md:top-2 left-1/2 -translate-x-1/2 z-40">
                        <motion.div
                          animate={{
                            width: lockState === 'locked' ? '35px' 
                              : lockState === 'unlocking' ? '60px' 
                              : '75px',
                            height: lockState === 'locked' ? '10px' 
                              : lockState === 'unlocking' ? '16px'
                              : '20px'
                          }}
                          transition={{ 
                            duration: 0.4, 
                            ease: [0.22, 1, 0.36, 1],
                            delay: lockState === 'unlocking' ? 0.1 : 0
                          }}
                          className="bg-black rounded-full flex items-center justify-center overflow-hidden relative"
                        >
                          {/* Idle state - pill with camera/sensors */}
                          {lockState === 'locked' && (
                            <div className="flex items-center justify-center h-full relative w-full">
                              <div className="absolute left-1.5 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-900 rounded-full" />
                              <div className="absolute right-1.5 w-1.5 h-0.5 sm:w-2 sm:h-0.5 bg-gray-900 rounded-full" />
                            </div>
                          )}

                          {/* Expanded state */}
                          <AnimatePresence mode="wait">
                            {lockState !== 'locked' && (
                              <motion.div
                                key={lockState}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 px-1 sm:px-1.5 md:px-2"
                              >
                                {/* Icon */}
                                {lockState === 'unlocking' ? (
                                  <motion.svg 
                                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white flex-shrink-0" 
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
                                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white flex-shrink-0" 
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

                                {/* Text */}
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

                  {/* Soft shadow from iPhone onto door */}
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
