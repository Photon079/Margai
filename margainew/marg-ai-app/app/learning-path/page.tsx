"use client"

import { useState, useEffect } from "react"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CheckCircle2, 
  Circle, 
  Lock, 
  Clock, 
  Target,
  BookOpen,
  Video,
  FileText,
  Code,
  ExternalLink,
  ArrowRight,
  Lightbulb,
  CheckSquare,
  Square
} from "lucide-react"
import Link from "next/link"
import { mockLearningPath } from "@/lib/mock-data"
import { useAppStore } from "@/lib/store"
import type { Resource } from "@/lib/types"

const getResourceIcon = (type: Resource["type"]) => {
  switch (type) {
    case "video": return <Video className="size-4" />
    case "article": return <FileText className="size-4" />
    case "docs": return <BookOpen className="size-4" />
    case "tutorial": return <Code className="size-4" />
    default: return <FileText className="size-4" />
  }
}

export default function LearningPathPage() {
  const { currentPath } = useAppStore()
  const [path, setPath] = useState(currentPath || mockLearningPath)
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set())
  
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

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev)
      if (newSet.has(taskId)) {
        newSet.delete(taskId)
      } else {
        newSet.add(taskId)
      }
      return newSet
    })
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <AppHeader 
        title="Learning Path" 
        description="Your personalized roadmap to mastery"
      />
      
      <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 w-full">
        {/* Path Overview */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="space-y-1 min-w-0 flex-1">
                <CardTitle className="text-xl md:text-2xl">{path.title}</CardTitle>
                <CardDescription className="line-clamp-2">{path.description}</CardDescription>
              </div>
              <Badge variant="outline" className="text-sm">
                {path.skillLevel}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Target className="size-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">Goal:</span>
                <span className="font-medium truncate">{path.goal}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">Weekly:</span>
                <span className="font-medium">{path.weeklyHours}h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">Progress:</span>
                <span className="font-medium">{completedMilestones}/{totalMilestones}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="font-medium">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">Milestones</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {path.milestones.map((milestone) => (
              <AccordionItem 
                key={milestone.id} 
                value={milestone.id}
                className="border rounded-lg overflow-hidden"
              >
                <Card className="border-0">
                  <AccordionTrigger className="hover:no-underline px-4 md:px-6 py-4">
                    <div className="flex items-start gap-3 md:gap-4 w-full text-left">
                      <div className="mt-1 flex-shrink-0">
                        {milestone.status === "completed" && (
                          <CheckCircle2 className="size-5 md:size-6 text-green-500" />
                        )}
                        {milestone.status === "active" && (
                          <Circle className="size-5 md:size-6 text-primary" />
                        )}
                        {milestone.status === "locked" && (
                          <Lock className="size-5 md:size-6 text-muted-foreground" />
                        )}
                      </div>
                      
                      <div className="flex-1 space-y-2 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-base md:text-lg">{milestone.title}</h3>
                          <Badge variant={
                            milestone.difficulty === "easy" ? "secondary" :
                            milestone.difficulty === "medium" ? "default" :
                            "destructive"
                          } className="text-xs">
                            {milestone.difficulty}
                          </Badge>
                          {milestone.status === "completed" && milestone.score && (
                            <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-xs">
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
                          <span className="hidden sm:inline">{milestone.concepts.length} concepts</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent>
                    <div className="px-4 md:px-6 pb-6 pt-2 space-y-6">
                      <Separator />
                      
                      {/* Concept Overview */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="size-4 text-primary" />
                          <h4 className="font-semibold">Concept Overview</h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-6">
                          {milestone.conceptOverview}
                        </p>
                      </div>

                      {/* Key Concepts */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Concepts</h4>
                        <div className="flex flex-wrap gap-2 pl-6">
                          {milestone.concepts.map((concept, idx) => (
                            <Badge key={idx} variant="outline">
                              {concept}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Tabs defaultValue="resources" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="resources">Resources</TabsTrigger>
                          <TabsTrigger value="tasks">Tasks</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="resources" className="space-y-3 mt-4">
                          {milestone.resources.map((resource) => (
                            <Card key={resource.id} className="hover:bg-muted/50 transition-colors">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <div className="mt-1">
                                    {getResourceIcon(resource.type)}
                                  </div>
                                  <div className="flex-1 space-y-1">
                                    <div className="flex items-center gap-2">
                                      <h5 className="font-medium">{resource.title}</h5>
                                      <Badge variant="secondary" className="text-xs">
                                        {resource.type}
                                      </Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                      {resource.source} • {resource.estimatedMinutes} min • Quality: {resource.qualityScore}%
                                    </p>
                                  </div>
                                  <Button size="sm" variant="ghost" asChild>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="size-4" />
                                    </a>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </TabsContent>
                        
                        <TabsContent value="tasks" className="space-y-2 mt-4">
                          {milestone.tasks.map((task) => (
                            <Card 
                              key={task.id} 
                              className="hover:bg-muted/50 transition-colors cursor-pointer"
                              onClick={() => toggleTask(task.id)}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <div className="mt-0.5">
                                    {completedTasks.has(task.id) ? (
                                      <CheckSquare className="size-5 text-green-500" />
                                    ) : (
                                      <Square className="size-5 text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="flex-1 space-y-1">
                                    <h5 className={`font-medium ${completedTasks.has(task.id) ? 'line-through text-muted-foreground' : ''}`}>
                                      {task.title}
                                    </h5>
                                    <p className="text-sm text-muted-foreground">
                                      {task.description}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </TabsContent>
                      </Tabs>

                      {/* Action Button */}
                      {milestone.status === "active" && (
                        <div className="flex justify-end pt-4">
                          <Button asChild>
                            <Link href="/evidence">
                              Submit Evidence <ArrowRight className="ml-2 size-4" />
                            </Link>
                          </Button>
                        </div>
                      )}
                      
                      {milestone.status === "completed" && (
                        <div className="flex justify-end pt-4">
                          <Button variant="outline" disabled>
                            <CheckCircle2 className="mr-2 size-4" />
                            Completed
                          </Button>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
