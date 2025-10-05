'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

  // Mode + dynamic colors
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
                <Image
                  src="/Curtains-Open-Lights-On.png"
                  alt="Climate room"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '45% center' }}
                />

                {/* Dynamic Effects */}
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

                {/* Wall-mounted Smart Thermostat */}
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

                {/* Mode Buttons */}
                <div className="absolute inset-x-0 bottom-0 z-30">
                  <div className="flex justify-center pb-8 px-4">
                    <div className="flex gap-2">
                      <motion.button
                        onClick={() => handleTempChange(18)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        className={`
                          relative px-4 py-2 rounded-full text-sm font-medium
                          backdrop-blur-xl border border-white/20 text-white shadow-lg
                          transition-all duration-200 cursor-pointer
                          ${temperature === 18 ? 'bg-white/18 text-gray-900 ring-1 ring-white/25' : 'bg-white/12'}
                        `}
                      >
                        Cool
                        <div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                          }}
                        />
                      </motion.button>

                      <motion.button
                        onClick={() => handleTempChange(22)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        className={`
                          relative px-4 py-2 rounded-full text-sm font-medium
                          backdrop-blur-xl border border-white/20 text-white shadow-lg
                          transition-all duration-200 cursor-pointer
                          ${temperature === 22 ? 'bg-white/18 text-gray-900 ring-1 ring-white/25' : 'bg-white/12'}
                        `}
                      >
                        Comfort
                        <div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                          }}
                        />
                      </motion.button>

                      <motion.button
                        onClick={() => handleTempChange(26)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        className={`
                          relative px-4 py-2 rounded-full text-sm font-medium
                          backdrop-blur-xl border border-white/20 text-white shadow-lg
                          transition-all duration-200 cursor-pointer
                          ${temperature === 26 ? 'bg-white/18 text-gray-900 ring-1 ring-white/25' : 'bg-white/12'}
                        `}
                      >
                        Warm
                        <div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                          }}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </IPhoneFrame>
          </motion.div>
        </div>
      </section>
    </>
  );
}
