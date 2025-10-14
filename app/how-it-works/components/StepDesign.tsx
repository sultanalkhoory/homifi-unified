import { motion } from 'framer-motion';

export default function StepDesign({ isActive = true, fullScreen = true }: { isActive?: boolean; fullScreen?: boolean }) {
  const zones = [
    { name: 'Living Room', devices: 5, position: { x: 30, y: 30 } },
    { name: 'Kitchen', devices: 3, position: { x: 70, y: 30 } },
    { name: 'Bedroom', devices: 4, position: { x: 30, y: 70 } },
    { name: 'Office', devices: 3, position: { x: 70, y: 70 } }
  ];

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-12 overflow-hidden`}
    >
      <div className="relative h-full flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
            Custom Zone Mapping
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
            Every room optimized for your lifestyle
          </p>
        </motion.div>

        {/* Blueprint View */}
        <div className="flex-1 relative">
          
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-400" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floor Plan Container */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl aspect-square">
              
              {/* House Outline */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 border-4 border-gray-300 rounded-2xl bg-white/50 backdrop-blur-sm"
              />

              {/* Zone Cards */}
              {zones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.5 + index * 0.15,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  className="absolute"
                  style={{
                    left: `${zone.position.x}%`,
                    top: `${zone.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Zone Card */}
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Card Content */}
                    <div className="relative bg-white rounded-xl p-4 shadow-lg border-2 border-blue-200 min-w-[140px]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{zone.name}</h4>
                          <p className="text-xs text-gray-500">{zone.devices} devices</p>
                        </div>
                      </div>
                      
                      {/* Device Indicators */}
                      <div className="flex gap-1 mt-2">
                        {Array.from({ length: zone.devices }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.15 + i * 0.05 }}
                            className="w-1.5 h-1.5 rounded-full bg-green-500"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Connection Line to Center */}
                    <svg className="absolute top-1/2 left-1/2 pointer-events-none" style={{ width: '200%', height: '200%', transform: 'translate(-50%, -50%)' }}>
                      <motion.line
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                        x1="50%" y1="50%"
                        x2="50%" y2="50%"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <defs>
                        <linearGradient id="lineGradient">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
              ))}

              {/* Center Hub */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 15 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  {/* Pulsing Ring */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 blur-md"
                  />
                  
                  {/* Hub Icon */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl flex items-center justify-center border-4 border-white">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-6 grid grid-cols-3 gap-3"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 text-center">
            <p className="text-lg font-bold text-black mb-1">4</p>
            <p className="text-xs text-gray-600">Zones</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 text-center">
            <p className="text-lg font-bold text-black mb-1">15</p>
            <p className="text-xs text-gray-600">Devices</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 text-center">
            <p className="text-lg font-bold text-black mb-1">100%</p>
            <p className="text-xs text-gray-600">Coverage</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
