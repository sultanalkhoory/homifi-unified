'use client';

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function AppleTVInterlude() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDoorbell, setShowDoorbell] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Auto show doorbell popup when in view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowDoorbell(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Apple TV Scene */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="relative"
          >
            {/* Living room background */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Curtains-Open-Lights-On.png"
                alt="Living room with Apple TV"
                fill
                className="object-cover"
                style={{ objectPosition: '30% center' }}
                quality={100}
              />
              
              {/* Apple TV on wall */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-28 bg-black rounded-lg shadow-lg">
                {/* TV Screen */}
                <div className="w-full h-full bg-gray-900 rounded-lg p-2">
                  {/* Home app camera grid */}
                  <div className="w-full h-full bg-gray-800 rounded p-2">
                    <div className="grid grid-cols-2 gap-1 h-full">
                      <div className="bg-gray-700 rounded text-[6px] text-white p-1">Kitchen</div>
                      <div className="bg-gray-700 rounded text-[6px] text-white p-1">Bedroom</div>
                      <div className="bg-gray-700 rounded text-[6px] text-white p-1">Garden</div>
                      <div className="bg-gray-700 rounded text-[6px] text-white p-1">Garage</div>
                    </div>
                  </div>
                </div>
                
                {/* Doorbell popup */}
                <AnimatePresence>
                  {showDoorbell && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="absolute -top-2 -right-2 w-20 h-12 bg-white rounded-lg shadow-xl border border-gray-200 p-1"
                    >
                      <div className="w-full h-full bg-gray-300 rounded text-[4px] text-gray-700 flex flex-col justify-between p-1">
                        <div className="flex items-center justify-between">
                          <span>Front Door</span>
                          <span className="text-red-500">●*</span>
                        </div>
                        <div className="bg-gray-600 rounded h-4 relative">
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-3 bg-gray-800 rounded-t opacity-60" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 leading-tight">
              See everything on<br />the big screen.
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8">
              Doorbell alerts appear instantly on Apple TV.
            </p>
          </motion.div>
        </div>
        
        {/* Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.5 }} 
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-400">
            *Available only with supported Apple Home enabled video doorbells.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
