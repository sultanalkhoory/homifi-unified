'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * StepCustomize - Before/After Transformation
 * Shows clear visual transformation when scene activates
 * Split screen with center activation button
 */

export default function StepCustomize({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  
  const [movieMode, setMovieMode] = useState(false);

  // Auto-demo on load
  useEffect(() => {
    if (!isActive) return;
    
    const timeout1 = setTimeout(() => setMovieMode(true), 2000);
    const timeout2 = setTimeout(() => setMovieMode(false), 5000);
    const timeout3 = setTimeout(() => setMovieMode(true), 7000);
    
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) setMovieMode(false);
  }, [isActive]);

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-white p-6 md:p-12 overflow-hidden relative`}
    >
      <div className="relative h-full flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <h3 className={`${fullScreen ? 'text-4xl md:text-5xl' : 'text-2xl'} font-semibold text-slate-900 mb-4 tracking-tight`}>
            One tap. Instant transformation.
          </h3>
          <p className={`${fullScreen ? 'text-xl' : 'text-base'} text-slate-600 max-w-2xl mx-auto`}>
            Watch what happens when you activate Movie Night
          </p>
        </motion.div>

        {/* Main Content - Split Screen */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-7xl">
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* LEFT SIDE - BEFORE */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                className="relative"
              >
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-semibold text-slate-900 mb-2">Before</h4>
                  <p className="text-slate-500">Normal daytime mode</p>
                </div>

                {/* Room visualization - BEFORE state */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  {/* Background - bright */}
                  <div className={`absolute inset-0 transition-all duration-1000 ${
                    movieMode 
                      ? 'bg-gradient-to-b from-slate-800 via-slate-900 to-black'
                      : 'bg-gradient-to-b from-blue-100 via-slate-100 to-slate-200'
                  }`} />

                  {/* Room elements */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    
                    {/* Top - Window/Curtains */}
                    <div className="flex justify-center gap-4">
                      <motion.div 
                        className="relative w-32 h-40 rounded-2xl overflow-hidden border-4 border-slate-300"
                        animate={{
                          borderColor: movieMode ? '#1e293b' : '#cbd5e1'
                        }}
                        transition={{ duration: 1 }}
                      >
                        {/* Window/Sky */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            background: movieMode 
                              ? 'linear-gradient(to bottom, #1e293b, #0f172a)'
                              : 'linear-gradient(to bottom, #93c5fd, #60a5fa)'
                          }}
                          transition={{ duration: 1 }}
                        />
                        
                        {/* Curtains overlay */}
                        <motion.div
                          className="absolute inset-0 bg-slate-700"
                          initial={{ scaleX: 0 }}
                          animate={{ 
                            scaleX: movieMode ? 1 : 0,
                            opacity: movieMode ? 0.95 : 0
                          }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </motion.div>
                    </div>

                    {/* Middle - TV */}
                    <div className="flex justify-center">
                      <motion.div 
                        className="w-48 h-28 rounded-xl border-4 flex items-center justify-center"
                        animate={{
                          borderColor: movieMode ? '#0f172a' : '#475569',
                          backgroundColor: movieMode ? '#3b82f6' : '#334155'
                        }}
                        transition={{ duration: 1 }}
                      >
                        {/* TV screen glow when active */}
                        <AnimatePresence>
                          {movieMode && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="text-4xl"
                            >
                              ▶️
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Bottom - Light indicator */}
                    <div className="flex justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full"
                        animate={{
                          backgroundColor: movieMode ? '#422006' : '#fbbf24',
                          boxShadow: movieMode 
                            ? '0 0 20px rgba(251, 191, 36, 0.1)'
                            : '0 0 60px rgba(251, 191, 36, 0.6)'
                        }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Device states */}
                <div className="mt-6 space-y-2">
                  {[
                    { name: 'Lights', state: movieMode ? '20%' : '100%', icon: '💡' },
                    { name: 'Curtains', state: movieMode ? 'Closed' : 'Open', icon: '🪟' },
                    { name: 'TV', state: movieMode ? 'On' : 'Off', icon: '📺' }
                  ].map((device) => (
                    <motion.div
                      key={device.name}
                      className="flex items-center justify-between px-4 py-2 bg-slate-50 rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{device.icon}</span>
                        <span className="text-sm font-medium text-slate-700">{device.name}</span>
                      </div>
                      <motion.span 
                        className="text-sm font-semibold"
                        animate={{
                          color: movieMode ? '#f97316' : '#64748b'
                        }}
                      >
                        {device.state}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CENTER - ACTIVATION BUTTON */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.button
                  onClick={() => setMovieMode(!movieMode)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-8 py-8 rounded-full transition-all duration-500 ${
                    movieMode
                      ? 'bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white shadow-2xl shadow-orange-500/40'
                      : 'bg-white text-slate-900 shadow-2xl border-4 border-slate-200'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      animate={{ rotate: movieMode ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m6.375 0c.621 0 1.125.504 1.125 1.125m-1.125-1.125c-.621 0-1.125.504-1.125 1.125m0 0c0 .621.504 1.125 1.125 1.125M13.5 14.25h-3" />
                      </svg>
                    </motion.div>
                    <div className="text-center">
                      <div className="text-sm font-bold whitespace-nowrap">Movie Night</div>
                      <div className="text-xs opacity-80">{movieMode ? 'Active' : 'Tap to activate'}</div>
                    </div>
                  </div>
                </motion.button>
              </div>

              {/* RIGHT SIDE - AFTER */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                className="relative"
              >
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-semibold text-slate-900 mb-2">After</h4>
                  <p className="text-slate-500">Perfect cinema mode</p>
                </div>

                {/* Duplicate visualization for "After" view - shows end state */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-black" />

                  <div className="relative h-full p-8 flex flex-col justify-between">
                    
                    {/* Top - Closed curtains */}
                    <div className="flex justify-center gap-4">
                      <div className="relative w-32 h-40 rounded-2xl overflow-hidden border-4 border-slate-800">
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
                        <div className="absolute inset-0 bg-slate-700 opacity-95" />
                      </div>
                    </div>

                    {/* Middle - TV ON */}
                    <div className="flex justify-center">
                      <div className="w-48 h-28 rounded-xl border-4 border-slate-900 bg-blue-500 flex items-center justify-center">
                        <div className="text-4xl">▶️</div>
                      </div>
                    </div>

                    {/* Bottom - Dimmed light */}
                    <div className="flex justify-center">
                      <div 
                        className="w-16 h-16 rounded-full bg-amber-900"
                        style={{ boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Device states - After */}
                <div className="mt-6 space-y-2">
                  {[
                    { name: 'Lights', state: '20%', icon: '💡' },
                    { name: 'Curtains', state: 'Closed', icon: '🪟' },
                    { name: 'TV', state: 'On', icon: '📺' }
                  ].map((device) => (
                    <div
                      key={device.name}
                      className="flex items-center justify-between px-4 py-2 bg-slate-50 rounded-xl"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{device.icon}</span>
                        <span className="text-sm font-medium text-slate-700">{device.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-orange-500">
                        {device.state}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Mobile button */}
            <div className="md:hidden mt-8 flex justify-center">
              <motion.button
                onClick={() => setMovieMode(!movieMode)}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-500 ${
                  movieMode
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xl'
                    : 'bg-slate-900 text-white'
                }`}
              >
                {movieMode ? '✓ Movie Night Active' : 'Activate Movie Night'}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12 text-center space-y-6"
        >
          <p className="text-slate-600 text-lg">
            <span className="font-semibold text-slate-900">One tap.</span> Everything adjusts automatically.
          </p>

          {/* Platform badges */}
          <div>
            <p className="text-sm text-slate-500 mb-4">Works with</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {['Apple Home', 'Google Home', 'Alexa'].map((platform, i) => (
                <motion.div
                  key={platform}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
                  className="px-5 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
