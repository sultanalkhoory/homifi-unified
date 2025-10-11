'use client';

import HeroSection from "./sections/HeroSection";
import LightsSection from './sections/LightsSection';
import CurtainsSection from './sections/CurtainsSection';
import ClimateSection from './sections/ClimateSection';
import SecuritySection from './sections/SecuritySection';
import AppleTVInterlude from './sections/AppleTVInterlude';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Header />
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
