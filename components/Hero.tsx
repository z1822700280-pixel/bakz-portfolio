'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import ParticleField from './ParticleField'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const { lang } = useLanguage()

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale,
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(139, 115, 85, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 30%, rgba(0, 92, 175, 0.08) 0%, transparent 50%),
            linear-gradient(to bottom right, var(--bg-primary), var(--bg-primary))
          `,
        }}
      />
      {/* Wabi-sabi accent orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wabi/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      {/* Particle effect */}
      <ParticleField />

      {/* Manifesto - Center Left */}
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 text-left pl-12 md:pl-24 lg:pl-40 pr-6 max-w-3xl"
        style={{ opacity }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-wider bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textShadow: '0 0 120px rgba(0, 92, 175, 0.3)' }}
        >
          {lang === 'zh' ? '保持热爱 不断探索 无限进步' : 'Stay Passionful Keep Exploring Infinite Progress'}
        </motion.h1>
      </motion.div>

      {/* Name & Positioning - Bottom Right */}
      <motion.div
        className="absolute bottom-20 right-0 z-10 text-right pr-12 md:pr-24 lg:pr-40"
        style={{ opacity }}
      >
        <motion.p
          className="text-xl md:text-2xl text-primary mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          张洎彬
        </motion.p>

        <motion.p
          className="text-lg text-gray-500 dark:text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {lang === 'zh' ? 'AIGC 视频创作者 / 数字媒体设计' : 'AIGC Video Creator / Digital Media Designer'}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
