'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTilt } from '@/hooks/useTilt'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function About() {
  const { lang } = useLanguage()
  const { ref: tiltRef, tilt, handlers } = useTilt(6)
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1)

  return (
    <section id="about" ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      {/* Gradient overlay that fades in */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Portrait placeholder */}
          <motion.div
            ref={tiltRef}
            {...handlers}
            className="aspect-square relative rounded-lg overflow-hidden bg-dark-card"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
              <svg
                className="w-24 h-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {lang === 'zh' ? '关于我' : 'About Me'}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {lang === 'zh'
                ? '我热爱视觉表达，擅长从创意中提炼品牌感，与时俱进，擅长接收新鲜技术，熟练与AI的沟通与创作，具备新媒体内容创作与设计执行的双重能力。'
                : 'Creative and detail-driven designer with a passion for storytelling.'}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">
                  {lang === 'zh' ? '邮箱' : 'Email'}
                </h3>
                <p>1822700280@qq.com</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">
                  {lang === 'zh' ? '电话' : 'Phone'}
                </h3>
                <p>13547598026</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['AIGC', '视频制作', 'UI设计', '游戏开发'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-4 py-1.5 bg-primary/15 text-primary border border-primary/30 rounded-full hover:bg-primary/25 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}