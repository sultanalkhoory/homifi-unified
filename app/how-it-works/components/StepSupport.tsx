'use client';

import { motion } from 'framer-motion';

/**
 * Step 4: We Support You
 * 
 * Shows explicit support offering with 3 months included
 * WhatsApp support, remote help, on-site visits, firmware updates
 */

export default function StepSupport({ 
  isActive = true, 
  fullScreen = true 
}: { 
  isActive?: boolean;
  fullScreen?: boolean;
}) {
  
  const supportFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'WhatsApp Support',
      description: 'Direct line to our team',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Remote Help',
      description: 'Quick fixes without a visit',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'On-Site Visit',
      description: 'One included visit if needed',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'System Updates',
      description: 'Latest firmware & features',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${fullScreen ? 'rounded-3xl shadow-2xl' : 'absolute inset-0'} bg-gradient-to-br from-white to-blue-50/30 p-6 md:p-12 overflow-hidden`}
    >
      <div className="relative h-full flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className={`${fullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
            We're Always Here
          </h3>
          <p className={`${fullScreen ? 'text-base' : 'text-xs'} text-gray-600`}>
            3 months of hands-on support, then flexible care plans
          </p>
        </motion.div>

        {/* Main Support Card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl">
            
            {/* 3 Months Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold text-lg">3 Months Included</span>
              </div>
            </motion.div>

            {/* Support Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 150 }}
                  className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                    {feature.icon}
                  </div>
                  
                  {/* Text */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Support CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <p className="text-gray-600 mb-4">
                After 3 months, flexible care plans available
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500">
            Honestly, you probably won't need us much—it's that simple.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
