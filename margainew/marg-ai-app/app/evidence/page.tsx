"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { motion, AnimatePresence } from "framer-motion"
import { celebrateScore } from "@/lib/animations"
import { 
  Sparkles, 
  Upload, 
  Code2, 
  FileText,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Target,
  Trophy,
  Zap
} from "lucide-react"
import { mockLearningPath } from "@/lib/mock-data"

type EvaluationResult = {
  score: number
  strengths: string[]
  improvements: string[]
  decision: "pass" | "retry" | "needs_work"
  feedback: string
}

export default function EvidencePage() {
  const router = useRouter()
  const activeMilestone = mockLearningPath.milestones.find(m => m.status === "active")
  
  const [explanation, setExplanation] = useState("")
  const [codeSnippet, setCodeSnippet] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate AI evaluation (will be replaced with AWS Bedrock)
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Mock evaluation result
    const mockResult: EvaluationResult = {
      score: 85,
      strengths: [
        "Clear understanding of core concepts demonstrated",
        "Practical implementation shows hands-on experience",
        "Good explanation of key terminology and relationships"
      ],
      improvements: [
        "Could elaborate more on edge cases and error handling",
        "Consider discussing performance implications",
        "Add more context about real-world applications"
      ],
      decision: "pass",
      feedback: "Great work! You've demonstrated solid understanding of the milestone concepts. Your explanation shows you've grasped the fundamentals and can apply them practically. To deepen your mastery, focus on the improvement areas mentioned above."
    }

    setEvaluationResult(mockResult)
    setIsSubmitting(false)
    
    // Trigger celebration animation based on score
    setTimeout(() => {
      celebrateScore(mockResult.score)
    }, 500)
  }

  const handleContinue = () => {
    router.push("/dashboard")
  }

  if (!activeMilestone) {
    return (
      <div className="flex flex-col min-h-screen w-full">
        <AppHeader 
          title="Submit Evidence" 
          description="Validate your learning progress"
        />
        <div className="flex-1 p-4 md:p-6 lg:p-8 w-full">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <AlertCircle className="size-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Active Milestone</h3>
              <p className="text-muted-foreground mb-6">
                You don't have any active milestones to submit evidence for.
              </p>
              <Button onClick={() => router.push("/learning-path")}>
                View Learning Path
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <AppHeader 
        title="Submit Evidence" 
        description="Demonstrate your understanding and get AI-powered feedback"
      />
      
      <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 w-full">
        {/* Current Milestone Info */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="size-10 md:size-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="size-5 md:size-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base md:text-lg mb-1">{activeMilestone.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
                  {activeMilestone.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs">
                  <Badge variant="outline">{activeMilestone.difficulty}</Badge>
                  <span className="text-muted-foreground">
                    {activeMilestone.estimatedHours}h estimated
                  </span>
                  <span className="text-muted-foreground">
                    {activeMilestone.concepts.length} key concepts
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {!evaluationResult ? (
          /* Evidence Submission Form */
          <Card>
            <CardHeader>
              <CardTitle>Submit Your Learning Evidence</CardTitle>
              <CardDescription>
                Share your understanding through explanation, code examples, or practical demonstrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Text Explanation */}
                <div className="space-y-2">
                  <Label htmlFor="explanation" className="flex items-center gap-2">
                    <FileText className="size-4" />
                    Explain What You Learned
                  </Label>
                  <Textarea
                    id="explanation"
                    placeholder="Describe the key concepts you learned, how they relate to each other, and how you would apply them in practice..."
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    required
                    rows={8}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Be specific and demonstrate your understanding with examples
                  </p>
                </div>

                <Separator />

                {/* Code Snippet (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="code" className="flex items-center gap-2">
                    <Code2 className="size-4" />
                    Code Example (Optional)
                  </Label>
                  <Textarea
                    id="code"
                    placeholder="// Share any code you wrote while learning&#10;// This helps demonstrate practical application&#10;&#10;function example() {&#10;  // Your code here&#10;}"
                    value={codeSnippet}
                    onChange={(e) => setCodeSnippet(e.target.value)}
                    rows={10}
                    className="resize-none font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Include code snippets, implementations, or experiments you tried
                  </p>
                </div>

                <Separator />

                {/* File Upload Placeholder */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Upload className="size-4" />
                    Additional Files (Optional)
                  </Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload className="size-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Upload screenshots, diagrams, or project files
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Coming soon in full version
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={!explanation.trim() || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="mr-2 size-4 animate-spin" />
                      AI is Evaluating Your Evidence...
                    </>
                  ) : (
                    <>
                      Submit for AI Evaluation
                      <ArrowRight className="ml-2 size-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          /* Evaluation Results with Animations */
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
            {/* Score Card with Trophy Animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Card className={
                evaluationResult.decision === "pass" ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800" :
                evaluationResult.decision === "retry" ? "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800" :
                "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800"
              }>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      >
                        {evaluationResult.decision === "pass" && (
                          <div className="relative">
                            <CheckCircle2 className="size-12 text-green-600 dark:text-green-400" />
                            <motion.div
                              className="absolute inset-0"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                            >
                              <CheckCircle2 className="size-12 text-green-600 dark:text-green-400" />
                            </motion.div>
                          </div>
                        )}
                        {evaluationResult.decision === "retry" && (
                          <AlertCircle className="size-12 text-yellow-600 dark:text-yellow-400" />
                        )}
                        {evaluationResult.decision === "needs_work" && (
                          <XCircle className="size-12 text-red-600 dark:text-red-400" />
                        )}
                      </motion.div>
                      <div>
                        <motion.h3
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-xl font-bold"
                        >
                          {evaluationResult.decision === "pass" && "Milestone Completed! 🎉"}
                          {evaluationResult.decision === "retry" && "Good Progress - Try Again"}
                          {evaluationResult.decision === "needs_work" && "Needs More Work"}
                        </motion.h3>
                        <p className="text-sm text-muted-foreground">
                          AI Evaluation Score: {evaluationResult.score}%
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="text-right"
                    >
                      <div className="text-4xl font-bold">{evaluationResult.score}%</div>
                      {evaluationResult.score >= 90 && (
                        <motion.div
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        >
                          <Trophy className="size-6 text-yellow-500 mx-auto mt-1" />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    style={{ transformOrigin: "left" }}
                  >
                    <Progress value={evaluationResult.score} className="h-3" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Feedback */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <Sparkles className="size-5 text-primary" />
                    </motion.div>
                    AI Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {evaluationResult.feedback}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="size-5 text-green-600" />
                    Strengths
                  </CardTitle>
                  <CardDescription>What you did well</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {evaluationResult.strengths.map((strength, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 + idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{strength}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Areas for Improvement */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="size-5 text-yellow-600" />
                    Areas for Improvement
                  </CardTitle>
                  <CardDescription>Suggestions to deepen your understanding</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {evaluationResult.improvements.map((improvement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.3 + idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <AlertCircle className="size-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{improvement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              {evaluationResult.decision === "pass" && (
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="w-full" onClick={handleContinue}>
                    Continue to Next Milestone
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </motion.div>
              )}
              {evaluationResult.decision !== "pass" && (
                <>
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setEvaluationResult(null)
                        setExplanation("")
                        setCodeSnippet("")
                      }}
                    >
                      Revise & Resubmit
                    </Button>
                  </motion.div>
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="w-full"
                      onClick={() => router.push("/learning-path")}
                    >
                      Review Resources
                    </Button>
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground text-center">
                    <strong>Note:</strong> AI feedback may be imperfect. Use your judgment and iterate on your learning. 
                    This evaluation is designed to guide your progress, not replace human mentorship.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}
