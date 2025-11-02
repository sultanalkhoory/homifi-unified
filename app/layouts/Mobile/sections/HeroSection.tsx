/**
 * Mobile HeroSection - Clean & Alive
 * 
 * File: app/layouts/Mobile/sections/HeroSection.tsx
 * 
 * FEATURES:
 * - Clean gradient background
 * - Larger floating iPhone (240x480) with parallax
 * - 4 breathing badges with stronger glow
 * - Tap badge → scales up + shows glass popup
 * - No CTA button (cleaner layout)
 */

'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

type Badge = {
  id: string;
  icon: React.ReactNode;
  label: string;
  detail: string;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
};

const badges: Badge[] = [
  {
    id: 'voice',
    label: 'Voice Control',
    detail: 'Just ask Siri, Alexa, or Google',
    color: 'from-blue-400 to-blue-500',
    position: { top: '15%', left: '-11%' }, // Adjusted for 230px phone
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    id: 'homekey',
    label: 'HomeKey',
    detail: 'Unlock with your iPhone or Watch',
    color: 'from-green-400 to-emerald-500',
    position: { top: '15%', right: '-11%' }, // Adjusted for 230px phone
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    id: 'security',
    label: 'Security',
    detail: "See who's at your door instantly",
    color: 'from-red-400 to-pink-500',
    position: { bottom: '15%', left: '-11%' }, // Adjusted for 230px phone
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    id: 'alerts',
    label: 'Instant Alerts',
    detail: 'Real-time notifications everywhere',
    color: 'from-orange-400 to-amber-500',
    position: { bottom: '15%', right: '-11%' }, // Adjusted for 230px phone
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const iPhoneRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const update = () =>
      setIsMobile(mq.matches || navigator.maxTouchPoints > 0 || window.innerWidth < 768);
    update();
    try {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    } catch {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  // Parallax effect (same as IPhoneFrame)
  const { scrollYProgress } = useScroll({
    target: iPhoneRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3 leading-tight text-center max-w-sm"
      >
        Your home, perfectly automated.
      </motion.h1>

      {/* Subheadline - Service Clarity */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg sm:text-xl font-medium text-gray-900 mb-12 text-center max-w-xs leading-snug"
      >
        Designed and installed in Dubai.
      </motion.p>

      {/* iPhone + Badges Container */}
      <div className="relative mb-8" ref={iPhoneRef}>
        {/* Floating iPhone with parallax */}
        <motion.div
          style={isMobile ? { y } : {}}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.2 },
            scale: { duration: 0.6, delay: 0.2 },
          }}
          className="relative z-10"
        >
          {/* iPhone Frame - 15% larger (230x460) */}
          <div 
            className="relative w-[230px] h-[460px] bg-black rounded-[46px] p-2.5" 
            style={{ 
              transform: 'translate3d(0,0,0)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.12), 0 16px 48px rgba(0, 0, 0, 0.16)'
            }}
          >
            <div className="relative w-full h-full bg-white rounded-[37px] overflow-hidden" style={{ transform: 'translate3d(0,0,0)' }}>
              <Image
                src="/Curtains-Open-Lights-On.png"
                alt="HomiFi App"
                fill
                className="object-cover"
                style={{ objectPosition: '45% center', transform: 'translate3d(0,0,0)' }}
                sizes="230px"
                priority
              />

              {/* Dynamic Island - scaled proportionally */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[80px] h-[21px] bg-black rounded-full z-30" />
            </div>
          </div>
        </motion.div>

        {/* Floating Badges */}
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            className="absolute z-20"
            style={badge.position}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3 + index * 0.1 
            }}
          >
            <button
              onClick={() => setActiveBadge(activeBadge === badge.id ? null : badge.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveBadge(activeBadge === badge.id ? null : badge.id);
                }
                if (e.key === 'Escape' && activeBadge === badge.id) {
                  setActiveBadge(null);
                }
              }}
              className="relative"
              aria-label={badge.label}
              aria-expanded={activeBadge === badge.id}
              aria-describedby={activeBadge === badge.id ? `badge-${badge.id}-detail` : undefined}
            >
              {/* Badge Circle - stronger glow */}
              <motion.div
                animate={{
                  scale: activeBadge === badge.id ? 1.15 : [1, 1.08, 1],
                }}
                transition={{
                  scale: activeBadge === badge.id 
                    ? { duration: 0.2 }
                    : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${badge.color} shadow-xl flex items-center justify-center text-white relative overflow-hidden cursor-pointer`}
              >
                {badge.icon}
                
                {/* Stronger breathing glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)` 
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Outer glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    boxShadow: `0 0 20px 4px ${badge.color.includes('blue') ? 'rgba(59, 130, 246, 0.6)' : 
                                                badge.color.includes('green') ? 'rgba(16, 185, 129, 0.6)' : 
                                                badge.color.includes('red') ? 'rgba(239, 68, 68, 0.6)' : 
                                                'rgba(251, 146, 60, 0.6)'}`
                  }}
                />
              </motion.div>

              {/* Detail Text - enhanced Apple liquid glass */}
              <AnimatePresence>
                {activeBadge === badge.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, filter: 'blur(2px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.15 } }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 350,
                      damping: 25,
                      mass: 0.5,
                    }}
                    className="absolute z-30 whitespace-nowrap"
                    style={{
                      ...(badge.position.top ? { top: '100%', marginTop: '8px' } : { bottom: '100%', marginBottom: '8px' }),
                      ...(badge.position.left ? { left: '0' } : { right: '0' }),
                    }}
                  >
                    <div
                      id={`badge-${badge.id}-detail`}
                      role="tooltip"
                      className="rounded-xl px-3.5 py-2.5 backdrop-blur-2xl shadow-xl text-white"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.20) 100%)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
                        border: '1px solid rgba(255,255,255,0.4)',
                      }}
                    >
                      <p className="text-[13px] font-semibold tracking-tight text-white drop-shadow-sm mb-0.5">{badge.label}</p>
                      <p className="text-[11px] font-medium text-white/95 tracking-tight drop-shadow-sm">{badge.detail}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
