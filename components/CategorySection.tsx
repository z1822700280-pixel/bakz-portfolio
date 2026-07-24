'use client'

import { motion } from 'framer-motion'
import { projects, Project } from '@/data/projects'
import ProjectCard from './ProjectCard'
import FeaturedProject from './FeaturedProject'
import { useLanguage } from '@/contexts/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface CategoryConfig {
  key: string
  title: { zh: string; en: string }
  desc: { zh: string; en: string }
  tags: string[]
  featured?: boolean
}

export default function CategorySection({ config }: { config: CategoryConfig }) {
  const { lang } = useLanguage()
  const { ref, isVisible } = useScrollReveal(0.1)

  const categoryProjects = projects.filter((p) => p.category === config.key) as Project[]
  const first = categoryProjects[0]
  const rest = config.featured ? categoryProjects.slice(1) : categoryProjects

  return (
    <section id={config.key} ref={ref} className="relative py-20 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--text-primary)]/[0.02] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
            {config.title[lang]}
          </h2>
          <div className="w-16 h-px bg-secondary/20 mb-4" />
          <p className="text-secondary mb-4 tracking-wide leading-relaxed max-w-3xl">
            {config.desc[lang]}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {config.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 text-[var(--text-muted)] border border-[var(--border-subtle)] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {config.featured && first && (
            <div className="mb-8">
              <FeaturedProject project={first} />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(config.featured ? rest : categoryProjects).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
