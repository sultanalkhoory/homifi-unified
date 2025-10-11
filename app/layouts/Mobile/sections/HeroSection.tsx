/**
 * Mobile HeroSection - Clean & Alive (Option A)
 * 
 * File: app/layouts/Mobile/sections/HeroSection.tsx
 * 
 * FEATURES:
 * - Clean gradient background
 * - Floating iPhone with gentle animation
 * - 4 breathing badges around iPhone
 * - Tap badge → scales up + shows detail
 * - No logo (in header instead)
 * - No platform badges
 */

'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    position: { top: '15%', left: '-10%' },
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
    position: { top: '15%', right: '-10%' },
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
    position: { bottom: '15%', left: '-10%' },
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
    position: { bottom: '15%', right: '-10%' },
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-gray-50 to-white">
      
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3 leading-tight text-center max-w-sm"
      >
        Your home, perfectly automated.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-base text-gray-600 mb-12 text-center max-w-xs"
      >
        Control everything with simple taps.
      </motion.p>

      {/* iPhone + Badges Container */}
      <div className="relative mb-12">
        {/* Floating iPhone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.2 },
            scale: { duration: 0.6, delay: 0.2 },
            y: { 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="relative z-10"
        >
          {/* iPhone Frame */}
          <div className="relative w-[200px] h-[400px] bg-black rounded-[40px] p-2 shadow-2xl">
            <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden">
              <img
                src="/Curtains-Open-Lights-On.png"
                alt="HomiFi App"
                className="w-full h-full object-cover"
                style={{ objectPosition: '45% center' }}
              />
              
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-black rounded-full z-30" />
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
              className="relative"
            >
              {/* Badge Circle */}
              <motion.div
                animate={{
                  scale: activeBadge === badge.id ? 1.1 : [1, 1.05, 1],
                }}
                transition={{
                  scale: activeBadge === badge.id 
                    ? { duration: 0.2 }
                    : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${badge.color} shadow-lg flex items-center justify-center text-white relative overflow-hidden`}
              >
                {badge.icon}
                
                {/* Breathing glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)` 
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Detail Text - shows on tap */}
              <AnimatePresence>
                {activeBadge === badge.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap"
                  >
                    <div className="bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100">
                      <p className="text-xs font-semibold text-gray-900">{badge.label}</p>
                      <p className="text-[10px] text-gray-600 mt-0.5">{badge.detail}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.a
        href="#lights"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-900 active:scale-95 transition-all shadow-lg mb-8"
      >
        See How It Works
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-gray-400 text-xs flex flex-col items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span>Explore Features</span>
        <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
