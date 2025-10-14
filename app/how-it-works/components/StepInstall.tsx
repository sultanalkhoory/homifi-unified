'use client';

import { motion } from 'framer-motion';

/**
 * Step 2: We Install Everything
 * 
 * Simplified Wi-Fi installation view
 * Shows clean professional setup without heavy animations
 */

export default function StepInstall({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  
  const accessPoints = [
    { name: 'Living Room AP', position: { top: '30%', left: '25%' }, delay: 0.6 },
    { name: 'Kitchen AP', position: { top: '30%', right: '25%' }, delay: 0.8 },
    { name: 'Bedroom AP', position: { bottom: '30%', left: '25%' }, delay: 1.0 },
    { name: 'Office AP', position: { bottom: '30%', right: '25%' }, delay: 1.2 }
  ];

  const devices = [
    { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />, name: 'Lights' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />, name: 'Cameras' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />, name: 'Locks' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, name: 'Sensors' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-white to-blue-50/20 p-6 md:p-12 overflow-hidden`}
    >
      <div className="relative h-full flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
            Complete Installation
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
            Clean installs, no mess • We leave everything signed-in and working
          </p>
        </motion.div>

        {/* Installation View */}
        <div className="flex-1 relative flex items-center justify-center">
          
          {/* Floor Plan Base */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative w-full max-w-xl aspect-square"
          >
            {/* House outline */}
            <div className="absolute inset-0 border-2 border-gray-300 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg" />
            
            {/* Access Points with Coverage Circles */}
            {accessPoints.map((ap, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: ap.delay, type: 'spring', stiffness: 200 }}
                className="absolute z-10"
                style={{
                  top: ap.position.top,
                  left: ap.position.left,
                  right: ap.position.right,
                  bottom: ap.position.bottom,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Coverage circle - static, no animation */}
                <div className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <div className="w-full h-full rounded-full bg-blue-200/30 border border-blue-300/40" />
                </div>
                
                {/* AP Device */}
                <div className="relative bg-white rounded-xl p-2.5 shadow-lg border-2 border-blue-400">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>

                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded-lg shadow-sm">
                    {ap.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Connected Devices Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8"
        >
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
            <p className="text-sm text-gray-600 mb-3 text-center">Connected Devices</p>
            <div className="grid grid-cols-4 gap-3">
              {devices.map((device, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 mx-auto mb-1 rounded-lg bg-blue-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {device.icon}
                    </svg>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">{device.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-4 flex justify-center gap-4 text-xs text-gray-600"
        >
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Every room</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Wi-Fi 6</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>1 Gbps</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
