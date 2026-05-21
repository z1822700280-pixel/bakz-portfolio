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
    <section ref={ref} className="relative h-[200vh] overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <motion.div style={{ opacity }}>
          {/* EXPLORING — outline text, positioned left, cropped */}
          <motion.div
            style={{ y: y1 }}
            className="relative -ml-[10vw]"
          >
            <h1 className="text-[22vw] font-bold tracking-tighter leading-none text-transparent hero-stroke">
              EXPLORING
            </h1>
            <span className="absolute top-1/2 left-[5vw] text-sm text-gray-500 -translate-y-1/2 tracking-widest">
              保持热爱
            </span>
          </motion.div>

          {/* WANDERING — solid text, positioned right, cropped */}
          <motion.div
            style={{ y: y2 }}
            className="relative ml-[20vw] -mt-[5vw]"
          >
            <h1 className="text-[20vw] font-bold tracking-tighter leading-none text-white">
              WANDERING
            </h1>
            <span className="absolute bottom-0 right-[10vw] text-sm text-gray-500 tracking-widest">
              不断探索
            </span>
          </motion.div>

          {/* BECOMING — mixed style, positioned center */}
          <motion.div
            style={{ y: y3 }}
            className="relative ml-[5vw] -mt-[3vw]"
          >
            <h1 className="text-[16vw] font-bold tracking-tighter leading-none text-transparent hero-stroke-subtle">
              BECOMING
            </h1>
            <span className="absolute top-1/2 left-[50%] text-sm text-gray-500 tracking-widest">
              无限进步
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
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
