'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Apple-style floating glass bar */}
        <div
          className="
            backdrop-blur-xl 
            bg-white/10 
            dark:bg-black/20 
            border border-white/20 
            dark:border-white/10
            rounded-2xl
            shadow-[0_4px_30px_rgba(0,0,0,0.1)]
            flex items-center gap-2 px-4 py-3
            transition-all duration-300
          "
          style={{ WebkitBackdropFilter: 'blur(20px)' }}
        >
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <img src="/homifi-logo.png" alt="HomiFi" className="h-6" />
          </Link>

          {/* Navigation */}
          <nav className="mx-auto hidden md:flex items-center gap-8 text-sm text-white/90 dark:text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#works" className="hover:text-white transition-colors">Works</a>
            <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="
              hidden md:inline-flex items-center
              rounded-full px-5 py-2
              backdrop-blur-lg
              bg-gradient-to-r from-white/15 to-white/5
              dark:from-white/10 dark:to-white/0
              border border-white/20
              text-white text-sm font-medium
              shadow-[0_0_20px_rgba(255,255,255,0.15)]
              hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-200 ease-out
            "
          >
            Get Started
          </a>

          {/* Mobile Menu */}
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="
              md:hidden ml-auto inline-flex items-center justify-center
              w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white
              hover:bg-white/20 active:scale-95
              transition-all duration-200
            "
          >
            <span className="text-lg leading-none">≡</span>
          </button>
        </div>
      </div>
    </header>
  );
}
