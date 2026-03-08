"use client"

import { motion } from "framer-motion"
import { Award, Star, Trophy, Zap, Target, Flame } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { scaleIn } from "@/lib/animations"
import { achievements, type AchievementType } from "@/lib/achievements"

interface AchievementWithStatus {
  id: AchievementType
  title: string
  description: string
  color: string
  unlocked: boolean
  unlockedAt?: string
}

export { achievements }

interface AchievementBadgeProps {
  achievement: AchievementWithStatus
  size?: "sm" | "md" | "lg"
  showDetails?: boolean
}

const iconMap = {
  "first-path": Star,
  "first-milestone": Target,
  "streak-7": Flame,
  "streak-30": Trophy,
  "perfect-score": Award,
  "fast-learner": Zap,
}

const colorMap = {
  "first-path": "from-blue-500 to-cyan-500",
  "first-milestone": "from-green-500 to-emerald-500",
  "streak-7": "from-orange-500 to-red-500",
  "streak-30": "from-yellow-500 to-orange-500",
  "perfect-score": "from-purple-500 to-pink-500",
  "fast-learner": "from-indigo-500 to-blue-500",
}

export function AchievementBadge({ achievement, size = "md", showDetails = false }: AchievementBadgeProps) {
  const Icon = iconMap[achievement.id]
  const sizeClasses = {
    sm: "size-12",
    md: "size-16",
    lg: "size-24"
  }
  
  const iconSizes = {
    sm: "size-6",
    md: "size-8",
    lg: "size-12"
  }

  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.05 }}
      className="relative group cursor-pointer"
    >
      <div className={`${sizeClasses[size]} relative`}>
        {/* Glow effect */}
        {achievement.unlocked && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${colorMap[achievement.id]} rounded-full blur-xl opacity-50`}
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
        )}
        
        {/* Badge */}
        <div className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center ${
          achievement.unlocked 
            ? `bg-gradient-to-br ${colorMap[achievement.id]}` 
            : 'bg-muted border-2 border-dashed border-muted-foreground/20'
        }`}>
          <Icon className={`${iconSizes[size]} ${achievement.unlocked ? 'text-white' : 'text-muted-foreground/40'}`} />
        </div>
        
        {/* Lock overlay for locked achievements */}
        {!achievement.unlocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-6 rounded-full bg-background border-2 border-muted-foreground/40 flex items-center justify-center">
              <span className="text-xs">🔒</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Details */}
      {showDetails && (
        <div className="mt-2 text-center">
          <p className="text-sm font-medium">{achievement.title}</p>
          <p className="text-xs text-muted-foreground">{achievement.description}</p>
          {achievement.unlocked && achievement.unlockedAt && (
            <Badge variant="outline" className="mt-1 text-xs">
              Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
            </Badge>
          )}
        </div>
      )}
      
      {/* Tooltip on hover */}
      {!showDetails && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-popover text-popover-foreground px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
            <p className="font-medium">{achievement.title}</p>
            <p className="text-xs text-muted-foreground">{achievement.description}</p>
          </div>
        </div>
      )}
    </motion.div>
  )
}

// Achievement showcase component
export function AchievementShowcase({ achievements }: { achievements: AchievementWithStatus[] }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="flex flex-wrap gap-4 justify-center"
    >
      {achievements.map((achievement) => (
        <AchievementBadge
          key={achievement.id}
          achievement={achievement}
          size="md"
          showDetails
        />
      ))}
    </motion.div>
  )
}
