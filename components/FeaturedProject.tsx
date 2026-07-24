'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FeaturedProject({ project }: { project: Project }) {
  const { lang } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <Link href={`/project/${project.id}`} className="group block">
        <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <Image
            src={project.thumbnail}
            alt={project.title[lang]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">
              {lang === 'zh' ? '精选项目' : 'Featured Project'}
            </span>
            <h3 className="text-xl md:text-3xl font-bold text-white mt-2 group-hover:text-white/90 transition-colors">
              {project.title[lang]}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] text-white/50 border border-white/20 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-white/60 text-sm">
              <span>{lang === 'zh' ? '查看项目' : 'View Project'}</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
