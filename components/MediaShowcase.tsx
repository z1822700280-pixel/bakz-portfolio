'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MediaItem } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'
import WatermarkOverlay from './WatermarkOverlay'

function ImageLightbox({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all z-10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[90vw] h-[85vh]"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Image
          src={item.src}
          alt={item.title || ''}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
        <WatermarkOverlay />
      </motion.div>
    </motion.div>
  )
}

export default function MediaShowcase({ items }: { items: MediaItem[] }) {
  const { lang } = useLanguage()
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null)

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
                <video src={fullFilm.src} controls className="w-full h-full" playsInline onContextMenu={(e) => e.preventDefault()}>
                  Your browser does not support the video tag.
                </video>
                <WatermarkOverlay />
              </div>
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
                      <video src={clip.src} controls className="w-full h-full" playsInline onContextMenu={(e) => e.preventDefault()} />
                      <WatermarkOverlay />
                    </div>
                    <p className="text-xs text-secondary/50 mt-2 tracking-wide">{lang === 'zh' ? `片段 ${i + 1}` : `Clip ${i + 1}`}</p>
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
                    <div
                      className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] cursor-zoom-in group"
                      onClick={() => setLightboxItem(item)}
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <Image
                        src={item.src}
                        alt={item.title || `Process image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                      <WatermarkOverlay />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/0 group-hover:text-white/70 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-secondary/50 mt-3 tracking-wide">{i + 1}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <ImageLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
