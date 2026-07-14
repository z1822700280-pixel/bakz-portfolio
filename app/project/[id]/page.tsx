'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

function isVideo(path: string) {
  return path.endsWith('.mov') || path.endsWith('.mp4')
}

function SectionHeading({ zh, en }: { zh: string; en: string }) {
  const { lang } = useLanguage()
  return (
    <div className="mb-8">
      <span className="text-xs tracking-[0.3em] text-secondary/50 uppercase">
        {lang === 'zh' ? '章节' : 'Section'}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-2">
        {lang === 'zh' ? zh : en}
      </h2>
      <div className="w-12 h-px bg-primary/30 mt-4" />
    </div>
  )
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

  const videos = project.images.filter(isVideo)
  const images = project.images.filter((m) => !isVideo(m))
  const fullFilm = videos[0]
  const clips = videos.slice(1)

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
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

        {/* Title overlay */}
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

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* ── Overview ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <SectionHeading zh="项目概览" en="Overview" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] whitespace-pre-line">
                {project.description[lang]}
              </p>
            </div>
            <div className="md:col-span-1">
              <div className="space-y-6 p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg">
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-2">
                    {lang === 'zh' ? '年份' : 'Year'}
                  </h4>
                  <p className="text-sm text-[var(--text-primary)]">{project.year}</p>
                </div>
                {project.role && (
                  <div>
                    <h4 className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-2">
                      {lang === 'zh' ? '角色' : 'Role'}
                    </h4>
                    <p className="text-sm text-[var(--text-primary)]">{project.role[lang]}</p>
                  </div>
                )}
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-2">
                    {lang === 'zh' ? '工具' : 'Tools'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 text-[var(--text-muted)] border border-[var(--border-subtle)] rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-2">
                    {lang === 'zh' ? '标签' : 'Tags'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 text-secondary bg-secondary/10 border border-secondary/20 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Full Film ── */}
        {fullFilm && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-24"
          >
            <SectionHeading zh="正片" en="Full Film" />
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-black">
              <video
                src={fullFilm}
                controls
                className="w-full h-full"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.section>
        )}

        {/* ── Video Clips ── */}
        {clips.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-24"
          >
            <SectionHeading zh="视频片段" en="Video Clips" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clips.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-black"
                >
                  <video
                    src={src}
                    controls
                    className="w-full h-full"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Visual Gallery ── */}
        {images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-24"
          >
            <SectionHeading zh="内容图" en="Gallery" />
            <div className="space-y-8">
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={src}
                    alt={`${project.title[lang]} - ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Reflection ── */}
        {project.reflection && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-24"
          >
            <SectionHeading zh="创作手记" en="Reflection" />
            <blockquote className="text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] italic border-l-2 border-primary/30 pl-6">
              {project.reflection[lang]}
            </blockquote>
          </motion.section>
        )}

        {/* ── External Links ── */}
        {project.externalLinks && project.externalLinks.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-24"
          >
            <SectionHeading zh="外部链接" en="External Links" />
            <div className="flex flex-wrap gap-4">
              {project.externalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wider border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Navigation ── */}
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