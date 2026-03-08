import type { LearningPath, Milestone, Resource, Task } from "./types"

export const mockResources: Resource[] = [
  // Milestone 1: AWS Bedrock Fundamentals (6 resources)
  {
    id: "r1",
    title: "AWS Bedrock Overview",
    type: "video",
    source: "AWS Official",
    url: "#",
    estimatedMinutes: 45,
    qualityScore: 95
  },
  {
    id: "r2",
    title: "Foundation Models Guide",
    type: "docs",
    source: "AWS Documentation",
    url: "#",
    estimatedMinutes: 30,
    qualityScore: 90
  },
  {
    id: "r3",
    title: "Getting Started with Amazon Bedrock",
    type: "tutorial",
    source: "AWS Workshops",
    url: "#",
    estimatedMinutes: 60,
    qualityScore: 92
  },
  {
    id: "r4",
    title: "Comparing Foundation Models: Claude vs Llama",
    type: "article",
    source: "Towards Data Science",
    url: "#",
    estimatedMinutes: 20,
    qualityScore: 88
  },
  {
    id: "r5",
    title: "Bedrock Pricing and Cost Optimization",
    type: "docs",
    source: "AWS Documentation",
    url: "#",
    estimatedMinutes: 25,
    qualityScore: 87
  },
  {
    id: "r6",
    title: "Hands-on: Your First Bedrock API Call",
    type: "exercise",
    source: "AWS Skill Builder",
    url: "#",
    estimatedMinutes: 40,
    qualityScore: 93
  },
  
  // Milestone 2: RAG Architecture (6 resources)
  {
    id: "r7",
    title: "RAG Architecture Explained",
    type: "video",
    source: "DeepLearning.AI",
    url: "#",
    estimatedMinutes: 50,
    qualityScore: 94
  },
  {
    id: "r8",
    title: "Vector Databases: A Complete Guide",
    type: "article",
    source: "Pinecone Blog",
    url: "#",
    estimatedMinutes: 35,
    qualityScore: 89
  },
  {
    id: "r9",
    title: "Understanding Embeddings and Semantic Search",
    type: "tutorial",
    source: "OpenAI Cookbook",
    url: "#",
    estimatedMinutes: 45,
    qualityScore: 91
  },
  {
    id: "r10",
    title: "RAG vs Fine-tuning: When to Use What",
    type: "article",
    source: "Medium",
    url: "#",
    estimatedMinutes: 25,
    qualityScore: 86
  },
  {
    id: "r11",
    title: "Amazon Bedrock Knowledge Bases",
    type: "docs",
    source: "AWS Documentation",
    url: "#",
    estimatedMinutes: 30,
    qualityScore: 90
  },
  {
    id: "r12",
    title: "Building a Simple RAG System",
    type: "exercise",
    source: "LangChain Tutorials",
    url: "#",
    estimatedMinutes: 55,
    qualityScore: 92
  },
  
  // Milestone 3: Building RAG Application (6 resources)
  {
    id: "r13",
    title: "Production RAG Architecture Patterns",
    type: "video",
    source: "AWS re:Invent",
    url: "#",
    estimatedMinutes: 60,
    qualityScore: 96
  },
  {
    id: "r14",
    title: "Integrating Bedrock with Vector Databases",
    type: "tutorial",
    source: "AWS Samples GitHub",
    url: "#",
    estimatedMinutes: 75,
    qualityScore: 93
  },
  {
    id: "r15",
    title: "Advanced Retrieval Strategies",
    type: "article",
    source: "Anthropic Research",
    url: "#",
    estimatedMinutes: 40,
    qualityScore: 91
  },
  {
    id: "r16",
    title: "Testing and Evaluating RAG Systems",
    type: "docs",
    source: "LangSmith Documentation",
    url: "#",
    estimatedMinutes: 35,
    qualityScore: 88
  },
  {
    id: "r17",
    title: "Optimizing RAG Performance",
    type: "article",
    source: "Towards AI",
    url: "#",
    estimatedMinutes: 30,
    qualityScore: 87
  },
  {
    id: "r18",
    title: "Complete RAG Application Workshop",
    type: "exercise",
    source: "AWS Workshops",
    url: "#",
    estimatedMinutes: 90,
    qualityScore: 95
  }
]

