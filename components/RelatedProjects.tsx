'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'

export default function RelatedProjects({ currentId }: { currentId: string }) {
  const { lang } = useLanguage()

  const current = projects.find((p) => p.id === currentId)
  if (!current) return null

  const related = projects
    .filter((p) => p.id !== currentId)
    .sort((a, b) => {
      const aSameCat = a.category === current.category ? 1 : 0
      const bSameCat = b.category === current.category ? 1 : 0
      return bSameCat - aSameCat
    })
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <span className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-2 block">
            Continue Exploring
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            {lang === 'zh' ? '你可能还想查看' : 'You Might Also Like'}
          </h2>
          <p className="text-sm text-secondary/60 mb-10">
            {lang === 'zh' ? '继续探索其他项目' : 'Continue exploring more projects'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {related.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <Link href={`/project/${project.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                      <Image
                        src={project.thumbnail}
                        alt={project.title[lang]}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3">
                      <span className="text-[10px] tracking-[0.2em] text-secondary/50 uppercase">
                        {project.category === 'game'
                          ? lang === 'zh' ? '游戏与交互设计' : 'Game & Interactive'
                          : project.category === 'ai-visual'
                          ? lang === 'zh' ? 'AI视觉与数字艺术' : 'AI Visual Art'
                          : lang === 'zh' ? '影视后期与视觉设计' : 'Post-production'}
                      </span>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)] mt-1 group-hover:text-primary transition-colors">
                        {project.title[lang]}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
