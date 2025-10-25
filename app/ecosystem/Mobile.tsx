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
 * Mobile Ecosystem Page
 * Optimized for smaller screens with touch-friendly spacing
 */
export default function MobileEcosystem() {
  
  // Lighter animation for mobile performance
  const sectionReveal = {
    initial: { opacity: 0, y: 40, filter: 'blur(4px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-50px' },
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 22,
      mass: 0.6
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black mb-5">
            Technology That Works
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              For You
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
            Your smart home should adapt to your life, not the other way around.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            No proprietary systems. No locked ecosystems. Just professional-grade 
            technology that works with whatever you choose.
          </p>
        </motion.div>
      </section>

      {/* Section 1: Choice */}
      <motion.section 
        {...sectionReveal}
        className="py-16 px-6"
      >
        <div className="max-w-2xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black mb-4">
              Your Home.
              <br />
              Your Choice.
            </h2>
            <p className="text-base text-gray-600">
              Control your home the way you want. Switch platforms whenever you want.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="space-y-4 mb-10">
            
            {/* Apple Home - Featured */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-black rounded-xl flex items-center justify-center mb-4">
                  <HomeIcon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-2">
                  Apple Home
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  Unlock your door with Apple HomeKey. See your doorbell on Apple TV. 
                  Open the garage from CarPlay.
                </p>

                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <KeyIcon className="w-3.5 h-3.5" />
                    <span>HomeKey Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TvIcon className="w-3.5 h-3.5" />
                    <span>Apple TV Doorbell Alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LockClosedIcon className="w-3.5 h-3.5" />
                    <span>CarPlay Garage Control</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Home */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                <HomeIcon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-2">
                Google Home
              </h3>
              
              <p className="text-sm text-gray-600">
                Full voice control through Google Assistant. Routines. Automations. 
                Complete integration.
              </p>
            </motion.div>

            {/* Amazon Alexa */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <HomeIcon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-2">
                Amazon Alexa
              </h3>
              
              <p className="text-sm text-gray-600">
                Works seamlessly with all your Alexa devices. Voice control. 
                Automation. Simple.
              </p>
            </motion.div>
          </div>

          {/* Bottom message */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500">
              Use your iPhone. Use Google Assistant. Use Alexa.
              <br />
              <span className="text-gray-700 font-medium">Switch between them. Use all three.</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Foundation */}
      <motion.section 
        {...sectionReveal}
        className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-2xl mx-auto">
          
          <div className="mb-10">
            <div className="inline-block px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-4">
              Professional Infrastructure
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black mb-4">
              Built on Enterprise
              <br />
              Infrastructure
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Your smart home starts with a rock-solid network. Professional-grade 
              equipment designed for reliability and scale.
            </p>
          </div>

          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm mb-1">
                  Enterprise Security Built In
                </h3>
                <p className="text-sm text-gray-600">
                  VLANs, firewalls, threat management. Business-grade protection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <WifiIcon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm mb-1">
                  No Dead Zones
                </h3>
                <p className="text-sm text-gray-600">
                  Professional access points that cover every corner seamlessly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm mb-1">
                  Scales With You
                </h3>
                <p className="text-sm text-gray-600">
                  Start with one room. Expand to the whole villa effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Network visualization - simplified for mobile */}
          <div className="relative aspect-square bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl p-6 max-w-sm mx-auto">
            
            {/* Central hub */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center"
              animate={{ 
                boxShadow: [
                  '0 8px 30px rgba(59, 130, 246, 0.3)',
                  '0 8px 50px rgba(59, 130, 246, 0.5)',
                  '0 8px 30px rgba(59, 130, 246, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <WifiIcon className="w-8 h-8 text-white" />
            </motion.div>

            {/* Simplified connection nodes */}
            {[0, 90, 180, 270].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * 80;
              const y = Math.sin(rad) * 80;
              
              return (
                <motion.div
                  key={angle}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-md border border-gray-200 flex items-center justify-center"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <HomeIcon className="w-4 h-4 text-gray-600" />
                </motion.div>
              );
            })}
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            UniFi is what businesses use.
            <br />
            <span className="text-gray-700 font-medium">We bring that reliability home.</span>
          </p>
        </div>
      </motion.section>

      {/* Section 3: Devices */}
      <motion.section 
        {...sectionReveal}
        className="py-16 px-6"
      >
        <div className="max-w-2xl mx-auto">
          
          <div className="mb-10">
            <div className="inline-block px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-4">
              Open Standards
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black mb-4">
              Smart Devices
              <br />
              That Just Work
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Hardware that integrates with everything. Not proprietary. Not locked. 
              Open protocols.
            </p>
          </div>

          {/* Device grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: '💡', label: 'Lighting', delay: 0 },
              { icon: '🔒', label: 'Security', delay: 0.05 },
              { icon: '📹', label: 'Cameras', delay: 0.1 },
              { icon: '🌡️', label: 'Climate', delay: 0.15 },
              { icon: '🪟', label: 'Blinds', delay: 0.2 },
              { icon: '🔔', label: 'Sensors', delay: 0.25 }
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, type: 'spring', stiffness: 300 }}
                className="aspect-square bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-md flex flex-col items-center justify-center gap-1"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[10px] text-gray-600 font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-gray-600 mb-8">
            <p className="flex items-start gap-2">
              <span className="text-xl flex-shrink-0">✓</span>
              <span>
                <strong className="text-black">Automation that learns.</strong> Set up routines 
                without programming.
              </span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="text-xl flex-shrink-0">✓</span>
              <span>
                <strong className="text-black">Batteries that last years.</strong> Sensors you 
                install and forget about.
              </span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="text-xl flex-shrink-0">✓</span>
              <span>
                <strong className="text-black">Industry standards.</strong> Zigbee. Matter. Z-Wave. 
                Works everywhere.
              </span>
            </p>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Connect up to 500 devices. 800-meter range.
            <br />
            <span className="text-gray-700 font-medium">And it all works together.</span>
          </p>
        </div>
      </motion.section>

      {/* Final Section: The Result */}
      <motion.section 
        {...sectionReveal}
        className="py-16 px-6 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="max-w-2xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black mb-6 text-center">
              The Result
            </h2>
            
            <div className="space-y-4 text-base text-gray-600 mb-8">
              <p className="text-center">
                A <strong className="text-black">professional network backbone</strong>
              </p>
              <p className="text-center">
                Running <strong className="text-black">open smart devices</strong>
              </p>
              <p className="text-center">
                Controlled by <strong className="text-black">your platform</strong>
                <br />
                <span className="text-sm">(Apple / Google / Alexa)</span>
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                No vendor lock-in. No proprietary traps.
                <br />
                <span className="text-lg text-black font-semibold">Just a system that works.</span>
              </p>
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
}
