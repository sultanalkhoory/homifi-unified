'use client';

import { motion } from 'framer-motion';

/**
 * Step 2: Wi-Fi Foundation
 * Full-screen UniFi-style network dashboard
 * Shows access points with coverage visualization
 */
export default function StepWifi({ 
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
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-12 overflow-hidden`}
    >
      {/* Dark grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
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
            Network Coverage
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-cyan-400`}>
            Enterprise-grade Wi-Fi
          </p>
        </motion.div>

        {/* Coverage Map */}
        <div className="flex-1 relative flex items-center justify-center">
          
          {/* Floor outline */}
          <div className={`relative ${fullScreen ? 'w-96 h-96' : 'w-56 h-56'}`}>
            {/* House outline */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
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

            {/* Access Point 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: 20 }}
            >
              {/* Signal rings */}
              {[1, 2, 3].map((ring, i) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 -m-6"
                  animate={{
                    scale: [1, 2.5, 2.5],
                    opacity: [0.6, 0.2, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut"
                  }}
                >
                  <div className={`${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border-2 border-cyan-400`} />
                </motion.div>
              ))}

              {/* AP Icon */}
              <div className={`relative ${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50`}>
                <svg className={`${fullScreen ? 'w-8 h-8' : 'w-6 h-6'} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute top-1 right-1 ${fullScreen ? 'w-3 h-3' : 'w-2 h-2'} rounded-full bg-green-400`}
                />
              </div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className={`absolute ${fullScreen ? '-bottom-8' : '-bottom-6'} left-1/2 -translate-x-1/2 whitespace-nowrap`}
              >
                <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} font-medium text-cyan-400`}>AP1</span>
              </motion.div>
            </motion.div>

            {/* Access Point 2 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
              className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: 20 }}
            >
              {/* Signal rings */}
              {[1, 2, 3].map((ring, i) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 -m-6"
                  animate={{
                    scale: [1, 2.5, 2.5],
                    opacity: [0.6, 0.2, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.3 + i * 0.8,
                    ease: "easeOut"
                  }}
                >
                  <div className={`${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border-2 border-blue-400`} />
                </motion.div>
              ))}

              {/* AP Icon */}
              <div className={`relative ${fullScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/50`}>
                <svg className={`${fullScreen ? 'w-8 h-8' : 'w-6 h-6'} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className={`absolute top-1 right-1 ${fullScreen ? 'w-3 h-3' : 'w-2 h-2'} rounded-full bg-green-400`}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className={`absolute ${fullScreen ? '-bottom-8' : '-bottom-6'} left-1/2 -translate-x-1/2 whitespace-nowrap`}
              >
                <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} font-medium text-blue-400`}>AP2</span>
              </motion.div>
            </motion.div>

            {/* Coverage heat map overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 25% 50%, rgba(6, 182, 212, 0.4) 0%, transparent 40%),
                  radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.4) 0%, transparent 40%)
                `,
                filter: 'blur(30px)',
                mixBlendMode: 'screen'
              }}
            />

            {/* Connection line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                x1="25%" y1="50%" x2="75%" y2="25%"
                stroke="rgba(6, 182, 212, 0.6)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-3 gap-3 px-2"
        >
          {/* Speed */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10`}>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide`}>Speed</span>
            </div>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.0, type: 'spring' }}
              className={`${fullScreen ? 'text-lg' : 'text-sm'} font-bold text-white`}
            >
              1 Gbps
            </motion.p>
          </div>

          {/* Devices */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10`}>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide`}>Devices</span>
            </div>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.1, type: 'spring' }}
              className={`${fullScreen ? 'text-lg' : 'text-sm'} font-bold text-white`}
            >
              12
            </motion.p>
          </div>

          {/* Coverage */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl ${fullScreen ? 'p-4' : 'p-2.5'} border border-white/10`}>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className={`${fullScreen ? 'text-xs' : 'text-[9px]'} text-gray-400 uppercase tracking-wide`}>Coverage</span>
            </div>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: 'spring' }}
              className={`${fullScreen ? 'text-lg' : 'text-sm'} font-bold text-white`}
            >
              100%
            </motion.p>
          </div>
        </motion.div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
          className="flex items-center justify-center gap-2 mt-4"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-400"
          />
          <span className={`${fullScreen ? 'text-sm' : 'text-[10px]'} text-green-400 font-medium`}>
            All Systems Optimal
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
