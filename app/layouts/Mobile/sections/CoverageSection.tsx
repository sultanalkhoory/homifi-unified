'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import IPhoneFrame from "@/components/ui/IPhoneFrame";
import GlassButton from "@/components/ui/GlassButton";

export default function CoverageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [manualControl, setManualControl] = useState(false);
  const [networkOn, setNetworkOn] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Auto-on when section enters viewport
  useEffect(() => {
    if (isInView && !manualControl && !networkOn) {
      const timer = setTimeout(() => setNetworkOn(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isInView, manualControl, networkOn]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* iPhone with floor plan */}
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
                  <>
                    {/* Connection line to AP 1 */}
                    <motion.line
                      x1="60" y1="190" x2="80" y2="170"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.6, 0.6, 0, 0, 0] }}
                      transition={{ duration: 20, repeat: Infinity, times: [0, 0.05, 0.2, 0.25, 0.95, 1] }}
                    />

                    {/* Connection line to AP 2 */}
                    <motion.line
                      x1="140" y1="160" x2="200" y2="170"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 0, 0.6, 0.6, 0, 0] }}
                      transition={{ duration: 20, repeat: Infinity, times: [0, 0.25, 0.3, 0.35, 0.45, 0.5, 1] }}
                    />

                    {/* Connection line to AP 3 */}
                    <motion.line
                      x1="170" y1="310" x2="140" y2="370"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 0, 0, 0, 0.6, 0.6, 0, 0] }}
                      transition={{ duration: 20, repeat: Infinity, times: [0, 0.5, 0.55, 0.6, 0.7, 0.75, 0.95, 1] }}
                    />

                    {/* Moving Device */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <motion.g
                        animate={{
                          x: [60, 80, 140, 200, 220, 170, 140, 90, 60],
                          y: [190, 180, 160, 160, 180, 310, 370, 330, 190]
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          times: [0, 0.15, 0.25, 0.38, 0.45, 0.6, 0.75, 0.9, 1]
                        }}
                      >
                        {/* Device shadow */}
                        <circle r="12" fill="black" opacity="0.1" cy="2" />
                        
                        {/* Device body */}
                        <circle r="11" fill="white" stroke="#3b82f6" strokeWidth="2.5" />
                        
                        {/* Phone icon */}
                        <rect x="-3.5" y="-5" width="7" height="10" rx="1.5" fill="#3b82f6" opacity="0.2" />
                        <rect x="-2.5" y="-4" width="5" height="6.5" rx="0.5" fill="#3b82f6" />
                        <circle cy="3.2" r="0.7" fill="white" />

                        {/* Signal bars */}
                        <motion.g transform="translate(9, -9)">
                          <rect x="0" y="5" width="1.8" height="2.5" fill="#10b981" rx="0.5" />
                          <rect x="2.5" y="3.5" width="1.8" height="4" fill="#10b981" rx="0.5" />
                          <rect x="5" y="2" width="1.8" height="5.5" fill="#10b981" rx="0.5" />
                        </motion.g>

                        {/* Handoff pulse */}
                        <motion.circle
                          r="14"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ 
                            scale: [0.8, 1.5, 0.8],
                            opacity: [0, 0, 0.8, 0, 0, 0, 0.8, 0, 0, 0, 0.8, 0, 0]
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            times: [0, 0.15, 0.2, 0.25, 0.38, 0.43, 0.48, 0.6, 0.65, 0.7, 0.75, 0.8, 1]
                          }}
                        />
                      </motion.g>
                    </motion.g>

                    {/* Path trail */}
                    <motion.path
                      d="M 60 190 Q 70 185, 80 180 L 140 160 Q 170 160, 200 160 Q 210 170, 220 180 Q 195 245, 170 310 L 140 370 Q 115 350, 90 330 L 60 190"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      opacity="0.25"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, delay: 1.2 }}
                    />
                  </>
                )}
              </svg>

              {/* Stats overlay */}
              {networkOn && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <div className="text-center">
                      <p className="text-base font-bold text-blue-600">100%</p>
                      <p className="text-[10px] text-gray-600">Coverage</p>
                    </div>
                    <div className="w-px h-6 bg-gray-300" />
                    <div className="text-center">
                      <p className="text-base font-bold text-purple-600">18</p>
                      <p className="text-[10px] text-gray-600">Devices</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Glass Button */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                <GlassButton
                  label={networkOn ? 'Network Connected' : 'Connect Network'}
                  onClick={() => {
                    setManualControl(true);
                    setNetworkOn(!networkOn);
                  }}
                />
              </div>
            </div>
          </IPhoneFrame>
        </motion.div>

        {/* Copy */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          <div className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-3">
            Perfect Coverage
          </div>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 leading-tight">
            Every corner.<br />
            Every device.
          </h2>
          <p className="text-lg text-gray-600 font-light mb-8">
            Always connected.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
