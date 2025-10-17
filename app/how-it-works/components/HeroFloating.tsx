'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

// =============== ICONS ===============
const LightbulbIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ThermometerIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12a3 3 0 100 6 3 3 0 000-6zm0 0V6m0 0a3 3 0 013 3M9 6a3 3 0 00-3 3m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CameraIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CurtainsIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18M3 21h18M5 3v18M10 3v18M14 3v18M19 3v18M7 7h2M7 12h2M7 17h2M15 7h2M15 12h2M15 17h2" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

// =============== MAIN COMPONENT ===============
export default function HeroFloating() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const devices = [
    { icon: LightbulbIcon, label: 'Lights', x: -180, y: -120, mobileX: -100, mobileY: -80, delay: 0 },
    { icon: ThermometerIcon, label: 'Climate', x: 180, y: -100, mobileX: 100, mobileY: -70, delay: 0.2 },
    { icon: CameraIcon, label: 'Security', x: -200, y: 80, mobileX: -110, mobileY: 50, delay: 0.4 },
    { icon: LockIcon, label: 'Locks', x: 160, y: 120, mobileX: 90, mobileY: 80, delay: 0.6 },
    { icon: CurtainsIcon, label: 'Curtains', x: 0, y: -180, mobileX: 0, mobileY: -120, delay: 0.8 },
    { icon: WifiIcon, label: 'Network', x: 0, y: 160, mobileX: 0, mobileY: 110, delay: 1 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 px-4 pt-16 md:pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div 
            className="text-center lg:text-left space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              We install.<br />You enjoy.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-lg mx-auto lg:mx-0">
              Professional setup, effortless living.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">

            {/* ===== MOBILE SVG ===== */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none md:hidden" viewBox="0 0 400 500">
              <defs>
                <linearGradient id="lineGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>

                <linearGradient
                  id="lineGradientMobileVertical"
                  x1="200" y1="110" x2="200" y2="380"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Animated lines with pathLength */}
              <motion.line 
                x1="200" y1="250" x2="100" y2="170" 
                stroke="url(#lineGradientMobile)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="200" y1="250" x2="300" y2="180" 
                stroke="url(#lineGradientMobile)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="200" y1="250" x2="90" y2="300" 
                stroke="url(#lineGradientMobile)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="200" y1="250" x2="290" y2="330" 
                stroke="url(#lineGradientMobile)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="200" y1="250" x2="200" y2="110" 
                stroke="url(#lineGradientMobileVertical)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="200" y1="250" x2="200" y2="380" 
                stroke="url(#lineGradientMobileVertical)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            {/* ===== DESKTOP SVG ===== */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 700 700">
              <defs>
                <linearGradient id="lineGradientDesktop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>

                <linearGradient
                  id="lineGradientDesktopVertical"
                  x1="350" y1="150" x2="350" y2="530"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Animated lines with pathLength */}
              <motion.line 
                x1="350" y1="350" x2="170" y2="230" 
                stroke="url(#lineGradientDesktop)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="350" y1="350" x2="530" y2="250" 
                stroke="url(#lineGradientDesktop)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="350" y1="350" x2="150" y2="430" 
                stroke="url(#lineGradientDesktop)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="350" y1="350" x2="510" y2="470" 
                stroke="url(#lineGradientDesktop)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="350" y1="350" x2="350" y2="150" 
                stroke="url(#lineGradientDesktopVertical)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.line 
                x1="350" y1="350" x2="350" y2="530" 
                stroke="url(#lineGradientDesktopVertical)" 
                strokeWidth="2" 
                strokeDasharray="8 4" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            {/* ===== CENTER HOUSE ===== */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl animate-pulse" />
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl text-white">
                    <HomeIcon />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ===== FLOATING DEVICES ===== */}
            {devices.map((device, i) => {
              const Icon = device.icon;
              return (
                <div key={i} className="absolute" style={{
                  left: '50%', top: '50%', zIndex: 30,
                  transform: `translate(calc(-50% + ${device.mobileX}px), calc(-50% + ${device.mobileY}px))`
                }}>
                  <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: device.delay }}>
                    <motion.div className="group relative md:hidden" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: device.delay + 1 }}>
                      <div className="absolute inset-0 bg-blue-400/30 rounded-xl blur-lg group-hover:bg-blue-400/50 transition-all duration-500" />
                      <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl hover:scale-110 transition-all duration-500 text-slate-700">
                        <Icon />
                        <p className="text-xs font-medium text-slate-600 mt-1">{device.label}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}

            {devices.map((device, i) => {
              const Icon = device.icon;
              return (
                <div key={`d-${i}`} className="absolute hidden md:block" style={{
                  left: '50%', top: '50%', zIndex: 30,
                  transform: `translate(calc(-50% + ${device.x}px), calc(-50% + ${device.y}px))`
                }}>
                  <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: device.delay }}>
                    <motion.div className="group relative" animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: device.delay + 1 }}>
                      <div className="absolute inset-0 bg-blue-400/30 rounded-2xl blur-xl group-hover:bg-blue-400/50 transition-all duration-500" />
                      <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl hover:scale-110 transition-all duration-500 text-slate-700">
                        <Icon />
                        <p className="text-xs font-medium text-slate-600 mt-2">{device.label}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== SCROLL INDICATOR ===== */}
        <motion.div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs md:text-sm">Scroll to explore</span>
            <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5 md:p-2">
              <div className="w-1 h-2 md:h-3 bg-slate-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
