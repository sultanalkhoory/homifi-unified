'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Desktop = dynamic(() => import('./layouts/Desktop/page'), { ssr: false });
const Mobile = dynamic(() => import('./layouts/Mobile/page'), { ssr: false });

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);

    // ✅ Typed handler for MediaQueryList events
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);

    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}

// Loading component with subtle animation
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning circle */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-3 border-gray-200"></div>
          <div
            className="absolute inset-0 rounded-full border-3 border-black border-t-transparent animate-spin"
            style={{ animationDuration: '0.8s' }}
          ></div>
        </div>
        {/* Optional: Add logo or text */}
        <p className="text-sm text-gray-500 font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show loading spinner until component mounts
  if (!mounted) {
    return <LoadingSpinner />;
  }

  return isMobile ? <Mobile /> : <Desktop />;
}
