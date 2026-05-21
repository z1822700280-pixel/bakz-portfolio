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
          ? 'bg-[#1a1a1a]/95 border-b border-white/5'
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: 'overlay',
      } : {}}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-wider text-primary"
          whileHover={{ scale: 1.05 }}
        >
          BAKZ
        </motion.button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('works')}
            className="text-sm hover:text-primary transition-colors relative group"
          >
            {lang === 'zh' ? '作品' : 'Works'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm hover:text-primary transition-colors relative group"
          >
            {lang === 'zh' ? '关于' : 'About'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}