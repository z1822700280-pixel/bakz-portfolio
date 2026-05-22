'use client'

import { motion } from 'framer-motion'
import { GalleryItem as GalleryItemType } from '@/data/gallery'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTilt } from '@/hooks/useTilt'

interface GalleryItemProps {
  item: GalleryItemType
  index: number
  onClick: () => void
}

export default function GalleryItem({ item, index, onClick }: GalleryItemProps) {
  const { lang } = useLanguage()
  const { ref: tiltRef, tilt, handlers } = useTilt(8)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <motion.div
        ref={tiltRef}
        {...handlers}
        className="relative overflow-hidden rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors duration-500"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="aspect-square relative">
          <Image
            src={item.image}
            alt={item.title[lang]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-end justify-end p-4">
            <h3 className="text-white text-lg font-semibold text-center">
              {item.title[lang]}
            </h3>
            <div className="flex gap-2 mt-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs text-white/70 bg-white/20 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Subtle border on hover */}
          <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-lg transition-all duration-500" />
        </div>
      </motion.div>
    </motion.div>
  )
}
