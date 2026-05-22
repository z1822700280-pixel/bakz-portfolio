'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export default function GlowCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const glowColor = isDark ? 'rgba(17, 50, 133, 0.15)' : 'rgba(221, 165, 45, 0.12)'

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998]"
      style={{
        left: mousePosition.x - 75,
        top: mousePosition.y - 75,
        width: 150,
        height: 150,
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        borderRadius: '50%',
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: isVisible ? [0.5, 0.8, 0.5] : 0,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
