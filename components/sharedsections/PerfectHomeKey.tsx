'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeRise } from '@/lib/animations';

type LockState = 'locked' | 'unlocking' | 'unlocked';

export default function PerfectHomeKey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lockState, setLockState] = useState<LockState>('locked');
  const [showHint, setShowHint] = useState(false);

  // Show hint when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showHint) {
            setTimeout(() => {
              setShowHint(true);
            }, 800);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [showHint]);

  // Unlock sequence - only triggered by user tap
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

        {/* Scene Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="mx-auto w-full max-w-4xl">
            
            {/* Clickable Door Scene */}
            <div className="relative">
              <motion.div
                onClick={triggerUnlock}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-2xl cursor-pointer overflow-hidden"
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

                {/* Door Handle */}
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

                      {/* Pulsing glow */}
                      {lockState === 'locked' && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-blue-400"
                          animate={{ opacity: [0, 0.3, 0], scale: [0.95, 1.1, 0.95] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          style={{ filter: 'blur(8px)' }}
                        />
                      )}
                    </div>

                    {/* Handle lever */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 md:w-24 md:h-7"
                      style={{ originX: 0.2, originY: 0.5 }}
                      animate={{ rotate: lockState === 'unlocked' ? 35 : 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: lockState === 'unlocking' ? 0.3 : 0 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 shadow-lg">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-transparent to-black/20" />
                        <div className="absolute inset-y-2 right-4 left-8 flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-px h-full bg-gray-900/40" />
                          ))}
                        </div>
                      </div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-md" />
                    </motion.div>

                    {/* Center hub */}
                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg z-10">
                      <div className="absolute inset-2 rounded-full bg-gray-900">
                        <motion.div 
                          className="absolute inset-0 m-auto w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: lockState === 'unlocking' ? '#3b82f6' 
                              : lockState === 'unlocked' ? '#10b981' : '#6b7280'
                          }}
                          animate={{ opacity: lockState === 'locked' ? [0.5, 1, 0.5] : 1 }}
                          transition={{ duration: 2, repeat: lockState === 'locked' ? Infinity : 0, ease: "easeInOut" }}
                        />
                      </div>
                    </div>

                    {/* Glow effects */}
                    {lockState !== 'locked' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.4, 1.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl ${lockState === 'unlocking' ? 'bg-blue-400' : 'bg-green-400'}`}
                        style={{ filter: 'blur(12px)' }}
                      />
                    )}

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

                {/* iPhone */}
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
                    <div className="relative w-full h-full bg-black rounded-[28px] sm:rounded-[38px] md:rounded-[45px] p-[2px] sm:p-[3px] md:p-[4px] shadow-[0_0_0_2px_#1a1a1a,0_0_60px_rgba(0,0,0,0.4)]">
                      <div className="relative w-full h-full bg-black rounded-[22px] sm:rounded-[30px] md:rounded-[37px] overflow-hidden">
                        
                        {/* Wallpaper */}
                        <div className="absolute inset-0">
                          <Image
                            src="/iphone-homekey-screen.png"
                            alt="iPhone Lock Screen"
                            fill
                            className="object-cover"
                            style={{ top: '-2%', imageRendering: 'crisp-edges', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                            sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, 240px"
                            priority
                          />
                        </div>

                        {/* Screen glare */}
                        <div
                          className="absolute inset-0 pointer-events-none rounded-[22px] sm:rounded-[30px] md:rounded-[37px]"
                          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 25%, transparent 50%, transparent 75%, rgba(255,255,255,0.02) 100%)' }}
                        />

                        {/* Dynamic Island - much smaller on mobile */}
                        <div className="absolute top-1 sm:top-1.5 md:top-2 left-1/2 -translate-x-1/2 z-40">
                          <motion.div
                            animate={{
                              width: lockState === 'locked' 
                                ? '35px'
                                : '75px',
                              height: (lockState === 'unlocking' || lockState === 'unlocked') ? '22px' : '14px'
                            }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-black rounded-full overflow-hidden flex items-center justify-center"
                          >
                            <AnimatePresence mode="wait">
                              {(lockState === 'unlocking' || lockState === 'unlocked') && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center gap-1 px-2 h-full"
                                >
                                  {lockState === 'unlocking' && (
                                    <svg className="w-2 h-2 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                      <motion.path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.5 }}
                                      />
                                    </svg>
                                  )}

                                  {lockState === 'unlocked' && (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}>
                                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                        <motion.path 
                                          strokeLinecap="round" 
                                          strokeLinejoin="round" 
                                          d="M5 13l4 4L19 7"
                                          initial={{ pathLength: 0 }}
                                          animate={{ pathLength: 1 }}
                                          transition={{ duration: 0.4 }}
                                        />
                                      </svg>
                                    </motion.div>
                                  )}

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
                      </div>
                    </div>

                    {/* Shadow */}
                    <motion.div
                      className="absolute -left-2 sm:-left-3 md:-left-5 top-0 bottom-0 w-4 sm:w-6 md:w-10"
                      animate={{ opacity: lockState === 'locked' ? 0.1 : 0.2, x: lockState === 'locked' ? 0 : -8 }}
                      style={{ background: 'radial-gradient(ellipse at right, rgba(0,0,0,0.2) 0%, transparent 70%)', filter: 'blur(8px)' }}
                    />
                  </div>
                </motion.div>

              </motion.div>

              {/* Tap to unlock hint - centered at top, subtle */}
              <AnimatePresence>
                {showHint && lockState === 'locked' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                  >
                    <div className="bg-black/50 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-normal shadow-lg">
                      Tap to unlock
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Apple Wallet badge */}
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
          <span>Apple HomeKey is stored securely in Apple Wallet</span>
        </motion.div>
      </div>
    </section>
  );
}
