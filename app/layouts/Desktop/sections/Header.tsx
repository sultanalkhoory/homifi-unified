'use client';
import Link from "next/link";
import { useState } from "react";

/**
 * Header Component - Safari-Style Liquid Glass
 * 
 * Apple-style navigation with Safari address bar glass treatment:
 * - Desktop: Full horizontal nav with links and glass CTA
 * - Mobile: Hamburger menu with simplified controls
 * 
 * Safari Glass Treatment:
 * - Heavy backdrop blur (64px) for strong frosted effect
 * - 75% opaque white background for readability
 * - No visible borders (pure glass aesthetic)
 * - Minimal shadow for subtle floating effect
 * - Solid logo and text for crisp readability
 * 
 * Fixed at top with breathing room offset
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="fixed top-6 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* 
          Safari-Style Glass Navigation Container
          - Heavy backdrop blur (Safari's frosted glass)
          - 75% opaque white (strong enough for text readability)
          - No borders (pure glass look)
          - Minimal shadow (subtle depth)
        */}
        <div 
          className="backdrop-blur-3xl bg-white/[0.75] rounded-full flex items-center gap-2 px-3 py-2 shadow-sm"
          style={{
            WebkitBackdropFilter: 'blur(64px)', // Safari compatibility
          }}
        >
          
          {/* Logo - solid and crisp */}
          <Link href="#" className="pl-2 flex items-center gap-2">
            <img src="/homifi-logo.png" alt="HomiFi" className="h-7" />
          </Link>
          
          {/* Main Navigation Links - centered */}
          <nav className="mx-auto hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-black transition-colors duration-200">
              Features
            </a>
            <a href="#works" className="hover:text-black transition-colors duration-200">
              Works
            </a>
            <a href="#ecosystem" className="hover:text-black transition-colors duration-200">
              Ecosystem
            </a>
            <a href="#pricing" className="hover:text-black transition-colors duration-200">
              Pricing
            </a>
          </nav>
          
          {/* Desktop CTA - nested glass effect */}
          <a 
            href="#contact" 
            className="ml-auto hidden md:inline-flex items-center rounded-full 
              backdrop-blur-xl bg-white/40 border border-white/60 text-gray-900 text-sm px-4 py-2
              hover:bg-white/60 hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-200 ease-out
              shadow-sm"
            style={{
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            Get Started
          </a>
          
          {/* Mobile Menu Button - solid for visibility */}
          <button 
            aria-label="Menu" 
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-auto inline-flex items-center justify-center 
              rounded-full w-10 h-10 bg-black text-white
              hover:bg-gray-900 active:scale-95
              transition-all duration-200"
          >
            <span className="text-lg leading-none">≡</span>
          </button>
        </div>
      </div>
    </header>
  );
}
