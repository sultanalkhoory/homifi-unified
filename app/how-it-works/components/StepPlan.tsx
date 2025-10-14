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
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <span className="text-sm font-semibold text-gray-900 mb-2">Living Room</span>
                  
                  {/* Device icons - clean and simple */}
                  <div className="flex gap-1.5">
                    {['💡', '🌡️', '🪟'].map((icon, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 300 }}
                        className="text-lg"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* KITCHEN - Clean card */}
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-0 right-0 w-36 h-32"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-indigo-300 rounded-lg shadow-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <span className="text-sm font-semibold text-gray-900 mb-2">Kitchen</span>
                  
                  <div className="flex gap-1.5">
                    {['💡', '🔌'].map((icon, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.0 + i * 0.15, type: 'spring', stiffness: 300 }}
                        className="text-lg"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BEDROOM - Clean card */}
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-0 left-0 w-36 h-32"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-lg shadow-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <span className="text-sm font-semibold text-gray-900 mb-2">Bedroom</span>
                  
                  <div className="flex gap-1.5">
                    {['💡', '🌡️', '🔒'].map((icon, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2 + i * 0.15, type: 'spring', stiffness: 300 }}
                        className="text-lg"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* OFFICE - Clean card */}
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-0 right-0 w-36 h-32"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-cyan-300 rounded-lg shadow-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <span className="text-sm font-semibold text-gray-900 mb-2">Office</span>
                  
                  <div className="flex gap-1.5">
                    {['💡', '🔌'].map((icon, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.4 + i * 0.15, type: 'spring', stiffness: 300 }}
                        className="text-lg"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connecting lines - subtle */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(10px)' }}>
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                x1="28%" y1="50%" x2="72%" y2="50%"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                x1="50%" y1="28%" x2="50%" y2="72%"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        {/* Stats Footer - All same blue color */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-around items-center py-4 px-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200"
        >
          <div className="text-center">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.9, type: 'spring', stiffness: 200 }}
              className={`${fullScreen ? 'text-2xl' : 'text-lg'} font-bold text-blue-600`}
            >
              12
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
