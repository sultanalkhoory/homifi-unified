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
'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import IPhoneFrame from "@/components/ui/IPhoneFrame";

export default function CoverageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [networkOn, setNetworkOn] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });'use client';

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
        
        {/* Text above iPhone */}
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
                {/* Rooms */}
                <rect x="20" y="80" width="120" height="160" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                <rect x="140" y="80" width="120" height="160" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                <rect x="20" y="240" width="240" height="200" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                
                {/* Labels */}
                <text x="80" y="155" textAnchor="middle" fill="#9ca3af" fontSize="12">Living</text>
                <text x="200" y="155" textAnchor="middle" fill="#9ca3af" fontSize="12">Kitchen</text>
                <text x="140" y="340" textAnchor="middle" fill="#9ca3af" fontSize="12">Bedrooms</text>
                
                {/* Access Points */}
                {networkOn && (
                  <>
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
                      <circle cx="80" cy="170" r="28" fill="#3b82f6" opacity="0.08" />
                      <circle cx="80" cy="170" r="16" fill="#3b82f6" opacity="0.15" />
                      <circle cx="80" cy="170" r="6" fill="#3b82f6" />
                      <circle cx="80" cy="170" r="3" fill="white" />
                    </motion.g>
                    
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
                      <circle cx="200" cy="170" r="28" fill="#6366f1" opacity="0.08" />
                      <circle cx="200" cy="170" r="16" fill="#6366f1" opacity="0.15" />
                      <circle cx="200" cy="170" r="6" fill="#6366f1" />
                      <circle cx="200" cy="170" r="3" fill="white" />
                    </motion.g>
                    
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}>
                      <circle cx="140" cy="370" r="28" fill="#8b5cf6" opacity="0.08" />
                      <circle cx="140" cy="370" r="16" fill="#8b5cf6" opacity="0.15" />
                      <circle cx="140" cy="370" r="6" fill="#8b5cf6" />
                      <circle cx="140" cy="370" r="3" fill="white" />
                    </motion.g>
                  </>
                )}

                {/* Moving device */}
                {networkOn && (
                  <>
                    {/* Connection line 1 */}
                    <motion.line
                      animate={{
                        x1: [65, 75, 80, 80, 80],
                        y1: [210, 195, 185, 185, 185],
                        opacity: [0.6, 0.6, 0.6, 0, 0]
                      }}
                      x2="80" y2="170"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Connection line 2 */}
                    <motion.line
                      animate={{
                        x1: [80, 80, 140, 180, 200, 200],
                        y1: [185, 185, 175, 172, 170, 170],
                        opacity: [0, 0, 0.6, 0.6, 0.6, 0]
                      }}
                      x2="200" y2="170"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Connection line 3 */}
                    <motion.line
                      animate={{
                        x1: [200, 200, 180, 160, 140, 140],
                        y1: [170, 170, 260, 320, 360, 360],
                        opacity: [0, 0, 0.6, 0.6, 0.6, 0]
                      }}
                      x2="140" y2="370"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Device circle - moves properly */}
                    <motion.circle
                      animate={{
                        cx: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        cy: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210]
                      }}
                      r="11"
                      fill="white"
                      stroke="#3b82f6"
                      strokeWidth="2.5"
                      filter="drop-shadow(0 2px 6px rgba(0,0,0,0.2))"
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: 'linear',
                        times: [0, 0.1, 0.18, 0.3, 0.36, 0.4, 0.55, 0.68, 0.76, 0.88, 1]
                      }}
                    />

                    {/* Phone icon - follows device */}
                    <motion.g
                      animate={{
                        x: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        y: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210]
                      }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: 'linear',
                        times: [0, 0.1, 0.18, 0.3, 0.36, 0.4, 0.55, 0.68, 0.76, 0.88, 1]
                      }}
                    >
                      <rect x="-3" y="-5" width="6" height="9" rx="1.2" fill="#3b82f6" opacity="0.2" />
                      <rect x="-2.2" y="-4" width="4.4" height="6" rx="0.6" fill="#3b82f6" />
                      <circle cy="2.8" r="0.6" fill="white" />
                      
                      {/* Signal bars */}
                      <rect x="7" y="-4" width="1.2" height="2" fill="#10b981" rx="0.3" />
                      <rect x="8.8" y="-5.5" width="1.2" height="3.5" fill="#10b981" rx="0.3" />
                      <rect x="10.6" y="-7" width="1.2" height="5" fill="#10b981" rx="0.3" />
                    </motion.g>

                    {/* Handoff pulse */}
                    <motion.circle
                      animate={{
                        cx: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        cy: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210],
                        scale: [1, 1, 1.5, 1, 1, 1, 1, 1.5, 1, 1, 1, 1.5, 1],
                        opacity: [0, 0, 0.6, 0, 0, 0, 0, 0.6, 0, 0, 0, 0.6, 0]
                      }}
                      r="15"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity,
                        times: [0, 0.16, 0.2, 0.22, 0.38, 0.42, 0.44, 0.54, 0.56, 0.74, 0.78, 0.8, 1]
                      }}
                    />

                    {/* Path trail */}
                    <motion.path
                      d="M 65 210 L 80 185 L 140 175 L 200 170 Q 190 215, 180 260 L 140 360 Q 120 322, 100 285 L 65 210"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      opacity="0.25"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.2 }}
                    />
                  </>
                )}
              </svg>

              {/* Stats card - centered in bottom space between floor plan and frame edge */}
              {networkOn && (
                <div className="absolute bottom-10 left-0 right-0 flex justify-center px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-black/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">100%</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">Coverage</p>
                      </div>
                      <div className="w-px h-8 bg-gray-700" />
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">3</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">APs</p>
                      </div>
                      <div className="w-px h-8 bg-gray-700" />
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">18</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">Devices</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </IPhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}

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
        
        {/* Text above iPhone */}
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
                {/* Rooms */}
                <rect x="20" y="80" width="120" height="160" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                <rect x="140" y="80" width="120" height="160" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                <rect x="20" y="240" width="240" height="200" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                
                {/* Labels */}
                <text x="80" y="155" textAnchor="middle" fill="#9ca3af" fontSize="12">Living</text>
                <text x="200" y="155" textAnchor="middle" fill="#9ca3af" fontSize="12">Kitchen</text>
                <text x="140" y="340" textAnchor="middle" fill="#9ca3af" fontSize="12">Bedrooms</text>
                
                {/* Access Points */}
                {networkOn && (
                  <>
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
                      <circle cx="80" cy="170" r="28" fill="#3b82f6" opacity="0.08" />
                      <circle cx="80" cy="170" r="16" fill="#3b82f6" opacity="0.15" />
                      <circle cx="80" cy="170" r="6" fill="#3b82f6" />
                      <circle cx="80" cy="170" r="3" fill="white" />
                    </motion.g>
                    
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
                      <circle cx="200" cy="170" r="28" fill="#6366f1" opacity="0.08" />
                      <circle cx="200" cy="170" r="16" fill="#6366f1" opacity="0.15" />
                      <circle cx="200" cy="170" r="6" fill="#6366f1" />
                      <circle cx="200" cy="170" r="3" fill="white" />
                    </motion.g>
                    
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}>
                      <circle cx="140" cy="370" r="28" fill="#8b5cf6" opacity="0.08" />
                      <circle cx="140" cy="370" r="16" fill="#8b5cf6" opacity="0.15" />
                      <circle cx="140" cy="370" r="6" fill="#8b5cf6" />
                      <circle cx="140" cy="370" r="3" fill="white" />
                    </motion.g>
                  </>
                )}

                {/* Moving device */}
                {networkOn && (
                  <>
                    {/* Connection line 1 */}
                    <motion.line
                      animate={{
                        x1: [65, 75, 80, 80, 80],
                        y1: [210, 195, 185, 185, 185],
                        opacity: [0.6, 0.6, 0.6, 0, 0]
                      }}
                      x2="80" y2="170"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Connection line 2 */}
                    <motion.line
                      animate={{
                        x1: [80, 80, 140, 180, 200, 200],
                        y1: [185, 185, 175, 172, 170, 170],
                        opacity: [0, 0, 0.6, 0.6, 0.6, 0]
                      }}
                      x2="200" y2="170"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Connection line 3 */}
                    <motion.line
                      animate={{
                        x1: [200, 200, 180, 160, 140, 140],
                        y1: [170, 170, 260, 320, 360, 360],
                        opacity: [0, 0, 0.6, 0.6, 0.6, 0]
                      }}
                      x2="140" y2="370"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Device circle - moves properly */}
                    <motion.circle
                      animate={{
                        cx: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        cy: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210]
                      }}
                      r="11"
                      fill="white"
                      stroke="#3b82f6"
                      strokeWidth="2.5"
                      filter="drop-shadow(0 2px 6px rgba(0,0,0,0.2))"
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: 'linear',
                        times: [0, 0.1, 0.18, 0.3, 0.36, 0.4, 0.55, 0.68, 0.76, 0.88, 1]
                      }}
                    />

                    {/* Phone icon - follows device */}
                    <motion.g
                      animate={{
                        x: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        y: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210]
                      }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: 'linear',
                        times: [0, 0.1, 0.18, 0.3, 0.36, 0.4, 0.55, 0.68, 0.76, 0.88, 1]
                      }}
                    >
                      <rect x="-3" y="-5" width="6" height="9" rx="1.2" fill="#3b82f6" opacity="0.2" />
                      <rect x="-2.2" y="-4" width="4.4" height="6" rx="0.6" fill="#3b82f6" />
                      <circle cy="2.8" r="0.6" fill="white" />
                      
                      {/* Signal bars */}
                      <rect x="7" y="-4" width="1.2" height="2" fill="#10b981" rx="0.3" />
                      <rect x="8.8" y="-5.5" width="1.2" height="3.5" fill="#10b981" rx="0.3" />
                      <rect x="10.6" y="-7" width="1.2" height="5" fill="#10b981" rx="0.3" />
                    </motion.g>

                    {/* Handoff pulse */}
                    <motion.circle
                      animate={{
                        cx: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        cy: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210],
                        scale: [1, 1, 1.5, 1, 1, 1, 1, 1.5, 1, 1, 1, 1.5, 1],
                        opacity: [0, 0, 0.6, 0, 0, 0, 0, 0.6, 0, 0, 0, 0.6, 0]
                      }}
                      r="15"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity,
                        times: [0, 0.16, 0.2, 0.22, 0.38, 0.42, 0.44, 0.54, 0.56, 0.74, 0.78, 0.8, 1]
                      }}
                    />

                    {/* Path trail */}
                    <motion.path
                      d="M 65 210 L 80 185 L 140 175 L 200 170 Q 190 215, 180 260 L 140 360 Q 120 322, 100 285 L 65 210"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      opacity="0.25"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.2 }}
                    />
                  </>
                )}
              </svg>

              {/* Stats card - centered in bottom space between floor plan and frame edge */}
              {networkOn && (
                <div className="absolute bottom-10 left-0 right-0 flex justify-center px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-black/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">100%</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">Coverage</p>
                      </div>
                      <div className="w-px h-8 bg-gray-700" />
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">3</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">APs</p>
                      </div>
                      <div className="w-px h-8 bg-gray-700" />
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">18</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">Devices</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </IPhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}
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
                {/* Rooms */}
                <rect x="20" y="80" width="120" height="160" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                <rect x="140" y="80" width="120" height="160" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                <rect x="20" y="240" width="240" height="200" fill="none" stroke="#e5e7eb" strokeWidth="2" rx="4" />
                
                {/* Labels */}
                <text x="80" y="155" textAnchor="middle" fill="#9ca3af" fontSize="12">Living</text>
                <text x="200" y="155" textAnchor="middle" fill="#9ca3af" fontSize="12">Kitchen</text>
                <text x="140" y="340" textAnchor="middle" fill="#9ca3af" fontSize="12">Bedrooms</text>
                
                {/* Access Points */}
                {networkOn && (
                  <>
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
                      <circle cx="80" cy="170" r="28" fill="#3b82f6" opacity="0.08" />
                      <circle cx="80" cy="170" r="16" fill="#3b82f6" opacity="0.15" />
                      <circle cx="80" cy="170" r="6" fill="#3b82f6" />
                      <circle cx="80" cy="170" r="3" fill="white" />
                    </motion.g>
                    
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
                      <circle cx="200" cy="170" r="28" fill="#6366f1" opacity="0.08" />
                      <circle cx="200" cy="170" r="16" fill="#6366f1" opacity="0.15" />
                      <circle cx="200" cy="170" r="6" fill="#6366f1" />
                      <circle cx="200" cy="170" r="3" fill="white" />
                    </motion.g>
                    
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}>
                      <circle cx="140" cy="370" r="28" fill="#8b5cf6" opacity="0.08" />
                      <circle cx="140" cy="370" r="16" fill="#8b5cf6" opacity="0.15" />
                      <circle cx="140" cy="370" r="6" fill="#8b5cf6" />
                      <circle cx="140" cy="370" r="3" fill="white" />
                    </motion.g>
                  </>
                )}

                {/* Moving device */}
                {networkOn && (
                  <>
                    {/* Connection line 1 */}
                    <motion.line
                      animate={{
                        x1: [65, 75, 80, 80, 80],
                        y1: [210, 195, 185, 185, 185],
                        opacity: [0.6, 0.6, 0.6, 0, 0]
                      }}
                      x2="80" y2="170"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Connection line 2 */}
                    <motion.line
                      animate={{
                        x1: [80, 80, 140, 180, 200, 200],
                        y1: [185, 185, 175, 172, 170, 170],
                        opacity: [0, 0, 0.6, 0.6, 0.6, 0]
                      }}
                      x2="200" y2="170"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Connection line 3 */}
                    <motion.line
                      animate={{
                        x1: [200, 200, 180, 160, 140, 140],
                        y1: [170, 170, 260, 320, 360, 360],
                        opacity: [0, 0, 0.6, 0.6, 0.6, 0]
                      }}
                      x2="140" y2="370"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Device circle - moves properly */}
                    <motion.circle
                      animate={{
                        cx: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        cy: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210]
                      }}
                      r="11"
                      fill="white"
                      stroke="#3b82f6"
                      strokeWidth="2.5"
                      filter="drop-shadow(0 2px 6px rgba(0,0,0,0.2))"
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: 'linear',
                        times: [0, 0.1, 0.18, 0.3, 0.36, 0.4, 0.55, 0.68, 0.76, 0.88, 1]
                      }}
                    />

                    {/* Phone icon - follows device */}
                    <motion.g
                      animate={{
                        x: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        y: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210]
                      }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: 'linear',
                        times: [0, 0.1, 0.18, 0.3, 0.36, 0.4, 0.55, 0.68, 0.76, 0.88, 1]
                      }}
                    >
                      <rect x="-3" y="-5" width="6" height="9" rx="1.2" fill="#3b82f6" opacity="0.2" />
                      <rect x="-2.2" y="-4" width="4.4" height="6" rx="0.6" fill="#3b82f6" />
                      <circle cy="2.8" r="0.6" fill="white" />
                      
                      {/* Signal bars */}
                      <rect x="7" y="-4" width="1.2" height="2" fill="#10b981" rx="0.3" />
                      <rect x="8.8" y="-5.5" width="1.2" height="3.5" fill="#10b981" rx="0.3" />
                      <rect x="10.6" y="-7" width="1.2" height="5" fill="#10b981" rx="0.3" />
                    </motion.g>

                    {/* Handoff pulse */}
                    <motion.circle
                      animate={{
                        cx: [65, 75, 80, 140, 180, 200, 180, 160, 140, 100, 65],
                        cy: [210, 195, 185, 175, 172, 170, 260, 320, 360, 285, 210],
                        scale: [1, 1, 1.5, 1, 1, 1, 1, 1.5, 1, 1, 1, 1.5, 1],
                        opacity: [0, 0, 0.6, 0, 0, 0, 0, 0.6, 0, 0, 0, 0.6, 0]
                      }}
                      r="15"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity,
                        times: [0, 0.16, 0.2, 0.22, 0.38, 0.42, 0.44, 0.54, 0.56, 0.74, 0.78, 0.8, 1]
                      }}
                    />

                    {/* Path trail */}
                    <motion.path
                      d="M 65 210 L 80 185 L 140 175 L 200 170 Q 190 215, 180 260 L 140 360 Q 120 322, 100 285 L 65 210"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      opacity="0.25"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.2 }}
                    />
                  </>
                )}
              </svg>

              {/* Stats card - properly centered at bottom */}
              {networkOn && (
                <div className="absolute bottom-16 left-0 right-0 flex justify-center px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-black/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">100%</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">Coverage</p>
                      </div>
                      <div className="w-px h-8 bg-gray-700" />
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">3</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">APs</p>
                      </div>
                      <div className="w-px h-8 bg-gray-700" />
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">18</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">Devices</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </IPhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}
