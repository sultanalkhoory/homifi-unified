'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * IPhoneFrame Component - Updated to match UniFi design
 * Wraps children inside a professional iPhone frame
 * Responsive sizing with professional shadows
 */
function IPhoneFrame({ children }: { children: React.ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile using coarse pointer / touch points (more reliable than width alone)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const update = () =>
      setIsMobile(mq.matches || navigator.maxTouchPoints > 0 || window.innerWidth < 768);
    update();
    // Older Safari fallback
    try {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    } catch {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ['start end', 'end start'],
  });

  // Gentle parallax for mobile only
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <div className="relative" ref={frameRef}>
      <motion.div
        style={isMobile ? { y } : {}}
      >
        {/* Desktop Frame - 300px */}
        <div className="hidden md:block relative bg-black rounded-[3rem] p-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]" style={{ width: '300px' }}>
          <div className="relative bg-black rounded-[2.8rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            {/* Dynamic Island */}
            <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-full z-10 shadow-lg"></div>

            {/* Children content */}
            <div className="absolute inset-0">
              {children}
            </div>
          </div>
        </div>

        {/* Mobile Frame - 250px */}
        <div className="md:hidden relative bg-black rounded-[2.5rem] p-[3px] shadow-[0_15px_50px_rgba(0,0,0,0.3)]" style={{ width: '250px' }}>
          <div className="relative bg-black rounded-[2.3rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            {/* Dynamic Island */}
            <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-[100px] h-[22px] bg-black rounded-full z-10 shadow-lg"></div>

            {/* Children content */}
            <div className="absolute inset-0">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default IPhoneFrame;
