import { motion } from 'framer-motion';

export default function StepInstall({ isActive = true, fullScreen = true }: { isActive?: boolean; fullScreen?: boolean }) {
  const accessPoints = [
    { name: 'Living Room', position: { x: 25, y: 35 }, delay: 0.8 },
    { name: 'Kitchen', position: { x: 75, y: 35 }, delay: 1.0 },
    { name: 'Bedroom', position: { x: 25, y: 75 }, delay: 1.2 },
    { name: 'Office', position: { x: 75, y: 75 }, delay: 1.4 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-slate-50 to-indigo-50 p-6 md:p-12 overflow-hidden`}
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
            Enterprise Wi-Fi Setup
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
            Seamless coverage in every corner
          </p>
        </motion.div>

        {/* Coverage Visualization */}
        <div className="flex-1 relative">
          
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wifi-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1" fill="currentColor" className="text-indigo-500" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wifi-grid)" />
            </svg>
          </div>

          {/* Floor Plan */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl aspect-square">
              
              {/* House Outline */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute inset-0 border-3 border-gray-300 rounded-2xl bg-white/40 backdrop-blur-sm"
              />

              {/* Heat Map Overlay - Multiple Layers for Rich Coverage Effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                {accessPoints.map((ap, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1.8],
                      opacity: [0, 0.15, 0.1]
                    }}
                    transition={{ 
                      delay: ap.delay,
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute rounded-full"
                    style={{
                      left: `${ap.position.x}%`,
                      top: `${ap.position.y}%`,
                      width: '45%',
                      height: '45%',
                      transform: 'translate(-50%, -50%)',
                      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
                      filter: 'blur(30px)'
                    }}
                  />
                ))}
              </div>

              {/* Signal Wave Rings */}
              {accessPoints.map((ap, apIndex) => (
                <div
                  key={`waves-${apIndex}`}
                  className="absolute"
                  style={{
                    left: `${ap.position.x}%`,
                    top: `${ap.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {[0, 1, 2].map((ring) => (
                    <motion.div
                      key={ring}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 2, 3],
                        opacity: [0.4, 0.2, 0]
                      }}
                      transition={{
                        delay: ap.delay + ring * 0.4,
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      className="absolute w-20 h-20 border-2 border-indigo-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}
                </div>
              ))}

              {/* Access Points */}
              {accessPoints.map((ap, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ 
                    delay: ap.delay,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  className="absolute"
                  style={{
                    left: `${ap.position.x}%`,
                    top: `${ap.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative group">
                    {/* Glow */}
                    <div className="absolute -inset-3 bg-gradient-to-br from-indigo-400/50 to-purple-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* AP Device */}
                    <div className="relative bg-white rounded-xl p-3 shadow-xl border-2 border-indigo-300">
                      {/* UniFi-style Icon */}
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                      
                      {/* Status Light */}
                      <motion.div
                        animate={{ 
                          opacity: [1, 0.5, 1],
                          scale: [1, 0.9, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-500 shadow-lg"
                      />
                    </div>

                    {/* AP Name Label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs font-medium text-gray-700 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
                        {ap.name} AP
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Central Router/Controller */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, type: 'spring', stiffness: 150 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-lg"
                  />
                  
                  {/* Controller Icon */}
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 shadow-2xl flex items-center justify-center border-4 border-white">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
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
          transition={{ delay: 1.8 }}
          className="mt-6 grid grid-cols-3 gap-3"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 text-center">
            <p className="text-lg font-bold text-black mb-1">4</p>
            <p className="text-xs text-gray-600">Access Points</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 text-center">
            <p className="text-lg font-bold text-black mb-1">Wi-Fi 6</p>
            <p className="text-xs text-gray-600">Latest Standard</p>
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
