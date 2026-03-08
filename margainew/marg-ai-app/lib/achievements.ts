export type AchievementType = "first-path" | "first-milestone" | "streak-7" | "streak-30" | "perfect-score" | "fast-learner"

export interface Achievement {
  id: AchievementType
  title: string
  description: string
  color: string
}

export const achievements: Achievement[] = [
  {
    id: "first-path",
    title: "First Steps",
    description: "Created your first learning path",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "first-milestone",
    title: "Milestone Master",
    description: "Completed your first milestone",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "streak-7",
    title: "Week Warrior",
    description: "7 day learning streak",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "streak-30",
    title: "Month Master",
    description: "30 day learning streak",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "perfect-score",
    title: "Perfect Score",
    description: "Achieved 100% on a milestone",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "fast-learner",
    title: "Speed Demon",
    description: "Completed a milestone in record time",
    color: "from-indigo-500 to-blue-500"
  }
]
