'use client'

import { motion } from 'framer-motion'

export default function Slogan() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2
            className="text-8xl md:text-9xl lg:text-[12rem] font-light italic tracking-wide text-white/80"
            style={{
              fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textShadow: '0 0 120px rgba(255, 255, 255, 0.05)',
            }}
          >
            BAKZ
          </h2>

          <p className="mt-8 text-xs tracking-[0.4em] text-white/30 uppercase">
            Keep loving. Keep exploring. Keep evolving.
          </p>
        </motion.div>
      </div>

      {/* Cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.01] to-transparent pointer-events-none" />
    </section>
  )
}
