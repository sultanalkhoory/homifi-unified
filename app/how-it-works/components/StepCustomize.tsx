'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * StepCustomize - Scene Builder Interface
 * Refactored with smooth animations
 */

export default function StepCustomize({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  
  // All state declarations
  const [buildStep, setBuildStep] = useState(0);
  const [sceneName, setSceneName] = useState('');
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [deviceSettings, setDeviceSettings] = useState<{[key: string]: any}>({});
  const [displayName, setDisplayName] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [targetLights, setTargetLights] = useState<number | null>(null);

  // Auto-demo sequence
  useEffect(() => {
    if (!isActive) return;
    
    const actions = [
      [800, () => setBuildStep(1)],
      [2200, () => setSceneName('Movie Night')],
      [3500, () => setBuildStep(2)],
      [4500, () => setSelectedDevices(['lights'])],
      [5200, () => setSelectedDevices(['lights', 'tv'])],
      [5900, () => setSelectedDevices(['lights', 'tv', 'curtains'])],
      [7200, () => setBuildStep(3)],
      [7500, () => setDeviceSettings({ lights: 50, tv: 'on', curtains: 'closed' })],
      [8500, () => setTargetLights(20)],
      [10000, () => setBuildStep(4)]
    ] as const;
    
    const timeouts = actions.map(([delay, action]) => setTimeout(action, delay));
    return () => timeouts.forEach(clearTimeout);
  }, [isActive]);

  // Smooth typing animation
  useEffect(() => {
    if (!sceneName) {
      setDisplayName('');
      setShowCursor(false);
      return;
    }
    
    setShowCursor(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= sceneName.length) {
        setDisplayName(sceneName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 80);
    
    return () => clearInterval(interval);
  }, [sceneName]);

  // Smooth slider animation
  useEffect(() => {
    if (targetLights === null || deviceSettings.lights === targetLights) return;
    
    let current = deviceSettings.lights ?? 50;
    const target = targetLights;
    const diff = target - current;
    const frames = 30;
    const step = diff / frames;
    let frame = 0;
    
    const interval = setInterval(() => {
      frame++;
      if (frame >= frames) {
        setDeviceSettings(prev => ({ ...prev, lights: target }));
        setTargetLights(null);
        clearInterval(interval);
      } else {
        const newValue = Math.round(current + (step * frame));
        setDeviceSettings(prev => ({ ...prev, lights: newValue }));
      }
    }, 16);
    
    return () => clearInterval(interval);
  }, [targetLights, deviceSettings.lights]);

  // Reset state
  useEffect(() => {
    if (!isActive) {
      setBuildStep(0);
      setSceneName('');
      setDisplayName('');
      setShowCursor(false);
      setSelectedDevices([]);
      setDeviceSettings({});
      setTargetLights(null);
    }
  }, [isActive]);

  // Device definitions
  const devices = [
    { 
      id: 'lights', 
      name: 'Living Room Lights', 
      actionType: 'slider' as const,
      actionLabel: 'Brightness',
      color: 'from-amber-400 to-orange-500',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    },
    { 
      id: 'tv', 
      name: 'Apple TV', 
      actionType: 'toggle' as const,
      actionLabel: 'Power',
      color: 'from-blue-400 to-blue-600',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    },
    { 
      id: 'curtains', 
      name: 'Curtains', 
      actionType: 'toggle' as const,
      actionLabel: 'Position',
      color: 'from-slate-400 to-slate-600',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M3 21h18M5 3v18M10 3v18M14 3v18M19 3v18" />
    },
    { 
      id: 'thermostat', 
      name: 'Thermostat', 
      actionType: 'slider' as const,
      actionLabel: 'Temperature',
      color: 'from-red-400 to-orange-500',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    }
  ];

  const steps = [
    { label: 'Name', step: 1 },
    { label: 'Select', step: 2 },
    { label: 'Configure', step: 3 },
    { label: 'Done', step: 4 }
  ];

  // Shared configs
  const cardTransition = { type: 'spring' as const, stiffness: 120, damping: 20 };
  const cardAnimation = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -20 },
    transition: cardTransition
  };

  const cardClass = "bg-white/80 backdrop-blur-xl rounded-3xl md:rounded-[32px] p-6 md:p-10 lg:p-14 shadow-xl border border-white/20";
  const headingClass = "text-2xl md:text-3xl font-semibold text-slate-900 mb-6 md:mb-8 text-center tracking-tight";
  const subtitleClass = "text-slate-500 text-center mb-6 md:mb-10 text-base md:text-lg font-light";

  const DeviceIcon = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <svg className={`w-6 md:w-7 h-6 md:h-7 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      {children}
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-b from-white via-slate-50/50 to-white p-4 md:p-8 lg:p-12 overflow-hidden relative`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]" />
      
      <div className="relative h-full flex flex-col">
        
        <div className="h-8" />

        {/* Progress Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-8 md:mb-12 px-4"
        >
          <div className="flex items-center gap-1.5 md:gap-3 bg-white/80 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-full shadow-sm border border-slate-100">
            {steps.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <motion.div
                  className="flex items-center gap-1.5 md:gap-2.5"
                  animate={{ scale: buildStep === item.step ? 1.05 : 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[10px] md:text-xs font-semibold transition-all duration-500 ${
                      buildStep >= item.step ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-400'
                    }`}
                    layout
                  >
                    {buildStep > item.step ? (
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    ) : item.step}
                  </motion.div>
                  <span className={`text-xs md:text-sm font-medium transition-colors duration-500 hidden sm:inline ${
                    buildStep >= item.step ? 'text-slate-900' : 'text-slate-400'
                  }`}>
                    {item.label}
                  </span>
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div 
                    className="w-4 md:w-10 h-0.5 mx-1 md:mx-2 rounded-full transition-all duration-500"
                    animate={{ backgroundColor: buildStep > item.step ? '#0f172a' : '#e2e8f0' }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl">
            
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Name Scene */}
              {buildStep === 1 && (
                <motion.div key="step1" {...cardAnimation} className={cardClass}>
                  <h4 className={headingClass}>Name your scene</h4>
                  <div className="relative">
                    <div className="relative">
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => {
                          setSceneName(e.target.value);
                          setDisplayName(e.target.value);
                          setShowCursor(false);
                        }}
                        placeholder="Movie Night"
                        className="w-full px-5 md:px-7 py-4 md:py-5 text-lg md:text-xl bg-slate-50/80 border-2 border-slate-200/50 rounded-2xl md:rounded-[20px] focus:border-slate-900 focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-slate-400 min-h-[56px]"
                      />
                      {showCursor && displayName && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                          className="absolute left-5 md:left-7 top-1/2 -translate-y-1/2 text-lg md:text-xl text-slate-900 pointer-events-none"
                          style={{ marginLeft: `${displayName.length * 0.6}em` }}
                        >
                          |
                        </motion.span>
                      )}
                    </div>
                    <AnimatePresence>
                      {displayName && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 text-green-500"
                        >
                          <svg className="w-6 md:w-7 h-6 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Select Devices */}
              {buildStep === 2 && (
                <motion.div key="step2" {...cardAnimation} className={cardClass}>
                  <h4 className={headingClass}>Select devices</h4>
                  <p className={subtitleClass}>Tap to include in "{sceneName}"</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {devices.map((device, index) => {
                      const isSelected = selectedDevices.includes(device.id);
                      return (
                        <motion.button
                          key={device.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08, type: 'spring', stiffness: 140 }}
                          onClick={() => setSelectedDevices(prev => 
                            isSelected ? prev.filter(id => id !== device.id) : [...prev, device.id]
                          )}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-5 md:p-7 rounded-2xl md:rounded-[24px] transition-all duration-300 min-h-[100px] md:min-h-0 ${
                            isSelected
                              ? 'bg-slate-900 text-white shadow-lg'
                              : 'bg-slate-50/80 text-slate-700 hover:bg-slate-100/80 border-2 border-slate-100'
                          }`}
                        >
                          <motion.div 
                            className="mb-3 md:mb-4"
                            animate={{ scale: isSelected ? 1.1 : 1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <div className="scale-90 md:scale-100">
                              <DeviceIcon>{device.icon}</DeviceIcon>
                            </div>
                          </motion.div>
                          <div className="text-sm md:text-base font-semibold text-left">
                            {device.name}
                          </div>
                          
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                className="absolute top-3 md:top-4 right-3 md:right-4 w-6 md:w-7 h-6 md:h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                              >
                                <svg className="w-3.5 md:w-4 h-3.5 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Configure Actions */}
              {buildStep === 3 && (
                <motion.div key="step3" {...cardAnimation} className={cardClass}>
                  <h4 className={headingClass}>Configure actions</h4>
                  <p className={subtitleClass}>Set what each device should do</p>
                  
                  <div className="space-y-4 md:space-y-5">
                    {selectedDevices.map((deviceId, index) => {
                      const device = devices.find(d => d.id === deviceId)!;
                      const value = deviceSettings[deviceId] ?? (device.actionType === 'slider' ? 50 : 'on');
                      
                      return (
                        <motion.div
                          key={deviceId}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, type: 'spring', stiffness: 140 }}
                          className="p-5 md:p-6 bg-gradient-to-br from-slate-50/80 to-slate-100/50 rounded-2xl md:rounded-[20px] border border-slate-100/50"
                        >
                          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                            <div className={`w-11 md:w-12 h-11 md:h-12 rounded-xl md:rounded-[14px] bg-gradient-to-br ${device.color} flex items-center justify-center text-white shadow-sm`}>
                              <div className="scale-90 md:scale-100">
                                <DeviceIcon className="text-white">{device.icon}</DeviceIcon>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-slate-900 text-base md:text-lg">{device.name}</div>
                              <div className="text-xs md:text-sm text-slate-500">{device.actionLabel}</div>
                            </div>
                          </div>
                          
                          {device.actionType === 'slider' ? (
                            <div>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={value}
                                onChange={(e) => {
                                  setTargetLights(null);
                                  setDeviceSettings(prev => ({ ...prev, [deviceId]: parseInt(e.target.value) }));
                                }}
                                className="w-full h-2 md:h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900 touch-none"
                                style={{ background: `linear-gradient(to right, #0f172a 0%, #0f172a ${value}%, #e2e8f0 ${value}%, #e2e8f0 100%)` }}
                              />
                              <div className="flex justify-between mt-2 md:mt-3">
                                <span className="text-xs md:text-sm text-slate-400">0%</span>
                                <motion.span 
                                  key={value}
                                  initial={{ scale: 1.2 }}
                                  animate={{ scale: 1 }}
                                  className="text-sm md:text-base font-bold text-slate-900"
                                >
                                  {value}%
                                </motion.span>
                                <span className="text-xs md:text-sm text-slate-400">100%</span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex gap-2 md:gap-3">
                              {(device.id === 'curtains' ? ['Open', 'Closed'] : ['On', 'Off']).map(option => (
                                <motion.button
                                  key={option}
                                  onClick={() => setDeviceSettings(prev => ({ ...prev, [deviceId]: option.toLowerCase() }))}
                                  whileTap={{ scale: 0.96 }}
                                  className={`flex-1 py-3 md:py-3.5 rounded-xl md:rounded-[14px] text-sm md:text-base font-semibold transition-all duration-300 min-h-[48px] ${
                                    value === option.toLowerCase()
                                      ? 'bg-slate-900 text-white shadow-md'
                                      : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200/50'
                                  }`}
                                >
                                  {option}
                                </motion.button>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Success */}
              {buildStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                  className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-3xl md:rounded-[32px] p-8 md:p-10 lg:p-14 shadow-2xl text-white text-center relative overflow-hidden"
                  style={{ boxShadow: '0 30px 80px rgba(251, 146, 60, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-20 md:w-24 h-20 md:h-24 mx-auto mb-6 md:mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                    >
                      <svg className="w-10 md:w-12 h-10 md:h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </motion.div>
                    
                    <motion.h4 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 tracking-tight"
                    >
                      Scene created!
                    </motion.h4>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 font-light"
                    >
                      "{sceneName}" is ready to use
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-[20px] p-5 md:p-6 border border-white/10"
                    >
                      <p className="text-xs md:text-sm text-white/80 mb-3 md:mb-4 font-medium">
                        Controlling {selectedDevices.length} devices
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {selectedDevices.map((deviceId, i) => {
                          const device = devices.find(d => d.id === deviceId)!;
                          return (
                            <motion.div
                              key={deviceId}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + i * 0.05, type: 'spring' }}
                              className="px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium border border-white/10"
                            >
                              {device.name}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        <div className="h-8" />

      </div>
    </motion.div>
  );
}
