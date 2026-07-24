'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const fields = [
  {
    id: 'game',
    gradient: 'from-primary/10 via-transparent to-transparent',
    borderGlow: 'group-hover:border-primary/30',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path d="M6 12h4m4 0h4" /><path d="M9 9V7a2 2 0 012-2h2a2 2 0 012 2v2" />
        <rect x="2" y="10" width="20" height="10" rx="2" /><circle cx="6" cy="15" r="1" /><circle cx="18" cy="15" r="1" />
      </svg>
    ),
  },
  {
    id: 'opencv',
    gradient: 'from-secondary/10 via-transparent to-transparent',
    borderGlow: 'group-hover:border-secondary/30',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path d="M4 7l8 5-8 5V7z" /><path d="M13 7h7v10h-7z" />
      </svg>
    ),
  },
  {
    id: 'ai-visual',
    gradient: 'from-primary/10 via-transparent to-transparent',
    borderGlow: 'group-hover:border-primary/30',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path d="M12 3v4m0 10v4m-9-9h4m10 0h4" />
        <path d="M5.636 5.636l2.828 2.828m7.072 7.072l2.828 2.828m0-12.728l-2.828 2.828M8.464 15.536l-2.828 2.828" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 'film',
    gradient: 'from-secondary/10 via-transparent to-transparent',
    borderGlow: 'group-hover:border-secondary/30',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <rect x="2" y="6" width="20" height="12" rx="2" /><polygon points="10,9 16,12 10,15" fill="currentColor" />
      </svg>
    ),
  },
]

const content = {
  zh: [
    { title: '游戏与交互设计', desc: 'UE5 · Unity · 技术美术 · 交互开发', count: '3 个项目' },
    { title: 'OpenCV 代码开发', desc: '计算机视觉 · 图像处理 · Python', count: '3 个项目' },
    { title: 'AI 视觉与数字艺术', desc: 'AI 短片 · 概念设计 · 视觉实验', count: '4 个项目' },
    { title: '影视制作', desc: '短片 · 纪录片 · 翻拍 · 剪辑', count: '3 个项目' },
  ],
  en: [
    { title: 'Game Development', desc: 'UE5 · Unity · Technical Art · Interaction', count: '3 Projects' },
    { title: 'OpenCV Development', desc: 'Computer Vision · Image Processing · Python', count: '3 Projects' },
    { title: 'AI Art', desc: 'AI Films · Concept Design · Visual Experiments', count: '4 Projects' },
    { title: 'Film Production', desc: 'Short Films · Documentary · Remake', count: '3 Projects' },
  ],
}

export default function CreativeFields() {
  const { lang } = useLanguage()
  const { ref, isVisible } = useScrollReveal(0.1)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const items = lang === 'zh' ? content.zh : content.en

  return (
    <section id="creative-fields" ref={ref} className="relative py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto"
      >
        <span className="text-[10px] tracking-[0.3em] text-secondary/50 uppercase mb-2 block">
          Creative Fields
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
          {lang === 'zh' ? '创作领域' : 'Fields of Work'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {fields.map((field, i) => (
            <motion.button
              key={field.id}
              onClick={() => scrollTo(field.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative p-6 md:p-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-all duration-500 text-left overflow-hidden ${field.borderGlow}`}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${field.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary/40 group-hover:text-secondary transition-colors duration-500">
                    {field.icon}
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-500">
                    {items[i].count}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-2">
                  {items[i].title}
                </h3>
                <p className="text-sm text-secondary/70 leading-relaxed">
                  {items[i].desc}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
