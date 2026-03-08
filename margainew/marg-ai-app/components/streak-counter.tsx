"use client"

import { motion } from "framer-motion"
import { Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { bounceIn, pulse } from "@/lib/animations"

interface StreakCounterProps {
  days: number
  isActive?: boolean
}

export function StreakCounter({ days, isActive = true }: StreakCounterProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={bounceIn}
    >
      <Card className={`relative overflow-hidden ${isActive ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20' : ''}`}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <motion.div
              animate={isActive ? pulse.animate : {}}
              className="relative"
            >
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl" />
              <div className="relative size-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Flame className="size-8 text-white" />
              </div>
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <motion.span 
                  className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                  key={days}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {days}
                </motion.span>
                <span className="text-lg text-muted-foreground">day streak</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {isActive ? "Keep it going! 🔥" : "Start learning to build your streak"}
              </p>
            </div>
          </div>
          
          {/* Animated background effect */}
          {isActive && (
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
