"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  x: number
  color: string
  delay: number
  duration: number
}

export function CelebrationConfetti({ show, onComplete }: { show: boolean; onComplete?: () => void }) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])
  
  useEffect(() => {
    if (show) {
      // Generate confetti pieces
      const pieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'][Math.floor(Math.random() * 6)],
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1,
      }))
      
      setConfetti(pieces)
      
      // Clear after animation
      const timer = setTimeout(() => {
        setConfetti([])
        onComplete?.()
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [show, onComplete])
  
  if (!show || confetti.length === 0) return null
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
            top: -20,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 20,
            opacity: [1, 1, 0],
            rotate: 360 * 3,
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  )
}
