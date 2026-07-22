'use client'

import { motion } from 'framer-motion'
import { AIWorkflowItem } from '@/data/projects'

export default function AIWorkflow({ items }: { items: AIWorkflowItem[] }) {
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
            AI Collaboration
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            AI 协作流程
          </h2>
          <p className="text-sm text-secondary/60 mb-10">
            本项目中的 AI 参与环节与人工分工
          </p>

          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                    {item.stage}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-xs tracking-[0.2em] text-primary/70 uppercase">AI 负责</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.ai}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full text-[var(--text-primary)]" style={{ backgroundColor: 'var(--text-primary)' }} />
                      <span className="text-xs tracking-[0.2em] text-secondary/70 uppercase">人工负责</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.human}</p>
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
