'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-widest"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {lang === 'zh' ? 'EN' : '中'}
    </motion.button>
  )
}
