'use client';

import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';
import HeroSection from '@/app/layouts/Desktop/sections/HeroSection';
import PerfectBenefits from '@/components/sharedsections/PerfectBenefits';
import PerfectLight from '@/app/layouts/Desktop/sections/PerfectLight';
import PerfectPrivacy from '@/app/layouts/Desktop/sections/PerfectPrivacy';
import PerfectClimate from '@/app/layouts/Desktop/sections/PerfectClimate';
import PerfectSecurity from '@/components/sharedsections/PerfectSecurity';
import PerfectHomeKey from '@/components/sharedsections/PerfectHomeKey';
import PerfectCoverage from '@/app/layouts/Desktop/sections/PerfectCoverage';

export default function Page() {
  return (
    <main>
      {/* Fixed header navigation */}
      <Header />
      
      {/* 
        ========== HERO SECTION (4/8 BALANCED LAYOUT) ==========
        
        Mobile spacing fix: md:min-h-screen instead of min-h-screen
        - Mobile: Content-driven height (no forced white space)
        - Desktop: Full-screen hero effect (dramatic impact)
      */}
      <HeroSection />

      {/* ========== PERFECT BENEFITS SECTION ========== */}
      <PerfectBenefits />
      
      {/* 
        ========== PERFECT LIGHT SECTION ==========
        Interactive lights demo with iOS Control Center-style card
        Shows room state changes with synchronized photo transitions
        Features:
        - Control Center card (compact on mobile, full size on desktop)
        - Smooth crossfade between lights on/off photos
        - Auto-trigger animation on scroll into view
      */}
      <PerfectLight />

      {/* 
        ========== PERFECT PRIVACY SECTION ==========
        Interactive curtains demo with video playback
        Shows curtains opening/closing with Control Center card
        Layout alternates: Video LEFT, Text RIGHT (opposite of PerfectLight)
        Auto-plays opening video once when section comes into view
      */}
      <PerfectPrivacy />

      {/* ========== PERFECT CLIMATE SECTION ========== */}
      <PerfectClimate />
      
      {/* ========== PERFECT SECURITY SECTION ========== */}
      <PerfectSecurity />

      {/* ========== PERFECT HOMEKEY SECTION ========== */}
      <PerfectHomeKey />
      
      {/* ========== PERFECT COVERAGE SECTION ========== */}
      <PerfectCoverage />
      
      {/*
        ========== FOOTER ==========
        Site footer with multiple components:
        - Works With platform badges (HomeKit, Google, Alexa)
        - Navigation links
        - Legal links (Privacy, Terms, Cookies)
        - Copyright notice
      */}
      <Footer />
    </main>
  );
}
