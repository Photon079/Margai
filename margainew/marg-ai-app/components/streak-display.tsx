"use client"

import { motion } from "framer-motion"

interface StreakDisplayProps {
  days: number
}

export function StreakDisplay({ days }: StreakDisplayProps) {
  return (
    <div className="flex items-baseline gap-1">
      <motion.span 
        className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
        key={days}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {days}
      </motion.span>
      <span className="text-sm text-muted-foreground">days</span>
    </div>
  )
}
