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
export default function StepDesign({ 
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
            Custom zone mapping • No programming knowledge required
          </p>
        </motion.div>

        {/* Isometric 3D Floor Plan - Apple Style */}
        <div className="flex-1 flex items-center justify-center perspective-1000 relative">
          
          {/* Subtle heat map overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.25, 0.4, 0.25],
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
                radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.18) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)
              `,
              filter: 'blur(40px)'
            }}
          />

          {/* House Container - Isometric 3D View */}
          <div 
            className={`relative ${fullScreen ? 'w-[420px] h-[420px]' : 'w-[320px] h-[320px]'}`}
            style={{
              transform: 'rotateX(60deg) rotateZ(-45deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            
            {/* House outline - isometric blueprint */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              {/* Main house outline */}
              <motion.rect
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ delay: 0.3, duration: 1 }}
                x="20" y="40" width="160" height="140"
                fill="none"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              
              {/* Interior walls - realistic layout */}
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                x1="100" y1="40" x2="100" y2="180"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                x1="20" y1="110" x2="180" y2="110"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
            </svg>

            {/* LIVING ROOM - Clean isometric card */}
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-0 left-0 w-36 h-32"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300 rounded-lg shadow-lg">
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Living Room</p>
                      <p className="text-[10px] text-gray-500">5 devices</p>
                    </div>
                  </div>
                  
                  {/* Device icons - sequential animation */}
                  <div className="flex gap-1 flex-wrap">
                    {['💡', '🌡️', '📺', '🔊', '📹'].map((icon, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 200 }}
                        className="text-sm"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* KITCHEN - Top right */}
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-0 right-0 w-36 h-32"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300 rounded-lg shadow-lg">
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Kitchen</p>
                      <p className="text-[10px] text-gray-500">3 devices</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 flex-wrap">
                    {['💡', '🌡️', '☕'].map((icon, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.0 + i * 0.1, type: 'spring', stiffness: 200 }}
                        className="text-sm"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BEDROOM - Bottom left */}
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-0 left-0 w-36 h-32"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300 rounded-lg shadow-lg">
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Bedroom</p>
                      <p className="text-[10px] text-gray-500">4 devices</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 flex-wrap">
                    {['💡', '🌡️', '🪟', '🔒'].map((icon, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                        className="text-sm"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* OFFICE - Bottom right */}
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-0 right-0 w-36 h-32"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300 rounded-lg shadow-lg">
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Office</p>
                      <p className="text-[10px] text-gray-500">3 devices</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 flex-wrap">
                    {['💡', '🌡️', '📹'].map((icon, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.4 + i * 0.1, type: 'spring', stiffness: 200 }}
                        className="text-sm"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="mt-6 flex items-center justify-center gap-6"
        >
          <div className="text-center">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.9, type: 'spring', stiffness: 200 }}
              className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-blue-600`}
            >
              15
            </motion.p>
            <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Devices</p>
          </div>
          
          <div className="w-px h-8 bg-gray-300" />
          
          <div className="text-center">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.0, type: 'spring', stiffness: 200 }}
              className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-blue-600`}
            >
              4
            </motion.p>
            <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Zones</p>
          </div>
          
          <div className="w-px h-8 bg-gray-300" />
          
          <div className="text-center">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.1, type: 'spring', stiffness: 200 }}
              className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-blue-600`}
            >
              100%
            </motion.p>
            <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-600`}>Coverage</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
