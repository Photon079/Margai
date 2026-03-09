// Mock implementation - DynamoDB disabled
const mockStorage = new Map<string, any>()

export async function saveLearningPath(userId: string, pathData: any) {
  const item = {
    id: `${userId}-${Date.now()}`,
    userId,
    ...pathData,
    createdAt: new Date().toISOString()
  }

  try {
    mockStorage.set(item.id, item)
    console.log("Saved to mock storage:", item.id)
    return { success: true, data: item }
  } catch (error) {
    console.error("Mock storage save error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function getLearningPath(pathId: string) {
  try {
    const item = mockStorage.get(pathId)
    return { success: true, data: item }
  } catch (error) {
    console.error("Mock storage get error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function getUserPaths(userId: string) {
  try {
    const items = Array.from(mockStorage.values()).filter(item => item.userId === userId)
    return { success: true, data: items }
  } catch (error) {
    console.error("Mock storage query error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
