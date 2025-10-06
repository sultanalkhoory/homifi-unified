'use client';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';
import PerfectBenefits from '@/app/layouts/Desktop/sections/PerfectBeneficts';
import PerfectLight from '@/app/layouts/Desktop/sections/PerfectLight';
import PerfectPrivacy from '@/app/layouts/Desktop/sections/PerfectPrivacy';
import PerfectClimate from '@/app/layouts/Desktop/sections/PerfectClimate';
import PerfectSecurity from '@/app/layouts/Desktop/sections/PerfectSecurity';
import PerfectHomeKey from '@/app/layouts/Desktop/sections/PerfectHomeKey';
import { motion } from "framer-motion";
import { fadeRise } from "@/lib/animations";
import SmartIndicators from "@/components/SmartIndicators";

/**
 * Main Page Component
 * 
 * Structure:
 * 1. Header (fixed navigation)
 * 2. Hero Section (4/8 BALANCED LAYOUT with SmartIndicators)
 * 3. Perfect Light Section (lights demo with Control Center card)
 * 4. Perfect Privacy Section (curtains demo with Control Center card)
 * 5. Footer (with Works With badges)
 */

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
<section className="min-h-screen flex items-center py-20 pb-8 md:pb-20">
  <div className="mx-auto max-w-7xl px-4 w-full">
    <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      {/* LEFT COLUMN: Enhanced Messaging (4 columns) */}
      <motion.div 
        variants={fadeRise} 
        initial="hidden" 
        animate="show" 
        className="md:col-span-4 space-y-6"
      >
        {/* Main Headline - Emphasizes simplicity */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
          Your home, perfectly automated.
        </h1>
        
        {/* NEW: Key benefit badges - NO CODE, EASY SETUP */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-medium">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            No Programming Required
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
            Install Yourself
          </span>
        </div>
        
        {/* Enhanced Value Proposition - Platform Choice */}
        <div className="space-y-3">
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Set up automation in minutes. Control lighting, climate, and security—all without writing a single line of code.
          </p>
          
          {/* NEW: Platform Choice Emphasis */}
          <div className="pt-2">
            <p className="text-sm text-gray-500 mb-2">Choose your preferred platform:</p>
            <div className="flex items-center gap-3">
              <img src="/badges/works-with-apple-home.webp" alt="Apple Home" className="h-6 opacity-80 hover:opacity-100 transition-opacity" />
              <span className="text-gray-300">or</span>
              <img src="/badges/works-with-google-home.webp" alt="Google Home" className="h-6 opacity-80 hover:opacity-100 transition-opacity" />
              <span className="text-gray-300">or</span>
              <img src="/badges/works-with-alexa.webp" alt="Alexa" className="h-6 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
        
        {/* CTA with voice control mention */}
        <div className="pt-2 space-y-3">
          <a 
            href="#perfect-light" 
            className="inline-flex items-center rounded-full bg-black text-white 
              px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium
              hover:bg-gray-900 hover:scale-[1.02] hover:shadow-lg
              active:scale-[0.98]
              transition-all duration-200 ease-out
              shadow-md"
          >
            See How It Works
          </a>
          
          {/* NEW: Voice control hint */}
          <p className="text-xs text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
            </svg>
            Control everything with your voice: "Hey Siri, I'm home"
          </p>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: Photo with SmartIndicators (8 columns) - unchanged */}
      <motion.div 
        className="md:col-span-8"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/Curtains-Open-Lights-On-Homepod.png"
            alt="Modern smart home living room featuring integrated lighting, automated curtains, and voice control"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0">
            <SmartIndicators />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      
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
