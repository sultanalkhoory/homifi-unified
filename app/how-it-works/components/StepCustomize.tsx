'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * StepCustomize - REALISTIC iPhone 15 Pro Mockup
 * Proper proportions, realistic frame, accurate Dynamic Island
 */

export default function StepCustomize({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  
  const [step, setStep] = useState(0);
  const [sceneActive, setSceneActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    const timings = [0, 1500, 2500, 3500, 4500, 6000];
    const timeouts = timings.map((delay, index) => 
      setTimeout(() => setStep(index), delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      setSceneActive(false);
    }
  }, [isActive]);

  const devices = [
    { 
      id: 1, 
      name: 'Living Room Lights', 
      action: 'Dim to 20%',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      id: 2, 
      name: 'Apple TV', 
      action: 'Turn On',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 3, 
      name: 'Curtains', 
      action: 'Close',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M3 21h18M5 3v18M10 3v18M14 3v18M19 3v18" />
        </svg>
      )
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-b from-slate-50 via-white to-slate-100 p-6 md:p-12 overflow-hidden relative`}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative h-full flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <h3 className={`${fullScreen ? 'text-3xl md:text-4xl' : 'text-xl'} font-semibold text-slate-900 mb-3 tracking-tight`}>
            One tap. Perfect evening.
          </h3>
          <p className={`${fullScreen ? 'text-lg' : 'text-sm'} text-slate-600 max-w-2xl mx-auto`}>
            Create scenes with simple taps. No coding required.
          </p>
        </motion.div>

        {/* Main Content - iPhone */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            
            {/* REALISTIC iPhone 15 Pro */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
              className="relative"
            >
              {/* Shadow layers for depth */}
              <div className="absolute -inset-4 bg-slate-900/5 rounded-[4rem] blur-3xl" />
              <div className="absolute inset-0 bg-slate-900/10 rounded-[3.2rem] blur-2xl translate-y-4" />
              
              {/* iPhone Body - Titanium Frame */}
              <div className="relative w-[340px] h-[694px] rounded-[3.2rem] overflow-hidden" style={{
                background: 'linear-gradient(135deg, #2c2c2e 0%, #1c1c1e 50%, #2c2c2e 100%)',
                boxShadow: `
                  inset 0 1px 1px rgba(255,255,255,0.1),
                  inset 0 -1px 1px rgba(0,0,0,0.5),
                  0 20px 60px rgba(0,0,0,0.3),
                  0 10px 30px rgba(0,0,0,0.2)
                `
              }}>
                
                {/* Inner frame with screen */}
                <div className="absolute inset-[2px] bg-black rounded-[3rem] overflow-hidden">
                  
                  {/* Screen */}
                  <div className="absolute inset-[8px] bg-white rounded-[2.7rem] overflow-hidden" style={{
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
                  }}>
                    
                    {/* Dynamic Island - REALISTIC */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
                      <div className="relative">
                        {/* Island glow */}
                        <div className="absolute inset-0 bg-black/30 blur-sm rounded-full scale-110" />
                        {/* Island body */}
                        <div 
                          className="relative bg-black rounded-full"
                          style={{
                            width: '126px',
                            height: '37px',
                            marginTop: '10px',
                            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1)'
                          }}
                        />
                      </div>
                    </div>

                    {/* iOS Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-[54px] flex items-end justify-between px-8 pb-2 text-[15px] font-semibold z-40">
                      <span className="text-black">9:41</span>
                      <div className="flex items-center gap-1.5">
                        {/* Cellular signal */}
                        <svg className="w-[18px] h-[12px] text-black" viewBox="0 0 18 12" fill="currentColor">
                          <rect width="2" height="5" x="0" y="7" rx="0.4"/>
                          <rect width="2" height="7" x="3.5" y="5" rx="0.4"/>
                          <rect width="2" height="9" x="7" y="3" rx="0.4"/>
                          <rect width="2" height="11" x="10.5" y="1" rx="0.4"/>
                          <rect width="2" height="12" x="14" y="0" rx="0.4"/>
                        </svg>
                        {/* WiFi */}
                        <svg className="w-[17px] h-[12px] text-black" viewBox="0 0 17 12" fill="currentColor">
                          <path d="M8.5 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                          <path fillRule="evenodd" d="M8.5 6.5c1.933 0 3.683.784 4.95 2.05a1 1 0 11-1.414 1.414 5.5 5.5 0 00-7.778 0A1 1 0 112.844 8.55 7.5 7.5 0 018.5 6.5z" clipRule="evenodd"/>
                          <path fillRule="evenodd" d="M8.5 1.5c3.59 0 6.837 1.458 9.192 3.813a1 1 0 01-1.414 1.414 9.5 9.5 0 00-13.45 0 1 1 0 01-1.414-1.414A11.5 11.5 0 018.5 1.5z" clipRule="evenodd" opacity="0.5"/>
                        </svg>
                        {/* Battery */}
                        <div className="flex items-center gap-0.5">
                          <svg className="w-[27px] h-[13px] text-black" viewBox="0 0 27 13" fill="none">
                            <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="currentColor" strokeOpacity="0.35"/>
                            <rect x="2" y="2" width="19" height="9" rx="2" fill="currentColor"/>
                            <path d="M24 4.5C24 4.22386 24.2239 4 24.5 4H25C25.8284 4 26.5 4.67157 26.5 5.5V7.5C26.5 8.32843 25.8284 9 25 9H24.5C24.2239 9 24 8.77614 24 8.5V4.5Z" fill="currentColor" fillOpacity="0.4"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Home App Content */}
                    <div className="pt-[54px] pb-8 px-6 h-full overflow-y-auto">
                      
                      {/* App Title */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8 mt-4"
                      >
                        <h1 className="text-[34px] font-bold text-black tracking-tight leading-none mb-1">Home</h1>
                        <p className="text-[17px] text-gray-500">My Home</p>
                      </motion.div>

                      {/* Scene Card */}
                      <AnimatePresence mode="wait">
                        {step >= 1 && (
                          <motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                          >
                            <div className={`relative rounded-[22px] p-5 transition-all duration-700 ${
                              sceneActive 
                                ? 'bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500' 
                                : 'bg-gray-100'
                            }`} style={{
                              boxShadow: sceneActive 
                                ? '0 10px 40px rgba(251, 146, 60, 0.35), 0 0 0 1px rgba(255,255,255,0.1) inset'
                                : '0 1px 3px rgba(0,0,0,0.08)'
                            }}>
                              
                              {/* Glass overlay when active */}
                              {sceneActive && (
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[22px]" />
                              )}
                              
                              <div className="relative">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-5">
                                  <motion.div 
                                    animate={sceneActive ? { scale: [1, 1.05, 1] } : {}}
                                    transition={{ duration: 0.5 }}
                                    className={`w-[60px] h-[60px] rounded-[16px] flex items-center justify-center ${
                                      sceneActive ? 'bg-white/20' : 'bg-white'
                                    }`}
                                    style={{
                                      boxShadow: sceneActive 
                                        ? 'inset 0 1px 2px rgba(255,255,255,0.2)'
                                        : '0 2px 8px rgba(0,0,0,0.06)'
                                    }}
                                  >
                                    <svg className={`w-8 h-8 ${sceneActive ? 'text-white' : 'text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m6.375 0c.621 0 1.125.504 1.125 1.125m-1.125-1.125c-.621 0-1.125.504-1.125 1.125m0 0c0 .621.504 1.125 1.125 1.125M13.5 14.25h-3" />
                                    </svg>
                                  </motion.div>
                                  <div className="flex-1">
                                    <h3 className={`text-[20px] font-semibold tracking-tight ${sceneActive ? 'text-white' : 'text-black'}`}>
                                      Movie Night
                                    </h3>
                                    <p className={`text-[15px] mt-0.5 ${sceneActive ? 'text-white/75' : 'text-gray-500'}`}>
                                      {step >= 5 ? (sceneActive ? 'Active' : 'Ready') : 'Building...'}
                                    </p>
                                  </div>
                                </div>

                                {/* Devices */}
                                <div className="space-y-2.5 mb-4">
                                  {devices.map((device, index) => (
                                    <AnimatePresence key={device.id}>
                                      {step >= index + 2 && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0, y: -10 }}
                                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                                          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                                          className={`flex items-center gap-3 px-4 py-3.5 rounded-[14px] ${
                                            sceneActive ? 'bg-white/15' : 'bg-white'
                                          }`}
                                          style={{
                                            boxShadow: sceneActive ? 'none' : '0 1px 3px rgba(0,0,0,0.06)'
                                          }}
                                        >
                                          <div className={sceneActive ? 'text-white' : 'text-gray-700'}>
                                            {device.icon}
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <p className={`text-[15px] font-medium ${sceneActive ? 'text-white' : 'text-black'}`}>
                                              {device.name}
                                            </p>
                                            <p className={`text-[13px] mt-0.5 ${sceneActive ? 'text-white/70' : 'text-gray-500'}`}>
                                              {device.action}
                                            </p>
                                          </div>
                                          <motion.div
                                            initial={{ scale: 0, rotate: -45 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                              sceneActive ? 'bg-white/25' : 'bg-gray-200'
                                            }`}
                                          >
                                            <svg className={`w-3.5 h-3.5 ${sceneActive ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                          </motion.div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  ))}
                                </div>

                                {/* Activate Button */}
                                {step >= 5 && (
                                  <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onClick={() => setSceneActive(!sceneActive)}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-[14px] text-[17px] font-semibold transition-all duration-300 ${
                                      sceneActive 
                                        ? 'bg-white/20 text-white' 
                                        : 'bg-black text-white'
                                    }`}
                                    style={{
                                      boxShadow: sceneActive 
                                        ? 'inset 0 1px 2px rgba(255,255,255,0.1)'
                                        : '0 4px 12px rgba(0,0,0,0.15)'
                                    }}
                                  >
                                    {sceneActive ? 'Deactivate' : 'Activate Scene'}
                                  </motion.button>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Loading state */}
                      {step === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-center py-20"
                        >
                          <div className="w-10 h-10 border-[3px] border-gray-200 border-t-gray-400 rounded-full animate-spin" />
                        </motion.div>
                      )}

                    </div>

                    {/* Home Indicator Bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-[5px] bg-black rounded-full opacity-60" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating hints */}
            <AnimatePresence>
              {step >= 1 && step < 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -right-56 top-1/4 hidden xl:block"
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 w-56">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-[15px] font-semibold text-black mb-1">Building Scene</p>
                    <p className="text-[13px] text-gray-600">Devices add automatically</p>
                  </div>
                </motion.div>
              )}

              {step >= 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute -right-56 top-1/4 hidden xl:block"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-2xl p-5 w-56">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-[15px] font-semibold text-white mb-1">Scene Ready!</p>
                    <p className="text-[13px] text-white/90">Tap to activate</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Platform Badges */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <p className="text-center text-sm text-gray-500 mb-5 font-medium">Works seamlessly with</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { name: 'Apple Home', color: 'from-gray-900 to-black', delay: 0.7 },
              { name: 'Google Home', color: 'from-blue-500 to-blue-600', delay: 0.8 },
              { name: 'Alexa', color: 'from-cyan-400 to-blue-500', delay: 0.9 }
            ].map(platform => (
              <motion.div
                key={platform.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: platform.delay, type: 'spring', stiffness: 200 }}
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${platform.color} text-white text-[15px] font-semibold shadow-lg`}
              >
                {platform.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
