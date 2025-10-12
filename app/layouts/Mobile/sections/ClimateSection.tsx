'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import IPhoneFrame from "@/components/ui/IPhoneFrame";

export default function ClimateSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [temperature, setTemperature] = useState(26);
  const [manual, setManual] = useState(false);
  const [started, setStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Auto trigger once in view (26 -> 18)
  useEffect(() => {
    if (isInView && !manual && !started) {
      setStarted(true);
      animateToTemperature(18);
    }
  }, [isInView, manual, started]);

  const animateToTemperature = (targetTemp: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const current = temperature;
    const steps = Math.abs(targetTemp - current);
    const dir = targetTemp > current ? 1 : -1;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const newTemp = current + dir * step;
      setTemperature(newTemp);

      if (step >= steps) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 400);
  };

  const handleTempChange = (t: number) => {
    if (t === temperature || isAnimating) return;
    setManual(true);
    animateToTemperature(t);
  };

  // Mode + dynamic colors (keep original logic)
  const getEffectColors = (t: number) => {
    if (t >= 24) {
      return {
        primary: 'rgba(255, 193, 7, 0.1)',
        secondary: 'rgba(255, 152, 0, 0.15)',
        particle: 'bg-orange-200',
        vignette: 'rgba(255, 193, 7, 0.05), rgba(255, 152, 0, 0.03)',
      };
    } else if (t <= 20) {
      return {
        primary: 'rgba(59, 130, 246, 0.18)',
        secondary: 'rgba(96, 165, 250, 0.25)',
        particle: 'bg-blue-200',
        vignette: 'rgba(59, 130, 246, 0.05), rgba(96, 165, 250, 0.03)',
      };
    } else {
      return {
        primary: 'rgba(156, 163, 175, 0.15)',
        secondary: 'rgba(209, 213, 219, 0.2)',
        particle: 'bg-gray-200',
        vignette: 'rgba(156, 163, 175, 0.04), rgba(209, 213, 219, 0.02)',
      };
    }
  };

  const colors = getEffectColors(temperature);
  const mode = temperature <= 20 ? 'cool' : temperature >= 24 ? 'warm' : 'comfort';

  return (
    <>
      {/* Keep original keyframe animations */}
      <style jsx global>{`
        @keyframes airFlow {
          0% {
            transform: translateX(-80px) translateY(5px) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(300px) translateY(-15px) scale(1.1);
            opacity: 0;
          }
        }
        @keyframes particleFloat {
          0% {
            transform: translateX(-20px) translateY(10px);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(200px) translateY(-20px);
            opacity: 0;
          }
        }
        @keyframes sunbeamSubtle {
          0% {
            opacity: 0;
            transform: rotate(-3deg) translateY(10px);
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: rotate(3deg) translateY(-10px);
          }
        }
      `}</style>

      <section
        ref={containerRef}
        className="min-h-screen flex items-center py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase tracking-wider text-blue-600 mb-3">
              Perfect Climate
            </div>
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4">
              Always comfortable.
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8">
              The perfect temperature, automatically.
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
              <div className="relative w-full h-full overflow-hidden">
                {/* Room photo background */}
                <Image
                  src="/Curtains-Open-Lights-On.png"
                  alt="Climate room"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '45% center' }}
                />

                {/* Keep all original dynamic effects */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  {/* Air streams */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`airstream-${i}`}
                      className="absolute pointer-events-none"
                      style={{
                        top: `${15 + i * 18}%`,
                        left: mode === 'cool' ? '-20%' : undefined,
                        right: mode === 'warm' ? '-20%' : undefined,
                        width: '300px',
                        height: '4px',
                        background: `linear-gradient(90deg,
                          transparent 0%,
                          ${colors.primary} 30%,
                          ${colors.secondary} 70%,
                          transparent 100%
                        )`,
                        animation: `${
                          mode === 'cool' ? 'airFlow' : 'sunbeamSubtle'
                        } ${8 + i * 0.8}s ease-in-out infinite ${i * 1.5}s`,
                        filter: 'blur(2px)',
                      }}
                    />
                  ))}

                  {/* Vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(ellipse 300px 200px at ${
                          mode === 'cool' ? '40%' : '60%'
                        } 40%,
                          ${colors.vignette.split(',')[0]} 0%,
                          ${colors.vignette.split(',')[1]} 40%,
                          transparent 70%
                        )
                      `,
                      animation: 'pulse 6s ease-in-out infinite',
                    }}
                  />

                  {/* Particles */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`particle-${i}`}
                      className={`absolute w-1 h-1 ${colors.particle} rounded-full opacity-40`}
                      style={{
                        left: `${20 + (i % 3) * 25}%`,
                        top: `${25 + (i % 2) * 20}%`,
                        animation: `particleFloat ${
                          4 + i * 0.4
                        }s ease-in-out infinite ${i * 0.7}s`,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Keep wall-mounted thermostat indicator */}
                <div className="absolute top-[40%] left-14 z-30">
                  <div className="relative">
                    <div className="w-8 h-8 backdrop-blur-xl bg-white/20 rounded-full shadow-lg border border-white/30">
                      <div
                        className="absolute inset-0.5 rounded-full border"
                        style={{
                          borderColor:
                            mode === 'cool'
                              ? 'rgba(59, 130, 246, 0.6)'
                              : mode === 'warm'
                              ? 'rgba(245, 158, 11, 0.6)'
                              : 'rgba(107, 114, 128, 0.6)',
                          boxShadow:
                            mode === 'cool'
                              ? '0 0 8px rgba(59, 130, 246, 0.3)'
                              : mode === 'warm'
                              ? '0 0 8px rgba(245, 158, 11, 0.3)'
                              : '0 0 8px rgba(107, 114, 128, 0.2)',
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-[10px] font-medium text-white">
                          {temperature}°
                        </div>
                      </div>
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/5 rounded-full blur-sm translate-x-0.5 translate-y-0.5 -z-10" />
                  </div>
                </div>

                {/* Bottom segmented control with liquid glass animations */}
                <div className="absolute inset-x-0 bottom-8 flex justify-center px-6 pointer-events-none">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="pointer-events-auto"
                  >
                    {/* Glass segmented control container */}
                    <div 
                      className="relative rounded-2xl p-1"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                        backdropFilter: 'blur(30px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.1)',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    >
                      <div className="relative grid grid-cols-3 gap-1">
                        {/* Liquid sliding indicator with elastic morphing */}
                        <motion.div
                          className="absolute top-1 bottom-1 rounded-xl"
                          animate={{
                            left: temperature === 18 ? '4px' : temperature === 22 ? 'calc(33.333% + 2px)' : 'calc(66.666%)',
                            width: 'calc(33.333% - 4px)',
                            background: temperature === 18 
                              ? 'linear-gradient(135deg, #60A5FA 0%, #22D3EE 100%)'
                              : temperature === 22
                              ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                              : 'linear-gradient(135deg, #FB923C 0%, #F59E0B 100%)',
                            boxShadow: temperature === 18
                              ? '0 4px 12px rgba(96, 165, 250, 0.4), 0 2px 4px rgba(96, 165, 250, 0.2)'
                              : temperature === 22
                              ? '0 4px 12px rgba(16, 185, 129, 0.4), 0 2px 4px rgba(16, 185, 129, 0.2)'
                              : '0 4px 12px rgba(251, 146, 60, 0.4), 0 2px 4px rgba(251, 146, 60, 0.2)'
                          }}
                          transition={{ 
                            type: 'spring', 
                            stiffness: 280, 
                            damping: 22,
                            mass: 0.8,
                            // Elastic overshoot for liquid feel
                          }}
                        >
                          {/* Inner glow for depth */}
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            animate={{
                              background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
                            }}
                            transition={{ duration: 0.4 }}
                          />
                        </motion.div>

                        {/* Cool Button */}
                        <motion.button
                          onClick={() => handleTempChange(18)}
                          className="relative z-10 py-3 px-4 text-center transition-all duration-300 rounded-xl"
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            scale: temperature === 18 ? 1.02 : 1
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                          <motion.div 
                            className="text-xs font-semibold"
                            animate={{
                              color: temperature === 18 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)',
                              textShadow: temperature === 18 ? '0 1px 2px rgba(0,0,0,0.2)' : '0 0 0 rgba(0,0,0,0)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            Cool
                          </motion.div>
                          <motion.div 
                            className="text-[10px] mt-0.5"
                            animate={{
                              color: temperature === 18 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            18°
                          </motion.div>
                        </motion.button>

                        {/* Comfort Button */}
                        <motion.button
                          onClick={() => handleTempChange(22)}
                          className="relative z-10 py-3 px-4 text-center transition-all duration-300 rounded-xl"
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            scale: temperature === 22 ? 1.02 : 1
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                          <motion.div 
                            className="text-xs font-semibold"
                            animate={{
                              color: temperature === 22 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)',
                              textShadow: temperature === 22 ? '0 1px 2px rgba(0,0,0,0.2)' : '0 0 0 rgba(0,0,0,0)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            Comfort
                          </motion.div>
                          <motion.div 
                            className="text-[10px] mt-0.5"
                            animate={{
                              color: temperature === 22 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            22°
                          </motion.div>
                        </motion.button>

                        {/* Warm Button */}
                        <motion.button
                          onClick={() => handleTempChange(26)}
                          className="relative z-10 py-3 px-4 text-center transition-all duration-300 rounded-xl"
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            scale: temperature === 26 ? 1.02 : 1
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                          <motion.div 
                            className="text-xs font-semibold"
                            animate={{
                              color: temperature === 26 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)',
                              textShadow: temperature === 26 ? '0 1px 2px rgba(0,0,0,0.2)' : '0 0 0 rgba(0,0,0,0)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            Warm
                          </motion.div>
                          <motion.div 
                            className="text-[10px] mt-0.5"
                            animate={{
                              color: temperature === 26 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            26°
                          </motion.div>
                        </motion.button>
                      </div>

                      {/* Top shine for glass depth */}
                      <div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </IPhoneFrame>
          </motion.div>
        </div>
      </section>
    </>
  );
}
