import { motion } from 'framer-motion';

/**
 * Step 1: Design Your Plan - Realistic Architectural Floor Plan
 * 
 * Features:
 * - Realistic room shapes and sizes (not uniform squares)
 * - Entry foyer with hallway connecting rooms
 * - Proper spatial relationships (kitchen near dining, bedrooms grouped)
 * - Blue color scheme throughout (NO green)
 * - Sequential device icon animations
 * - Architectural blueprint aesthetic
 */
export default function StepPlan({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-12 overflow-hidden`}
    >
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: fullScreen ? '30px 30px' : '20px 20px'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
            Your Home Layout
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
            Custom zone mapping • No programming required
          </p>
        </motion.div>

        {/* Realistic Floor Plan */}
        <div className="flex-1 flex items-center justify-center relative">
          
          {/* Subtle heat map overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.2, 0.35, 0.2],
              scale: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 25% 35%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 75% 65%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)
              `,
              filter: 'blur(40px)'
            }}
          />

          {/* House Container - Realistic proportions */}
          <div className={`relative ${fullScreen ? 'w-[500px] h-[420px]' : 'w-[380px] h-[320px]'}`}>
            
            {/* Outer house boundary */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 420">
              {/* Main house outline with architectural detail */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ delay: 0.3, duration: 1.2 }}
                d="M 40 60 L 40 380 L 460 380 L 460 60 Z"
                fill="none"
                stroke="rgba(59, 130, 246, 0.6)"
                strokeWidth="3"
                strokeDasharray="8,4"
              />
              
              {/* Interior walls - creating realistic layout */}
              
              {/* Vertical hallway (center) */}
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                x1="250" y1="60" x2="250" y2="280"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="2"
              />
              
              {/* Horizontal division (living area vs bedrooms) */}
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                x1="40" y1="280" x2="460" y2="280"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="2"
              />
              
              {/* Kitchen wall */}
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                x1="250" y1="280" x2="250" y2="380"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="2"
              />
              
              {/* Office wall separator */}
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                x1="355" y1="60" x2="355" y2="280"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="2"
              />

              {/* Entry foyer indicator */}
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                x="215" y="55" width="70" height="40"
                fill="rgba(59, 130, 246, 0.3)"
                rx="4"
              />
            </svg>

            {/* LIVING ROOM - Large, left side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{ 
                top: '18%', 
                left: '10%', 
                width: '36%', 
                height: '46%' 
              }}
            >
              <div className="relative w-full h-full bg-white/95 backdrop-blur-sm border-2 border-blue-400 rounded-xl shadow-lg overflow-hidden">
                {/* Room label */}
                <div className="absolute top-3 left-3 right-3">
                  <p className="text-sm font-bold text-gray-900">Living Room</p>
                  <p className="text-xs text-gray-500 mt-0.5">Main entertainment area</p>
                </div>
                
                {/* Device icons - sequential pop-in */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
                  {[
                    { icon: '💡', label: 'Lights', delay: 0.9 },
                    { icon: '🌡️', label: 'Climate', delay: 1.05 },
                    { icon: '🪟', label: 'Curtains', delay: 1.2 }
                  ].map((device, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: device.delay, 
                        type: 'spring',
                        stiffness: 300,
                        damping: 15
                      }}
                      className="flex items-center gap-1.5 bg-blue-50 px-2 py-1 rounded-lg"
                    >
                      <span className="text-sm">{device.icon}</span>
                      <span className="text-xs font-medium text-blue-700">{device.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 pointer-events-none" />
              </div>
            </motion.div>

            {/* OFFICE - Top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{ 
                top: '18%', 
                right: '8%', 
                width: '24%', 
                height: '46%' 
              }}
            >
              <div className="relative w-full h-full bg-white/95 backdrop-blur-sm border-2 border-indigo-400 rounded-xl shadow-lg overflow-hidden">
                <div className="absolute top-3 left-3 right-3">
                  <p className="text-sm font-bold text-gray-900">Office</p>
                  <p className="text-xs text-gray-500 mt-0.5">Work from home</p>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2">
                  {[
                    { icon: '💡', label: 'Lights', delay: 1.35 },
                    { icon: '🔌', label: 'Outlets', delay: 1.5 }
                  ].map((device, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: device.delay, 
                        type: 'spring',
                        stiffness: 300,
                        damping: 15
                      }}
                      className="flex items-center gap-1.5 bg-indigo-50 px-2 py-1 rounded-lg"
                    >
                      <span className="text-sm">{device.icon}</span>
                      <span className="text-xs font-medium text-indigo-700">{device.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 pointer-events-none" />
              </div>
            </motion.div>

            {/* KITCHEN - Bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{ 
                bottom: '8%', 
                left: '10%', 
                width: '36%', 
                height: '28%' 
              }}
            >
              <div className="relative w-full h-full bg-white/95 backdrop-blur-sm border-2 border-cyan-400 rounded-xl shadow-lg overflow-hidden">
                <div className="absolute top-2 left-3 right-3">
                  <p className="text-sm font-bold text-gray-900">Kitchen</p>
                  <p className="text-xs text-gray-500 mt-0.5">Smart appliances</p>
                </div>
                
                <div className="absolute bottom-2 left-3 right-3 flex gap-2">
                  {[
                    { icon: '💡', label: 'Lights', delay: 1.65 },
                    { icon: '🔌', label: 'Outlets', delay: 1.8 }
                  ].map((device, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: device.delay, 
                        type: 'spring',
                        stiffness: 300,
                        damping: 15
                      }}
                      className="flex items-center gap-1.5 bg-cyan-50 px-2 py-1 rounded-lg"
                    >
                      <span className="text-sm">{device.icon}</span>
                      <span className="text-xs font-medium text-cyan-700">{device.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 pointer-events-none" />
              </div>
            </motion.div>

            {/* BEDROOM - Bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{ 
                bottom: '8%', 
                right: '8%', 
                width: '36%', 
                height: '28%' 
              }}
            >
              <div className="relative w-full h-full bg-white/95 backdrop-blur-sm border-2 border-purple-400 rounded-xl shadow-lg overflow-hidden">
                <div className="absolute top-2 left-3 right-3">
                  <p className="text-sm font-bold text-gray-900">Bedroom</p>
                  <p className="text-xs text-gray-500 mt-0.5">Rest & relaxation</p>
                </div>
                
                <div className="absolute bottom-2 left-3 right-3 flex gap-2">
                  {[
                    { icon: '💡', label: 'Lights', delay: 1.95 },
                    { icon: '🌡️', label: 'Climate', delay: 2.1 },
                    { icon: '🔒', label: 'Lock', delay: 2.25 }
                  ].map((device, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: device.delay, 
                        type: 'spring',
                        stiffness: 300,
                        damping: 15
                      }}
                      className="flex items-center gap-1.5 bg-purple-50 px-2 py-1 rounded-lg"
                    >
                      <span className="text-sm">{device.icon}</span>
                      <span className="text-xs font-medium text-purple-700">{device.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-indigo-400/5 pointer-events-none" />
              </div>
            </motion.div>

            {/* Hallway label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="absolute top-[12%] left-1/2 -translate-x-1/2"
            >
              <div className="bg-blue-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-300/30">
                <p className="text-xs font-medium text-blue-600">Entry & Hallway</p>
              </div>
            </motion.div>

            {/* Connectivity indicators */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {/* Connection lines between rooms */}
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                x1="46%" y1="40%" x2="54%" y2="40%"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                x1="50%" y1="60%" x2="50%" y2="72%"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="flex justify-around items-center py-4 px-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200"
        >
          <div className="text-center">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.7, type: 'spring', stiffness: 200 }}
              className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-blue-600`}
            >
              12
            </motion.p>
            <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Smart Devices</p>
          </div>
          
          <div className="w-px h-8 bg-gray-300" />
          
          <div className="text-center">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.8, type: 'spring', stiffness: 200 }}
              className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-indigo-600`}
            >
              4
            </motion.p>
            <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Connected Zones</p>
          </div>
          
          <div className="w-px h-8 bg-gray-300" />
          
          <div className="text-center">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.9, type: 'spring', stiffness: 200 }}
              className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-cyan-600`}
            >
              100%
            </motion.p>
            <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Full Coverage</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
