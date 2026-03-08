"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface XPBarProps {
  currentXP: number
  maxXP: number
  level: number
}

export function XPBar({ currentXP, maxXP, level }: XPBarProps) {
  const progress = (currentXP / maxXP) * 100
  
  return (
    <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          {/* Level badge */}
          <motion.div
            className="relative flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="size-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center relative">
              <Star className="size-6 text-white absolute" fill="white" />
              <span className="text-xs font-bold text-white absolute bottom-1">
                {level}
              </span>
            </div>
            <motion.div
              className="absolute inset-0 bg-purple-500/30 rounded-full blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* XP Progress */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Level {level}</span>
              <span className="text-xs text-muted-foreground">
                {currentXP} / {maxXP} XP
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="h-3 bg-muted rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-1">
              {maxXP - currentXP} XP to next level
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
