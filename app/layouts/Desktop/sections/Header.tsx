'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">

        {/* 🍎 Apple Liquid Glass Header */}
        <div className="
          relative overflow-hidden rounded-2xl
          glass-base glass-border glass-shadow
          bg-white/10 dark:bg-black/20
          flex items-center gap-3 px-4 py-3
          transition-all duration-300
        ">

          {/* Light diffusion overlay */}
          <div className="glass-glow" />

          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <img src="/homifi-logo.png" alt="HomiFi" className="h-6" />
          </Link>

          {/* Nav Links */}
          <nav className="mx-auto hidden md:flex gap-8 text-sm text-white/90 dark:text-gray-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#works" className="hover:text-white transition">Works</a>
            <a href="#ecosystem" className="hover:text-white transition">Ecosystem</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="
              hidden md:inline-flex items-center justify-center
              rounded-full px-5 py-2 text-sm text-white font-medium
              bg-white/10 dark:bg-white/5
              glass-base glass-border
              hover:bg-white/15 active:scale-[0.98]
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
              hover:bg-white/20 active:scale-95 transition
            "
          >
            <span className="text-lg leading-none">≡</span>
          </button>
        </div>

      </div>
    </header>
  );
}
