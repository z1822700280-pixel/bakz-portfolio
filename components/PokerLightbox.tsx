'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GallerySeries } from '@/data/gallery'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import WatermarkOverlay from './WatermarkOverlay'

interface PokerLightboxProps {
  series: GallerySeries | null
  initialIndex: number
  onClose: () => void
}

export default function PokerLightbox({ series, initialIndex, onClose }: PokerLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isDragging, setIsDragging] = useState(false)
  const [dragX, setDragX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { lang } = useLanguage()

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, series?.id])

  const goNext = useCallback(() => {
    if (!series) return
    setCurrentIndex((prev) => (prev + 1) % series.images.length)
  }, [series])

  const goPrev = useCallback(() => {
    if (!series) return
    setCurrentIndex((prev) => (prev - 1 + series.images.length) % series.images.length)
  }, [series])

  // Keyboard
  useEffect(() => {
    if (!series) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [series, onClose, goNext, goPrev])

  // Mouse wheel
  useEffect(() => {
    if (!series) return
    const handler = (e: WheelEvent) => {
      if (e.deltaY > 0) goNext()
      else goPrev()
    }
    const el = containerRef.current
    el?.addEventListener('wheel', handler)
    return () => el?.removeEventListener('wheel', handler)
  }, [series, goNext, goPrev])

  // Drag
  const handleDragEnd = () => {
    if (!series) return
    if (dragX < -50) goNext()
    else if (dragX > 50) goPrev()
    setIsDragging(false)
    setDragX(0)
  }

  if (!series) return null

  const hasPrev = series.images.length > 1
  const allImages = series.images

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 z-50 text-white/30 hover:text-white/70 text-2xl transition-colors"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 z-50 text-white/40 text-sm tracking-widest">
          {currentIndex + 1} / {allImages.length}
        </div>

        {/* Card container */}
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center overflow-hidden select-none"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={() => setIsDragging(true)}
          onMouseMove={(e) => { if (isDragging) setDragX(e.movementX) }}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => { if (isDragging) handleDragEnd() }}
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={(e) => { if (isDragging) setDragX(e.touches[0].clientX - (containerRef.current?.getBoundingClientRect().width ?? 0) / 2) }}
          onTouchEnd={handleDragEnd}
        >
          <div className="relative w-full max-w-3xl aspect-[4/3] mx-6">
            {/* Stacked cards behind */}
            {allImages.map((img, i) => {
              const offset = (i - currentIndex + allImages.length) % allImages.length
              if (offset === 0) return null

              const zIndex = allImages.length - offset
              const scale = 1 - offset * 0.04
              const rotate = offset % 2 === 0 ? offset * 1.5 : -offset * 1.5
              const translateY = offset * 8

              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{
                    zIndex: allImages.length - offset,
                    pointerEvents: 'none',
                  }}
                  animate={{
                    scale: Math.max(scale, 0.85),
                    rotate: Math.min(rotate, offset < 4 ? rotate : 0),
                    y: Math.min(translateY, 30),
                    opacity: Math.max(1 - offset * 0.2, 0),
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </motion.div>
              )
            })}

            {/* Current card */}
            <motion.div
              key={`current-${currentIndex}`}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
              style={{ zIndex: allImages.length + 1 }}
              initial={{ scale: 0.92, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1, x: dragX }}
              exit={{ scale: 0.92, opacity: 0.5 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={allImages[currentIndex]}
                alt={series.title[lang]}
                fill
                className="object-contain"
                draggable={false}
              />
              <WatermarkOverlay />
            </motion.div>
          </div>
        </div>

        {/* Navigation arrows */}
        {hasPrev && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/80 transition-all"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/80 transition-all"
              onClick={(e) => { e.stopPropagation(); goNext() }}
            >
              ›
            </button>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
