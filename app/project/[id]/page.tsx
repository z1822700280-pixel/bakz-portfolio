'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import ProjectTimeline from '@/components/ProjectTimeline'
import KeyChallenges from '@/components/KeyChallenges'
import OverviewAccordion from '@/components/OverviewAccordion'
import MediaShowcase from '@/components/MediaShowcase'
import AIWorkflow from '@/components/AIWorkflow'
import ReflectionSection from '@/components/ReflectionSection'
import RelatedProjects from '@/components/RelatedProjects'

function isVideo(path: string) {
  return path.endsWith('.mov') || path.endsWith('.mp4')
}

export default function ProjectDetail() {
  const params = useParams()
  const { lang } = useLanguage()
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--text-muted)]">Project not found</p>
      </div>
    )
  }

  const fullFilm = project.images.filter(isVideo)[0]
  const hasAI = project.tools.some((t) =>
    ['midjourney', 'chatgpt', 'aigc', 'ai', 'oii oii', 'lovart'].includes(t.toLowerCase())
  ) || project.tags.some((t) =>
    ['aigc', 'ai建模', 'ai'].includes(t.toLowerCase())
  )

  return (
    <main className="min-h-screen">
      {/* ── Section 1: Hero ── */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        {fullFilm ? (
          <video
            src={fullFilm}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay
          />
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title[lang]}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-[10px] tracking-[0.3em] text-secondary/70 uppercase border border-secondary/20 px-3 py-1 rounded-full">
                {project.category === 'game'
                  ? lang === 'zh' ? '游戏与交互设计' : 'Game & Interactive'
                  : project.category === 'ai-visual'
                  ? lang === 'zh' ? 'AI视觉与数字艺术' : 'AI Visual Art'
                  : lang === 'zh' ? '影视后期与视觉设计' : 'Post-production'}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-secondary/70 border border-secondary/20 px-3 py-1 rounded-full">
                {project.year}
              </span>
              {project.role && (
                <span className="text-[10px] tracking-[0.2em] text-secondary/70 border border-secondary/20 px-3 py-1 rounded-full">
                  {project.role[lang]}
                </span>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-primary">
              {project.title[lang]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Project Snapshot ── */}
      <ProjectSnapshot items={project.snapshot || []} />

      {/* ── Section 3: Development Pipeline ── */}
      <ProjectTimeline stages={project.pipeline || []} />

      {/* ── Section 4: Key Challenges ── */}
      <KeyChallenges items={project.challenges || []} />

      {/* ── Section 5: Project Overview (Accordion) ── */}
      <OverviewAccordion sections={project.overviewSections || []} />

      {/* ── Section 6: Media Showcase ── */}
      <MediaShowcase items={project.mediaItems || []} />

      {/* ── Section 7: AI Workflow (conditional) ── */}
      {hasAI && <AIWorkflow items={project.aiWorkflow || []} />}

      {/* ── Section 8: Reflection ── */}
      {project.reflection && (
        <ReflectionSection zh={project.reflection.zh} en={project.reflection.en} />
      )}

      {/* ── Section 9: Related Projects ── */}
      <RelatedProjects currentId={project.id} />

      {/* ── Back Navigation ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-[var(--border-subtle)]"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-[var(--text-muted)] hover:text-secondary transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
