'use client'

import { motion } from 'framer-motion'

export default function Slogan() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2
            className="text-8xl md:text-9xl lg:text-[12rem] font-light italic tracking-wide text-white/90"
            style={{
              fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '0.1em',
            }}
          >
            BAKZ
          </h2>

          <p className="mt-8 text-sm tracking-[0.3em] text-gray-500 uppercase">
            Keep loving. Keep exploring. Keep evolving.
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.02] to-transparent pointer-events-none" />
    </section>
  )
}
