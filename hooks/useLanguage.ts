'use client'

import { useState } from 'react'

type Language = 'zh' | 'en'

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language')
      if (saved) return saved as Language
    }
    return 'zh'
  })

  const toggleLanguage = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh'
    setLang(newLang)
    localStorage.setItem('language', newLang)
  }

  return { lang, toggleLanguage }
}
