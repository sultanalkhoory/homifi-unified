'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import IPhoneFrame from "@/components/ui/IPhoneFrame";

export default function ClimateSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [temperature, setTemperature] = useState(26);
  const [targetTemperature, setTargetTemperature] = useState(26);
  const [manual, setManual] = useState(false);
  const [started, setStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto trigger to 18° (cool) when section enters view
  useEffect(() => {
    if (isInView && !manual && !started) {
      setStarted(true);
      setTimeout(() => {
        animateToTemperature(18);
      }, 500);
    }
  }, [isInView, manual, started]);

  // Gradual temperature animation - step through each degree
  const animateToTemperature = (targetTemp: number) => {
    // Set target immediately for UI indicator
    setTargetTemperature(targetTemp);
    
    // Clear any existing animation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (isAnimating) {
      setIsAnimating(false);
    }
    
    setIsAnimating(true);

    const current = temperature;
    const steps = Math.abs(targetTemp - current);
    const direction = targetTemp > current ? 1 : -1;

    let step = 0;
    intervalRef.current = setInterval(() => {
      step++;
      const newTemp = current + direction * step;
      setTemperature(newTemp);

      // Stop when target reached
      if (step >= steps) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setIsAnimating(false);
      }
    }, 400); // 400ms per degree
  };

  // Temperature change handler
  const handleTempChange = (t: number) => {
    if (t === targetTemperature || isAnimating) return;
    setManual(true);
    animateToTemperature(t);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Mode based on temperature ranges (gradual transition)
  const getMode = () => {
    if (temperature <= 20) return 'cool';
    if (temperature >= 24) return 'warm';
    return 'comfort';
  };

  // Dynamic colors based on temperature (smooth transitions)
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
  const mode = getMode();

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
                {/* Room photo */}
                <Image
                  src="/Curtains-Open-Lights-On.png"
                  alt="Climate room"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '45% center' }}
                />

                {/* Keep all effects */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  {/* Air streams - concentrated in upper portion like desktop */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`airstream-${i}`}
                      className="absolute pointer-events-none"
                      style={{
                        top: `${10 + i * 11.67}%`, // Upper 45%: 10%, 21.67%, 33.34%, 45%
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

                  {/* Vignette - positioned in upper portion */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(ellipse 300px 200px at ${
                          mode === 'cool' ? '40%' : '60%'
                        } 30%,
                          ${colors.vignette.split(',')[0]} 0%,
                          ${colors.vignette.split(',')[1]} 40%,
                          transparent 70%
                        )
                      `,
                      animation: 'pulse 6s ease-in-out infinite',
                    }}
                  />

                  {/* Particles - in upper portion only */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`particle-${i}`}
                      className={`absolute w-1 h-1 ${colors.particle} rounded-full opacity-40`}
                      style={{
                        left: `${20 + (i % 3) * 25}%`,
                        top: `${15 + (i % 2) * 15}%`, // Keep particles in upper area
                        animation: `particleFloat ${
                          4 + i * 0.4
                        }s ease-in-out infinite ${i * 0.7}s`,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Wall thermostat */}
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
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          key={temperature}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-[10px] font-medium text-white"
                        >
                          {temperature}°
                        </motion.div>
                      </div>
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom glass segmented control */}
                <div className="absolute inset-x-0 bottom-8 flex justify-center px-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div 
                      className="relative rounded-2xl p-1"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                        backdropFilter: 'blur(30px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    >
                      <div className="relative grid grid-cols-3 gap-1">
                        {/* Fluid sliding indicator - based on target temperature */}
                        <motion.div
                          className="absolute top-1 bottom-1 rounded-xl pointer-events-none"
                          animate={{
                            left: targetTemperature === 18 ? '4px' : targetTemperature === 22 ? 'calc(33.333% + 2px)' : 'calc(66.666%)',
                            width: 'calc(33.333% - 4px)',
                            scale: [1, 1.05, 1], // Subtle bounce
                          }}
                          transition={{ 
                            left: {
                              type: 'spring', 
                              stiffness: 180, 
                              damping: 20,
                              mass: 0.8,
                            },
                            width: {
                              type: 'spring', 
                              stiffness: 180, 
                              damping: 20,
                            },
                            scale: {
                              duration: 0.3,
                              ease: [0.34, 1.56, 0.64, 1] // Bounce ease
                            }
                          }}
                          style={{
                            background: targetTemperature === 18 
                              ? 'linear-gradient(135deg, #60A5FA 0%, #22D3EE 100%)'
                              : targetTemperature === 22
                              ? 'linear-gradient(135deg, #2DD4BF 0%, #10B981 100%)' // Teal/green gradient for comfort
                              : 'linear-gradient(135deg, #FB923C 0%, #F59E0B 100%)',
                            boxShadow: targetTemperature === 18
                              ? '0 4px 12px rgba(96, 165, 250, 0.5), 0 2px 4px rgba(96, 165, 250, 0.3)'
                              : targetTemperature === 22
                              ? '0 4px 12px rgba(45, 212, 191, 0.5), 0 2px 4px rgba(45, 212, 191, 0.3)' // Teal shadow
                              : '0 4px 12px rgba(251, 146, 60, 0.5), 0 2px 4px rgba(251, 146, 60, 0.3)'
                          }}
                        >
                          {/* Inner shine with smooth fade */}
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            animate={{
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeInOut'
                            }}
                            style={{
                              background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)'
                            }}
                          />
                        </motion.div>

                        {/* Cool Button - shifted right for centering */}
                        <button
                          onClick={() => handleTempChange(18)}
                          className="relative z-10 py-3 px-4 text-center rounded-xl transition-all"
                        >
                          <motion.div 
                            animate={{
                              color: targetTemperature === 18 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.65)',
                              scale: targetTemperature === 18 ? 1 : 0.96,
                              y: targetTemperature === 18 ? 0 : 1
                            }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-xs font-semibold ml-1"
                            style={{
                              textShadow: targetTemperature === 18 ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                            }}
                          >
                            Cool
                          </motion.div>
                          <motion.div 
                            animate={{
                              color: targetTemperature === 18 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
                              opacity: targetTemperature === 18 ? 1 : 0.7
                            }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-[10px] mt-0.5 ml-1"
                          >
                            18°
                          </motion.div>
                        </button>

                        {/* Comfort Button - shifted left for centering */}
                        <button
                          onClick={() => handleTempChange(22)}
                          className="relative z-10 py-3 px-3 text-center rounded-xl transition-all"
                        >
                          <motion.div 
                            animate={{
                              color: targetTemperature === 22 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.65)',
                              scale: targetTemperature === 22 ? 1 : 0.96,
                              y: targetTemperature === 22 ? 0 : 1
                            }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-xs font-semibold whitespace-nowrap -ml-1"
                            style={{
                              textShadow: targetTemperature === 22 ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                            }}
                          >
                            Comfort
                          </motion.div>
                          <motion.div 
                            animate={{
                              color: targetTemperature === 22 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
                              opacity: targetTemperature === 22 ? 1 : 0.7
                            }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-[10px] mt-0.5 -ml-1"
                          >
                            22°
                          </motion.div>
                        </button>

                        {/* Warm Button */}
                        <button
                          onClick={() => handleTempChange(26)}
                          className="relative z-10 py-3 px-4 text-center rounded-xl transition-all"
                        >
                          <motion.div 
                            animate={{
                              color: targetTemperature === 26 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.65)',
                              scale: targetTemperature === 26 ? 1 : 0.96,
                              y: targetTemperature === 26 ? 0 : 1
                            }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-xs font-semibold"
                            style={{
                              textShadow: targetTemperature === 26 ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                            }}
                          >
                            Warm
                          </motion.div>
                          <motion.div 
                            animate={{
                              color: targetTemperature === 26 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
                              opacity: targetTemperature === 26 ? 1 : 0.7
                            }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-[10px] mt-0.5"
                          >
                            26°
                          </motion.div>
                        </button>
                      </div>

                      {/* Top shine */}
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
