'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OverviewSection } from '@/data/projects'

export default function OverviewAccordion({ sections }: { sections: OverviewSection[] }) {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  if (!sections || sections.length === 0) return null

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

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
            Project Overview
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            项目详解
          </h2>
          <p className="text-sm text-secondary/60 mb-10">
            点击展开各章节，了解完整的项目制作过程
          </p>

          <div className="space-y-3">
            {sections.map((section, i) => {
              const isOpen = expanded.has(i)

              return (
                <div
                  key={i}
                  className="rounded-lg border border-[var(--border-subtle)] overflow-hidden"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                        {i + 1}
                      </span>
                      <h3 className="text-sm md:text-base font-medium text-[var(--text-primary)]">
                        {section.title}
                      </h3>
                    </div>
                    <svg
                      className={`w-4 h-4 text-secondary/40 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-5 pb-5 md:pb-6 pt-2">
                          <p className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)] whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
