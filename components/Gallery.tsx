'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { GallerySeries as GallerySeriesType } from '@/data/gallery'
import GallerySeriesCard from './GallerySeriesCard'
import PokerLightbox from './PokerLightbox'
import { useLanguage } from '@/contexts/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTinaData } from '@/hooks/useTinaData'

const FILTERS = [
  { key: 'all' as const },
  { key: 'aigc' as const },
  { key: '3d' as const },
  { key: 'ui' as const },
  { key: 'photography' as const },
] as const

const FILTER_LABELS_ZH: Record<string, string> = {
  all: '全部',
  aigc: 'AIGC 海报',
  '3d': '3D 建模',
  ui: 'UI 设计',
  photography: '摄影',
}

const FILTER_LABELS_EN: Record<string, string> = {
  all: 'All',
  aigc: 'AIGC Posters',
  '3d': '3D Modeling',
  ui: 'UI Design',
  photography: 'Photography',
}

export default function Archive() {
  const [filter, setFilter] = useState<string>('all')
  const [selectedSeries, setSelectedSeries] = useState<GallerySeriesType | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { lang } = useLanguage()
  const { galleryItems, isLoading } = useTinaData()
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1)

  const filteredSeries = useMemo(
    () =>
      filter === 'all'
        ? galleryItems
        : galleryItems.filter((s) => s.category === filter),
    [filter, galleryItems]
  )

  const openLightbox = (series: GallerySeriesType, imageIndex: number) => {
    setSelectedSeries(series)
    setSelectedImageIndex(imageIndex)
  }

  const closeLightbox = () => {
    setSelectedSeries(null)
  }

  const labels = lang === 'zh' ? FILTER_LABELS_ZH : FILTER_LABELS_EN

  return (
    <section id="archive" ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--text-primary)]/[0.01] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary">
            {lang === 'zh' ? '创意存档' : 'Creative Archive'}
          </h2>
          <p className="text-secondary mb-8 tracking-wide">
            {lang === 'zh'
              ? '海报、3D 建模、UI 设计、摄影——创作笔记'
              : 'Posters, 3D modeling, UI design, photography — a creative notebook.'}
          </p>

          {/* Filter bar */}
          <div className="flex gap-3 flex-wrap mb-12">
            {FILTERS.map(({ key }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === key
                    ? 'bg-secondary/20 text-secondary border border-secondary/30'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-secondary border border-[var(--border-subtle)]'
                }`}
              >
                {labels[key]}
              </button>
            ))}
          </div>

          {/* Series grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSeries.map((series, index) => (
              <GallerySeriesCard
                key={series.id}
                series={series}
                index={index}
                onImageClick={(imgIndex) => openLightbox(series, imgIndex)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Poker-style lightbox */}
      <PokerLightbox
        series={selectedSeries}
        initialIndex={selectedImageIndex}
        onClose={closeLightbox}
      />
    </section>
  )
}
