export async function generateLearningPath(goal: string, skillLevel: string, weeklyHours: number) {
  return {
    success: true,
    data: {
      title: 'Learn ' + goal,
      description: 'A learning path',
      milestones: [{
        order: 1,
        title: 'Fundamentals',
        description: 'Build foundation',
        conceptOverview: 'Learn basics',
        estimatedHours: weeklyHours * 2,
        difficulty: 'easy' as const,
        concepts: ['Concept 1', 'Concept 2', 'Concept 3', 'Concept 4', 'Concept 5', 'Concept 6'],
        resources: [{ title: 'Tutorial', type: 'video' as const, source: 'YouTube', url: '#', estimatedMinutes: 45, qualityScore: 90 }],
        tasks: [{ title: 'Setup', description: 'Get started' }]
      }]
    }
  }
}
