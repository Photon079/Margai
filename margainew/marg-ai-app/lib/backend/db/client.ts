import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb"

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})

const docClient = DynamoDBDocumentClient.from(client)

const TABLE_NAME = "MargAI-LearningPaths"

export async function saveLearningPath(userId: string, pathData: any) {
  const item = {
    id: `${userId}-${Date.now()}`,
    userId,
    ...pathData,
    createdAt: new Date().toISOString()
  }

  try {
    await docClient.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: item
    }))
    return { success: true, data: item }
  } catch (error) {
    console.error("DynamoDB save error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function getLearningPath(pathId: string) {
  try {
    const result = await docClient.send(new GetCommand({
      TableName: TABLE_NAME,
      Key: { id: pathId }
    }))
    return { success: true, data: result.Item }
  } catch (error) {
    console.error("DynamoDB get error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function getUserPaths(userId: string) {
  try {
    const result = await docClient.send(new QueryCommand({
      TableName: TABLE_NAME,
      IndexName: "userId-index",
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": userId
      }
    }))
    return { success: true, data: result.Items || [] }
  } catch (error) {
    console.error("DynamoDB query error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
