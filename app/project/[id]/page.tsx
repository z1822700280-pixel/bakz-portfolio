'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectDetail() {
  const params = useParams()
  const { lang } = useLanguage()
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Image */}
      <motion.div
        className="relative h-[60vh] w-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title[lang]}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title[lang]}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-gray-400">{project.year}</span>
            <div className="flex gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            {project.description[lang]}
          </p>

          {/* Project Images */}
          <div className="space-y-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={image}
                  alt={`${project.title[lang]} - ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              ← {lang === 'zh' ? '返回首页' : 'Back to Home'}
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
