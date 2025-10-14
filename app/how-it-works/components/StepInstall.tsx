import { motion } from 'framer-motion';

/**
 * Step 2: Wi-Fi Foundation - Enterprise Network with Ubiquiti Style
 * 
 * Features:
 * - Complex realistic floor plan (L-shaped, multiple rooms)
 * - Ubiquiti-style AP icons (white circular with LED)
 * - Smooth waves emanating from CENTER of APs outward (Apple-style easing)
 * - Room-named access points
 * - Professional network stats
 */
export default function StepInstall({ 
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
      {/* Dark grid pattern */}
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
            Fast, secure, everywhere
          </p>
        </motion.div>

        {/* Coverage Map */}
        <div className="flex-1 relative flex items-center justify-center">
          
          <div className={`relative ${fullScreen ? 'w-[420px] h-[380px]' : 'w-[320px] h-[280px]'}`}>
            
            {/* Complex Floor Plan - L-shaped house */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 380">
              {/* Main house outline - L-shaped */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.35 }}
                transition={{ delay: 0.3, duration: 1 }}
                d="M 40 60 L 40 340 L 240 340 L 240 240 L 380 240 L 380 60 Z"
                fill="none"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              
              {/* Interior walls - complex layout */}
              {/* Vertical walls */}
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
                x1="140" y1="60" x2="140" y2="240" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="3,3" />
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.55, duration: 0.6 }}
                x1="240" y1="60" x2="240" y2="180" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="3,3" />
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
                x1="320" y1="60" x2="320" y2="240" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="3,3" />
              
              {/* Horizontal walls */}
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.65, duration: 0.6 }}
                x1="40" y1="180" x2="380" y2="180" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="3,3" />
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
                x1="40" y1="260" x2="240" y2="260" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="3,3" />
            </svg>

            {/* ACCESS POINT 1 - Living Room (Center-left area) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute"
              style={{ left: '22%', top: '35%', transform: 'translate(-50%, -50%)', zIndex: 20 }}
            >
              {/* Smooth waves FROM CENTER - Apple-style */}
              {[1, 2, 3].map((ring, i) => (
                <motion.div
                  key={ring}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    width: ['0px', '180px', '180px'],
                    height: ['0px', '180px', '180px'],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1.0,
                    ease: [0.22, 1, 0.36, 1],
                    repeatDelay: 0
                  }}
                >
                  <div className="w-full h-full rounded-full border-2 border-cyan-400" />
                </motion.div>
              ))}

              {/* Ubiquiti UniFi AP - 3D design with depth */}
              <div className={`relative ${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-gray-50 to-white flex items-center justify-center`}
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
              >
                {/* Outer rim - adds depth */}
                <div className="absolute inset-0 rounded-full border border-gray-200" 
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(200,200,200,0.3) 100%)'
                  }}
                />
                
                {/* Blue LED ring - UniFi signature with glow */}
                <div className={`relative ${fullScreen ? 'w-9 h-9' : 'w-7 h-7'} rounded-full flex items-center justify-center`}
                  style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 100%)',
                    boxShadow: '0 0 12px rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <motion.div 
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className={`${fullScreen ? 'w-7 h-7' : 'w-5 h-5'} rounded-full border-2 border-cyan-400`}
                  />
                </div>
              </div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className={`absolute ${fullScreen ? '-bottom-12' : '-bottom-10'} left-1/2 -translate-x-1/2 whitespace-nowrap`}
              >
                <div className="bg-cyan-500/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-400/30">
                  <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} font-semibold text-cyan-300`}>
                    Living Room
                  </p>
                  <p className={`${fullScreen ? 'text-[10px]' : 'text-[8px]'} text-cyan-400/70 mt-0.5`}>
                    Wi-Fi 6
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* ACCESS POINT 2 - Bedroom (Top-right area) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute"
              style={{ right: '18%', top: '28%', transform: 'translate(50%, -50%)', zIndex: 20 }}
            >
              {/* Smooth waves FROM CENTER */}
              {[1, 2, 3].map((ring, i) => (
                <motion.div
                  key={ring}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    width: ['0px', '180px', '180px'],
                    height: ['0px', '180px', '180px'],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5 + i * 1.0,
                    ease: [0.22, 1, 0.36, 1],
                    repeatDelay: 0
                  }}
                >
                  <div className="w-full h-full rounded-full border-2 border-blue-400" />
                </motion.div>
              ))}

              {/* Ubiquiti UniFi AP */}
              <div className={`relative ${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-gray-50 to-white flex items-center justify-center`}
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
              >
                <div className="absolute inset-0 rounded-full border border-gray-200" 
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(200,200,200,0.3) 100%)'
                  }}
                />
                
                <div className={`relative ${fullScreen ? 'w-9 h-9' : 'w-7 h-7'} rounded-full flex items-center justify-center`}
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
                    boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)'
                  }}
                >
                  <motion.div 
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className={`${fullScreen ? 'w-7 h-7' : 'w-5 h-5'} rounded-full border-2 border-blue-400`}
                  />
                </div>
              </div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className={`absolute ${fullScreen ? '-bottom-12' : '-bottom-10'} left-1/2 -translate-x-1/2 whitespace-nowrap`}
              >
                <div className="bg-blue-500/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-400/30">
                  <p className={`${fullScreen ? 'text-xs' : 'text-[9px]'} font-semibold text-blue-300`}>
                    Bedroom
                  </p>
                  <p className={`${fullScreen ? 'text-[10px]' : 'text-[8px]'} text-blue-400/70 mt-0.5`}>
                    Wi-Fi 6
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Coverage heat map - SMOOTHER gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 22% 35%, rgba(6, 182, 212, 0.35) 0%, transparent 45%),
                  radial-gradient(circle at 82% 28%, rgba(59, 130, 246, 0.35) 0%, transparent 45%)
                `,
                filter: 'blur(50px)',
                mixBlendMode: 'screen'
              }}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-3 gap-3 px-2"
        >
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
          </div>

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
          </div>

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
          </div>
        </motion.div>

        {/* Status */}
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
              duration: 2.5,
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
