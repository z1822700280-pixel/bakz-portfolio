'use client'

import { motion } from 'framer-motion'

const links = [
  { id: 'creative-fields', label: 'CREATIVE FIELDS' },
  { id: 'game', label: 'GAME DEVELOPMENT' },
  { id: 'ai-visual', label: 'AI ART' },
  { id: 'film', label: 'FILM PRODUCTION' },
  { id: 'ui-design', label: 'VISUAL DESIGN' },
  { id: 'about', label: 'ABOUT' },
]

export default function HeroNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 5.5, duration: 1.5 }}
      className="absolute bottom-12 right-8 z-20 hidden md:block"
    >
      <div className="flex flex-col items-end gap-3">
        {links.map((link, i) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="group relative flex items-center gap-3"
          >
            <span className="h-[1px] w-0 bg-primary/30 transition-all duration-500 group-hover:w-12" />
            <span className="text-[10px] tracking-[0.3em] text-primary/30 hover:text-primary/80 transition-colors duration-300">
              {link.label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
