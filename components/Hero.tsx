'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

// SVG text path for line drawing animation
function DrawnText({ text, fontSize, delay = 0, strokeWidth = 1.5 }: {
  text: string
  fontSize: number
  delay?: number
  strokeWidth?: number
}) {
  const [isDrawn, setIsDrawn] = useState(false)
  const [showFill, setShowFill] = useState(false)

  useEffect(() => {
    const drawTimer = setTimeout(() => setIsDrawn(true), delay)
    const fillTimer = setTimeout(() => setShowFill(true), delay + 2500)
    return () => {
      clearTimeout(drawTimer)
      clearTimeout(fillTimer)
    }
  }, [delay])

  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize * 0.65} ${fontSize * 1.2}`}
      className="w-full h-auto overflow-visible"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Stroke layer - draws first */}
      <text
        x="0"
        y={fontSize * 0.95}
        fontSize={fontSize}
        fontWeight="800"
        letterSpacing="-0.04em"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth={strokeWidth}
        strokeDasharray="1000"
        strokeDashoffset={isDrawn ? "0" : "1000"}
        style={{
          transition: `stroke-dashoffset 2.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        }}
      >
        {text}
      </text>
      {/* Fill layer - fades in after stroke completes */}
      <text
        x="0"
        y={fontSize * 0.95}
        fontSize={fontSize}
        fontWeight="800"
        letterSpacing="-0.04em"
        fill="var(--color-primary)"
        opacity={showFill ? 0.08 : 0}
        style={{
          transition: 'opacity 2s ease-out',
        }}
      >
        {text}
      </text>
    </svg>
  )
}

// Line drawing signature for Chinese text
function SignatureText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block text-xs sm:text-sm tracking-[0.35em] text-secondary/70"
      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const { isDark } = useTheme()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -260])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Drift animation
  const driftX = useMotionValue(0)
  const springDrift = useSpring(driftX, { stiffness: 8, damping: 80, mass: 1.5 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      setShowContent(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Infinite slow drift
  useEffect(() => {
    if (!isLoaded) return
    let frame: number
    let direction = 1
    let current = 0
    const speed = 0.08
    const max = 18

    const tick = () => {
      current += speed * direction
      if (current > max) direction = -1
      if (current < -max) direction = 1
      driftX.set(current)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isLoaded, driftX])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  // Glow radius for hover effect
  const glowSize = 350

  return (
    <section
      ref={ref}
      className="relative h-[130vh] overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-depth" />
        <div className="absolute inset-0 hero-grain" />
        <div className="absolute inset-0 hero-vignette" />
      </div>

      <div className="sticky top-0 h-screen flex flex-col justify-center items-start">
        <motion.div
          style={{ opacity, x: springDrift }}
          className="relative w-full px-4 sm:px-8 lg:px-16"
        >
          {/* Mouse follow glow */}
          {isHovering && (
            <motion.div
              className="fixed pointer-events-none z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                left: mousePos.x - glowSize / 2,
                top: mousePos.y - glowSize / 2,
                width: glowSize,
                height: glowSize,
                background: isDark
                  ? `radial-gradient(circle, rgba(17, 50, 133, 0.18) 0%, rgba(17, 50, 133, 0.08) 25%, rgba(255, 255, 255, 0.03) 45%, transparent 70%)`
                  : `radial-gradient(circle, rgba(221, 165, 45, 0.12) 0%, rgba(221, 165, 45, 0.05) 25%, rgba(0, 0, 0, 0.02) 45%, transparent 70%)`,
                borderRadius: '50%',
                mixBlendMode: 'screen',
                transition: 'left 0.15s ease-out, top 0.15s ease-out',
              }}
            />
          )}

          {/* EXPLORING - SVG line drawing */}
          <motion.div
            style={{ y: y1 }}
            className="relative -ml-[6vw] sm:-ml-[10vw]"
          >
            <div className="hero-stroke-text">
              {showContent && (
                <DrawnText text="EXPLORING" fontSize={180} delay={200} strokeWidth={2} />
              )}
            </div>
            <motion.div
              className="absolute top-1/2 left-[4vw] sm:left-[5vw] -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 2.5, duration: 1.5 }}
            >
              <SignatureText text="保持热爱" delay={2800} />
            </motion.div>
          </motion.div>

          {/* WANDERING - solid fill, delayed reveal */}
          <motion.div
            style={{ y: y2 }}
            className="relative ml-[12vw] sm:ml-[20vw] -mt-[3vw] sm:-mt-[5vw]"
          >
            <motion.h1
              className="text-[16vw] sm:text-[20vw] font-extrabold tracking-[-0.05em] leading-[0.85] text-primary"
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={isLoaded ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 1.8,
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              WANDERING
            </motion.h1>
            <motion.div
              className="absolute bottom-0 right-[6vw] sm:right-[10vw]"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 3.2, duration: 1.5 }}
            >
              <SignatureText text="不断探索" delay={3500} />
            </motion.div>
          </motion.div>

          {/* BECOMING - outline, subtle, overlapping */}
          <motion.div
            style={{ y: y3 }}
            className="relative ml-[4vw] sm:ml-[5vw] -mt-[1.5vw] sm:-mt-[2vw]"
          >
            <motion.h1
              className="text-[12vw] sm:text-[16vw] font-extrabold tracking-[-0.05em] leading-[0.85]"
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={isLoaded ? { opacity: 0.35, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 2.2,
                delay: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                WebkitTextStroke: '1.5px var(--color-primary)',
                color: 'transparent',
                fontFamily: "'Syne', sans-serif",
              }}
            >
              BECOMING
            </motion.h1>
            <motion.div
              className="absolute top-1/2 left-[45%] sm:left-[50%] -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 4, duration: 1.5 }}
            >
              <SignatureText text="无限进步" delay={4200} />
            </motion.div>
          </motion.div>

          {/* Decorative accent line */}
          <motion.div
            className="absolute bottom-[15vh] left-[8vw] h-[1px] bg-primary/20"
            initial={{ width: 0 }}
            animate={isLoaded ? { width: '30vw' } : {}}
            transition={{ duration: 2, delay: 3, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 5, duration: 1 }}
        >
          <span className="text-[10px] tracking-[0.4em] text-secondary/50 uppercase"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-8 bg-primary/30"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
