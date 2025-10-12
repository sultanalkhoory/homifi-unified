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

  // Auto trigger to 22° when section enters view
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

  // Determine mode based on selected temperature
  const getMode = () => {
    if (temperature === 18) return 'cool';
    if (temperature === 26) return 'warm';
    return 'comfort';
  };

  const mode = getMode();

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Copy */}
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

        {/* Right: iPhone with VisionOS thermostat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <IPhoneFrame>
            <div className="relative w-full h-full overflow-hidden">
              
              {/* BACKGROUND: Room photo */}
              <Image
                src="/Curtains-Open-Lights-On.png"
                alt="Climate controlled room"
                fill
                className="object-cover"
                style={{ objectPosition: '45% center' }}
              />

              {/* Subtle color overlay based on temperature mode */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: mode === 'cool'
                    ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15), transparent 70%)'
                    : mode === 'warm'
                    ? 'radial-gradient(ellipse at center, rgba(251, 146, 60, 0.15), transparent 70%)'
                    : 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.15), transparent 70%)'
                }}
                transition={{ duration: 0.8 }}
              />

              {/* CENTER-FLOATING VISIONOS GLASS CARD */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full max-w-[240px]"
                >
                  
                  {/* Glass material card */}
                  <div
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.25) 100%)',
                      backdropFilter: 'blur(40px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.5)',
                    }}
                  >
                    <div className="p-6">
                      
                      {/* Room label */}
                      <div className="text-center mb-2">
                        <p className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                          Living Room
                        </p>
                      </div>

                      {/* LARGE TEMPERATURE DISPLAY */}
                      <div className="text-center mb-6">
                        <motion.div
                          key={temperature}
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="text-7xl font-light text-white tracking-tight mb-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                            {temperature}°
                          </div>
                          <div className={`text-sm font-semibold drop-shadow-sm ${
                            mode === 'cool' ? 'text-blue-400' : mode === 'warm' ? 'text-orange-400' : 'text-teal-400'
                          }`}>
                            {mode === 'cool' ? 'Cool' : mode === 'warm' ? 'Warm' : 'Comfort'}
                          </div>
                        </motion.div>
                      </div>

                      {/* IOS SEGMENTED CONTROL */}
                      <div 
                        className="relative rounded-xl p-1"
                        style={{
                          background: 'rgba(0,0,0,0.15)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      >
                        <div className="relative grid grid-cols-3 gap-1">
                          
                          {/* SLIDING INDICATOR (animated) */}
                          <motion.div
                            className="absolute top-1 bottom-1 rounded-lg"
                            animate={{
                              left: temperature === 18 ? '4px' : temperature === 22 ? 'calc(33.333% + 2px)' : 'calc(66.666%)',
                              width: 'calc(33.333% - 4px)',
                              background: temperature === 18 
                                ? 'linear-gradient(135deg, #60A5FA 0%, #22D3EE 100%)'
                                : temperature === 22
                                ? 'linear-gradient(135deg, #2DD4BF 0%, #10B981 100%)'
                                : 'linear-gradient(135deg, #FB923C 0%, #F59E0B 100%)'
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{
                              boxShadow: '0 2px 8px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1)'
                            }}
                          />

                          {/* COOL Button */}
                          <button
                            onClick={() => handleTempChange(18)}
                            className="relative z-10 py-2.5 px-3 text-center transition-all duration-200"
                          >
                            <div className={`text-xs font-semibold transition-colors duration-200 ${
                              temperature === 18 ? 'text-white drop-shadow-sm' : 'text-white/70'
                            }`}>
                              Cool
                            </div>
                            <div className={`text-[10px] transition-colors duration-200 ${
                              temperature === 18 ? 'text-white/90' : 'text-white/50'
                            }`}>
                              18°
                            </div>
                          </button>

                          {/* COMFORT Button */}
                          <button
                            onClick={() => handleTempChange(22)}
                            className="relative z-10 py-2.5 px-3 text-center transition-all duration-200"
                          >
                            <div className={`text-xs font-semibold transition-colors duration-200 ${
                              temperature === 22 ? 'text-white drop-shadow-sm' : 'text-white/70'
                            }`}>
                              Comfort
                            </div>
                            <div className={`text-[10px] transition-colors duration-200 ${
                              temperature === 22 ? 'text-white/90' : 'text-white/50'
                            }`}>
                              22°
                            </div>
                          </button>

                          {/* WARM Button */}
                          <button
                            onClick={() => handleTempChange(26)}
                            className="relative z-10 py-2.5 px-3 text-center transition-all duration-200"
                          >
                            <div className={`text-xs font-semibold transition-colors duration-200 ${
                              temperature === 26 ? 'text-white drop-shadow-sm' : 'text-white/70'
                            }`}>
                              Warm
                            </div>
                            <div className={`text-[10px] transition-colors duration-200 ${
                              temperature === 26 ? 'text-white/90' : 'text-white/50'
                            }`}>
                              26°
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Top shine for glass depth */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 40%)',
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
  );
}
