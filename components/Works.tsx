'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Works() {
  const { lang } = useLanguage()
  const gameProjects = projects.filter((p) => p.category === 'game')
  const videoProjects = projects.filter((p) => p.category === 'video')
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1)

  return (
    <section id="works" ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      {/* Gradient overlay that fades in */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--text-primary)]/[0.02] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Game Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary">
            {lang === 'zh' ? '交互与游戏创作' : 'Interactive & Game Creation'}
          </h2>
          <div className="w-16 h-px bg-secondary/20 mb-4" />
          <p className="text-secondary mb-8 tracking-wide">
            {lang === 'zh'
              ? '沉浸式空间体验与独立游戏创作'
              : 'Immersive spatial experiences and indie game creation'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Section divider */}
        <div className="section-divider my-16" />

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary">
            {lang === 'zh' ? 'AIGC 视频与视觉创作' : 'AIGC Video & Visual Creation'}
          </h2>
          <div className="w-16 h-px bg-secondary/20 mb-4" />
          <p className="text-secondary mb-8 tracking-wide">
            {lang === 'zh'
              ? 'AI 驱动的视频制作与视觉设计'
              : 'AI-driven video production and visual design'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
