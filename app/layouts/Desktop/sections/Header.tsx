'use client';
import Link from "next/link";
import { useRef, useState } from "react";
import { useGlassAutoContrast } from "@/app/hooks/useGlassAutoContrast";

export default function Header() {
  const [open, setOpen] = useState(false);
  const glassRef = useRef<HTMLDivElement>(null);
  useGlassAutoContrast(glassRef);

  return (
    <header className="fixed top-6 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">

        {/* Apple-like liquid glass header */}
        <div ref={glassRef} className="glass header-wrap flex items-center gap-3 px-4 py-3 rounded-2xl">
          {/* sheen/texture layers */}
          <span className="grain" />
          <span className="inner" />
          <span className="bend" />

          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <img src="/homifi-logo.png" alt="HomiFi" className="h-6" />
          </Link>

          {/* Nav */}
          <nav className="mx-auto hidden md:flex gap-8 text-sm">
            <a href="#features" className="hover:opacity-100 opacity-90 transition">Features</a>
            <a href="#works" className="hover:opacity-100 opacity-90 transition">Works</a>
            <a href="#ecosystem" className="hover:opacity-100 opacity-90 transition">Ecosystem</a>
            <a href="#pricing" className="hover:opacity-100 opacity-90 transition">Pricing</a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="
              hidden md:inline-flex items-center justify-center
              rounded-full px-5 py-2 text-sm font-medium
              glass
            "
            style={{
              // a slightly denser pill inside (inherits auto-contrast)
              // we reduce blur a bit so it looks “pressed” into the parent
              // (override blur via a CSS var)
              // @ts-ignore
              '--glass-blur': '16px'
            } as React.CSSProperties}
          >
            <span className="grain" />
            <span className="inner" />
            <span className="bend" />
            Get Started
          </a>

          {/* Mobile menu button */}
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto inline-flex items-center justify-center
                       w-10 h-10 rounded-full glass"
            style={{ ['--glass-blur' as any]: '14px' }}
          >
            <span className="grain" />
            <span className="inner" />
            <span className="bend" />
            <span className="text-base leading-none">≡</span>
          </button>
        </div>
      </div>
    </header>
  );
}
