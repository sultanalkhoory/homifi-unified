'use client';

import { motion } from 'framer-motion';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';
import HeroSection from '@/app/layouts/Desktop/sections/HeroSection';
import PerfectBenefits from '@/components/sharedsections/PerfectBenefits';
import PerfectLight from '@/app/layouts/Desktop/sections/PerfectLight';
import PerfectPrivacy from '@/app/layouts/Desktop/sections/PerfectPrivacy';
import PerfectClimate from '@/app/layouts/Desktop/sections/PerfectClimate';
import PerfectSecurity from '@/components/sharedsections/PerfectSecurity';
import PerfectHomeKey from '@/components/sharedsections/PerfectHomeKey';
import PerfectCoverage from '@/components/sharedsections/PerfectCoverage';
import CTAHowItWorks from '@/components/CTAHowItWorks';

export default function Page() {
  // Apple-style spring physics for smooth, natural entrance
  const sectionAnimation = {
    initial: { 
      opacity: 0, 
      y: 60,
      filter: 'blur(8px)'
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)'
    },
    viewport: { 
      once: true, 
      margin: '-100px' // Trigger animation slightly before section is visible
    },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      mass: 0.8,
      duration: 0.8
    }
  };

  return (
    <main>
      {/* Header stays fixed, no animation needed */}
      <Header />
      
      {/* Hero - No wrapper, has its own internal animations */}
      <HeroSection />

      {/* Benefits Section */}
      <motion.div {...sectionAnimation}>
        <PerfectBenefits />
      </motion.div>
      
      {/* Perfect Light Section */}
      <motion.div {...sectionAnimation}>
        <PerfectLight />
      </motion.div>

      {/* Perfect Privacy Section */}
      <motion.div {...sectionAnimation}>
        <PerfectPrivacy />
      </motion.div>

      {/* Perfect Climate Section */}
      <motion.div {...sectionAnimation}>
        <PerfectClimate />
      </motion.div>
      
      {/* Perfect Security Section */}
      <motion.div {...sectionAnimation}>
        <PerfectSecurity />
      </motion.div>

      {/* Perfect HomeKey Section */}
      <motion.div {...sectionAnimation}>
        <PerfectHomeKey />
      </motion.div>
      
      {/* Perfect Coverage Section */}
      <motion.div {...sectionAnimation}>
        <PerfectCoverage />
      </motion.div>

      {/* CTA Section */}
      <motion.div {...sectionAnimation}>
        <CTAHowItWorks />
      </motion.div>
      
      {/* Footer stays visible, no animation */}
      <Footer />
    </main>
  );
}
