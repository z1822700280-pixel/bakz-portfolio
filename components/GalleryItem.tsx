'use client'

import { motion } from 'framer-motion'
import { GalleryItem as GalleryItemType } from '@/data/gallery'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

interface GalleryItemProps {
  item: GalleryItemType
  index: number
  onClick: () => void
}

export default function GalleryItem({ item, index, onClick }: GalleryItemProps) {
  const { lang } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-square relative">
          <Image
            src={item.image}
            alt={item.title[lang]}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
            <h3 className="text-white text-lg font-semibold text-center">
              {item.title[lang]}
            </h3>
            <div className="flex gap-2 mt-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs text-white/90 bg-white/20 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Primary accent border on hover */}
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/60 rounded-lg transition-all duration-300" />
        </div>
      </motion.div>
    </motion.div>
  )
}
