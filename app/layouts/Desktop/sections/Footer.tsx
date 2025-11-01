'use client';

import Link from 'next/link';
import Image from 'next/image';
import WorksWithFooter from '@/components/WorksWithFooter';

/**
 * Footer Component with proper spacing for mobile
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 md:mt-auto">
      {/* Works With badges */}
      <WorksWithFooter />

      {/* Main footer */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4">
          
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Logo */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/homifi-logo.png"
                  alt="HomiFi"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="mt-4 text-gray-500 text-sm max-w-xs">
                Apple-first integration for lighting, privacy, climate, and security — 
                designed to feel invisible until you need it.
              </p>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="font-medium text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-500 text-sm hover:text-black">Features</Link></li>
                <li><Link href="/how-it-works" className="text-gray-500 text-sm hover:text-black">How it Works</Link></li>
                <li><Link href="#ecosystem" className="text-gray-500 text-sm hover:text-black">Ecosystem</Link></li>
                <li><Link href="#pricing" className="text-gray-500 text-sm hover:text-black">Pricing</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-medium text-sm mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link href="#contact" className="text-gray-500 text-sm hover:text-black">Get in Touch</Link></li>
                <li><Link href="#support" className="text-gray-500 text-sm hover:text-black">Support</Link></li>
                <li><a href="mailto:info@homifi.ae" className="text-gray-500 text-sm hover:text-black">info@homifi.ae</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom - legal */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs text-center md:text-left">
              &copy; {currentYear} HomiFi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 text-xs hover:text-gray-600">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 text-xs hover:text-gray-600">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 text-xs hover:text-gray-600">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
