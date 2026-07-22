'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { projects, MediaItem } from '@/data/projects'
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
import ResourcesSection from '@/components/ResourcesSection'
import NextProject from '@/components/NextProject'

function isVideo(path: string) {
  return path.endsWith('.mov') || path.endsWith('.mp4')
}

function fallbackMediaItems(images: string[]): MediaItem[] {
  return images.map((src) => ({
    src,
    type: isVideo(src) ? 'video' as const : 'image' as const,
  }))
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
      {/* ── Back to Home Button ── */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-xs tracking-wider text-white/70 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/10"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {lang === 'zh' ? '返回' : 'Back'}
        </Link>
      </div>

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

      {/* ── Section 4: Media Showcase ── */}
      <MediaShowcase items={project.mediaItems || fallbackMediaItems(project.images)} />

      {/* ── Section 5: Project Overview ── */}
      <OverviewAccordion sections={project.overviewSections || []} />

      {/* ── Section 6: Key Challenges ── */}
      <KeyChallenges items={project.challenges || []} />

      {/* ── Section 7: AI Workflow ── */}
      {hasAI && <AIWorkflow items={project.aiWorkflow || []} />}

      {/* ── Section 8: Reflection ── */}
      {project.reflection && (
        <ReflectionSection zh={project.reflection.zh} en={project.reflection.en} />
      )}

      {/* ── Section 9: Resources ── */}
      <ResourcesSection links={project.externalLinks} />

      {/* ── Section 10: Next Project ── */}
      <NextProject currentId={project.id} />
    </main>
  )
}
