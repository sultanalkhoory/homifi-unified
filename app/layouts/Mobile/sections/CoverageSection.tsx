import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// iPhone Frame component
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

export default function PerfectWiFiSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showMesh, setShowMesh] = useState(false);
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Auto-transition from consumer router to HomiFi mesh when section enters view
  useEffect(() => {
    if (isInView && !hasAutoTriggered) {
      // Show consumer router first, then transition to mesh after 1.5s
      const timer = setTimeout(() => {
        setShowMesh(true);
        setHasAutoTriggered(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAutoTriggered]);

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
            Complete coverage.<br />
            Zero dead zones.
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Enterprise mesh network.
          </p>
        </motion.div>

        {/* iPhone Frame with Before/After Visualization */}
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
                
                {/* Floor Plan - 3 rooms */}
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
                  Living
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

                {/* BEFORE STATE: Consumer Router (single router, weak coverage) */}
                {!showMesh && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {/* Single router in corner - shows the problem */}
                    <motion.g
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                    >
                      {/* Router icon */}
                      <circle cx="50" cy="110" r="8" fill="#f97316" />
                      <circle cx="50" cy="110" r="4" fill="white" />
                    </motion.g>

                    {/* Weak/fading coverage from single router */}
                    <motion.circle 
                      cx="50" cy="110" r="60"
                      fill="url(#weakGradient)"
                      initial={{ r: 0, opacity: 0 }}
                      animate={{ r: 60, opacity: 0.3 }}
                      transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                    
                    {/* Dead zones - gray overlays in far areas */}
                    <motion.rect 
                      x="180" y="220" width="70" height="60" rx="6"
                      fill="#ef4444" opacity="0.15"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      transition={{ delay: 1.3 }}
                    />
                    <motion.rect 
                      x="50" y="360" width="80" height="70" rx="6"
                      fill="#ef4444" opacity="0.15"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      transition={{ delay: 1.35 }}
                    />
                    
                    {/* Weak signal indicators in problem areas */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      {/* Kitchen - weak signal */}
                      <circle cx="215" cy="250" r="2" fill="#ef4444" />
                      <path d="M 212 247 Q 215 245, 218 247" stroke="#ef4444" strokeWidth="1.5" fill="none" />
                      
                      {/* Bedroom - weak signal */}
                      <circle cx="90" cy="395" r="2" fill="#ef4444" />
                      <path d="M 87 392 Q 90 390, 93 392" stroke="#ef4444" strokeWidth="1.5" fill="none" />
                    </motion.g>
                  </motion.g>
                )}

                {/* AFTER STATE: HomiFi Mesh (3 APs, complete coverage) */}
                {showMesh && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* AP 1 - Living Room with full coverage */}
                    <motion.g>
                      <motion.circle 
                        cx="80" cy="170" r="55"
                        fill="url(#strongGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 55, opacity: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="80" cy="170" r="6"
                        fill="white"
                        stroke="#10b981"
                        strokeWidth="2"
                        filter="url(#glow)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 300 }}
                      />
                    </motion.g>

                    {/* AP 2 - Kitchen with full coverage */}
                    <motion.g>
                      <motion.circle 
                        cx="200" cy="170" r="55"
                        fill="url(#strongGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 55, opacity: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="200" cy="170" r="6"
                        fill="white"
                        stroke="#10b981"
                        strokeWidth="2"
                        filter="url(#glow)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4, type: 'spring', stiffness: 300 }}
                      />
                    </motion.g>

                    {/* AP 3 - Bedrooms with full coverage */}
                    <motion.g>
                      <motion.circle 
                        cx="140" cy="370" r="55"
                        fill="url(#strongGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 55, opacity: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle 
                        cx="140" cy="370" r="6"
                        fill="white"
                        stroke="#10b981"
                        strokeWidth="2"
                        filter="url(#glow)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6, type: 'spring', stiffness: 300 }}
                      />
                    </motion.g>

                    {/* Strong signal indicators throughout */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      {/* Living - strong signal */}
                      <circle cx="50" cy="135" r="2" fill="#10b981" />
                      <path d="M 47 132 Q 50 128, 53 132" stroke="#10b981" strokeWidth="1.5" fill="none" />
                      <path d="M 45 130 Q 50 124, 55 130" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.7" />
                      
                      {/* Kitchen - strong signal */}
                      <circle cx="230" cy="200" r="2" fill="#10b981" />
                      <path d="M 227 197 Q 230 193, 233 197" stroke="#10b981" strokeWidth="1.5" fill="none" />
                      <path d="M 225 195 Q 230 189, 235 195" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.7" />
                      
                      {/* Bedroom - strong signal */}
                      <circle cx="90" cy="400" r="2" fill="#10b981" />
                      <path d="M 87 397 Q 90 393, 93 397" stroke="#10b981" strokeWidth="1.5" fill="none" />
                      <path d="M 85 395 Q 90 389, 95 395" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.7" />
                    </motion.g>
                  </motion.g>
                )}

                {/* SVG Gradients */}
                <defs>
                  {/* Weak coverage gradient (orange/red - problem) */}
                  <radialGradient id="weakGradient">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                    <stop offset="70%" stopColor="#f97316" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Strong coverage gradient (green - solution) */}
                  <radialGradient id="strongGradient">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
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

              {/* Status Label - Shows which state we're viewing */}
              <motion.div
                className="absolute top-8 left-0 right-0 flex justify-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
                  <motion.p 
                    className="text-xs font-medium"
                    animate={{ 
                      color: showMesh ? '#10b981' : '#f97316'
                    }}
                  >
                    {showMesh ? 'HomiFi Mesh Network' : 'Consumer Router'}
                  </motion.p>
                </div>
              </motion.div>

              {/* Stats Card - Only shows after mesh appears */}
              {showMesh && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-10 left-0 right-0 flex justify-center px-8"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600 leading-none">100%</p>
                        <p className="text-[10px] text-gray-600 uppercase tracking-wide mt-1.5 font-medium">Coverage</p>
                      </div>
                      <div className="w-px h-10 bg-gray-300/50" />
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600 leading-none">Zero</p>
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
