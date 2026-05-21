'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { GalleryItem } from '@/data/gallery'
import Image from 'next/image'

interface LightboxProps {
  item: GalleryItem | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ item, onClose, onNext, onPrev }: LightboxProps) {
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl max-h-[90vh] mx-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute -top-10 right-0 text-white text-xl"
            onClick={onClose}
          >
            ✕
          </button>
          <div className="relative aspect-square">
            <Image
              src={item.image}
              alt={item.title.zh}
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold">{item.title.zh}</h3>
            <p className="text-gray-400 mt-2">{item.description.zh}</p>
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl"
            onClick={onPrev}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl"
            onClick={onNext}
          >
            ›
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
