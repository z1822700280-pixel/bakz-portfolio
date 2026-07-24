'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'

export default function NextProject({ currentId }: { currentId: string }) {
  const { lang } = useLanguage()

  const current = projects.find((p) => p.id === currentId)
  if (!current) return null

  const currentIndex = projects.findIndex((p) => p.id === currentId)
  const next = projects[(currentIndex + 1) % projects.length]

  if (!next) return null

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
            {lang === 'zh' ? '下一项目' : 'Next Project'}
          </span>

          <Link href={`/project/${next.id}`} className="group block">
            <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)]">
              <Image
                src={next.thumbnail}
                alt={next.title[lang]}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">
                  {next.category === 'game'
                    ? lang === 'zh' ? '游戏与交互设计' : 'Game & Interactive'
                    : next.category === 'ai-visual'
                    ? lang === 'zh' ? 'AI视觉与数字艺术' : 'AI Visual Art'
                    : next.category === 'film'
                    ? lang === 'zh' ? '影视制作' : 'Film Production'
                    : next.category === 'ui-design'
                    ? lang === 'zh' ? 'UI 设计' : 'UI Design'
                    : lang === 'zh' ? '影视后期' : 'Post-production'}
                </span>
                <h3 className="text-xl md:text-3xl font-bold text-white mt-2 group-hover:text-white/90 transition-colors">
                  {next.title[lang]}
                </h3>
                <div className="flex items-center gap-2 mt-3 text-white/60 text-sm">
                  <span>{lang === 'zh' ? '查看项目' : 'View Project'}</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
