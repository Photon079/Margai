"use client"

import { useState, useEffect } from "react"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { XPBar } from "@/components/xp-bar"
import { StreakDisplay } from "@/components/streak-display"
import { AchievementBadge, achievements } from "@/components/achievement-badge"
import { motion } from "framer-motion"
import { 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Lock,
  ArrowRight,
  Flame,
  Award,
  Zap
} from "lucide-react"
import Link from "next/link"
import { mockLearningPath } from "@/lib/mock-data"
import { useAppStore } from "@/lib/store"

export default function DashboardPage() {
  const { currentPath } = useAppStore()
  const [path, setPath] = useState(currentPath || mockLearningPath)
  
  // Load path from localStorage if available
  useEffect(() => {
    const storedPath = localStorage.getItem('currentPath')
    if (storedPath) {
      try {
        const parsedPath = JSON.parse(storedPath)
        setPath(parsedPath)
      } catch (error) {
        console.error('Error loading path:', error)
      }
    }
  }, [])
  
  const completedMilestones = path.milestones.filter(m => m.status === "completed").length
  const totalMilestones = path.milestones.length
  const progressPercentage = (completedMilestones / totalMilestones) * 100

  return (
    <div className="flex flex-col min-h-screen w-full">
      <AppHeader 
        title="Dashboard" 
        description="Track your learning progress and achievements"
      />
      
      <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 w-full">
        {/* Welcome Section with XP Bar */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome back! 👋</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Continue your learning journey and achieve mastery
            </p>
          </div>
          
          {/* XP Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <XPBar currentXP={850} maxXP={1000} level={5} />
          </motion.div>
        </div>

        {/* Stats Cards with Animations */}
        <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Current Streak
                </CardTitle>
                <Flame className="size-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <StreakDisplay days={5} />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Hours
                </CardTitle>
                <Clock className="size-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12h</div>
                <p className="text-xs text-muted-foreground">
                  This week: 3h
                </p>
                <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Milestones
                </CardTitle>
                <Target className="size-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedMilestones}/{totalMilestones}</div>
                <p className="text-xs text-muted-foreground">
                  {totalMilestones - completedMilestones} remaining
                </p>
                <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Avg Score
                </CardTitle>
                <Award className="size-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">
                  Great progress!
                </p>
                <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="size-5 text-yellow-500" />
                    Achievements
                  </CardTitle>
                  <CardDescription>Unlock badges as you learn</CardDescription>
                </div>
                <Badge variant="outline">3/6 Unlocked</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <AchievementBadge 
                      achievement={{
                        ...achievement,
                        unlocked: index < 3 // First 3 unlocked for demo
                      }} 
                      size="md"
                    />
                    <p className="text-xs text-center text-muted-foreground line-clamp-2">
                      {achievement.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        {/* Current Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Current Learning Path</CardTitle>
                <CardDescription className="line-clamp-1">{path.title}</CardDescription>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/learning-path">
                  <span className="hidden sm:inline">View Full Path</span>
                  <span className="sm:hidden">View Path</span>
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="font-medium">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            {/* Milestones List with Animations */}
            <div className="space-y-3">
              {path.milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex flex-col sm:flex-row items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="mt-0.5">
                    {milestone.status === "completed" && (
                      <CheckCircle2 className="size-5 text-green-500" />
                    )}
                    {milestone.status === "active" && (
                      <Circle className="size-5 text-primary" />
                    )}
                    {milestone.status === "locked" && (
                      <Lock className="size-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-medium text-sm md:text-base">{milestone.title}</h4>
                      <Badge variant={
                        milestone.difficulty === "easy" ? "secondary" :
                        milestone.difficulty === "medium" ? "default" :
                        "destructive"
                      } className="text-xs">
                        {milestone.difficulty}
                      </Badge>
                      {milestone.status === "completed" && milestone.score && (
                        <Badge variant="outline" className="text-xs">
                          Score: {milestone.score}%
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                      {milestone.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {milestone.estimatedHours}h
                      </span>
                      <span>{milestone.resources.length} resources</span>
                      <span>{milestone.tasks.length} tasks</span>
                    </div>
                  </div>
                  {milestone.status === "active" && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="sm" asChild className="w-full sm:w-auto">
                        <Link href="/evidence">
                          Submit Evidence
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest learning milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { color: "bg-green-500", title: "Milestone Completed", desc: "Understanding AWS Bedrock Fundamentals - Score: 85%", time: "2 hours ago" },
                  { color: "bg-blue-500", title: "Evidence Submitted", desc: "Introduction to RAG Architecture", time: "5 hours ago" },
                  { color: "bg-purple-500", title: "Learning Path Created", desc: "Learn AWS Bedrock for RAG applications", time: "1 day ago" }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      className={`size-2 rounded-full ${activity.color} mt-2`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.desc}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
