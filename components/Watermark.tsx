'use client'

import { motion } from 'framer-motion'

export default function Watermark() {
  return (
    <motion.div
      className="fixed top-6 right-6 z-40 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <span 
        className="text-[10px] tracking-[0.5em] text-white/[0.08] font-light"
        style={{ 
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
        }}
      >
        张洎彬
      </span>
    </motion.div>
  )
}
