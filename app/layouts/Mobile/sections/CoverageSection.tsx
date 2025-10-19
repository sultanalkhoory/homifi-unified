import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// IPhoneFrame component - simplified for demo
function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="relative w-[280px] h-[560px] bg-black rounded-[46px] p-2.5 mx-auto" 
      style={{ 
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.12), 0 16px 48px rgba(0, 0, 0, 0.16)'
      }}
    >
      <div className="relative w-full h-full bg-white rounded-[37px] overflow-hidden">
        {children}
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[80px] h-[21px] bg-black rounded-full z-30" />
      </div>
    </div>
  );
}

export default function CoverageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bloomActive, setBloomActive] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Auto-trigger bloom animation when section comes into view
  useEffect(() => {
    if (isInView && !bloomActive) {
      const timer = setTimeout(() => setBloomActive(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isInView, bloomActive]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-3">
            Perfect WiFi
          </div>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 leading-tight">
            Seamless coverage.<br />
            Every corner.
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Enterprise mesh network.
          </p>
        </motion.div>

        {/* iPhone Frame with Floor Plan */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="flex justify-center"
        >
          <IPhoneFrame>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-white">
              
              <svg viewBox="0 0 280 560" className="w-full h-full">
                
                {/* Floor Plan - Clean minimal rooms */}
                <motion.rect 
                  x="20" y="80" width="120" height="160" 
                  fill="none" stroke="#d1d5db" strokeWidth="2" rx="6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.rect 
                  x="140" y="80" width="120" height="160" 
                  fill="none" stroke="#d1d5db" strokeWidth="2" rx="6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.rect 
                  x="20" y="240" width="240" height="200" 
                  fill="none" stroke="#d1d5db" strokeWidth="2" rx="6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                
                {/* Room Labels */}
                <motion.text 
                  x="80" y="165" textAnchor="middle" 
                  fill="#9ca3af" fontSize="13" fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Living Room
                </motion.text>
                <motion.text 
                  x="200" y="165" textAnchor="middle" 
                  fill="#9ca3af" fontSize="13" fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Kitchen
                </motion.text>
                <motion.text 
                  x="140" y="345" textAnchor="middle" 
                  fill="#9ca3af" fontSize="13" fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Bedrooms
                </motion.text>
                
                {/* Coverage Blooms - Unified gradient system */}
                {bloomActive && (
                  <>
                    {/* AP 1 - Living Room Bloom */}
                    <motion.g>
                      {/* Outer bloom ring - largest coverage */}
                      <motion.circle 
                        cx="80" cy="170" r="70"
                        fill="url(#bloomGradient1)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 70, opacity: 0.15 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                      {/* Middle bloom ring */}
                      <motion.circle 
                        cx="80" cy="170" r="45"
                        fill="url(#bloomGradient2)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 45, opacity: 0.2 }}
                        transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      />
                      {/* Inner bloom ring */}
                      <motion.circle 
                        cx="80" cy="170" r="25"
                        fill="url(#bloomGradient3)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 25, opacity: 0.25 }}
                        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                      {/* AP dot - clean white with glow */}
                      <motion.circle 
                        cx="80" cy="170" r="6"
                        fill="white"
                        filter="url(#glow)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 300 }}
                      />
                    </motion.g>

                    {/* AP 2 - Kitchen Bloom */}
                    <motion.g>
                      <motion.circle 
                        cx="200" cy="170" r="70"
                        fill="url(#bloomGradient1)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 70, opacity: 0.15 }}
                        transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="200" cy="170" r="45"
                        fill="url(#bloomGradient2)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 45, opacity: 0.2 }}
                        transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="200" cy="170" r="25"
                        fill="url(#bloomGradient3)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 25, opacity: 0.25 }}
                        transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="200" cy="170" r="6"
                        fill="white"
                        filter="url(#glow)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.3, type: 'spring', stiffness: 300 }}
                      />
                    </motion.g>

                    {/* AP 3 - Bedrooms Bloom */}
                    <motion.g>
                      <motion.circle 
                        cx="140" cy="370" r="70"
                        fill="url(#bloomGradient1)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 70, opacity: 0.15 }}
                        transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="140" cy="370" r="45"
                        fill="url(#bloomGradient2)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 45, opacity: 0.2 }}
                        transition={{ duration: 1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="140" cy="370" r="25"
                        fill="url(#bloomGradient3)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 25, opacity: 0.25 }}
                        transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="140" cy="370" r="6"
                        fill="white"
                        filter="url(#glow)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.8, type: 'spring', stiffness: 300 }}
                      />
                    </motion.g>
                  </>
                )}

                {/* SVG Definitions - Gradients and filters */}
                <defs>
                  {/* Unified soft blue/teal gradient - outer ring */}
                  <radialGradient id="bloomGradient1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Middle ring - slightly more visible */}
                  <radialGradient id="bloomGradient2">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Inner ring - most visible */}
                  <radialGradient id="bloomGradient3">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>

                  {/* Soft glow for AP dots */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Stats Card - Frosted glass at bottom */}
              {bloomActive && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 0.6 }}
                  className="absolute bottom-10 left-0 right-0 flex justify-center px-8"
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600 leading-none">100%</p>
                        <p className="text-[10px] text-gray-600 uppercase tracking-wide mt-1.5 font-medium">Coverage</p>
                      </div>
                      <div className="w-px h-10 bg-gray-300/50" />
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600 leading-none">Zero</p>
                        <p className="text-[10px] text-gray-600 uppercase tracking-wide mt-1.5 font-medium">Dead Zones</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </IPhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}
