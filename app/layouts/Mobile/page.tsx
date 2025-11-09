'use client';

import { motion } from 'framer-motion';
import HeroSection from "./sections/HeroSection";
import PerfectBenefits from '@/components/sharedsections/PerfectBenefits';
import LightsSection from './sections/LightsSection';
import CurtainsSection from './sections/CurtainsSection';
import ClimateSection from './sections/ClimateSection';
import SecuritySection from '@/components/sharedsections/PerfectSecurity';
import PerfectHomeKey from '@/components/sharedsections/PerfectHomeKey';
import PerfectWiFi from '@/components/sharedsections/PerfectWiFi';
import CTAHowItWorks from '@/components/CTAHowItWorks';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function Page() {
  // Lighter animation for mobile (less blur, less travel distance)
  const sectionAnimation = {
    initial: { 
      opacity: 0, 
      y: 40, // Less travel distance on mobile
      filter: 'blur(4px)' // Less blur on mobile for performance
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)'
    },
    viewport: { 
      once: true, 
      margin: '-50px' // Earlier trigger on mobile
    },
    transition: {
      type: 'spring',
      stiffness: 280, // Slightly snappier on mobile
      damping: 22,
      mass: 0.6,
      duration: 0.6
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* Header - no animation */}
      <Header />
      
      {/* Hero - has its own animations */}
      <HeroSection />
      
      {/* Benefits */}
      <motion.div {...sectionAnimation}>
        <PerfectBenefits />
      </motion.div>
      
      {/* Lights */}
      <motion.div {...sectionAnimation}>
        <LightsSection />
      </motion.div>
      
      {/* Curtains */}
      <motion.div {...sectionAnimation}>
        <CurtainsSection />
      </motion.div>
      
      {/* Climate */}
      <motion.div {...sectionAnimation}>
        <ClimateSection />
      </motion.div>
      
      {/* Security */}
      <motion.div {...sectionAnimation}>
        <SecuritySection />
      </motion.div>
      
      {/* HomeKey */}
      <motion.div {...sectionAnimation}>
        <PerfectHomeKey />
      </motion.div>
      
      {/* WiFi */}
      <motion.div {...sectionAnimation}>
        <PerfectWiFi />
      </motion.div>
      
      {/* CTA */}
      <motion.div {...sectionAnimation}>
        <CTAHowItWorks />
      </motion.div>

      {/* Footer - no animation */}
      <Footer />
    </main>
  );
}
