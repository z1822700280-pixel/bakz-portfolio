'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PipelineStage } from '@/data/projects'

export default function ProjectTimeline({ stages }: { stages: PipelineStage[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  if (!stages || stages.length === 0) return null

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
            Development Pipeline
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-12">
            开发流程
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />

            <div className="space-y-0">
              {stages.map((stage, i) => {
                const isLast = i === stages.length - 1
                const isExpanded = expandedIndex === i

                return (
                  <div key={i} className="relative">
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      className="relative flex items-start gap-4 md:gap-6 w-full text-left py-4 group"
                    >
                      {/* Node dot */}
                      <div className="relative z-10 mt-1 flex-shrink-0">
                        <div
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                            isExpanded
                              ? 'border-primary bg-primary/10'
                              : 'border-[var(--border-subtle)] bg-[var(--bg-card)] group-hover:border-primary/40'
                          }`}
                        >
                          <span className={`text-xs font-bold transition-colors ${
                            isExpanded ? 'text-primary' : 'text-secondary/60'
                          }`}>
                            {i + 1}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-base md:text-lg font-semibold transition-colors ${
                            isExpanded ? 'text-primary' : 'text-[var(--text-primary)]'
                          }`}>
                            {stage.title}
                          </h3>
                          <svg
                            className={`w-4 h-4 text-secondary/40 transition-transform duration-300 ml-4 flex-shrink-0 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {stage.target && (
                          <p className="text-sm text-secondary/70 mt-1">{stage.target}</p>
                        )}
                      </div>
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="ml-12 md:ml-16 pb-6 space-y-4">
                            {stage.work && (
                              <div>
                                <h4 className="text-xs tracking-[0.2em] text-secondary/50 uppercase mb-1">具体工作</h4>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stage.work}</p>
                              </div>
                            )}
                            {stage.problems && (
                              <div>
                                <h4 className="text-xs tracking-[0.2em] text-secondary/50 uppercase mb-1">遇到的问题</h4>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stage.problems}</p>
                              </div>
                            )}
                            {stage.solutions && (
                              <div className="p-3 rounded bg-primary/5 border border-primary/10">
                                <h4 className="text-xs tracking-[0.2em] text-primary/70 uppercase mb-1">解决方案</h4>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stage.solutions}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Connector line between nodes */}
                    {!isLast && (
                      <div className="ml-[31px] md:ml-[39px] w-px h-4 bg-[var(--border-subtle)]" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
