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
  const [showNetwork, setShowNetwork] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Auto-trigger network visualization when section enters view
  useEffect(() => {
    if (isInView && !showNetwork) {
      const timer = setTimeout(() => setShowNetwork(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, showNetwork]);

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
            Seamless roaming.
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Enterprise mesh network.
          </p>
        </motion.div>

        {/* iPhone Frame with UniFi-style Visualization */}
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
                
                {/* Clean Floor Plan - 3 rooms */}
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

                {/* Network Coverage with UniFi-style APs */}
                {showNetwork && (
                  <>
                    {/* AP 1 - Living Room */}
                    <motion.g>
                      {/* Pulsing coverage zone */}
                      <motion.circle 
                        cx="80" cy="170" r="50"
                        fill="url(#coverageGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ 
                          r: 50, 
                          opacity: [0, 0.25, 0.2, 0.25]
                        }}
                        transition={{ 
                          r: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                          opacity: { 
                            duration: 3, 
                            delay: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                      
                      {/* UniFi AP - White disc with LED ring */}
                      <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3, type: 'spring', stiffness: 300 }}
                      >
                        {/* AP body - white circular disc */}
                        <circle cx="80" cy="170" r="7" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                        
                        {/* LED ring - breathing blue light */}
                        <motion.circle 
                          cx="80" cy="170" r="9"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Center LED dot */}
                        <motion.circle 
                          cx="80" cy="170" r="2"
                          fill="#3b82f6"
                          animate={{ 
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.g>
                    </motion.g>

                    {/* AP 2 - Kitchen */}
                    <motion.g>
                      <motion.circle 
                        cx="200" cy="170" r="50"
                        fill="url(#coverageGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ 
                          r: 50, 
                          opacity: [0, 0.25, 0.2, 0.25]
                        }}
                        transition={{ 
                          r: { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                          opacity: { 
                            duration: 3, 
                            delay: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                      
                      <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5, type: 'spring', stiffness: 300 }}
                      >
                        <circle cx="200" cy="170" r="7" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                        <motion.circle 
                          cx="200" cy="170" r="9"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.7,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.circle 
                          cx="200" cy="170" r="2"
                          fill="#3b82f6"
                          animate={{ 
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.7,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.g>
                    </motion.g>

                    {/* AP 3 - Bedrooms */}
                    <motion.g>
                      <motion.circle 
                        cx="140" cy="370" r="50"
                        fill="url(#coverageGradient)"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ 
                          r: 50, 
                          opacity: [0, 0.25, 0.2, 0.25]
                        }}
                        transition={{ 
                          r: { duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
                          opacity: { 
                            duration: 3, 
                            delay: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                      
                      <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7, type: 'spring', stiffness: 300 }}
                      >
                        <circle cx="140" cy="370" r="7" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                        <motion.circle 
                          cx="140" cy="370" r="9"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.9,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.circle 
                          cx="140" cy="370" r="2"
                          fill="#3b82f6"
                          animate={{ 
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.9,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.g>
                    </motion.g>
                  </>
                )}

                {/* SVG Gradient - Subtle coverage */}
                <defs>
                  <radialGradient id="coverageGradient">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Smaller Stats Card */}
              {showNetwork && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-10 left-0 right-0 flex justify-center px-8"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl px-4 py-2.5 shadow-lg border border-gray-200">
                    <p className="text-xs text-gray-700 font-medium text-center">
                      <span className="text-blue-600 font-semibold">3 Access Points</span>
                      {' • '}
                      <span className="text-blue-600 font-semibold">100% Coverage</span>
                    </p>
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
