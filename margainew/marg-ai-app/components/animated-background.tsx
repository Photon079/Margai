"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  angle: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create particles (asteroids/comets)
    const particles: Particle[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // Slight variation in angle
      })
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += Math.cos(particle.angle) * particle.speed
        particle.y += Math.sin(particle.angle) * particle.speed

        // Reset particle when it goes off screen
        if (particle.y > canvas.height + 100 || particle.x > canvas.width + 100) {
          particle.x = Math.random() * canvas.width
          particle.y = -100
          particle.opacity = Math.random() * 0.5 + 0.2
        }

        // Draw comet/asteroid trail
        const gradient = ctx.createLinearGradient(
          particle.x,
          particle.y,
          particle.x - Math.cos(particle.angle) * particle.length,
          particle.y - Math.sin(particle.angle) * particle.length
        )

        // Color based on theme (will work with dark/light mode)
        gradient.addColorStop(0, `rgba(139, 92, 246, ${particle.opacity})`) // Purple
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${particle.opacity * 0.5})`) // Blue
        gradient.addColorStop(1, "rgba(139, 92, 246, 0)") // Transparent

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = "round"

        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(
          particle.x - Math.cos(particle.angle) * particle.length,
          particle.y - Math.sin(particle.angle) * particle.length
        )
        ctx.stroke()

        // Draw bright head
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.8})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
