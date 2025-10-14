import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Step 3: Install & Integrate Devices - ALL 3 PREMIUM OPTIONS
 * 
 * Options:
 * A - Cinematic Product Showcase (luxury 3D cards, dramatic lighting)
 * B - Premium Dashboard (RECOMMENDED - dark slate, white cards, professional)
 * C - Installation Timeline (vertical timeline, elegant progression)
 * 
 * All emphasize: No programming knowledge required, expert installation
 */

// Style Toggle Component
function StyleToggle({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-xl rounded-xl p-1.5 flex gap-1.5 shadow-lg border border-gray-200">
        {['A', 'B', 'C'].map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              value === option
                ? 'bg-black text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

// OPTION A: Cinematic Product Showcase
function OptionA({ isActive, fullScreen }: { isActive: boolean; fullScreen: boolean }) {
  const devices = [
    { name: 'Smart Lights', color: 'from-amber-400 to-orange-500', delay: 0.8 },
    { name: 'Smart Curtains', color: 'from-cyan-400 to-blue-500', delay: 1.2 },
    { name: 'Thermostat', color: 'from-teal-400 to-emerald-500', delay: 1.6 },
    { name: 'Smart Lock', color: 'from-gray-600 to-gray-800', delay: 2.0 },
    { name: 'Security Camera', color: 'from-red-400 to-pink-500', delay: 2.4 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-900 via-gray-900 to-black p-6 md:p-12 overflow-hidden`}
    >
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-white mb-2`}>
            Premium Device Installation
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-400`}>
            Expert setup • No programming knowledge required
          </p>
        </motion.div>

        {/* Device Showcase Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {devices.slice(0, 3).map((device, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: device.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div className={`relative aspect-square rounded-2xl bg-gradient-to-br ${device.color} p-1 overflow-hidden`}>
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50" />
                
                {/* Inner card */}
                <div className="relative h-full w-full bg-black/40 backdrop-blur-xl rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/90 rounded-lg" />
                    </div>
                    <p className="text-white text-sm font-semibold">{device.name}</p>
                  </div>
                </div>

                {/* Spotlight beam */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/10 blur-3xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform badges */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="flex items-center justify-center gap-3 mt-6"
        >
          <span className="text-xs text-gray-500">Works with:</span>
          <div className="flex gap-2">
            {['🍎', 'G', 'A'].map((icon, i) => (
              <div key={i} className="w-6 h-6 rounded bg-white/10 backdrop-blur flex items-center justify-center text-xs text-white">
                {icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// OPTION B: Premium Dashboard (RECOMMENDED)
function OptionB({ isActive, fullScreen }: { isActive: boolean; fullScreen: boolean }) {
  const devices = [
    { name: 'Living Room Lights', icon: 'lights', delay: 0.8 },
    { name: 'Smart Curtains', icon: 'curtains', delay: 1.2 },
    { name: 'Climate Control', icon: 'thermostat', delay: 1.6 },
    { name: 'Front Door Lock', icon: 'lock', delay: 2.0 },
    { name: 'Security Camera', icon: 'camera', delay: 2.4 }
  ];

  // Simple line-art SVG icons
  const getIcon = (type: string) => {
    const iconProps = { className: "w-6 h-6", strokeWidth: 2, fill: "none", stroke: "currentColor" };
    
    switch(type) {
      case 'lights':
        return <svg {...iconProps} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
      case 'curtains':
        return <svg {...iconProps} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>;
      case 'thermostat':
        return <svg {...iconProps} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
      case 'lock':
        return <svg {...iconProps} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
      case 'camera':
        return <svg {...iconProps} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
      default:
        return <svg {...iconProps} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-6 md:p-12 overflow-hidden`}
    >
      <div className="relative h-full flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-white mb-2`}>
            Professional Installation
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-400`}>
            Expert setup • Zero complexity • Works with everything
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="bg-white/5 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.6, duration: 2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="flex items-center justify-center gap-2 mt-3"
          >
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-green-400 font-medium">Installation Complete</span>
          </motion.div>
        </motion.div>

        {/* Device Cards */}
        <div className="flex-1 space-y-3 overflow-hidden">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: device.delay, type: 'spring', stiffness: 100 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  {getIcon(device.icon)}
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{device.name}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-xs text-green-400 font-medium">Connected</span>
                  </div>
                </div>
                
                {/* Checkmark */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: device.delay + 0.2, type: 'spring', stiffness: 200 }}
                >
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
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
          className="mt-6 flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10"
        >
          <span className="text-xs text-gray-400 font-medium">Compatible with:</span>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs text-white">🍎</div>
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs text-white">G</div>
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs text-white">A</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// OPTION C: Integration Complete - Ecosystem Magic
function OptionC({ isActive, fullScreen }: { isActive: boolean; fullScreen: boolean }) {
  const platforms = [
    { name: 'Apple Home', icon: '🍎', color: 'from-gray-700 to-gray-900', delay: 0.8, position: { top: '15%', left: '10%' } },
    { name: 'Google Home', icon: 'G', color: 'from-blue-500 to-blue-600', delay: 1.2, position: { top: '15%', right: '10%' } },
    { name: 'Alexa', icon: 'A', color: 'from-cyan-500 to-blue-500', delay: 1.6, position: { bottom: '20%', left: '50%', transform: '-translate-x-1/2' } }
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
            Seamless Integration
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
            One home • All platforms • Zero complexity
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
                    <div className="text-3xl mb-1">{platform.icon}</div>
                    <p className="text-[10px] text-white/90 font-medium">{platform.name}</p>
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
            const radius = 110; // Distance from center
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
            <span className="font-semibold text-gray-900">Choose your voice assistant.</span> We handle all the integration.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            No programming knowledge required
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Main Export - Wrapper with Toggle
export default function StepDevices({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  const [style, setStyle] = useState('B'); // Default to recommended Option B

  return (
    <div className="relative h-full">
      <StyleToggle value={style} onChange={setStyle} />
      <AnimatePresence mode="wait">
        {style === 'A' && <OptionA key="A" isActive={isActive} fullScreen={fullScreen} />}
        {style === 'B' && <OptionB key="B" isActive={isActive} fullScreen={fullScreen} />}
        {style === 'C' && <OptionC key="C" isActive={isActive} fullScreen={fullScreen} />}
      </AnimatePresence>
    </div>
  );
}
