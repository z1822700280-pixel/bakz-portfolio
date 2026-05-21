'use client'

import LanguageToggle from './LanguageToggle'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm text-gray-500">
          © 2026 张洎彬
        </p>
        <LanguageToggle />
      </div>
    </footer>
  )
}
