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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/90 border-b border-white/[0.03]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-[0.3em] text-white/80 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          BAKZ
        </motion.button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('works')}
            className="text-sm text-white/50 hover:text-white/90 transition-colors relative group tracking-widest"
          >
            {lang === 'zh' ? '作品' : 'Works'}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-500" />
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-white/50 hover:text-white/90 transition-colors relative group tracking-widest"
          >
            {lang === 'zh' ? '关于' : 'About'}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-500" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}