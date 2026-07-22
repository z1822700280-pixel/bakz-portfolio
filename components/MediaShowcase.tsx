'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MediaItem } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MediaShowcase({ items }: { items: MediaItem[] }) {
  const { lang } = useLanguage()

  if (!items || items.length === 0) return null

  const videos = items.filter((m) => m.type === 'video')
  const images = items.filter((m) => m.type === 'image')
  const fullFilm = videos[0]
  const clips = videos.slice(1)

  return (
    <section className="py-16 md:py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <span className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-2 block">
            Media Showcase
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-12">
            媒体展示
          </h2>

          {/* Full Film */}
          {fullFilm && (
            <div className="mb-16">
              <h3 className="text-sm tracking-[0.25em] text-secondary/50 uppercase mb-4">
                {lang === 'zh' ? '正片' : 'Full Film'}
              </h3>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-black">
                <video src={fullFilm.src} controls className="w-full h-full" playsInline>
                  Your browser does not support the video tag.
                </video>
              </div>
              {fullFilm.description && (
                <p className="text-xs text-secondary/60 mt-3 tracking-wide">{fullFilm.description}</p>
              )}
            </div>
          )}

          {/* Video Clips */}
          {clips.length > 0 && (
            <div className="mb-16">
              <h3 className="text-sm tracking-[0.25em] text-secondary/50 uppercase mb-4">
                {lang === 'zh' ? '视频片段' : 'Video Clips'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {clips.map((clip, i) => (
                  <div key={i}>
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-black">
                      <video src={clip.src} controls className="w-full h-full" playsInline />
                    </div>
                    {clip.title && (
                      <p className="text-xs font-medium text-[var(--text-primary)] mt-2">{clip.title}</p>
                    )}
                    {clip.description && (
                      <p className="text-xs text-secondary/60 mt-0.5">{clip.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Gallery */}
          {images.length > 0 && (
            <div>
              <h3 className="text-sm tracking-[0.25em] text-secondary/50 uppercase mb-4">
                {lang === 'zh' ? '过程记录' : 'Process Gallery'}
              </h3>
              <div className="space-y-8">
                {images.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                      <Image
                        src={item.src}
                        alt={item.title || `Process image ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                    {(item.title || item.description) && (
                      <div className="mt-3">
                        {item.title && (
                          <p className="text-sm font-medium text-[var(--text-primary)]">{item.title}</p>
                        )}
                        {item.description && (
                          <p className="text-xs text-secondary/60 mt-0.5">{item.description}</p>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
