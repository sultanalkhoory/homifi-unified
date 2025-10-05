'use client';

import { AnimatePresence, motion } from "framer-motion";

function GlassButton({
  label,
  active = false,
  onClick,
  disabled = false,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05, y: -2 }} // gentle lift + scale
      whileTap={{ scale: 0.92 }} // haptic bounce
      transition={{ duration: 0.1, ease: 'easeOut' }}
      className={`
        relative px-6 py-3 rounded-full text-sm font-medium
        backdrop-blur-xl border border-white/20 text-white shadow-lg
        transition-all duration-200 cursor-pointer
        ${active ? 'bg-white/18 text-gray-900 ring-1 ring-white/25' : 'bg-white/12'}
      `}
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
        >
          {label}
        </motion.span>
      </AnimatePresence>

      {/* Glass shine */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
        }}
      />
    </motion.button>
  );
}
