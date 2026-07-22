'use client'

import { motion } from 'framer-motion'
import { SnapshotItem } from '@/data/projects'

export default function ProjectSnapshot({ items: snapshot }: { items: SnapshotItem[] }) {
  if (!snapshot || snapshot.length === 0) return null

  return (
    <section className="py-16 md:py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-6 block">
            Project Snapshot
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {snapshot.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 md:p-5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]"
              >
                <div className="text-[10px] tracking-[0.25em] text-secondary/50 uppercase mb-2">
                  {item.label}
                </div>
                <div className="text-sm md:text-base font-medium text-[var(--text-primary)] leading-relaxed">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
