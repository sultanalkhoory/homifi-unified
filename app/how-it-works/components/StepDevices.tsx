import { motion } from 'framer-motion';

/**
 * Step 3: Seamless Integration - All Platforms Working Together
 * 
 * Shows the ecosystem integration - one home, multiple voice assistants
 * Emphasizes professional setup and platform flexibility
 */

export default function StepDevices({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  const platforms = [
    { 
      name: 'Apple Home', 
      color: 'from-gray-700 to-gray-900', 
      delay: 0.8, 
      position: { top: '15%', left: '10%' },
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 9v12h6v-7h6v7h6V9l-9-7z"/>
        </svg>
      )
    },
    { 
      name: 'Google Home', 
      color: 'from-blue-500 to-blue-600', 
      delay: 1.2, 
      position: { top: '15%', right: '10%' },
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
        </svg>
      )
    },
    { 
      name: 'Alexa', 
      color: 'from-cyan-500 to-blue-500', 
      delay: 1.6, 
      position: { bottom: '20%', left: '50%', transform: '-translate-x-1/2' },
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    }
  ];

  const devices = [
    { icon: '💡', name: 'Lights', angle: 0 },
    { icon: '🪟', name: 'Curtains', angle: 72 },
    { icon: '🌡️', name: 'Climate', angle: 144 },
    { icon: '🔒', name: 'Lock', angle: 216 },
    { icon: '📹', name: 'Camera', angle: 288 }
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
            Works with Everything
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
            One home • All your favorite assistants • Simple setup
          </p>
        </motion.div>

        {/* Central Integration Visualization */}
        <div className="flex-1 relative flex items-center justify-center">
          
          {/* Subtle glow background */}
          <motion.div
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30" />
          </motion.div>

          {/* Central Hub - Smart Home */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
            className="relative z-20"
          >
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-1">🏠</div>
                <p className="text-xs font-semibold text-gray-900">Your Home</p>
                <p className="text-[10px] text-gray-500 mt-0.5">12 devices</p>
              </div>
            </div>

            {/* Animated connection rings */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 rounded-3xl border-2 border-blue-300"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1
              }}
              className="absolute inset-0 rounded-3xl border-2 border-indigo-300"
            />
          </motion.div>

          {/* Platform Cards - positioned around center */}
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: platform.delay, type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute z-10"
              style={{ 
                top: platform.position.top,
                left: platform.position.left,
                right: platform.position.right,
                bottom: platform.position.bottom,
                transform: platform.position.transform
              }}
            >
              <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${platform.color} shadow-xl`}>
                {/* Platform icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {platform.icon}
                    <p className="text-[10px] text-white/90 font-medium mt-1">{platform.name}</p>
                  </div>
                </div>

                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />

                {/* Animated connection line to center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: platform.delay + 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    x1="50%"
                    y1="50%"
                    x2={platform.position.left ? '200%' : platform.position.right ? '-100%' : '50%'}
                    y2={platform.position.bottom ? '-150%' : '200%'}
                    stroke="rgba(59, 130, 246, 0.4)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </motion.div>
          ))}

          {/* Device orbit - small icons around center */}
          {devices.map((device, index) => {
            const radius = 110;
            const angleRad = (device.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.0 + index * 0.1, type: 'spring', stiffness: 300 }}
                className="absolute z-15"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-lg">{device.icon}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Benefits Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 grid grid-cols-3 gap-3"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 text-center">
            <p className="text-lg font-bold text-black mb-1">3</p>
            <p className="text-xs text-gray-600">Platforms</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 text-center">
            <p className="text-lg font-bold text-black mb-1">12</p>
            <p className="text-xs text-gray-600">Devices</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 text-center">
            <p className="text-lg font-bold text-black mb-1">1</p>
            <p className="text-xs text-gray-600">System</p>
          </div>
        </motion.div>

        {/* Integration message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Use Siri, Alexa, or Google Assistant.</span> We handle the setup.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Works with everything you already own
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
