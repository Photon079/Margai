"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Target, Clock } from "lucide-react"
import { useAppStore } from "@/lib/store"
import type { SkillLevel } from "@/lib/types"

const popularGoals = [
  "Learn AWS Bedrock for RAG applications",
  "Master React with TypeScript",
  "Build REST APIs with Node.js",
  "Learn Python for Data Science",
  "Understand Docker and Kubernetes",
  "Master System Design Interviews"
]

export default function OnboardingPage() {
  const router = useRouter()
  const { setCurrentPath } = useAppStore()
  
  const [goal, setGoal] = useState("")
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("beginner")
  const [weeklyHours, setWeeklyHours] = useState("5")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    try {
      // Call the API to generate learning path with Bedrock
      const response = await fetch('/api/generate-path', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          goal,
          skillLevel,
          weeklyHours: parseInt(weeklyHours),
          userId: 'demo-user' // In production, use real user ID
        })
      })

      const result = await response.json()

      if (!result.success) {
        alert(`Error: ${result.error}`)
        setIsGenerating(false)
        return
      }

      // Store the generated path
      const generatedPath = {
        id: result.pathId || "path-1",
        ...result.data,
        goal,
        skillLevel,
        weeklyHours: parseInt(weeklyHours),
        createdAt: new Date().toISOString()
      }

      setCurrentPath(generatedPath)
      
      // Store in localStorage for persistence
      localStorage.setItem('currentPath', JSON.stringify(generatedPath))
      
      router.push("/dashboard")
    } catch (error) {
      console.error('Error generating path:', error)
      alert('Failed to generate learning path. Please try again.')
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center gap-2 md:gap-3">
          <Image 
            src="/logo.png" 
            alt="Marg AI Logo" 
            width={32} 
            height={32}
            className="rounded-lg md:w-10 md:h-10"
          />
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-primary">Marg AI</h1>
            <p className="text-[10px] md:text-xs text-muted-foreground">Your Path to Mastery</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4">
              <Sparkles className="size-3 md:size-4" />
              AI-Powered Learning Path Generator
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              What do you want to master?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              Tell us your learning goal and we'll create a focused, non-redundant path to mastery
            </p>
          </div>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Create Your Learning Path</CardTitle>
              <CardDescription>
                Our AI will analyze your goal and generate a personalized roadmap with curated resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Learning Goal */}
                <div className="space-y-2">
                  <Label htmlFor="goal">Learning Goal</Label>
                  <Textarea
                    id="goal"
                    placeholder="e.g., Learn AWS Bedrock for RAG applications"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    required
                    rows={3}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Be specific about what you want to learn
                  </p>
                </div>

                {/* Popular Goals */}
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Popular goals:</Label>
                  <div className="flex flex-wrap gap-2">
                    {popularGoals.map((popularGoal, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => setGoal(popularGoal)}
                      >
                        {popularGoal}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Skill Level & Weekly Hours */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="skillLevel">
                      <Target className="inline size-4 mr-1" />
                      Current Skill Level
                    </Label>
                    <Select value={skillLevel} onValueChange={(value) => setSkillLevel(value as SkillLevel)}>
                      <SelectTrigger id="skillLevel">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner - New to this topic</SelectItem>
                        <SelectItem value="intermediate">Intermediate - Some experience</SelectItem>
                        <SelectItem value="advanced">Advanced - Significant experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weeklyHours">
                      <Clock className="inline size-4 mr-1" />
                      Weekly Time Commitment
                    </Label>
                    <Select value={weeklyHours} onValueChange={setWeeklyHours}>
                      <SelectTrigger id="weeklyHours">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">1-2 hours per week</SelectItem>
                        <SelectItem value="5">3-5 hours per week</SelectItem>
                        <SelectItem value="8">6-10 hours per week</SelectItem>
                        <SelectItem value="15">10+ hours per week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={!goal.trim() || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="mr-2 size-4 animate-spin" />
                      Generating Your Path...
                    </>
                  ) : (
                    <>
                      Generate My Learning Path
                      <ArrowRight className="ml-2 size-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Why Marg AI?</strong> We solve "tutorial hell" by creating focused, validated learning paths. 
                No more jumping between incomplete resources - just structured progress with AI-powered feedback.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
