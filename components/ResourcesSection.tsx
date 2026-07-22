'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ResourcesSection({ links }: { links?: ExternalLink[] }) {
  const { lang } = useLanguage()

  if (!links || links.length === 0) return null

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
            Resources
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-8">
            {lang === 'zh' ? '外部链接' : 'External Links'}
          </h2>

          <div className="flex flex-wrap gap-4">
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm tracking-wider border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] hover:border-primary/30 hover:text-primary transition-all duration-300 group"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {link.label}
                <svg className="w-3 h-3 text-secondary/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
