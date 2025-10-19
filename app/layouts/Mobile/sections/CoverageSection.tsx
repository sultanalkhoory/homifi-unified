'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import IPhoneFrame from "@/components/ui/IPhoneFrame";

export default function CoverageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [networkOn, setNetworkOn] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Auto-on when section enters viewport
  useEffect(() => {
    if (isInView && !networkOn) {
      const timer = setTimeout(() => setNetworkOn(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isInView, networkOn]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Text ABOVE iPhone - matches other mobile sections */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-3">
            Perfect Coverage
          </div>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 leading-tight">
            Every corner.<br />
            Every device.
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Always connected.
          </p>
        </motion.div>

        {/* iPhone */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="flex justify-center"
        >
          <IPhoneFrame>
            <div className="relative w-full h-full bg-gray-50">
              
              {/* Floor plan SVG */}
              <svg viewBox="0 0 280 560" className="w-full h-full">
                {/* Room outlines */}
                <rect x="20" y="80" width="120" height="160" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                <rect x="140" y="80" width="120" height="160" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                <rect x="20" y="240" width="240" height="200" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                
                {/* Room labels */}
                <text x="80" y="155" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="500">Living</text>
                <text x="200" y="155" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="500">Kitchen</text>
                <text x="140" y="340" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="500">Bedrooms</text>
                
                {/* Access Points */}
                {networkOn && (
                  <>
                    {/* AP 1 - Living */}
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    >
                      <circle cx="80" cy="170" r="30" fill="#3b82f6" opacity="0.08" />
                      <circle cx="80" cy="170" r="18" fill="#3b82f6" opacity="0.12" />
                      <circle cx="80" cy="170" r="7" fill="#3b82f6" />
                      <circle cx="80" cy="170" r="3.5" fill="white" />
                    </motion.g>
                    
                    {/* AP 2 - Kitchen */}
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                    >
                      <circle cx="200" cy="170" r="30" fill="#6366f1" opacity="0.08" />
                      <circle cx="200" cy="170" r="18" fill="#6366f1" opacity="0.12" />
                      <circle cx="200" cy="170" r="7" fill="#6366f1" />
                      <circle cx="200" cy="170" r="3.5" fill="white" />
                    </motion.g>
                    
                    {/* AP 3 - Bedrooms */}
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                    >
                      <circle cx="140" cy="370" r="30" fill="#8b5cf6" opacity="0.08" />
                      <circle cx="140" cy="370" r="18" fill="#8b5cf6" opacity="0.12" />
                      <circle cx="140" cy="370" r="7" fill="#8b5cf6" />
                      <circle cx="140" cy="370" r="3.5" fill="white" />
                    </motion.g>
                  </>
                )}

                {/* Moving device with connection lines */}
                {networkOn && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {/* Connection lines - timed to appear when device is near each AP */}
                    <motion.line
                      x1="60" y1="190" x2="80" y2="170"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      animate={{ opacity: [0, 0.6, 0.6, 0, 0, 0, 0] }}
                      transition={{ duration: 16, repeat: Infinity, times: [0, 0.05, 0.2, 0.22, 0.9, 0.95, 1] }}
                    />

                    <motion.line
                      x1="140" y1="160" x2="200" y2="170"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      animate={{ opacity: [0, 0, 0, 0.6, 0.6, 0, 0] }}
                      transition={{ duration: 16, repeat: Infinity, times: [0, 0.22, 0.25, 0.3, 0.42, 0.45, 1] }}
                    />

                    <motion.line
                      x1="170" y1="310" x2="140" y2="370"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      animate={{ opacity: [0, 0, 0, 0, 0, 0.6, 0.6, 0] }}
                      transition={{ duration: 16, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 0.7, 0.75, 0.85, 1] }}
                    />

                    {/* Moving Device */}
                    <motion.g
                      animate={{
                        x: [60, 80, 140, 200, 220, 170, 140, 90, 60],
                        y: [190, 180, 160, 160, 180, 310, 370, 330, 190]
                      }}
                      transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: 'linear',
                        times: [0, 0.15, 0.28, 0.38, 0.42, 0.58, 0.72, 0.88, 1]
                      }}
                    >
                      {/* Device body */}
                      <circle r="11" fill="white" stroke="#3b82f6" strokeWidth="2.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
                      
                      {/* Phone icon */}
                      <rect x="-3.5" y="-5" width="7" height="10" rx="1.5" fill="#3b82f6" opacity="0.15" />
                      <rect x="-2.5" y="-4" width="5" height="6.5" rx="0.5" fill="#3b82f6" />
                      <circle cy="3.2" r="0.7" fill="white" />

                      {/* Signal bars - always full */}
                      <g transform="translate(9, -8)">
                        <rect x="0" y="4.5" width="1.5" height="2.5" fill="#10b981" rx="0.4" />
                        <rect x="2.2" y="3" width="1.5" height="4" fill="#10b981" rx="0.4" />
                        <rect x="4.4" y="1.5" width="1.5" height="5.5" fill="#10b981" rx="0.4" />
                      </g>

                      {/* Handoff pulse effect */}
                      <motion.circle
                        r="15"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        animate={{ 
                          scale: [1, 1.8, 1],
                          opacity: [0, 0, 0.7, 0, 0, 0, 0.7, 0, 0, 0, 0.7, 0]
                        }}
                        transition={{
                          duration: 16,
                          repeat: Infinity,
                          times: [0, 0.14, 0.16, 0.18, 0.27, 0.29, 0.31, 0.4, 0.56, 0.58, 0.6, 1]
                        }}
                      />
                    </motion.g>

                    {/* Path trail */}
                    <motion.path
                      d="M 60 190 Q 70 185, 80 180 L 140 160 Q 170 160, 200 160 Q 215 170, 220 180 Q 195 245, 170 310 L 140 370 Q 115 350, 90 330 L 60 190"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      opacity="0.2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, delay: 1.2 }}
                    />
                  </motion.g>
                )}
              </svg>

              {/* Stats overlay - repositioned to top to avoid button conflict */}
              {networkOn && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg z-30"
                >
                  <div className="flex items-center gap-3 text-xs">
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">100%</p>
                      <p className="text-[10px] text-gray-300">Coverage</p>
                    </div>
                    <div className="w-px h-7 bg-gray-600" />
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">3</p>
                      <p className="text-[10px] text-gray-300">APs</p>
                    </div>
                    <div className="w-px h-7 bg-gray-600" />
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">18</p>
                      <p className="text-[10px] text-gray-300">Devices</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </IPhoneFrame>
        </motion.div>

        {/* Copy - removed, now above iPhone */}
      </div>
    </section>
  );
}
