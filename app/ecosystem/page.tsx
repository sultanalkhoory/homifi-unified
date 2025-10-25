'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

// Lazy load layout components
const DesktopEcosystem = dynamic(() => import('./Desktop'), { ssr: false });
const MobileEcosystem = dynamic(() => import('./Mobile'), { ssr: false });

/**
 * Ecosystem Page Router
 * Switches between Desktop and Mobile layouts based on screen size
 */
export default function EcosystemPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1024px)');
    
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    
    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);
    
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <>
      <Header />
      {isMobile ? <MobileEcosystem /> : <DesktopEcosystem />}
      <Footer />
    </>
  );
}
