import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime"

const client = new BedrockRuntimeClient({ 
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})

export async function generateLearningPath(goal: string, skillLevel: string, weeklyHours: number) {
  const prompt = `You are an expert learning path designer. Create a detailed, personalized learning path for the following:

Goal: ${goal}
Skill Level: ${skillLevel}
Weekly Hours Available: ${weeklyHours}

Generate a JSON response with this exact structure:
{
  "title": "Learn [Goal]",
  "description": "A comprehensive path to master [goal]",
  "milestones": [
    {
      "order": 1,
      "title": "Milestone title",
      "description": "Brief description",
      "conceptOverview": "Detailed overview of what will be learned",
      "estimatedHours": 4,
      "difficulty": "easy",
      "concepts": ["Concept 1", "Concept 2", "Concept 3", "Concept 4", "Concept 5", "Concept 6"],
      "resources": [
        {
          "title": "Resource title",
          "type": "video",
          "source": "Source name",
          "url": "#",
          "estimatedMinutes": 45,
          "qualityScore": 90
        }
      ],
      "tasks": [
        {
          "title": "Task title",
          "description": "Task description"
        }
      ]
    }
  ]
}

Requirements:
- Create 3 milestones (easy, medium, hard)
- Each milestone should have 6 concepts
- Each milestone should have 6 resources (mix of video, article, docs, tutorial, exercise)
- Each milestone should have 6 tasks
- Make it specific to the goal and skill level
- Ensure resources are realistic and high-quality
- Tasks should be practical and actionable

Return ONLY valid JSON, no markdown formatting.`

  try {
    const command = new InvokeModelCommand({
      modelId: "anthropic.claude-3-haiku-20240307-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 4000,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7
      })
    })

    const response = await client.send(command)
    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
    
    // Extract the content from Claude's response
    const content = responseBody.content[0].text
    
    // Parse the JSON from the content
    const pathData = JSON.parse(content)
    
    return {
      success: true,
      data: pathData
    }
  } catch (error) {
    console.error("Bedrock error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }
  }
}
