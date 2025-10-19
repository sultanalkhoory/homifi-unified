'use client';

import HeroSection from "./sections/HeroSection";
import PerfectBenefits from '@/components/sharedsections/PerfectBenefits';
import LightsSection from './sections/LightsSection';
import CurtainsSection from './sections/CurtainsSection';
import ClimateSection from './sections/ClimateSection';
import SecuritySection from '@/components/sharedsections/PerfectSecurity';
import PerfectHomeKey from '@/components/sharedsections/PerfectHomeKey';
import PerfectCoverage from '@/components/sharedsections/PerfectCoverage';
import Header from '@/app/layouts/Desktop/sections/Header';
import Footer from '@/app/layouts/Desktop/sections/Footer';

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <PerfectBenefits />
      <LightsSection />
      <CurtainsSection />
      <ClimateSection />
      <SecuritySection />
      <PerfectHomeKey />
      <CoverageSection />
      <Footer />
    </main>
  );
}
