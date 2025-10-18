'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * StepCustomize - Scene Builder Interface
 * Shows HOW customers create scenes themselves
 * Step-by-step creation process: Name → Select Devices → Configure → Done
 */

export default function StepCustomize({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  
  const [buildStep, setBuildStep] = useState(0); // 0=start, 1=name, 2=devices, 3=configure, 4=done
  const [sceneName, setSceneName] = useState('');
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [deviceSettings, setDeviceSettings] = useState<{[key: string]: any}>({});

  // Auto-demo progression
  useEffect(() => {
    if (!isActive) return;
    
    const sequence = [
      { delay: 1000, action: () => setBuildStep(1) },
      { delay: 2500, action: () => { setSceneName('Movie Night'); setBuildStep(2); }},
      { delay: 4500, action: () => setSelectedDevices(['lights', 'tv', 'curtains']) },
      { delay: 6000, action: () => setBuildStep(3) },
      { delay: 7500, action: () => setDeviceSettings({ lights: 20, tv: 'on', curtains: 'closed' }) },
      { delay: 9000, action: () => setBuildStep(4) }
    ];
    
    const timeouts = sequence.map(({ delay, action }) => setTimeout(action, delay));
    return () => timeouts.forEach(clearTimeout);
  }, [isActive]);

  // Reset when inactive
  useEffect(() => {
    if (!isActive) {
      setBuildStep(0);
      setSceneName('');
      setSelectedDevices([]);
      setDeviceSettings({});
    }
  }, [isActive]);

  const availableDevices = [
    { 
      id: 'lights', 
      name: 'Living Room Lights', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      actionType: 'slider',
      actionLabel: 'Brightness'
    },
    { 
      id: 'tv', 
      name: 'Apple TV', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      actionType: 'toggle',
      actionLabel: 'Power'
    },
    { 
      id: 'curtains', 
      name: 'Curtains', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M3 21h18M5 3v18M10 3v18M14 3v18M19 3v18" />
        </svg>
      ),
      actionType: 'toggle',
      actionLabel: 'Position'
    },
    { 
      id: 'thermostat', 
      name: 'Thermostat', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      actionType: 'slider',
      actionLabel: 'Temperature'
    }
  ];

  const progressSteps = [
    { label: 'Name', step: 1 },
    { label: 'Select', step: 2 },
    { label: 'Configure', step: 3 },
    { label: 'Done', step: 4 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-b from-slate-50 via-white to-slate-50 p-6 md:p-12 overflow-hidden relative`}
    >
      <div className="relative h-full flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className={`${fullScreen ? 'text-4xl md:text-5xl' : 'text-2xl'} font-semibold text-slate-900 mb-4 tracking-tight`}>
            Create scenes in 30 seconds
          </h3>
          <p className={`${fullScreen ? 'text-xl' : 'text-base'} text-slate-600 max-w-2xl mx-auto`}>
            Simple taps and sliders. No coding, no complexity.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {progressSteps.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    buildStep >= item.step
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                  animate={{
                    scale: buildStep === item.step ? 1.05 : 1
                  }}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    buildStep >= item.step ? 'bg-white/20' : 'bg-slate-200'
                  }`}>
                    {buildStep > item.step ? '✓' : item.step}
                  </div>
                  <span className="text-sm font-semibold">{item.label}</span>
                </motion.div>
                {index < progressSteps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-1 transition-colors duration-300 ${
                    buildStep > item.step ? 'bg-slate-900' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl">
            
            <AnimatePresence mode="wait">
              {/* STEP 1: Name Your Scene */}
              {buildStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
                >
                  <h4 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
                    What should we call this scene?
                  </h4>
                  <div className="relative">
                    <input
                      type="text"
                      value={sceneName}
                      onChange={(e) => setSceneName(e.target.value)}
                      placeholder="e.g., Movie Night, Good Morning..."
                      className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-slate-900 focus:outline-none transition-colors"
                      autoFocus
                    />
                    {sceneName && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Select Devices */}
              {buildStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
                >
                  <h4 className="text-2xl font-semibold text-slate-900 mb-2 text-center">
                    Which devices should "{sceneName}" control?
                  </h4>
                  <p className="text-slate-500 text-center mb-8">Tap to select</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {availableDevices.map((device, index) => {
                      const isSelected = selectedDevices.includes(device.id);
                      return (
                        <motion.button
                          key={device.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedDevices(prev => prev.filter(id => id !== device.id));
                            } else {
                              setSelectedDevices(prev => [...prev, device.id]);
                            }
                          }}
                          className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                            isSelected
                              ? 'border-slate-900 bg-slate-50'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className={`mb-3 ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>
                            {device.icon}
                          </div>
                          <div className="text-sm font-semibold text-slate-900 text-left">
                            {device.name}
                          </div>
                          
                          {/* Checkmark */}
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 45 }}
                                className="absolute top-3 right-3 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center"
                              >
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
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
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
                >
                  <h4 className="text-2xl font-semibold text-slate-900 mb-2 text-center">
                    What should each device do?
                  </h4>
                  <p className="text-slate-500 text-center mb-8">Adjust settings below</p>
                  
                  <div className="space-y-6">
                    {selectedDevices.map((deviceId, index) => {
                      const device = availableDevices.find(d => d.id === deviceId)!;
                      return (
                        <motion.div
                          key={deviceId}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-5 bg-slate-50 rounded-2xl"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="text-slate-700">{device.icon}</div>
                            <div className="flex-1">
                              <div className="font-semibold text-slate-900">{device.name}</div>
                              <div className="text-xs text-slate-500">{device.actionLabel}</div>
                            </div>
                          </div>
                          
                          {device.actionType === 'slider' ? (
                            <div>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={deviceSettings[deviceId] || 50}
                                onChange={(e) => setDeviceSettings(prev => ({ ...prev, [deviceId]: parseInt(e.target.value) }))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                              />
                              <div className="flex justify-between mt-2 text-sm">
                                <span className="text-slate-400">0%</span>
                                <span className="font-semibold text-slate-900">{deviceSettings[deviceId] || 50}%</span>
                                <span className="text-slate-400">100%</span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex gap-2">
                              {['On', 'Off'].map(option => (
                                <button
                                  key={option}
                                  onClick={() => setDeviceSettings(prev => ({ ...prev, [deviceId]: option.toLowerCase() }))}
                                  className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
                                    (deviceSettings[deviceId] || 'on') === option.toLowerCase()
                                      ? 'bg-slate-900 text-white'
                                      : 'bg-white text-slate-600 hover:bg-slate-100'
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Done */}
              {buildStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </motion.div>
                  
                  <h4 className="text-3xl font-bold mb-3">Scene Created!</h4>
                  <p className="text-lg text-white/90 mb-6">
                    "{sceneName}" is ready to use
                  </p>
                  
                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <p className="text-sm text-white/80 mb-3">Controlling {selectedDevices.length} devices</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {selectedDevices.map(deviceId => {
                        const device = availableDevices.find(d => d.id === deviceId)!;
                        return (
                          <div key={deviceId} className="px-3 py-1.5 bg-white/20 rounded-full text-xs font-medium">
                            {device.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center space-y-4"
        >
          <p className="text-slate-600 text-lg">
            Create unlimited scenes. <span className="font-semibold text-slate-900">Takes under 30 seconds.</span>
          </p>
          
          {/* Platform Badges */}
          <div>
            <p className="text-sm text-slate-500 mb-3">Works with</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {['Apple Home', 'Google Home', 'Alexa'].map((platform, i) => (
                <motion.div
                  key={platform}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
                  className="px-5 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
