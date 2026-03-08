import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime"

// Validate environment variables
const validateEnvVars = () => {
  const required = ['AWS_REGION', 'AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY']
  const missing = required.filter(key => !process.env[key])
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
  
  return {
    region: process.env.AWS_REGION!,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
}

const getClient = () => {
  try {
    const { region, accessKeyId, secretAccessKey } = validateEnvVars()
    
    return new BedrockRuntimeClient({ 
      region,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    })
  } catch (error) {
    console.error("Failed to initialize Bedrock client:", error)
    throw error
  }
}

const client = getClient()

export async function generateLearningPath(goal: string, skillLevel: string, weeklyHours: number) {
  // Check if AWS credentials are configured
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    console.warn("AWS credentials not configured, using mock data")
    return generateMockPath(goal, skillLevel, weeklyHours)
  }

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
    console.error("Bedrock error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      name: error instanceof Error ? error.name : "Unknown",
      stack: error instanceof Error ? error.stack : undefined,
      env: {
        hasRegion: !!process.env.AWS_REGION,
        hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
        hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
      }
    })
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }
  }
}


// Mock function for when AWS credentials are not available
function generateMockPath(goal: string, skillLevel: string, weeklyHours: number) {
  return {
    success: true,
    data: {
      title: `Learn ${goal}`,
      description: `A comprehensive path to master ${goal} at ${skillLevel} level`,
      milestones: [
        {
          order: 1,
          title: "Fundamentals",
          description: "Build a strong foundation",
          conceptOverview: `Learn the core concepts of ${goal}`,
          estimatedHours: Math.ceil(weeklyHours * 2),
          difficulty: "easy" as const,
          concepts: ["Concept 1", "Concept 2", "Concept 3", "Concept 4", "Concept 5", "Concept 6"],
          resources: [
            {
              title: "Introduction Tutorial",
              type: "video" as const,
              source: "YouTube",
              url: "#",
              estimatedMinutes: 45,
              qualityScore: 90
            }
          ],
          tasks: [
            {
              title: "Complete basic exercises",
              description: "Practice fundamental concepts"
            }
          ]
        }
      ]
    }
  }
}
