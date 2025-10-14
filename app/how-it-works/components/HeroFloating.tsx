'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

// SVG icon components - no external dependencies needed
const LightbulbIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ThermometerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12a3 3 0 100 6 3 3 0 000-6zm0 0V6m0 0a3 3 0 013 3M9 6a3 3 0 00-3 3m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CameraIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const SpeakerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414a2 2 0 002.828 0L12 11.828l3.586 3.586a2 2 0 002.828 0l3.172-3.172a2 2 0 000-2.828L18 6.828a2 2 0 00-2.828 0L12 10.414 8.414 6.828a2 2 0 00-2.828 0L2.414 9.656a2 2 0 000 2.828l3.172 3.172z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

export default function HeroFloating() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Platform logos object with proper typing
  const platformLogos: Record<string, React.ReactElement> = {
    apple: (
      <svg className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </svg>
    ),
    google: (
      <svg className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      </svg>
    ),
    alexa: (
      <svg className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.177 17.514c-.253.365-.708.479-1.074.253-2.906-1.771-6.552-2.176-10.853-1.191-.416.099-.831-.166-.929-.582-.099-.416.166-.831.582-.929 4.715-1.079 8.746-.615 11.944 1.377.365.227.479.708.253 1.072h.077z"/>
      </svg>
    )
  };

  // Device cards with positions and platform logos
  const devices = [
    { icon: LightbulbIcon, label: 'Lights', x: -180, y: -120, delay: 0, platform: 'apple' },
    { icon: ThermometerIcon, label: 'Climate', x: 180, y: -100, delay: 0.5, platform: 'google' },
    { icon: CameraIcon, label: 'Security', x: -200, y: 80, delay: 1, platform: 'alexa' },
    { icon: LockIcon, label: 'Locks', x: 160, y: 120, delay: 1.5, platform: 'apple' },
    { icon: SpeakerIcon, label: 'Audio', x: 0, y: -180, delay: 2, platform: 'google' },
    { icon: WifiIcon, label: 'Network', x: 0, y: 160, delay: 2.5, platform: 'alexa' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 px-4 pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              We install.<br />You enjoy.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-lg mx-auto lg:mx-0">
              Professional setup, effortless living.
            </p>
            
            {/* Platform badges - Apple priority */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="text-sm font-medium text-slate-700">Apple Home</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                </svg>
                <span className="text-sm font-medium text-slate-700">Google</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.177 17.514c-.253.365-.708.479-1.074.253-2.906-1.771-6.552-2.176-10.853-1.191-.416.099-.831-.166-.929-.582-.099-.416.166-.831.582-.929 4.715-1.079 8.746-.615 11.944 1.377.365.227.479.708.253 1.072h.077z"/>
                </svg>
                <span className="text-sm font-medium text-slate-700">Alexa</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Floating Ecosystem */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Central house */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.1}px))` }}
            >
              <div className="relative">
                {/* Pulsing glow */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl animate-pulse" />
                
                {/* House card */}
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-3xl shadow-2xl text-white">
                  <HomeIcon />
                </div>
              </div>
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
              {devices.map((device, i) => (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${device.x}px)`}
                  y2={`calc(50% + ${device.y}px)`}
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.3"
                  className="animate-pulse"
                  style={{ animationDelay: `${device.delay}s` }}
                />
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating device cards */}
            {devices.map((device, i) => {
              const Icon = device.icon;
              return (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: '50%',
                    top: '50%',
                    '--device-x': `${device.x}px`,
                    '--device-y': `${device.y}px`,
                    animationDelay: `${device.delay}s`,
                    animationDuration: '6s'
                  } as React.CSSProperties}
                >
                  <div className="group relative">
                    {/* Soft glow */}
                    <div className="absolute inset-0 bg-blue-400/30 rounded-2xl blur-xl group-hover:bg-blue-400/50 transition-all duration-500" />
                    
                    {/* Device card */}
                    <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl hover:scale-110 transition-all duration-500 text-slate-700">
                      <Icon />
                      <p className="text-xs font-medium text-slate-600 mt-2">{device.label}</p>
                      
                      {/* Platform indicator */}
                      <div className="absolute -top-2 -right-2 bg-white rounded-full p-1.5 shadow-md border border-slate-200">
                        {platformLogos[device.platform]}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-slate-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(calc(-50% + var(--device-x)), calc(-50% + var(--device-y))) translateY(0px); 
          }
          50% { 
            transform: translate(calc(-50% + var(--device-x)), calc(-50% + var(--device-y))) translateY(-20px); 
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
