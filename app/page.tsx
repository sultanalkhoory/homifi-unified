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

export default function Page() {
  const isMobile = useIsMobile();
  return isMobile ? <Mobile /> : <Desktop />;
}
