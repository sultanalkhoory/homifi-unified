'use client';

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import IPhoneFrame from "@/components/ui/IPhoneFrame";

export default function SecuritySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [doorbellRing, setDoorbellRing] = useState(false);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);
  const [manualControl, setManualControl] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView && !manualControl && !doorbellRing) {
      const timer = setTimeout(() => setDoorbellRing(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, manualControl, doorbellRing]);

  const handleUnlock = () => {
    setManualControl(true);
    setDoorbellRing(false);
    setShowUnlockAnimation(true);
    setTimeout(() => {
      setShowUnlockAnimation(false);
    }, 2000);
  };

  const handleAnswer = () => {
    setManualControl(true);
    setDoorbellRing(false);
  };

  const handleDismiss = () => {
    setManualControl(true);
    setDoorbellRing(false);
  };

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          <div className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-3">Perfect Security</div>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 leading-tight">
            Know who's at<br />your door.
          </h2>
          <p className="text-lg text-gray-600 font-light mb-8">
            Instant notifications. Clear video. Complete peace of mind.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="flex justify-center"
        >
          <IPhoneFrame>
            <div className="relative w-full h-full overflow-hidden bg-black">
              <Image
                src="/Curtains-Open-Lights-On.png"
                alt="Apple Home app view"
                fill
                className="object-cover"
                style={{ objectPosition: '45% center' }}
                quality={100}
              />
              <div className="absolute inset-0 bg-black/10" />

              {/* Dynamic Island Unlock Animation */}
              <AnimatePresence>
                {showUnlockAnimation && (
                  <motion.div
                    className="absolute top-2 left-1/2 -translate-x-1/2 z-40"
                    initial={{ scaleX: 1, scaleY: 1 }}
                    animate={{ scaleX: 1.26, scaleY: 1.23 }}
                    exit={{ scaleX: 1, scaleY: 1 }}
                    transition={{ 
                      duration: 0.55,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    style={{
                      width: 95,
                      height: 26,
                      transformOrigin: 'center'
                    }}
                  >
                    <div
                      className="w-full h-full bg-black rounded-full flex items-center justify-center"
                      style={{
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 0 0 0.5px rgba(255,255,255,0.15)'
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.2,
                          delay: 0.15
                        }}
                        className="flex items-center gap-1.5 px-2"
                      >
                        {/* Animated lock icon */}
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: [0, -10, 5, 0] }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="relative"
                        >
                          <motion.svg 
                            className="w-3 h-3 text-green-500" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {/* Open lock */}
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                          </motion.svg>
                        </motion.div>
                        <span className="text-white text-[9px] font-medium">Unlocked</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Doorbell Notification */}
              <AnimatePresence>
                {doorbellRing && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-x-4 top-28 z-50"
                  >
                    <div 
                      className="backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 100%)',
                      }}
                    >
                      <div className="p-4 pb-2">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-full" />
                            </div>
                            <div>
                              <div className="text-white text-sm font-semibold">Front Door</div>
                              <div className="text-white/70 text-xs">HomiFi Doorbell</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-2 h-2 bg-red-500 rounded-full"
                            />
                            <div className="text-red-200 text-xs font-medium">LIVE</div>
                          </div>
                        </div>
                        
                        <div className="w-full h-32 bg-gray-800 rounded-2xl mb-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700 to-gray-600" />
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2"
                          >
                            <div className="w-16 h-20 border-2 border-blue-400 rounded-lg relative">
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                <div className="bg-blue-400 px-2 py-1 rounded text-xs text-white font-medium">
                                  Person
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                        
                        <div className="text-white text-sm font-medium mb-4">
                          Someone is at your front door
                        </div>
                      </div>
                      
                      <div className="px-4 pb-4">
                        <div className="grid grid-cols-3 gap-2">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleDismiss}
                            className="border rounded-xl py-2.5 text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                              borderColor: 'rgba(239, 68, 68, 0.5)',
                              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
                            }}
                          >
                            Dismiss
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleUnlock}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl py-2.5 text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                            }}
                          >
                            Unlock
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleAnswer}
                            className="border rounded-xl py-2.5 text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                              borderColor: 'rgba(59, 130, 246, 0.5)',
                              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                            }}
                          >
                            Answer
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!doorbellRing && !showUnlockAnimation && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                  <GlassButton
                    label="Ring Doorbell"
                    onClick={() => {
                      setManualControl(true);
                      setDoorbellRing(true);
                    }}
                  />
                </div>
              )}
            </div>
          </IPhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}
