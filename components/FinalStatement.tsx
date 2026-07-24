'use client'

import { motion } from 'framer-motion'

export default function FinalStatement() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[12vw] sm:text-[14vw] font-extrabold tracking-[-0.05em] leading-[0.85] text-primary"
            style={{ fontFamily: "'Syne', sans-serif" }}
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            KEEP
          </motion.h2>
          <motion.h2
            className="text-[10vw] sm:text-[12vw] font-extrabold tracking-[-0.05em] leading-[0.85] text-primary/80 mt-[-1vw] ml-[6vw] sm:ml-[10vw]"
            style={{ fontFamily: "'Syne', sans-serif" }}
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            EXPLORING
          </motion.h2>

          <motion.p
            className="mt-8 text-sm tracking-[0.3em] text-secondary/70 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            Keep loving. Keep exploring. Keep evolving.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    </section>
  )
}
