'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ReflectionSection({ zh, en }: { zh: string; en: string }) {
  const { lang } = useLanguage()

  return (
    <section className="py-16 md:py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <span className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-2 block">
            Developer&apos;s Log
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-12">
            创作手记
          </h2>

          <div className="relative">
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 rounded-full" />

            <div className="pl-6 md:pl-8 space-y-8">
              {(lang === 'zh' ? zh : en).split('\n\n').map((paragraph, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] italic">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
