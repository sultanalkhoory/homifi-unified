'use client';

import { motion } from 'framer-motion';

/**
 * Step 3: Install & Integrate Devices
 * Full-screen installation dashboard
 * Shows sequential device installation with progress
 */
export default function StepDevices({ 
  isActive, 
  fullScreen = false 
}: { 
  isActive: boolean;
  fullScreen?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 p-6 md:p-12 overflow-hidden`}
    >
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
            Device Installation
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-orange-600`}>
            Expert setup, zero complexity
          </p>
        </motion.div>

        {/* Installation Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          {/* Progress bar */}
          <div className={`bg-white/60 rounded-full ${fullScreen ? 'h-3' : 'h-2'} overflow-hidden backdrop-blur-sm border border-orange-200`}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.6, duration: 2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-orange-400 to-amber-500"
            />
          </div>
          
          {/* Progress text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="flex items-center justify-center gap-2 mt-3"
          >
            <svg className={`${fullScreen ? 'w-5 h-5' : 'w-3 h-3'} text-green-500`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={`${fullScreen ? 'text-sm' : 'text-[10px]'} text-green-600 font-medium`}>
              Installation Complete
            </span>
          </motion.div>
        </motion.div>

        {/* Device List - Sequential Installation */}
        <div className="flex-1 space-y-3 overflow-hidden">
          
          {/* Device cards appear sequentially */}
          {[
            { emoji: '💡', name: 'Living Room Lights', color: 'from-amber-400 to-orange-500', delay: 0.8 },
            { emoji: '🪟', name: 'Smart Curtains', color: 'from-cyan-400 to-blue-500', delay: 1.2 },
            { emoji: '🌡️', name: 'Thermostat', color: 'from-teal-400 to-emerald-500', delay: 1.6 },
            { emoji: '🔒', name: 'Smart Lock', color: 'from-gray-600 to-gray-800', delay: 2.0 },
            { emoji: '📹', name: 'Security Camera', color: 'from-red-400 to-pink-500', delay: 2.4 }
          ].map((device, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: device.delay, type: 'spring', stiffness: 100 }}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl ${fullScreen ? 'p-5' : 'p-3'} shadow-sm border border-orange-100 relative overflow-hidden`}
            >
              {/* Success flash */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ delay: device.delay + 0.2, duration: 0.5 }}
                className="absolute inset-0 bg-green-400"
              />
              
              <div className="relative flex items-center gap-4">
                <div className={`${fullScreen ? 'w-14 h-14' : 'w-10 h-10'} rounded-xl bg-gradient-to-br ${device.color} flex items-center justify-center ${fullScreen ? 'text-2xl' : 'text-xl'} shadow-md`}>
                  {device.emoji}
                </div>
                <div className="flex-1">
                  <p className={`${fullScreen ? 'text-base' : 'text-sm'} font-semibold text-gray-900`}>
                    {device.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 'auto' }}
                      transition={{ delay: device.delay + 0.1 }}
                      className="flex items-center gap-1"
                    >
                      <div className="w-1 h-1 rounded-full bg-green-500" />
                      <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-green-600 font-medium`}>
                        Connected
                      </span>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: device.delay + 0.2, type: 'spring', stiffness: 200 }}
                >
                  <svg className={`${fullScreen ? 'w-7 h-7' : 'w-5 h-5'} text-green-500`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Badges */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.9 }}
          className={`mt-6 flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-orange-100`}
        >
          <span className={`${fullScreen ? 'text-sm' : 'text-[9px]'} text-gray-600 font-medium`}>
            Works with:
          </span>
          <div className="flex items-center gap-2">
            <div className={`${fullScreen ? 'w-6 h-6' : 'w-4 h-4'} rounded bg-white flex items-center justify-center ${fullScreen ? 'text-sm' : 'text-[8px]'}`}>
              🍎
            </div>
            <div className={`${fullScreen ? 'w-6 h-6' : 'w-4 h-4'} rounded bg-white flex items-center justify-center ${fullScreen ? 'text-sm' : 'text-[8px]'}`}>
              G
            </div>
            <div className={`${fullScreen ? 'w-6 h-6' : 'w-4 h-4'} rounded bg-white flex items-center justify-center ${fullScreen ? 'text-sm' : 'text-[8px]'}`}>
              A
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
