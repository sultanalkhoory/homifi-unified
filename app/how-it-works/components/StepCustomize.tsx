'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StepCustomize({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  
  const [buildStep, setBuildStep] = useState(1);
  const [sceneName, setSceneName] = useState('');
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [deviceSettings, setDeviceSettings] = useState<{[key: string]: any}>({});
  const [displayName, setDisplayName] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [targetLights, setTargetLights] = useState<number | null>(null);

  // Auto-demo: Shows how easy automation setup is - no coding required
  useEffect(() => {
    if (!isActive) return;
    
    const actions = [
      [1400, () => setSceneName('Movie Night')],
      [2700, () => setBuildStep(2)],
      [3700, () => setSelectedDevices(['lights'])],
      [4400, () => setSelectedDevices(['lights', 'tv'])],
      [5100, () => setSelectedDevices(['lights', 'tv', 'curtains'])],
      [6400, () => {
        setBuildStep(3);
        setDeviceSettings({ lights: 50, tv: 'off', curtains: 'open' });
      }],
      [7200, () => setDeviceSettings(prev => ({ ...prev, tv: 'on' }))],
      [7800, () => setDeviceSettings(prev => ({ ...prev, curtains: 'closed' }))],
      [8400, () => setTargetLights(20)],
      [9900, () => setBuildStep(4)]
    ] as const;
    
    const timeouts = actions.map(([delay, action]) => setTimeout(action, delay));
    return () => timeouts.forEach(clearTimeout);
  }, [isActive]);

  // Typing animation for scene name
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

  // Smooth slider animation for light dimming
  useEffect(() => {
    if (targetLights === null || deviceSettings.lights === targetLights) return;
    
    let current = deviceSettings.lights ?? 50;
    const step = current < targetLights ? 1 : -1;
    
    const interval = setInterval(() => {
      current += step;
      setDeviceSettings(prev => ({ ...prev, lights: current }));
      
      if (current === targetLights) {
        clearInterval(interval);
      }
    }, 15);
    
    return () => clearInterval(interval);
  }, [targetLights, deviceSettings.lights]);

  // Seamless integrations: Works with Apple HomeKit, Google Home, Alexa
  const devices = [
    { 
      id: 'lights', 
      name: 'Living Room Lights', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
      actionType: 'slider'
    },
    { 
      id: 'tv', 
      name: 'Apple TV', // Apple integration showcase
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />,
      actionType: 'buttons',
      options: ['On', 'Off']
    },
    { 
      id: 'curtains', 
      name: 'Curtains', 
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M3 21h18" /><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18M10 3v18M14 3v18M19 3v18" /></>,
      actionType: 'buttons',
      options: ['Open', 'Closed']
    }
  ];

  const steps = [
    { label: 'Name', step: 1 },
    { label: 'Select', step: 2 },
    { label: 'Configure', step: 3 },
    { label: 'Done', step: 4 }
  ];

  const cardTransition = { type: 'spring' as const, stiffness: 100, damping: 25 };
  const cardAnimation = {
    initial: { opacity: 0, scale: 0.97, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.97, y: -30 },
    transition: cardTransition
  };

  const cardClass = "bg-white/80 backdrop-blur-xl rounded-3xl md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-xl border border-white/20 min-h-[400px] md:min-h-[450px] flex flex-col justify-center";
  const headingClass = "text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900 mb-4 md:mb-6 text-center tracking-tight";
  const subtitleClass = "text-slate-500 text-center mb-4 md:mb-6 text-sm md:text-base font-light";

  const DeviceIcon = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <svg className={`w-5 md:w-6 h-5 md:h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      {children}
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} 
        bg-gradient-to-b from-white via-slate-50/50 to-white 
        p-4 md:p-8 lg:p-12 
        overflow-hidden relative`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]" />
      
      <div className="relative h-full flex flex-col">
        
        {/* Progress indicator - Simple 4-step setup */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-6 md:mb-8 px-4"
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

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl">
            
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Name your automation scene */}
              {buildStep === 1 && (
                <motion.div key="step1" {...cardAnimation} className={cardClass}>
                  <div>
                    <h4 className={headingClass}>Name your scene</h4>
                    <div className="relative max-w-md mx-auto">
                      <div className="relative">
                        <input
                          type="text"
                          value={displayName}
                          onChange={(e) => {
                            setSceneName(e.target.value);
                            setDisplayName(e.target.value);
                            setShowCursor(false);
                          }}
                          className="w-full px-5 md:px-6 py-3 md:py-4 text-base md:text-lg bg-slate-50/80 border-2 border-slate-200/50 rounded-xl md:rounded-2xl focus:border-slate-900 focus:bg-white focus:outline-none transition-all duration-300 font-medium text-slate-900"
                          placeholder="e.g., Movie Night"
                        />
                        {showCursor && displayName && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                            className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-base md:text-lg text-slate-900 pointer-events-none"
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
                            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-green-500"
                          >
                            <svg className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Select devices - Works with Apple Home, Google Home, Alexa */}
              {buildStep === 2 && (
                <motion.div key="step2" {...cardAnimation} className={cardClass}>
                  <div>
                    <h4 className={headingClass}>Select devices</h4>
                    <p className={subtitleClass}>Tap to include in "{sceneName}"</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3 max-w-lg mx-auto">
                      {devices.map((device, index) => {
                        const isSelected = selectedDevices.includes(device.id);
                        return (
                          <motion.button
                            key={device.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              backgroundColor: isSelected ? '#0f172a' : 'rgba(248, 250, 252, 0.8)',
                              color: isSelected ? '#ffffff' : '#334155'
                            }}
                            transition={{ 
                              layout: { type: 'spring', stiffness: 300, damping: 30 },
                              opacity: { delay: index * 0.08 },
                              y: { delay: index * 0.08, type: 'spring', stiffness: 140, damping: 20 },
                              backgroundColor: { duration: 0.3, ease: 'easeInOut' },
                              color: { duration: 0.3, ease: 'easeInOut' }
                            }}
                            onClick={() => setSelectedDevices(prev => 
                              isSelected ? prev.filter(id => id !== device.id) : [...prev, device.id]
                            )}
                            className={`relative p-4 md:p-5 rounded-xl md:rounded-2xl text-left ${
                              isSelected
                                ? 'shadow-lg'
                                : 'hover:bg-slate-100/80 border-2 border-slate-100'
                            }`}
                          >
                            <motion.div 
                              className="mb-2 md:mb-3"
                              animate={{ scale: isSelected ? 1.1 : 1 }}
                              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            >
                              <DeviceIcon>{device.icon}</DeviceIcon>
                            </motion.div>
                            <div className="text-xs md:text-sm font-semibold">
                              {device.name}
                            </div>
                            
                            <AnimatePresence>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  exit={{ scale: 0, rotate: 180 }}
                                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                  className="absolute top-2 md:top-3 right-2 md:right-3 w-5 md:w-6 h-5 md:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                >
                                  <svg className="w-3 md:w-3.5 h-3 md:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Configure - No coding knowledge required */}
              {buildStep === 3 && (
                <motion.div key="step3" {...cardAnimation} className={cardClass}>
                  <div>
                    <h4 className={headingClass}>Configure actions</h4>
                    <p className={subtitleClass}>Set what each device should do</p>
                    
                    <div className="space-y-3 md:space-y-4 max-w-lg mx-auto">
                      {selectedDevices.map((deviceId, index) => {
                        const device = devices.find(d => d.id === deviceId)!;
                        const value = deviceSettings[deviceId] ?? (device.actionType === 'slider' ? 50 : device.options![0].toLowerCase());
                        
                        return (
                          <motion.div
                            key={deviceId}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
                            className="bg-slate-50/80 rounded-xl md:rounded-2xl p-3 md:p-4"
                          >
                            <div className="flex items-center justify-between mb-2 md:mb-3">
                              <div className="flex items-center gap-2">
                                <DeviceIcon className="text-slate-600">{device.icon}</DeviceIcon>
                                <span className="text-xs md:text-sm font-semibold text-slate-900">{device.name}</span>
                              </div>
                              {device.actionType === 'slider' && (
                                <span className="text-xs md:text-sm font-bold text-slate-900">{value}%</span>
                              )}
                            </div>
                            
                            {device.actionType === 'slider' && (
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={value}
                                onChange={(e) => setDeviceSettings(prev => ({ ...prev, [deviceId]: parseInt(e.target.value) }))}
                                className="w-full h-1.5 md:h-2 bg-slate-200 rounded-full appearance-none cursor-pointer slider"
                                style={{
                                  background: `linear-gradient(to right, #0f172a ${value}%, #e2e8f0 ${value}%)`
                                }}
                              />
                            )}
                            
                            {device.actionType === 'buttons' && device.options && (
                              <div className="flex gap-2">
                                {device.options.map((option) => (
                                  <motion.button
                                    key={option}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setDeviceSettings(prev => ({ ...prev, [deviceId]: option.toLowerCase() }))}
                                    animate={{
                                      backgroundColor: value === option.toLowerCase() ? '#0f172a' : 'rgba(255, 255, 255, 0.8)',
                                      color: value === option.toLowerCase() ? '#ffffff' : '#475569',
                                      scale: value === option.toLowerCase() ? 1.02 : 1
                                    }}
                                    transition={{ 
                                      duration: 0.4,
                                      ease: 'easeInOut',
                                      scale: { type: 'spring', stiffness: 300, damping: 25 }
                                    }}
                                    className={`flex-1 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold ${
                                      value === option.toLowerCase()
                                        ? 'shadow-md'
                                        : 'border border-slate-200/50'
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
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Success - Instant notification ready, voice control enabled */}
              {buildStep === 4 && (
                <motion.div
                  key="step4"
                  {...cardAnimation}
                  className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-3xl md:rounded-[32px] p-8 md:p-10 shadow-2xl text-white text-center relative overflow-hidden min-h-[400px] md:min-h-[450px] flex flex-col justify-center"
                  style={{ boxShadow: '0 30px 80px rgba(251, 146, 60, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                    >
                      <svg className="w-8 md:w-10 h-8 md:h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </motion.div>
                    
                    <motion.h4 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 tracking-tight"
                    >
                      Scene created!
                    </motion.h4>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm md:text-base text-white/90 mb-6 md:mb-8"
                    >
                      "{sceneName}" is ready to use<br />
                      <span className="text-xs text-white/70">
                        Control with Siri, Alexa, or Google Assistant
                      </span>
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setBuildStep(1);
                        setSceneName('');
                        setSelectedDevices([]);
                        setDeviceSettings({});
                        setDisplayName('');
                        setTargetLights(null);
                      }}
                      className="mx-auto px-6 md:px-8 py-2.5 md:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm md:text-base font-semibold transition-colors duration-300 border border-white/30"
                    >
                      Create Another Scene
                    </motion.button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
