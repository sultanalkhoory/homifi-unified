'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/contexts/ContactModalContext";
import { usePathname } from "next/navigation";

/**
 * Header Component with sequential menu animation
 * Updated with Ecosystem page link
 * Includes keyboard navigation and focus management
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const { openModal } = useContactModal();
  const pathname = usePathname();

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  // Focus first menu item when menu opens
  useEffect(() => {
    if (open && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, [open]);

  // Close menu when clicking outside (excluding the menu button)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const isOutsideMenu = menuRef.current && !menuRef.current.contains(target);
      const isNotButton = menuButtonRef.current && !menuButtonRef.current.contains(target);

      if (isOutsideMenu && isNotButton) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open]);

  return (
    <header className="fixed top-6 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Frosted Glass Navigation Container */}
        <div className="frosted rounded-full flex items-center gap-2 px-3 py-2">
          
          {/* Logo / Brand */}
          <Link href="/" className="pl-2 flex items-center gap-2">
            <Image
              src="/homifi-logo.png"
              alt="HomiFi"
              width={105}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="mx-auto hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a
              href="/#features"
              className={`hover:text-black transition-colors duration-200 ${
                pathname === '/' ? 'text-black font-medium' : ''
              }`}
            >
              Features
            </a>
            <Link
              href="/how-it-works"
              className={`hover:text-black transition-colors duration-200 ${
                pathname === '/how-it-works' ? 'text-black font-medium' : ''
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/ecosystem"
              className={`hover:text-black transition-colors duration-200 ${
                pathname === '/ecosystem' ? 'text-black font-medium' : ''
              }`}
            >
              Ecosystem
            </Link>
            <Link
              href="/about"
              className={`hover:text-black transition-colors duration-200 ${
                pathname === '/about' ? 'text-black font-medium' : ''
              }`}
            >
              About Us
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <button
            onClick={openModal}
            className="ml-auto hidden md:inline-flex items-center rounded-full
              bg-white border border-black/20 text-black text-sm px-4 py-2
              hover:bg-gray-50 hover:border-black/30 hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-200 ease-out
              shadow-sm hover:shadow-md"
          >
            Get Started
          </button>
          
          {/* Mobile Menu Button - Sequential animation */}
          <button
            ref={menuButtonRef}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-auto inline-flex items-center justify-center
              rounded-full w-10 h-10 bg-black
              hover:bg-gray-900 active:scale-95
              transition-all duration-200"
          >
            <div className="w-5 h-4 relative flex items-center justify-center">
              {/* Top Line */}
              <motion.span
                animate={open ? {
                  y: ["3px", "0px", "0px"],
                  rotate: [0, 0, 45]
                } : {
                  rotate: [45, 0, 0],
                  y: ["0px", "0px", "3px"]
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0.0, 0.2, 1],
                  times: [0, 0.5, 1]
                }}
                className="absolute w-full h-0.5 bg-white rounded-full"
              />
              
              {/* Middle Line */}
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute w-full h-0.5 bg-white rounded-full"
              />
              
              {/* Bottom Line */}
              <motion.span
                animate={open ? {
                  y: ["-3px", "0px", "0px"],
                  rotate: [0, 0, -45]
                } : {
                  rotate: [-45, 0, 0],
                  y: ["0px", "0px", "-3px"]
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0.0, 0.2, 1],
                  times: [0, 0.5, 1]
                }}
                className="absolute w-full h-0.5 bg-white rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              className="md:hidden mt-2"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-100">
                <nav className="flex flex-col gap-3">
                  <a
                    ref={firstMenuItemRef}
                    href="/#features"
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl hover:bg-white/50 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      pathname === '/' ? 'text-black bg-white/50' : 'text-gray-700'
                    }`}
                  >
                    Features
                  </a>
                  <Link
                    href="/how-it-works"
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl hover:bg-white/50 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      pathname === '/how-it-works' ? 'text-black bg-white/50' : 'text-gray-700'
                    }`}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/ecosystem"
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl hover:bg-white/50 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      pathname === '/ecosystem' ? 'text-black bg-white/50' : 'text-gray-700'
                    }`}
                  >
                    Ecosystem
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl hover:bg-white/50 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      pathname === '/about' ? 'text-black bg-white/50' : 'text-gray-700'
                    }`}
                  >
                    About Us
                  </Link>

                  {/* Separator */}
                  <div className="h-px bg-gray-200 my-2" />

                  {/* Mobile CTA */}
                  <button
                    onClick={() => {
                      setOpen(false);
                      openModal();
                    }}
                    className="px-4 py-3 rounded-xl bg-black text-white text-center font-semibold
                      hover:bg-gray-900 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black w-full"
                  >
                    Get Started
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
