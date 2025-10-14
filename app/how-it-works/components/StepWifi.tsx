import { motion } from 'framer-motion';

/**
 * Step 2: Wi-Fi Foundation - Smooth Apple-Style Network Visualization
 * 
 * Features:
 * - Room-named access points (not "AP1/AP2")
 * - Slower, more confident animations (4s pulses)
 * - Gentler opacity transitions (peak 0.4 instead of 0.6)
 * - Professional UniFi-meets-Apple aesthetic
 * - Smooth wave propagation with increased stagger
 * - Coverage heat map visualization
 * - Real-time network stats
 */
export default function StepWifi({ 
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
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-12 overflow-hidden`}
    >
      {/* Dark grid pattern - subtle */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: fullScreen ? '40px 40px' : '30px 30px'
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
          <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-white mb-2`}>
            Enterprise Wi-Fi Coverage
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-cyan-400`}>
            Fast, secure, and reliable in every room
          </p>
        </motion.div>

        {/* Coverage Map */}
        <div className="flex-1 relative flex items-center justify-center">
          
          {/* Floor outline - same as Step 1 */}
          <div className={`relative ${fullScreen ? 'w-96 h-96' : 'w-56 h-56'}`}>
            
            {/* House outline */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              <motion.rect
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.35 }}
                transition={{ delay: 0.3, duration: 1 }}
                x="20" y="40" width="160" height="140"
                fill="none"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              
              {/* Room dividers */}
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

            {/* ACCESS POINT 1 - Living Room (Left side) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: 20 }}
            >
              {/* Signal rings - SLOWER, SMOOTHER */}
              {[1, 2, 3].map((ring, i) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 -m-6"
                  animate={{
                    scale: [1, 2.8, 2.8],
                    opacity: [0.4, 0.15, 0] // Gentler peak (was 0.6)
                  }}
                  transition={{
                    duration: 4, // Slower (was 2.5s)
                    repeat: Infinity,
                    delay: i * 1.2, // More stagger (was 0.8s)
                    ease: [0.22, 1, 0.36, 1] // Apple easing
                  }}
                >
                  <div className={`${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border-2 border-cyan-400/80`} />
                </motion.div>
              ))}

              {/* AP Icon */}
              <div className={`relative ${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-2xl shadow-cyan-500/40`}>
                <svg className={`${fullScreen ? 'w-8 h-8' : 'w-6 h-6'} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                
                {/* Status pulse - slower, more confident */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.15, 1], 
                    opacity: [1, 0.6, 1] 
                  }}
                  transition={{ 
                    duration: 2.5, // Slower pulse
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-1 right-1 ${fullScreen ? 'w-3 h-3' : 'w-2 h-2'} rounded-full bg-green-400 shadow-lg shadow-green-400/50`}
                />
              </div>

              {/* Label - Room name instead of "AP1" */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className={`absolute ${fullScreen ? '-bottom-10' : '-bottom-8'} left-1/2 -translate-x-1/2 whitespace-nowrap`}
              >
                <div className="bg-cyan-500/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-400/30">
                  <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} font-semibold text-cyan-300`}>
                    Living Room
                  </p>
                  <p className={`${fullScreen ? 'text-[10px]' : 'text-[8px]'} text-cyan-400/70 mt-0.5`}>
                    2.4 & 5 GHz
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* ACCESS POINT 2 - Bedroom (Right side) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: 20 }}
            >
              {/* Signal rings - SLOWER, SMOOTHER */}
              {[1, 2, 3].map((ring, i) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 -m-6"
                  animate={{
                    scale: [1, 2.8, 2.8],
                    opacity: [0.4, 0.15, 0] // Gentler peak
                  }}
                  transition={{
                    duration: 4, // Slower
                    repeat: Infinity,
                    delay: 0.6 + i * 1.2, // Offset from AP1
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <div className={`${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border-2 border-blue-400/80`} />
                </motion.div>
              ))}

              {/* AP Icon */}
              <div className={`relative ${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-2xl shadow-blue-500/40`}>
                <svg className={`${fullScreen ? 'w-8 h-8' : 'w-6 h-6'} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                
                {/* Status pulse */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.15, 1], 
                    opacity: [1, 0.6, 1] 
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.8, // Offset from AP1
                    ease: "easeInOut"
                  }}
                  className={`absolute top-1 right-1 ${fullScreen ? 'w-3 h-3' : 'w-2 h-2'} rounded-full bg-green-400 shadow-lg shadow-green-400/50`}
                />
              </div>

              {/* Label - Room name */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className={`absolute ${fullScreen ? '-bottom-10' : '-bottom-8'} left-1/2 -translate-x-1/2 whitespace-nowrap`}
              >
                <div className="bg-blue-500/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-400/30">
                  <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} font-semibold text-blue-300`}>
                    Bedroom
                  </p>
                  <p className={`${fullScreen ? 'text-[10px]' : 'text-[8px]'} text-blue-400/70 mt-0.5`}>
                    2.4 & 5 GHz
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Coverage heat map overlay - SMOOTHER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }} // Subtler (was 0.4)
              transition={{ delay: 1.5, duration: 1.2 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 25% 50%, rgba(6, 182, 212, 0.35) 0%, transparent 45%),
                  radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.35) 0%, transparent 45%)
                `,
                filter: 'blur(35px)',
                mixBlendMode: 'screen'
              }}
            />

            {/* Smooth breathing overlay - VERY SUBTLE */}
            <motion.div
              animate={{
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 60%)
                `,
                filter: 'blur(40px)'
              }}
            />

            {/* Connection line - smooth fade in */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.25 }} // More subtle (was 0.3)
                transition={{ delay: 1.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                x1="25%" y1="50%" x2="75%" y2="25%"
                stroke="rgba(6, 182, 212, 0.6)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        {/* Stats Grid - Professional styling */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-3 gap-3 px-2"
        >
          {/* Speed */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10 hover:border-green-400/30 transition-colors duration-500`}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
              />
              <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide font-medium`}>
                Speed
              </span>
            </div>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.0, type: 'spring', stiffness: 200, damping: 15 }}
              className={`${fullScreen ? 'text-xl' : 'text-base'} font-bold text-white`}
            >
              1 Gbps
            </motion.p>
            <p className={`${fullScreen ? 'text-[10px]' : 'text-[8px]'} text-gray-500 mt-1`}>
              Full bandwidth
            </p>
          </div>

          {/* Devices */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10 hover:border-cyan-400/30 transition-colors duration-500`}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
              />
              <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide font-medium`}>
                Devices
              </span>
            </div>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.1, type: 'spring', stiffness: 200, damping: 15 }}
              className={`${fullScreen ? 'text-xl' : 'text-base'} font-bold text-white`}
            >
              12
            </motion.p>
            <p className={`${fullScreen ? 'text-[10px]' : 'text-[8px]'} text-gray-500 mt-1`}>
              Connected now
            </p>
          </div>

          {/* Coverage */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10 hover:border-blue-400/30 transition-colors duration-500`}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
              />
              <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide font-medium`}>
                Coverage
              </span>
            </div>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: 'spring', stiffness: 200, damping: 15 }}
              className={`${fullScreen ? 'text-xl' : 'text-base'} font-bold text-white`}
            >
              100%
            </motion.p>
            <p className={`${fullScreen ? 'text-[10px]' : 'text-[8px]'} text-gray-500 mt-1`}>
              Every corner
            </p>
          </div>
        </motion.div>

        {/* Status indicator - confident and subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
          className="flex items-center justify-center gap-2 mt-5"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2.5, // Slower, more confident
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
          />
          <span className={`${fullScreen ? 'text-sm' : 'text-[10px]'} text-green-400 font-medium tracking-wide`}>
            All Systems Optimal
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
