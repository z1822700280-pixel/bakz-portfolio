'use client'

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25, mass: 0.8 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25, mass: 0.8 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -280])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      mouseX.set((e.clientX - centerX) / centerX)
      mouseY.set((e.clientY - centerY) / centerY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const floatX1 = useTransform(springX, (v) => v * 15)
  const floatY1 = useTransform(springY, (v) => v * 10)
  const floatX2 = useTransform(springX, (v) => v * -20)
  const floatY2 = useTransform(springY, (v) => v * -12)
  const floatX3 = useTransform(springX, (v) => v * 8)
  const floatY3 = useTransform(springY, (v) => v * -6)

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="relative h-full"
          style={{ opacity, scale }}
        >
          {/* EXPLORING — outline, top-left, cropped by left edge */}
          <motion.div
            className="absolute top-[12vh] -left-[4vw]"
            style={{
              y: y1,
              x: floatX1,
              translateY: floatY1,
            }}
          >
            <h1
              className="hero-stroke font-display text-[22vw] font-extrabold tracking-[-0.06em] leading-[0.85] select-none whitespace-nowrap"
              aria-hidden="true"
            >
              EXPLORING
            </h1>
            <motion.span
              className="absolute top-[55%] left-[38%] text-[11px] md:text-[13px] tracking-[0.2em] text-gray-500 dark:text-gray-500 font-sans uppercase"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              保持热爱
            </motion.span>
          </motion.div>

          {/* WANDERING — solid, bottom-right, cropped by right edge */}
          <motion.div
            className="absolute top-[38vh] -right-[6vw] text-right"
            style={{
              y: y2,
              x: floatX2,
              translateY: floatY2,
            }}
          >
            <h1
              className="font-display text-[20vw] font-extrabold tracking-[-0.05em] leading-[0.85] select-none whitespace-nowrap text-gray-900 dark:text-white"
              aria-hidden="true"
            >
              WANDERING
            </h1>
            <motion.span
              className="absolute bottom-[8%] right-[12%] text-[11px] md:text-[13px] tracking-[0.2em] text-gray-500 dark:text-gray-500 font-sans uppercase"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              不断探索
            </motion.span>
          </motion.div>

          {/* BECOMING — thin outline, center-left, smaller */}
          <motion.div
            className="absolute top-[68vh] left-[8vw]"
            style={{
              y: y3,
              x: floatX3,
              translateY: floatY3,
            }}
          >
            <h1
              className="hero-stroke-thin font-display text-[16vw] font-bold tracking-[-0.04em] leading-[0.85] select-none whitespace-nowrap"
              aria-hidden="true"
            >
              BECOMING
            </h1>
            <motion.span
              className="absolute top-[30%] left-[52%] text-[11px] md:text-[13px] tracking-[0.2em] text-gray-500 dark:text-gray-500 font-sans uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              无限进步
            </motion.span>
          </motion.div>

          {/* Decorative thin line */}
          <motion.div
            className="absolute top-[50%] left-[5%] right-[5%] h-px bg-gray-300 dark:bg-gray-800"
            style={{ y: y4, scaleX: scale }}
          />

          {/* Subtle glow orb */}
          <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[15%] w-[30vw] h-[30vw] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-gray-500 dark:text-gray-600 font-sans uppercase">
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-gray-400 dark:bg-gray-600 origin-top"
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
