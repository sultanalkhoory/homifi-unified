'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import IPhoneFrame from "@/components/ui/IPhoneFrame";
import GlassButton from "@/components/ui/GlassButton";

export default function LightsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [manualControl, setManualControl] = useState(false);
  const [lightsState, setLightsState] = useState<'off' | 'on'>('off');
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Auto-on when section enters viewport
  useEffect(() => {
    if (isInView && !manualControl && lightsState === 'off') {
      const timer = setTimeout(() => setLightsState('on'), 600);
      return () => clearTimeout(timer);
    }
  }, [isInView, manualControl, lightsState]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-3">Perfect Light</div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Every room.<br />Every moment.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Exactly as you want it.</p>
        </motion.div>

        {/* iPhone */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex justify-center">
          <IPhoneFrame>
            <div className="relative w-full h-full overflow-hidden bg-black">
              <Image
                src="/Curtains-Closed-Lights-Off.png"
                alt="Room lights off"
                fill
                className="object-cover"
                style={{ objectPosition: '60% center' }}
                quality={100}
              />
              <motion.div className="absolute inset-0" animate={{ opacity: lightsState === 'on' ? 1 : 0 }} transition={{ duration: 1.2 }}>
                <Image
                  src="/Curtains-Closed-Lights-On.png"
                  alt="Room lights on"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '60% center' }}
                  quality={100}
                />
              </motion.div>

              {/* Button */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                <GlassButton
                  label={lightsState === 'off' ? 'Turn On Lights' : 'Turn Off Lights'}
                  onClick={() => {
                    setManualControl(true);
                    setLightsState(lightsState === 'off' ? 'on' : 'off');
                  }}
                />
              </div>
            </div>
          </IPhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}
