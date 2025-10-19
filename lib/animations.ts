import { Variants } from "framer-motion";

// Apple-style spring physics for smooth, natural motion
export const springConfig = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
  mass: 0.8
};

// Gentle spring for subtle interactions
export const gentleSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
  mass: 0.5
};

// Snappy spring for immediate feedback
export const snappySpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30
};

// Enhanced fade with spring physics
export const fadeRiseSpring: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(4px)"
  },
  show: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: springConfig
  }
};

// Enhanced scale with spring
export const scaleInSpring: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    filter: "blur(2px)"
  },
  show: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: gentleSpring
  }
};

// Smooth slide from left
export const slideFromLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
    filter: "blur(4px)"
  },
  show: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: springConfig
  }
};

// Smooth slide from right
export const slideFromRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    filter: "blur(4px)"
  },
  show: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: springConfig
  }
};

// Stagger with spring timing
export const staggerSpring: Variants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    } 
  }
};

// Children animation for stagger
export const childSpring: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.97
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: gentleSpring
  }
};

// Interactive button/card hover states
export const interactiveHover = {
  rest: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
    transition: snappySpring
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Smooth color transition helper
export const smoothColorTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1]
};

// Legacy animations (keeping for backward compatibility)
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerUp: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

export const childUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
};
