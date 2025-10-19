'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideFromLeft, slideFromRight, gentleSpring, snappySpring, smoothColorTransition } from '@/lib/animations';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

/**
 * Enhanced PerfectLight Section
 * Apple-level polish with spring physics and smooth state transitions
 */
export default function PerfectLight() {
  const [lightsOn, setLightsOn] = useState(false);
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);
  const sectionRef = useRef(null);

  // Auto-trigger lights on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoTriggered) {
            setTimeout(() => {
              setLightsOn(true);
              setHasAutoTriggered(true);
            }, 800);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAutoTriggered]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Text & Control Card */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 space-y-6"
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, ...gentleSpring }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-wider text-amber-600 mb-3 font-medium"
              >
                Perfect Light
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ...gentleSpring }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 tracking-tight"
              >
                Light that adapts to you.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, ...gentleSpring }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 font-light"
              >
                The perfect ambiance for any moment, automatically.
              </motion.p>
            </div>

            {/* Enhanced Control Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, ...gentleSpring }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.button
                onClick={() => setLightsOn(!lightsOn)}
                className="relative w-full p-6 rounded-3xl backdrop-blur-xl overflow-hidden text-left border"
                animate={{
                  background: lightsOn
                    ? 'linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(249, 115, 22, 0.1))'
                    : 'linear-gradient(135deg, rgba(229, 231, 235, 0.8), rgba(209, 213, 219, 0.6))',
                  borderColor: lightsOn ? 'rgba(251, 146, 60, 0.3)' : 'rgba(229, 231, 235, 0.8)',
                  boxShadow: lightsOn
                    ? '0 20px 50px -12px rgba(251, 146, 60, 0.25), 0 0 0 1px rgba(251, 146, 60, 0.1) inset'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  scale: snappySpring,
                  background: smoothColorTransition,
                  borderColor: smoothColorTransition,
                  boxShadow: smoothColorTransition
                }}
              >
                {/* Icon & Toggle */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    animate={{
                      scale: lightsOn ? 1.1 : 1,
                      rotate: lightsOn ? 180 : 0
                    }}
                    transition={gentleSpring}
                    className="relative"
                  >
                    <div className={`
                      p-3 rounded-2xl transition-colors duration-400
                      ${lightsOn ? 'bg-orange-500/20' : 'bg-gray-300/50'}
                    `}>
                      <LightBulbIcon className={`w-6 h-6 transition-colors duration-400 ${
                        lightsOn ? 'text-orange-600' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    {/* Glow effect when on */}
                    <AnimatePresence>
                      {lightsOn && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={gentleSpring}
                          className="absolute inset-0 bg-orange-400/30 rounded-2xl blur-xl -z-10"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Toggle Switch */}
                  <div className={`
                    w-14 h-8 rounded-full p-1 transition-colors duration-400
                    ${lightsOn ? 'bg-orange-500' : 'bg-gray-300'}
                  `}>
                    <motion.div
                      animate={{ x: lightsOn ? 24 : 0 }}
                      transition={snappySpring}
                      className="w-6 h-6 bg-white rounded-full shadow-md"
                    />
                  </div>
                </div>

                {/* Room Label & Status */}
                <div>
                  <motion.p
                    animate={{ color: lightsOn ? '#000' : '#374151' }}
                    transition={smoothColorTransition}
                    className="text-base font-semibold mb-1"
                  >
                    Living Room Lights
                  </motion.p>
                  
                  <motion.p
                    animate={{ color: lightsOn ? '#f97316' : '#6b7280' }}
                    transition={smoothColorTransition}
                    className="text-sm"
                  >
                    {lightsOn ? 'On • 100% brightness' : 'Off'}
                  </motion.p>
                </div>

                {/* Ambient glow overlay when on */}
                <AnimatePresence>
                  {lightsOn && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Room Photo */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightsOn ? 'on' : 'off'}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={lightsOn ? '/Curtains-Open-Lights-On.png' : '/Curtains-Open-Lights-Off.png'}
                    alt={`Room with lights ${lightsOn ? 'on' : 'off'}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
