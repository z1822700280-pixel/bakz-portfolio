'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTinaData } from '@/hooks/useTinaData'

const categories = [
  {
    key: 'game' as const,
    title: { zh: '游戏与交互设计', en: 'Game & Interactive Design' },
    desc: {
      zh: '展示基于 Unity、UE 等工具完成的游戏开发、关卡设计、场景搭建、交互体验及原型创作作品，包括独立小游戏、游戏场景演示、玩法设计与实时渲染动画等内容。',
      en: 'Showcasing game development, level design, scene building, interactive experiences, and prototypes created with Unity, Unreal Engine, and other tools.',
    },
    tags: ['Unity小游戏', 'UE场景搭建', '关卡设计', '交互设计', '场景动画展示'],
  },
  {
    key: 'ai-visual' as const,
    title: { zh: 'AI视觉与数字艺术', en: 'AI Visual Art & Digital Creation' },
    desc: {
      zh: '展示基于 AIGC 技术完成的视觉创作作品，包括 AI 生成图像、AI 短片、概念设计、角色设计、视觉实验及数字艺术探索等内容。',
      en: 'Showcasing AI-generated visual creations including AI images, AI short films, concept design, character design, visual experiments, and digital art exploration.',
    },
    tags: ['AI图片', 'AI视频', 'AI短片', '概念设计', '角色设计', 'Midjourney作品', 'ComfyUI工作流成果', '创意视觉实验'],
  },
  {
    key: 'post-production' as const,
    title: { zh: '影视后期与视觉设计', en: 'Post-production & Visual Design' },
    desc: {
      zh: '展示影视后期制作与平面视觉设计作品，包括视频剪辑、包装设计、海报设计、宣传物料、品牌视觉及综合视觉表达项目。',
      en: 'Showcasing post-production and graphic design work including video editing, motion graphics, poster design, promotional materials, brand identity, and comprehensive visual projects.',
    },
    tags: ['剪辑作品', '海报设计', '活动物料', 'UI平面设计'],
  },
]

export default function Works() {
  const { lang } = useLanguage()
  const { projects, isLoading } = useTinaData()
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1)

  return (
    <section id="works" ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--text-primary)]/[0.02] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {categories.map((cat, catIndex) => {
          const catProjects = projects.filter((p) => p.category === cat.key)
          return (
            <div key={cat.key}>
              {catIndex > 0 && <div className="section-divider my-16" />}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: catIndex * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary">
                  {cat.title[lang]}
                </h2>
                <div className="w-16 h-px bg-secondary/20 mb-4" />
                <p className="text-secondary mb-4 tracking-wide leading-relaxed max-w-3xl">
                  {cat.desc[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 text-[var(--text-muted)] border border-[var(--border-subtle)] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
