"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Brain, TrendingUp, CheckCircle2 } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <AnimatedBackground />
      {/* Header */}
      <header className="border-b relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
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
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild className="text-sm md:text-base">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className="text-sm md:text-base">
              <Link href="/onboarding">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            From Learning Goal to{" "}
            <span className="text-primary">Demonstrated Mastery</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Break free from tutorial hell. Get AI-curated learning paths with validated progress through reflection and practical tasks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/onboarding">
                Start Learning <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-destructive/10 border-destructive/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">The Tutorial Hell Problem</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Learners waste significant time jumping between tutorials, videos, blogs, and courses without completing any of them. This results in:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1 flex-shrink-0">•</span>
                  <span>Passive consumption without deep understanding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1 flex-shrink-0">•</span>
                  <span>Choice overload preventing focused learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1 flex-shrink-0">•</span>
                  <span>No validation of actual skill acquisition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1 flex-shrink-0">•</span>
                  <span>Shallow learning with poor retention</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">How Marg AI Solves This</h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Two core problems, one intelligent solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="size-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">AI Path-Finder</h4>
              <p className="text-muted-foreground mb-4">
                Curates single, minimal, non-redundant learning roadmaps tailored to your goal and skill level.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Removes duplicate content</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Structured milestone progression</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Quality-ranked resources</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="size-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">Anti-Tutorial-Hell Validator</h4>
              <p className="text-muted-foreground mb-4">
                Verifies learning through reflection and practical tasks with AI-powered feedback.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Qualitative AI assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Constructive feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Progress validation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="size-8 text-primary" />
                <h3 className="text-2xl font-bold">Why Marg AI?</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">For Learners</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Focused, non-redundant paths</li>
                    <li>• AI-validated progress</li>
                    <li>• Reduced time to mastery</li>
                    <li>• Clear progression milestones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">For Education</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Scalable mentorship through AI</li>
                    <li>• Objective learning assessment</li>
                    <li>• Analytics for improvement</li>
                    <li>• Cost-effective delivery</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-4xl font-bold">Ready to Master Your Skills?</h3>
          <p className="text-base md:text-xl text-muted-foreground">
            Join learners who are breaking free from tutorial hell and achieving real mastery.
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/onboarding">
              Start Your Learning Journey <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Marg AI Logo" 
                width={24} 
                height={24}
                className="rounded"
              />
              <span className="text-sm text-muted-foreground">
                © 2025 Marg AI. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Terms</Link>
              <Link href="https://github.com/Photon079/Marg-ai" className="hover:text-foreground">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
