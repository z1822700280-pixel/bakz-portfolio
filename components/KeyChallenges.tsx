'use client'

import { motion } from 'framer-motion'
import { Challenge } from '@/data/projects'

export default function KeyChallenges({ items }: { items: Challenge[] }) {
  if (!items || items.length === 0) return null

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
            Key Challenges
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-12">
            关键问题与解决
          </h2>

          <div className="space-y-6">
            {items.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-4">
                      {challenge.question}
                    </h3>
                    <div className="space-y-2">
                      {challenge.solutions.map((s, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[var(--text-secondary)]">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
