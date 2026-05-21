'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Works() {
  const { lang } = useLanguage()
  const gameProjects = projects.filter((p) => p.category === 'game')
  const videoProjects = projects.filter((p) => p.category === 'video')

  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Game Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {lang === 'zh' ? '交互与游戏创作' : 'Interactive & Game Creation'}
          </h2>
          <p className="text-gray-400 mb-8">
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

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {lang === 'zh' ? 'AIGC 视频与视觉创作' : 'AIGC Video & Visual Creation'}
          </h2>
          <p className="text-gray-400 mb-8">
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
