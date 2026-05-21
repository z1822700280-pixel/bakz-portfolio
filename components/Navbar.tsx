'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          BAKZ
        </motion.button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('works')}
            className="text-sm hover:text-primary transition-colors"
          >
            {lang === 'zh' ? '作品' : 'Works'}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm hover:text-primary transition-colors"
          >
            {lang === 'zh' ? '关于' : 'About'}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}