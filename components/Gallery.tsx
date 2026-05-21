'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { galleryItems } from '@/data/gallery'
import GalleryItem from './GalleryItem'
import Lightbox from './Lightbox'
import { useLanguage } from '@/contexts/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const { lang } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1)

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter)

  const handleNext = () => {
    if (selectedItem === null) return
    setSelectedItem((selectedItem + 1) % filteredItems.length)
  }

  const handlePrev = () => {
    if (selectedItem === null) return
    setSelectedItem(
      (selectedItem - 1 + filteredItems.length) % filteredItems.length
    )
  }

  return (
    <section id="gallery" ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      {/* Gradient overlay that fades in */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {lang === 'zh' ? '视觉画廊' : 'Visual Gallery'}
          </h2>
          <p className="text-gray-400 mb-8">
            {lang === 'zh'
              ? '海报 · 摄影 · AIGC 视觉'
              : 'Poster · Photography · AIGC Visual'}
          </p>

          {/* Filter buttons */}
          <div className="flex gap-4 mb-8">
            {['all', 'poster', 'photography', 'aigc'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === cat
                    ? 'bg-iki text-white'
                    : 'bg-dark-card text-gray-400 hover:text-white'
                }`}
              >
                {cat === 'all'
                  ? lang === 'zh'
                    ? '全部'
                    : 'All'
                  : cat === 'poster'
                  ? lang === 'zh'
                    ? '海报'
                    : 'Poster'
                  : cat === 'photography'
                  ? lang === 'zh'
                    ? '摄影'
                    : 'Photography'
                  : 'AIGC'}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedItem(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        item={selectedItem !== null ? filteredItems[selectedItem] : null}
        onClose={() => setSelectedItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  )
}
