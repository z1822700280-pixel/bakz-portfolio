'use client'

import { motion } from 'framer-motion'

export default function Slogan() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8">
            BAKZ
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 tracking-widest">
            Keep loving. Keep exploring. Keep evolving.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent pointer-events-none" />
    </section>
  )
}
