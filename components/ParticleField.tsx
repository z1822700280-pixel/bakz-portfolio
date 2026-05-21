'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  size: number
  opacity: number
  depth: number
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particleCount = 400
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      originX: 0,
      originY: 0,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      depth: Math.random(),
    }))

    particlesRef.current.forEach(p => {
      p.originX = p.x
      p.originY = p.y
    })

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections first
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.05
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Mouse interaction
        if (mouseRef.current.active) {
          const dx = particle.x - mouseRef.current.x
          const dy = particle.y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 200) {
            const force = (200 - distance) / 200
            particle.vx += (dx / distance) * force * 0.3
            particle.vy += (dy / distance) * force * 0.3
          }
        }

        // Apply velocity with damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Return to origin
        const dx = particle.originX - particle.x
        const dy = particle.originY - particle.y
        particle.vx += dx * 0.0005
        particle.vy += dy * 0.0005

        particle.x += particle.vx
        particle.y += particle.vy

        // Draw particle with glow
        ctx.save()
        ctx.shadowColor = `rgba(255, 255, 255, ${particle.opacity * 0.3})`
        ctx.shadowBlur = particle.size * 2
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