export const mockTasks: Task[] = [
  // Milestone 1: AWS Bedrock Fundamentals (6 tasks)
  {
    id: "t1",
    title: "Set up AWS CLI and configure Bedrock access",
    description: "Install AWS CLI, configure credentials, and set up IAM roles with Bedrock permissions",
    completed: false
  },
  {
    id: "t2",
    title: "Create your first Bedrock API call",
    description: "Write a simple script to invoke Claude or Llama model through Bedrock API",
    completed: false
  },
  {
    id: "t3",
    title: "Compare responses from different foundation models",
    description: "Test the same prompt with Claude, Llama, and Titan models and analyze differences",
    completed: false
  },
  {
    id: "t4",
    title: "Implement prompt engineering best practices",
    description: "Create prompts using system messages, few-shot examples, and clear instructions",
    completed: false
  },
  {
    id: "t5",
    title: "Calculate and optimize API costs",
    description: "Track token usage and estimate costs for different models and use cases",
    completed: false
  },
  {
    id: "t6",
    title: "Build a simple chatbot using Bedrock",
    description: "Create a conversational interface that maintains context across multiple turns",
    completed: false
  },
  
  // Milestone 2: RAG Architecture (6 tasks)
  {
    id: "t7",
    title: "Set up a vector database (Pinecone or FAISS)",
    description: "Create an account, initialize a vector index, and understand dimensionality",
    completed: false
  },
  {
    id: "t8",
    title: "Generate embeddings for sample documents",
    description: "Use Bedrock's Titan Embeddings to convert text documents into vector representations",
    completed: false
  },
  {
    id: "t9",
    title: "Implement semantic search functionality",
    description: "Query the vector database to find relevant documents based on user questions",
    completed: false
  },
  {
    id: "t10",
    title: "Build a document chunking strategy",
    description: "Split large documents into optimal chunks for embedding and retrieval",
    completed: false
  },
  {
    id: "t11",
    title: "Create a retrieval pipeline",
    description: "Combine query processing, vector search, and result ranking into a pipeline",
    completed: false
  },
  {
    id: "t12",
    title: "Test RAG vs direct LLM responses",
    description: "Compare answer quality with and without retrieval augmentation",
    completed: false
  },
  
  // Milestone 3: Building RAG Application (6 tasks)
  {
    id: "t13",
    title: "Design the application architecture",
    description: "Create a system diagram showing data flow from user query to response",
    completed: false
  },
  {
    id: "t14",
    title: "Implement document ingestion pipeline",
    description: "Build a system to process, chunk, embed, and store documents automatically",
    completed: false
  },
  {
    id: "t15",
    title: "Create the RAG query handler",
    description: "Implement the core logic that retrieves context and generates responses",
    completed: false
  },
  {
    id: "t16",
    title: "Add citation and source tracking",
    description: "Ensure responses include references to source documents for transparency",
    completed: false
  },
  {
    id: "t17",
    title: "Implement evaluation metrics",
    description: "Set up automated testing for relevance, accuracy, and response quality",
    completed: false
  },
  {
    id: "t18",
    title: "Optimize for production deployment",
    description: "Add caching, error handling, rate limiting, and monitoring",
    completed: false
  }
]

export const mockMilestones: Milestone[] = [
  {
    id: "m1",
    order: 1,
    title: "Understanding AWS Bedrock Fundamentals",
    description: "Learn the core concepts of AWS Bedrock and foundation models",
    conceptOverview: "AWS Bedrock provides access to foundation models through a unified API. You'll learn about model selection, pricing, and basic usage patterns. This milestone covers everything from initial setup to making your first API calls and understanding the different models available.",
    estimatedHours: 4,
    difficulty: "easy",
    concepts: ["Foundation Models", "AWS Bedrock API", "Model Selection", "Pricing", "Prompt Engineering", "Token Management"],
    resources: mockResources.slice(0, 6),
    tasks: mockTasks.slice(0, 6),
    status: "completed",
    score: 85
  },
  {
    id: "m2",
    order: 2,
    title: "Introduction to RAG Architecture",
    description: "Understand Retrieval-Augmented Generation concepts and patterns",
    conceptOverview: "RAG combines retrieval systems with generative AI to provide contextual, accurate responses. Learn about vector databases, embeddings, and retrieval strategies. You'll understand how to transform documents into searchable vectors and implement semantic search to enhance LLM responses with relevant context.",
    estimatedHours: 6,
    difficulty: "medium",
    concepts: ["RAG Pattern", "Vector Databases", "Embeddings", "Semantic Search", "Document Chunking", "Retrieval Strategies"],
    resources: mockResources.slice(6, 12),
    tasks: mockTasks.slice(6, 12),
    status: "active",
  },
  {
    id: "m3",
    order: 3,
    title: "Building Your First RAG Application",
    description: "Hands-on implementation using AWS Bedrock and vector databases",
    conceptOverview: "Build a complete RAG application from scratch, integrating Bedrock with a vector database for context-aware responses. This milestone brings everything together - from document ingestion to query processing to response generation. You'll implement production-ready patterns including error handling, caching, and evaluation metrics.",
    estimatedHours: 8,
    difficulty: "hard",
    concepts: ["System Architecture", "Pipeline Design", "Document Ingestion", "Query Processing", "Citation Tracking", "Performance Optimization"],
    resources: mockResources.slice(12, 18),
    tasks: mockTasks.slice(12, 18),
    status: "locked",
  }
]

export const mockLearningPath: LearningPath = {
  id: "path-1",
  title: "Learn AWS Bedrock for RAG applications",
  description: "A comprehensive path to master AWS Bedrock and build production-ready RAG applications",
  goal: "Learn AWS Bedrock for RAG applications",
  skillLevel: "intermediate",
  weeklyHours: 5,
  milestones: mockMilestones,
  createdAt: new Date().toISOString()
}
