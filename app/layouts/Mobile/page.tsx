'use client';

import HeroSection from './sections/HeroSection';
import LightsSection from './sections/LightsSection';
import CurtainsSection from './sections/CurtainsSection';
import ClimateSection from './sections/ClimateSection';
import SecuritySection from './sections/SecuritySection';
import AppleTVInterlude from './sections/AppleTVInterlude';
import Footer from './sections/Footer';

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <LightsSection />
      <CurtainsSection />
      <ClimateSection />
      <SecuritySection />
      <AppleTVInterlude />
      <Footer />
    </main>
  );
}
