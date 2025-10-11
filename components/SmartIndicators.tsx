/**
 * SmartIndicators - Auto Sequential Reveal
 * 
 * File: components/SmartIndicators.tsx
 * 
 * BEHAVIOR:
 * - Starts automatically 1 second after page load
 * - Shows each indicator for 2.5 seconds with popup
 * - Previous indicator fades as next appears
 * - Creates elegant "guided tour" effect
 * - Users can click any indicator to explore manually
 * - Only auto-plays once per page load
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SmartIndicator = {
  id: string;
  x: string;
  y: string;
  label: string;
  detail: string;
  color: string;
  popupDirection: 'left' | 'right' | 'top' | 'bottom';
};

const indicators: SmartIndicator[] = [
  {
    id: 'lights',
    x: '24%',
    y: '38%',
    label: 'Smart Lighting',
    detail: 'Adapts to your activity and time of day',
    color: 'rgba(255, 214, 90, 0.85)',
    popupDirection: 'bottom'
  },
  {
    id: 'curtains',
    x: '78%',
    y: '40%',
    label: 'Privacy',
    detail: 'Automated shades with HomeKit',
    color: 'rgba(94, 234, 212, 0.85)',
    popupDirection: 'left'
  },
  {
    id: 'climate',
    x: '19%',
    y: '4%',
    label: 'Climate',
    detail: 'Maintains your ideal comfort zone',
    color: 'rgba(110, 190, 255, 0.85)',
    popupDirection: 'bottom'
  },
  {
    id: 'security',
    x: '2%',
    y: '50%',
    label: 'Security',
    detail: 'Always protected, never intrusive',
    color: 'rgba(120, 255, 170, 0.85)',
    popupDirection: 'right'
  },
  {
   id: 'voice',
   x: '55%',
   y: '74%',
   label: 'Voice Control',
   detail: 'Just ask Siri',
   color: 'rgba(139, 146, 234, 0.85)',
   popupDirection: 'right'
  }
];

export default function SmartIndicators() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play sequence: starts 1 second after mount
  useEffect(() => {
    if (hasAutoPlayed) return;

    const startDelay = setTimeout(() => {
      setHasAutoPlayed(true);
      
      // Sequential reveal: each indicator shows for 2.5 seconds
      indicators.forEach((_, index) => {
        setTimeout(() => {
          setActiveIndex(index);
          
          // Hide after 2.5 seconds (except the last one stays visible a bit longer)
          if (index < indicators.length - 1) {
            setTimeout(() => {
              setActiveIndex(-1);
            }, 2500);
          } else {
            // Last indicator stays for 3 seconds then fades
            setTimeout(() => {
              setActiveIndex(-1);
            }, 3000);
          }
        }, index * 2700); // 2.7 seconds between each (2.5s display + 0.2s gap)
      });
    }, 1000); // Start 1 second after page load

    return () => clearTimeout(startDelay);
  }, [hasAutoPlayed]);

  // Get popup position
  const getPopupPosition = (direction: string, indicatorId: string) => {
    if (isMobile && indicatorId === 'climate') {
      return { top: '100%', left: '0%', translateX: '0px', translateY: '8px' };
    }
    if (indicatorId === 'lights') {
      return { top: '100%', left: '0%', translateX: '0px', translateY: '8px' };
    }
    
    switch (direction) {
      case 'left': return { right: '100%', top: '50%', translateX: '-8px', translateY: '-50%' };
      case 'right': return { left: '100%', top: '50%', translateX: '8px', translateY: '-50%' };
      case 'top': return { bottom: '100%', left: '50%', translateX: '-50%', translateY: '-8px' };
      case 'bottom': default: return { top: '100%', left: '50%', translateX: '-50%', translateY: '8px' };
    }
  };

  // Manual click handler - allows users to explore on their own
  const handleIndicatorClick = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {indicators.map((indicator, index) => {
        const isActive = activeIndex === index;
        const popupPosition = getPopupPosition(indicator.popupDirection, indicator.id);
        const effectiveDirection = isMobile && indicator.id === 'climate' ? 'bottom' : indicator.popupDirection;
        const isBottomRightPopup = (isMobile && indicator.id === 'climate') || indicator.id === 'lights';
        
        return (
          <div
            key={indicator.id}
            className="absolute pointer-events-auto"
            style={{ 
              left: indicator.x, 
              top: indicator.y, 
              transform: 'translate(-50%, -50%)',
              zIndex: isActive ? 30 : 20
            }}
          >
            {/* Touch target */}
            <button
              className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full z-20"
              style={{ touchAction: 'manipulation' }}
              onClick={(e) => {
                e.stopPropagation();
                handleIndicatorClick(index);
              }}
              aria-label={`${indicator.label} control`}
            />
            
            {/* Indicator dot */}
            <motion.div 
              className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: indicator.color }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isActive ? 1.35 : 1,
                opacity: isActive ? 1 : 0.7,
                boxShadow: isActive
                  ? `0 0 10px ${indicator.color}`
                  : `0 0 0 transparent`,
              }}
              transition={{
                duration: 0.5,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              {/* Pulse animation when active */}
              {isActive && (
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: indicator.color }}
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.7, 0.1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.div>

            {/* Popup card */}
            <AnimatePresence mode="popLayout">
              {isActive && (
                <motion.div
                  className="absolute z-30 whitespace-nowrap"
                  style={{ 
                    ...popupPosition,
                    transform: `translate(${popupPosition.translateX || 0}, ${popupPosition.translateY || 0})`,
                    transformOrigin: effectiveDirection === 'left' ? 'right center' : 
                                     effectiveDirection === 'right' ? 'left center' :
                                     effectiveDirection === 'top' ? 'center bottom' : 
                                     isBottomRightPopup ? 'left top' : 'center top'
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.94, 
                    filter: 'blur(2px)',
                    y: effectiveDirection === 'bottom' ? -5 : 
                       effectiveDirection === 'top' ? 5 : 0,
                    x: effectiveDirection === 'right' ? -5 : 
                       effectiveDirection === 'left' ? 5 : 
                       isBottomRightPopup ? -3 : 0,
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    filter: 'blur(0px)',
                    y: 0,
                    x: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.97,
                    transition: { duration: 0.15, ease: [0.32, 0.72, 0, 1] } 
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 350,
                    damping: 25,
                    mass: 0.5,
                    restDelta: 0.001
                  }}
                >
                  <motion.div 
                    className="rounded-xl px-3.5 py-2.5 backdrop-blur-xl shadow-lg text-white overflow-hidden"
                    initial={{ 
                      background: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0))',
                      boxShadow: '0 0 0 rgba(0,0,0,0)'
                    }}
                    animate={{ 
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                      boxShadow: '0 10px 25px -3px rgba(0,0,0,0.15), 0 4px 6px -2px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.15)'
                    }}
                    transition={{ 
                      delay: 0.05,
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{
                      borderTop: '0.5px solid rgba(255,255,255,0.5)',
                      borderLeft: '0.5px solid rgba(255,255,255,0.3)',
                      borderRight: '0.5px solid rgba(255,255,255,0.2)',
                      borderBottom: '0.5px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08, duration: 0.2 }}
                    >
                      <p className="text-[13px] font-medium tracking-tight mb-0.5 text-white">{indicator.label}</p>
                      <motion.p 
                        className="text-[11px] font-normal text-white/90 tracking-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.25 }}
                      >
                        {indicator.detail}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
