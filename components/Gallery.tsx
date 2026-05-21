'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { galleryItems } from '@/data/gallery'
import GalleryItem from './GalleryItem'
import Lightbox from './Lightbox'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const { lang } = useLanguage()

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
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                    ? 'bg-primary text-white'
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
