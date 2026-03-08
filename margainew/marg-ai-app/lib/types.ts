export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "learner" | "admin"
  createdAt: string
}

export type SkillLevel = "beginner" | "intermediate" | "advanced"

export type MilestoneStatus = "locked" | "active" | "completed"

export interface Resource {
  id: string
  title: string
  type: "video" | "article" | "docs" | "tutorial" | "exercise"
  source: string
  url: string
  estimatedMinutes: number
  qualityScore: number
}

export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
}

export interface Milestone {
  id: string
  order: number
  title: string
  description: string
  conceptOverview: string
  estimatedHours: number
  difficulty: "easy" | "medium" | "hard"
  concepts: string[]
  resources: Resource[]
  tasks: Task[]
  status: MilestoneStatus
  score?: number
}

export interface LearningPath {
  id: string
  title: string
  description: string
  goal: string
  skillLevel: SkillLevel
  weeklyHours: number
  milestones: Milestone[]
  createdAt: string
}

export interface RubricItem {
  criteria: string
  score: number
  maxScore: number
  weight: number
  feedback: string
}

export interface ValidationResult {
  id: string
  milestoneId: string
  overallScore: number
  passed: boolean
  strengths: string[]
  weaknesses: string[]
  rubric: RubricItem[]
  recommendations: string[]
  evaluatedAt: string
}

export interface EvidenceSubmission {
  id: string
  milestoneId: string
  explanation: string
  codeSnippet?: string
  files?: string[]
  submittedAt: string
  status: "pending" | "evaluating" | "completed"
  validationResultId?: string
}

export interface ActivityItem {
  id: string
  type: "milestone_started" | "evidence_submitted" | "milestone_completed" | "path_created" | "score_received"
  title: string
  description: string
  timestamp: string
  milestoneId?: string
}