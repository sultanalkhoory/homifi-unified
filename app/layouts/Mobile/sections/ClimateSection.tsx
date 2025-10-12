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

  // Auto trigger once in view (26 -> 22)
  useEffect(() => {
    if (isInView && !manual && !started) {
      setStarted(true);
      animateToTemperature(22);
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

  // Mode based on temperature
  const getMode = () => {
    if (temperature <= 20) return 'cool';
    if (temperature >= 24) return 'warm';
    return 'comfort';
  };

  const mode = getMode();

  // Get colors based on mode
  const getModeColors = () => {
    if (mode === 'cool') {
      return {
        gradient: 'from-blue-400 to-cyan-500',
        ring: 'ring-blue-400/30',
        text: 'text-blue-500',
        glow: 'shadow-blue-500/20'
      };
    } else if (mode === 'warm') {
      return {
        gradient: 'from-orange-400 to-amber-500',
        ring: 'ring-orange-400/30',
        text: 'text-orange-500',
        glow: 'shadow-orange-500/20'
      };
    } else {
      return {
        gradient: 'from-teal-400 to-emerald-500',
        ring: 'ring-teal-400/30',
        text: 'text-teal-500',
        glow: 'shadow-teal-500/20'
      };
    }
  };

  const colors = getModeColors();

  return (
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

        {/* iPhone with cleaner climate UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <IPhoneFrame>
            <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
              {/* Simplified background - just a subtle gradient */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: mode === 'cool'
                      ? 'radial-gradient(ellipse at 50% 30%, rgba(59, 130, 246, 0.08), transparent 60%)'
                      : mode === 'warm'
                      ? 'radial-gradient(ellipse at 50% 30%, rgba(251, 146, 60, 0.08), transparent 60%)'
                      : 'radial-gradient(ellipse at 50% 30%, rgba(20, 184, 166, 0.08), transparent 60%)'
                  }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Large centered thermostat card */}
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <motion.div
                  className="w-full max-w-xs"
                  animate={{ scale: isAnimating ? [1, 1.02, 1] : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Main thermostat card */}
                  <div
                    className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl ${colors.glow} border border-white/60`}
                    style={{
                      boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)'
                    }}
                  >
                    {/* Room label */}
                    <div className="text-center mb-6">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Living Room
                      </p>
                      <p className={`text-xs font-semibold ${colors.text}`}>
                        {mode === 'cool' ? 'Cooling' : mode === 'warm' ? 'Warming' : 'Comfort Mode'}
                      </p>
                    </div>

                    {/* Large temperature display */}
                    <div className="relative mb-8">
                      {/* Circular progress ring */}
                      <div className={`absolute inset-0 rounded-full ring-8 ${colors.ring}`} />
                      
                      <div className={`relative flex items-center justify-center w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${colors.gradient}`}>
                        <motion.div
                          key={temperature}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="text-center"
                        >
                          <div className="text-5xl font-light text-white mb-1">
                            {temperature}°
                          </div>
                          <div className="text-xs font-medium text-white/80">
                            Celsius
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Mode selection buttons */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => handleTempChange(18)}
                        className={`
                          relative py-3 px-4 rounded-xl text-sm font-semibold
                          transition-all duration-300
                          ${temperature === 18
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }
                        `}
                      >
                        Cool
                        <div className="text-xs font-normal opacity-70">18°</div>
                      </button>

                      <button
                        onClick={() => handleTempChange(22)}
                        className={`
                          relative py-3 px-4 rounded-xl text-sm font-semibold
                          transition-all duration-300
                          ${temperature === 22
                            ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }
                        `}
                      >
                        Comfort
                        <div className="text-xs font-normal opacity-70">22°</div>
                      </button>

                      <button
                        onClick={() => handleTempChange(26)}
                        className={`
                          relative py-3 px-4 rounded-xl text-sm font-semibold
                          transition-all duration-300
                          ${temperature === 26
                            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }
                        `}
                      >
                        Warm
                        <div className="text-xs font-normal opacity-70">26°</div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </IPhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}
