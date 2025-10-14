'use client';

import { motion } from 'framer-motion';

/**
 * Step 1: We Design Your Home
 * 
 * Simplified design - no grids, minimal animations
 * Shows blueprint planning with clean zone mapping
 */

export default function StepDesign({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  
  const zones = [
    { name: 'Living Room', devices: 5, icon: '🛋️', position: { top: '25%', left: '15%' } },
    { name: 'Kitchen', devices: 3, icon: '🍳', position: { top: '25%', right: '15%' } },
    { name: 'Bedroom', devices: 4, icon: '🛏️', position: { bottom: '25%', left: '15%' } },
    { name: 'Office', devices: 3, icon: '💼', position: { bottom: '25%', right: '15%' } }
  ];

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-white to-gray-50 p-6 md:p-12 overflow-hidden`}
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
            Custom Plan for Your Space
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
            We map your rooms and design what fits your life
          </p>
        </motion.div>

        {/* Blueprint View - Simplified */}
        <div className="flex-1 relative flex items-center justify-center">
          
          {/* Central Floor Plan */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative w-full max-w-lg aspect-square"
          >
            {/* Floor plan outline */}
            <div className="absolute inset-0 border-2 border-gray-300 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg" />
            
            {/* Subtle room dividers */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <line x1="50" y1="0" x2="50" y2="100" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
            </svg>

            {/* Zone Cards */}
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.15, type: 'spring', stiffness: 200 }}
                className="absolute"
                style={{
                  top: zone.position.top,
                  left: zone.position.left,
                  right: zone.position.right,
                  bottom: zone.position.bottom,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="bg-white rounded-xl p-3 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{zone.icon}</span>
                    <span className="text-sm font-semibold text-gray-900">{zone.name}</span>
                  </div>
                  <p className="text-xs text-gray-500">{zone.devices} devices</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Plan Summary Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 bg-white rounded-2xl p-5 shadow-lg border border-gray-100"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-xs text-gray-600">Zones</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">15</p>
              <p className="text-xs text-gray-600">Devices</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-xs text-gray-600">Coverage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
