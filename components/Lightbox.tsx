'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { GalleryItem } from '@/data/gallery'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

interface LightboxProps {
  item: GalleryItem | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ item, onClose, onNext, onPrev }: LightboxProps) {
  const { lang } = useLanguage()
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl max-h-[90vh] mx-4"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute -top-12 right-0 text-white/40 hover:text-white/80 text-xl transition-colors"
            onClick={onClose}
          >
            ✕
          </button>
          <div className="relative aspect-square">
            <Image
              src={item.image}
              alt={item.title[lang]}
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-white/90">{item.title[lang]}</h3>
            <p className="text-white/40 mt-2 text-sm tracking-wide">{item.description[lang]}</p>
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/80 text-3xl transition-colors"
            onClick={onPrev}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/80 text-3xl transition-colors"
            onClick={onNext}
          >
            ›
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
