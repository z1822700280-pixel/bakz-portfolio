'use client'

import { motion } from 'framer-motion'
import { GallerySeries } from '@/data/gallery'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import WatermarkOverlay from './WatermarkOverlay'

interface GallerySeriesCardProps {
  series: GallerySeries
  index: number
  onImageClick: (imageIndex: number) => void
}

export default function GallerySeriesCard({ series, index, onImageClick }: GallerySeriesCardProps) {
  const { lang } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-500">
        {/* Stacked cover preview */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Background stack layers */}
          {series.images.length > 1 && (
            <div className="absolute inset-0 scale-[0.92] -top-1 opacity-30 rounded-lg overflow-hidden">
              <Image
                src={series.images[Math.min(1, series.images.length - 1)]}
                alt=""
                fill
                className="object-cover blur-sm"
              />
            </div>
          )}
          {series.images.length > 2 && (
            <div className="absolute inset-0 scale-[0.96] -top-0.5 opacity-20 rounded-lg overflow-hidden">
              <Image
                src={series.images[Math.min(2, series.images.length - 1)]}
                alt=""
                fill
                className="object-cover blur-sm"
              />
            </div>
          )}

          {/* Front cover image */}
          <div className="relative w-full h-full z-10" onContextMenu={(e) => e.preventDefault()}>
            <Image
              src={series.cover}
              alt={series.title[lang]}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <WatermarkOverlay />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-5">
            <p className="text-white/80 text-sm line-clamp-2">{series.description[lang]}</p>
          </div>

          {/* Image count badge */}
          <div className="absolute top-3 right-3 z-20 bg-black/50 backdrop-blur-sm text-white/80 text-xs px-2.5 py-1 rounded-full">
            {series.images.length} {lang === 'zh' ? '张' : ''}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
            {series.title[lang]}
          </h3>
          <div className="flex gap-2 flex-wrap">
            {series.tags.map((tag) => (
              <span key={tag} className="text-xs text-[var(--text-muted)]">
                {tag}
              </span>
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
            {series.images.map((img, i) => (
              <button
                key={i}
                onClick={() => onImageClick(i)}
                className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-[var(--border-subtle)] hover:border-primary/40 transition-colors duration-300"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={img}
                  alt={`${series.title[lang]} ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <WatermarkOverlay />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
