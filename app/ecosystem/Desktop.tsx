'use client';

import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  WifiIcon,
  SparklesIcon,
  KeyIcon,
  TvIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

/**
 * Desktop Ecosystem Page
 * Emotional journey through technology choice, foundation, and devices
 */
export default function DesktopEcosystem() {
  
  // Scroll-triggered animation config
  const sectionReveal = {
    initial: { opacity: 0, y: 60, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-100px' },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      mass: 0.8
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section - Emotional Hook */}
      <section className="min-h-[85vh] flex items-center justify-center px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-center"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-semibold tracking-tight text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Technology That Works
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              For You
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your smart home should adapt to your life, not the other way around. 
            No proprietary systems. No locked ecosystems. No expensive upgrades 
            when you want to change platforms.
          </motion.p>

          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Just professional-grade technology that works with whatever you 
            choose—and keeps working for years.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 1: Choice (Lead with Apple, show openness) */}
      <motion.section 
        {...sectionReveal}
        className="py-32 px-8"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black mb-6">
              Your Home.
              <br />
              Your Choice.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Control your home the way you want. Switch platforms whenever you want. 
              Your system doesn't lock you in.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* Apple Home - Featured */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-lg relative overflow-hidden group"
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-black rounded-2xl flex items-center justify-center mb-6">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Apple Home
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Unlock your door with Apple HomeKey. See your doorbell on Apple TV. 
                  Open the garage from CarPlay.
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <KeyIcon className="w-4 h-4" />
                    <span>HomeKey Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TvIcon className="w-4 h-4" />
                    <span>Apple TV Doorbell Alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LockClosedIcon className="w-4 h-4" />
                    <span>CarPlay Garage Control</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Home */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <HomeIcon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-black mb-3">
                Google Home
              </h3>
              
              <p className="text-gray-600">
                Full voice control through Google Assistant. Routines. Automations. 
                Complete integration.
              </p>
            </motion.div>

            {/* Amazon Alexa */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <HomeIcon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-black mb-3">
                Amazon Alexa
              </h3>
              
              <p className="text-gray-600">
                Works seamlessly with all your Alexa devices and Echo speakers. 
                Voice control. Automation. Simple.
              </p>
            </motion.div>
          </div>

          {/* Bottom message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-gray-500">
              Use your iPhone. Use Google Assistant. Use Alexa. 
              <br />
              <span className="text-gray-700 font-medium">Switch between them. Use all three at once.</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Foundation (UniFi) */}
      <motion.section 
        {...sectionReveal}
        className="py-32 px-8 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                Professional Infrastructure
              </div>
              
              <h2 className="text-5xl font-semibold tracking-tight text-black mb-6">
                Built on Enterprise
                <br />
                Infrastructure
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your smart home starts with a rock-solid network. Not consumer routers. 
                Professional-grade equipment designed for reliability and scale.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Enterprise Security Built In
                    </h3>
                    <p className="text-gray-600">
                      VLANs, firewalls, threat management. The same security that protects businesses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <WifiIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      No Dead Zones
                    </h3>
                    <p className="text-gray-600">
                      Professional access points that cover every corner of your property. Seamlessly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Scales With You
                    </h3>
                    <p className="text-gray-600">
                      Start with one room. Expand to the whole villa. The network grows effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-500 mt-8">
                UniFi is what businesses use.
                <br />
                <span className="text-gray-700 font-medium">We bring that reliability home.</span>
              </p>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              {/* Network visualization */}
              <div className="relative aspect-square bg-white/50 backdrop-blur-sm rounded-3xl border border-white/60 shadow-2xl p-8">
                
                {/* Central hub */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 10px 40px rgba(59, 130, 246, 0.3)',
                      '0 10px 60px rgba(59, 130, 246, 0.5)',
                      '0 10px 40px rgba(59, 130, 246, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <WifiIcon className="w-12 h-12 text-white" />
                </motion.div>

                {/* Connection lines to devices */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 140;
                  const y = Math.sin(rad) * 140;
                  
                  return (
                    <motion.div
                      key={angle}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      {/* Connection line */}
                      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" width="200" height="200">
                        <motion.line
                          x1="100"
                          y1="100"
                          x2={100 - x}
                          y2={100 - y}
                          stroke="url(#line-gradient)"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                        />
                        <defs>
                          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Device node */}
                      <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg border border-gray-200 flex items-center justify-center">
                        <HomeIcon className="w-6 h-6 text-gray-600" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Devices (LifeSmart) */}
      <motion.section 
        {...sectionReveal}
        className="py-32 px-8"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left: Simple visual grid */}
            <div className="relative order-2 md:order-1">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '💡', label: 'Lighting', delay: 0 },
                  { icon: '🔒', label: 'Security', delay: 0.1 },
                  { icon: '📹', label: 'Cameras', delay: 0.2 },
                  { icon: '🌡️', label: 'Climate', delay: 0.3 },
                  { icon: '🪟', label: 'Blinds', delay: 0.4 },
                  { icon: '🔔', label: 'Sensors', delay: 0.5 }
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="aspect-square bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-lg flex flex-col items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="text-4xl">{item.icon}</span>
                    <span className="text-xs text-gray-600 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                Open Standards
              </div>
              
              <h2 className="text-5xl font-semibold tracking-tight text-black mb-6">
                Smart Devices
                <br />
                That Just Work
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hardware that integrates with everything. Not proprietary. Not locked. 
                Open protocols that any integrator can service.
              </p>

              <div className="space-y-4 text-gray-600">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>
                    <strong className="text-black">Automation that learns.</strong> Set up routines 
                    without programming. The system adapts to your patterns.
                  </span>
                </p>
                
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>
                    <strong className="text-black">Batteries that last years.</strong> Not months. 
                    Sensors you install and forget about.
                  </span>
                </p>
                
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>
                    <strong className="text-black">Industry standards.</strong> Zigbee. Matter. Z-Wave. 
                    Works with professional integrators everywhere.
                  </span>
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-base text-gray-500">
                  Connect up to 500 devices. 800-meter range. Blazing fast response.
                  <br />
                  <span className="text-gray-700 font-medium">And it all works together.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final Section: The Result */}
      <motion.section 
        {...sectionReveal}
        className="py-32 px-8 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl shadow-2xl p-12 md:p-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-8">
              The Result
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 mb-10">
              <p>
                A <strong className="text-black">professional network backbone</strong> (UniFi)
              </p>
              <p>
                Running <strong className="text-black">open smart home devices</strong> (LifeSmart)
              </p>
              <p>
                Controlled by <strong className="text-black">the platform you choose</strong>
                <br />
                <span className="text-base">(Apple / Google / Alexa)</span>
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-500">
                No vendor lock-in. No proprietary traps.
                <br />
                <span className="text-2xl text-black font-semibold">Just a system that works.</span>
              </p>
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
}
