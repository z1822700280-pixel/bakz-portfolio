'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -280])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[150vh] overflow-hidden">
      <div className="absolute inset-0 gradient-depth" />

      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <motion.div style={{ opacity }}>
          <motion.div
            style={{ y: y1 }}
            className="relative -ml-[10vw]"
          >
            <h1
              className="text-[22vw] font-bold tracking-tighter leading-none hero-stroke"
              style={{ WebkitTextStroke: '2px var(--color-primary)', color: 'transparent' }}
            >
              EXPLORING
            </h1>
            <span className="absolute top-1/2 left-[5vw] text-sm text-secondary -translate-y-1/2 tracking-[0.3em]">
              保持热爱
            </span>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="relative ml-[20vw] -mt-[5vw]"
          >
            <h1 className="text-[20vw] font-bold tracking-tighter leading-none text-primary">
              WANDERING
            </h1>
            <span className="absolute bottom-0 right-[10vw] text-sm text-secondary tracking-[0.3em]">
              不断探索
            </span>
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            className="relative ml-[5vw] -mt-[3vw]"
          >
            <h1
              className="text-[16vw] font-bold tracking-tighter leading-none opacity-40"
              style={{ WebkitTextStroke: '1px var(--color-primary)', color: 'transparent' }}
            >
              BECOMING
            </h1>
            <span className="absolute top-1/2 left-[50%] text-sm text-secondary tracking-[0.3em]">
              无限进步
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
