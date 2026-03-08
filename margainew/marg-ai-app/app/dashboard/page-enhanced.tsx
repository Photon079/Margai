"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Lock,
  ArrowRight,
  Flame,
  Award,
  Zap,
  Trophy,
  Star
} from "lucide-react"
import Link from "next/link"
import { mockLearningPath } from "@/lib/mock-data"
import { StreakCounter } from "@/components/streak-counter"
import { XPBar } from "@/components/xp-bar"
import { ProgressRing } from "@/components/progress-ring"
import { AchievementBadge, AchievementPopup } from "@/components/achievement-badge"
import { ConfettiCelebration } from "@/components/confetti-celebration"
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations"

export default function DashboardPage() {
  const path = mockLearningPath
  const completedMilestones = path.milestones.filter(m => m.status === "completed").length
  const totalMilestones = path.milestones.length
  const progressPercentage = (completedMilestones / totalMilestones) * 100

  // Gamification state
  const [showConfetti, setShowConfetti] = useState(false)
  const [showAchievement, setShowAchievement] = useState(false)
  
  // Mock gamification data
  const userLevel = 5
  const currentXP = 450
  const requiredXP = 500
  const streak = 5
  const totalHours = 12

  const achievements = [
    {
      id: "first_milestone" as const,
      title: "First Steps",
      description: "Complete your first milestone",
      icon: <Trophy />,
      color: "yellow",
      unlocked: true,
    },
    {
      id: "streak_3" as const,
      title: "On Fire!",
      description: "Maintain a 3-day streak",
      icon: <Flame />,
      color: "orange",
      unlocked: true,
    },
    {
      id: "streak_7" as const,
      title: "Unstoppable",
      description: "Maintain a 7-day streak",
      icon: <Flame />,
      color: "red",
      unlocked: false,
      progress: 5,
      total: 7,
    },
    {
      id: "perfect_score" as const,
      title: "Perfect!",
      description: "Score 100% on evidence",
      icon: <Star />,
      color: "blue",
      unlocked: false,
      progress: 85,
      total: 100,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen w-full">
      <AppHeader 
        title="Dashboard" 
        description="Track your learning progress and achievements"
