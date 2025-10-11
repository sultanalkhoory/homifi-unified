/**
 * Mobile HeroSection - Alive Version (Option 1)
 * 
 * File: app/layouts/Mobile/sections/HeroSection.tsx
 * 
 * FEATURES:
 * - Full-screen vertical room photo
 * - Floating iPhone with gentle animation
 * - 3 breathing indicator dots on the room
 * - Tap dot → shows popup + iPhone reacts
 * - Feels alive and responsive
 */

'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Indicator = {
  id: string;
  x: string;
  y: string;
  label: string;
  detail: string;
  color: string;
};

const indicators: Indicator[] = [
  {
    id: 'lights',
    x: '25%',
    y: '35%',
    label: 'Smart Lighting',
    detail: 'Adapts to your day',
    color: 'rgba(255, 214, 90, 0.85)',
  },
  {
    id: 'climate',
    x: '75%',
    y: '30%',
    label: 'Climate',
    detail: 'Perfect temperature',
    color: 'rgba(110, 190, 255, 0.85)',
  },
  {
    id: 'security',
    x: '15%',
    y: '65%',
    label: 'Security',
    detail: 'Always protected',
    color: 'rgba(120, 255, 170, 0.85)',
  },
];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndicator, setActiveIndicator] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showStickyNav = scrollY > 100;

  return (
    <>
      {/* Sticky Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: showStickyNav ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        style={{ pointerEvents: showStickyNav ? 'auto' : 'none' }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <img 
            src="/homifi-icon.png" 
            alt="HomiFi" 
            className="h-5 w-5"
            style={{ filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1))' }}
          />
          <button className="p-1">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        
        {/* Background Room Photo - vertical crop */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/Curtains-Open-Lights-On-Homepod.png"
            alt="Smart home"
            className="w-full h-full object-cover opacity-40"
            style={{ objectPosition: '45% center' }}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
        </div>

        {/* Breathing indicator dots */}
        {indicators.map((indicator) => (
          <div
            key={indicator.id}
            className="absolute z-20"
            style={{ 
              left: indicator.x, 
              top: indicator.y, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            {/* Touch target */}
            <button
              className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full z-20"
              onClick={() => setActiveIndicator(activeIndicator === indicator.id ? null : indicator.id)}
              aria-label={indicator.label}
            />
            
            {/* Dot with breathing animation */}
            <motion.div 
              className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: indicator.color }}
              animate={{ 
                scale: activeIndicator === indicator.id ? 1.5 : 1,
                opacity: activeIndicator === indicator.id ? 1 : 0.85,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Continuous pulse */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: indicator.color }}
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Popup */}
            <AnimatePresence>
              {activeIndicator === indicator.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-30 whitespace-nowrap"
                >
                  <div className="rounded-xl px-3 py-2 backdrop-blur-xl bg-white/90 shadow-lg border border-white/50">
                    <p className="text-xs font-semibold text-gray-900">{indicator.label}</p>
                    <p className="text-[10px] text-gray-600">{indicator.detail}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-10 max-w-md mx-auto px-6 text-center">
          
          {/* Logo */}
          <motion.img
            src="/homifi-logo.png"
            alt="HomiFi"
            className="h-10 w-auto mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-semibold text-gray-900 mb-4 leading-tight"
          >
            Your home, perfectly automated.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-600 mb-8"
          >
            Control everything with simple taps. No coding required.
          </motion.p>

          {/* Floating iPhone - gentle animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.3 },
              scale: { duration: 0.6, delay: 0.3 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="mb-8 relative"
          >
            {/* iPhone Frame */}
            <div className="relative w-[200px] h-[400px] mx-auto bg-black rounded-[40px] p-2 shadow-2xl">
              <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden">
                <img
                  src="/Curtains-Open-Lights-On.png"
                  alt="HomiFi App"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '45% center' }}
                />
                
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-black rounded-full z-30" />
                
                {/* React to indicator tap - subtle glow */}
                <AnimatePresence>
                  {activeIndicator && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-blue-500/5"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#lights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-900 active:scale-95 transition-all shadow-lg"
          >
            See How It Works
          </motion.a>

          {/* Platform badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <img src="/badges/works-with-apple-home.webp" alt="Apple Home" className="h-5 opacity-70" />
            <span className="text-gray-300 text-xs">or</span>
            <img src="/badges/works-with-google-home.webp" alt="Google Home" className="h-5 opacity-70" />
            <span className="text-gray-300 text-xs">or</span>
            <img src="/badges/works-with-alexa.webp" alt="Alexa" className="h-5 opacity-70" />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-12 text-gray-400 text-xs flex flex-col items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span>Explore Features</span>
            <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>
    </>
  );
}
