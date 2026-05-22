'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTilt } from '@/hooks/useTilt'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { lang } = useLanguage()
  const { ref: tiltRef, tilt, handlers } = useTilt(8)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <Link href={`/project/${project.id}`}>
        <motion.div
          ref={tiltRef}
          {...handlers}
          className="relative group cursor-pointer overflow-hidden rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors duration-500"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <div className="aspect-video relative">
            <Image
              src={project.thumbnail}
              alt={project.title[lang]}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <span className="text-white text-sm font-medium tracking-wider">
                {project.title[lang]}
              </span>
            </div>
            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[var(--text-on-card)] group-hover:text-[var(--text-primary)] transition-colors">{project.title[lang]}</h3>
            <div className="flex gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 text-[var(--text-on-card-muted)] border border-[var(--border-subtle)] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
