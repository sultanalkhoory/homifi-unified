'use client';
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Header Component
 * 
 * Apple-style frosted glass navigation with responsive behavior
 * - Desktop: Full horizontal nav with links
 * - Mobile: Hamburger menu with slide-down dropdown
 * - Fixed at top with breathing room (top-6 offset)
 * - Includes "How It Works" as separate page link
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="fixed top-6 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Frosted Glass Navigation Container */}
        <div className="frosted rounded-full flex items-center gap-2 px-3 py-2">
          
          {/* Logo / Brand */}
          <Link href="/" className="pl-2 flex items-center gap-2">
            <img src="/homifi-logo.png" alt="HomiFi" className="h-7" />
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="mx-auto hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="/#features" className="hover:text-black transition-colors duration-200">
              Features
            </a>
            <Link href="/how-it-works" className="hover:text-black transition-colors duration-200">
              How It Works
            </Link>
            <a href="/#ecosystem" className="hover:text-black transition-colors duration-200">
              Ecosystem
            </a>
            <a href="/#pricing" className="hover:text-black transition-colors duration-200">
              Pricing
            </a>
          </nav>
          
          {/* Desktop CTA Button */}
          <a 
            href="/#contact" 
            className="ml-auto hidden md:inline-flex items-center rounded-full 
              bg-white border border-black/20 text-black text-sm px-4 py-2
              hover:bg-gray-50 hover:border-black/30 hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-200 ease-out
              shadow-sm hover:shadow-md"
          >
            Get Started
          </a>
          
          {/* Mobile Menu Button (Hamburger) */}
          <button 
            aria-label="Menu" 
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-auto inline-flex items-center justify-center 
              rounded-full w-10 h-10 bg-black text-white
              hover:bg-gray-900 active:scale-95
              transition-all duration-200"
          >
            {/* Toggle between hamburger and X */}
            <span className="text-lg leading-none">{open ? '×' : '≡'}</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2"
            >
              <div className="frosted rounded-2xl p-4 shadow-xl">
                <nav className="flex flex-col gap-3">
                  <a 
                    href="/#features" 
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-gray-700 font-medium"
                  >
                    Features
                  </a>
                  <Link 
                    href="/how-it-works"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-gray-700 font-medium"
                  >
                    How It Works
                  </Link>
                  <a 
                    href="/#ecosystem"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-gray-700 font-medium"
                  >
                    Ecosystem
                  </a>
                  <a 
                    href="/#pricing"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-gray-700 font-medium"
                  >
                    Pricing
                  </a>
                  
                  {/* Separator */}
                  <div className="h-px bg-gray-200 my-2" />
                  
                  {/* Mobile CTA */}
                  <a 
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl bg-black text-white text-center font-semibold
                      hover:bg-gray-900 active:scale-95 transition-all"
                  >
                    Get Started
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
