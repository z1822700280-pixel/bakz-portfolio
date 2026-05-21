'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, useScroll } from 'framer-motion'

const paths = {
  initial: "M 100 200 C 100 100 200 100 300 100 C 400 100 500 100 500 200 C 500 300 400 400 300 400 C 200 400 100 300 100 200",
  scrolled: "M 150 150 C 200 50 350 50 400 150 C 450 250 400 350 300 350 C 200 350 100 300 150 200",
}

type Interpolator = (t: number) => string

export default function ScrollMorph() {
  const { scrollY } = useScroll()
  const [progress, setProgress] = useState(0)
  const [flubberLoaded, setFlubberLoaded] = useState(false)
  const [interpolator, setInterpolator] = useState<Interpolator | null>(null)

  useEffect(() => {
    import('flubber').then(({ interpolate }) => {
      const interp = interpolate(paths.initial, paths.scrolled, { maxSegmentLength: 10 })
      setInterpolator(() => interp)
      setFlubberLoaded(true)
    }).catch(() => {
      setFlubberLoaded(false)
    })
  }, [])

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const maxScroll = window.innerHeight
      setProgress(Math.min(latest / maxScroll, 1))
    })
    return () => unsubscribe()
  }, [scrollY])

  const currentPath = useMemo(() => {
    if (flubberLoaded && interpolator) {
      return interpolator(progress)
    }
    return progress > 0.5 ? paths.scrolled : paths.initial
  }, [progress, flubberLoaded, interpolator])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 600 500"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-10"
      >
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#005CAF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B7355" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6B7B8D" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <motion.path
          d={currentPath}
          fill="url(#morphGradient)"
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}