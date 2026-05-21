'use client'

import LanguageToggle from './LanguageToggle'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-xs text-white/20 tracking-widest">
          © 2026 张洎彬
        </p>
        <LanguageToggle />
      </div>
    </footer>
  )
}
