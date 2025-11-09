'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

// Lazy load layout components with loading state
const DesktopEcosystem = dynamic(() => import('./Desktop'), {
  ssr: true,
  loading: () => <div className="min-h-screen" />
});
const MobileEcosystem = dynamic(() => import('./Mobile'), {
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

/**
 * Ecosystem Page Router
 * Switches between Desktop and Mobile layouts based on screen size
 */
export default function EcosystemPage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia('(max-width: 1024px)');

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);

    return () => mql.removeEventListener('change', handler);
  }, []);

  // Show loading state until mounted
  if (!mounted || isMobile === null) {
    return (
      <>
        <Header />
        <div className="min-h-screen" />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {isMobile ? <MobileEcosystem /> : <DesktopEcosystem />}
      <Footer />
    </>
  );
}
