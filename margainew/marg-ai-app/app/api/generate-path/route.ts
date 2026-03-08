import { NextResponse } from "next/server"
import { generateLearningPath } from "@/lib/backend/bedrock/client"
import { saveLearningPath } from "@/lib/backend/db/client"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { goal, skillLevel, weeklyHours, userId } = body

    // Validate input
    if (!goal || !skillLevel || !weeklyHours) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Generate learning path using Bedrock
    console.log("Generating path for:", { goal, skillLevel, weeklyHours })
    const result = await generateLearningPath(goal, skillLevel, weeklyHours)

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      )
    }

    // Save to DynamoDB
    const saveResult = await saveLearningPath(userId || "demo-user", {
      goal,
      skillLevel,
      weeklyHours,
      ...result.data
    })

    if (!saveResult.success) {
      console.error("Failed to save to DB, but path was generated")
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      pathId: saveResult.data?.id
    })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    )
  }
}
