# MargAI Architecture

## Overview
MargAI is a personalized learning path generator built with Next.js, designed to integrate with AWS services for AI-powered content generation and data persistence.

## Technology Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React

### Backend (AWS Integration Ready)
- **AI Service**: AWS Bedrock (Claude 3 Haiku)
- **Database**: AWS DynamoDB
- **API**: Next.js API Routes

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Next.js App (React Components)                      │  │
│  │  - Dashboard, Learning Path, Evidence Submission     │  │
│  │  - Gamification (XP, Streaks, Achievements)          │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    API Layer (Next.js)                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /api/generate-path                                   │  │
│  │  - Receives user input (goal, skill level, hours)    │  │
│  │  - Orchestrates AI generation and data storage       │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                ▼                       ▼
┌──────────────────────────┐  ┌──────────────────────────┐
│   AWS Bedrock Client     │  │   DynamoDB Client        │
│  (AI Generation)         │  │   (Data Persistence)     │
│                          │  │                          │
│  - Claude 3 Haiku Model  │  │  - Learning Paths Table  │
│  - Prompt Engineering    │  │  - User Progress Data    │
│  - JSON Response Parse   │  │  - Query by User ID      │
└──────────────────────────┘  └──────────────────────────┘
                │                       │
                ▼                       ▼
┌──────────────────────────┐  ┌──────────────────────────┐
│   AWS Bedrock Service    │  │   AWS DynamoDB Service   │
│   (us-west-2)            │  │   (us-west-2)            │
└──────────────────────────┘  └──────────────────────────┘
```

## Folder Structure

```
margainew/marg-ai-app/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   └── generate-path/        # Learning path generation endpoint
│   │       └── route.ts
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/                # Main dashboard
│   ├── evidence/                 # Evidence submission
│   ├── learning-path/            # Learning path display
│   └── onboarding/               # User onboarding
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── achievement-badge.tsx
│   ├── app-header.tsx
│   ├── app-sidebar.tsx
│   ├── streak-counter.tsx
│   └── xp-bar.tsx
├── lib/                          # Utilities and backend
│   ├── backend/                  # Backend integrations
│   │   ├── bedrock/              # AWS Bedrock client
│   │   │   └── client.ts         # AI generation logic
│   │   └── db/                   # Database client
│   │       └── client.ts         # DynamoDB operations
│   ├── achievements.ts           # Gamification logic
│   ├── animations.ts             # Framer Motion variants
│   ├── mock-data.ts              # Mock data for development
│   ├── store.ts                  # Zustand state management
│   ├── types.ts                  # TypeScript types
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets
```

## AWS Integration Architecture

### 1. AWS Bedrock Integration
**Location**: `lib/backend/bedrock/client.ts`

**Purpose**: Generate personalized learning paths using Claude 3 Haiku

**Flow**:
1. User submits goal, skill level, and weekly hours
2. API route calls `generateLearningPath()`
3. Function constructs detailed prompt for Claude
4. Sends request to AWS Bedrock via SDK
5. Parses JSON response containing milestones, resources, tasks
6. Returns structured learning path data

**Configuration**:
```typescript
const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
})
```

**Model**: `anthropic.claude-3-haiku-20240307-v1:0`

### 2. DynamoDB Integration
**Location**: `lib/backend/db/client.ts`

**Purpose**: Persist learning paths and user progress

**Operations**:
- `saveLearningPath()`: Store generated learning paths
- `getLearningPath()`: Retrieve specific path by ID
- `getUserPaths()`: Query all paths for a user

**Table Schema**:
```
Table: MargAI-LearningPaths
Primary Key: id (String)
Attributes:
  - userId (String)
  - title (String)
  - description (String)
  - milestones (List)
  - createdAt (String)
```

**Configuration**:
```typescript
const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
})
```

## Environment Variables

Required for AWS integration:
```env
AWS_REGION=us-west-2
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Current Implementation Status

### ✅ Implemented
- Complete frontend UI with gamification
- Mock data for development and testing
- API route structure
- AWS integration architecture (code structure ready)

### 🔄 AWS Integration (Ready to Enable)
- Bedrock client implementation exists
- DynamoDB client implementation exists
- Environment variable configuration ready
- Currently using mock data for demo purposes

### 🎯 To Enable AWS
1. Set up AWS IAM user with Bedrock and DynamoDB permissions
2. Configure environment variables in `.env.local`
3. Create DynamoDB table: `MargAI-LearningPaths`
4. Switch from mock implementation to AWS clients

## API Endpoints

### POST /api/generate-path
Generate a personalized learning path

**Request Body**:
```json
{
  "goal": "Learn AWS Bedrock",
  "skillLevel": "beginner",
  "weeklyHours": 10,
  "userId": "user123"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "title": "Learn AWS Bedrock",
    "description": "...",
    "milestones": [...]
  },
  "pathId": "user123-1234567890"
}
```

## Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Vercel Deployment
```bash
vercel --prod
```

**Environment Variables on Vercel**:
- Add AWS credentials in Vercel dashboard
- Set `NEXT_PUBLIC_API_URL` to production URL

## Security Considerations

1. **API Keys**: Never commit AWS credentials to git
2. **Environment Variables**: Use `.env.local` for local, Vercel dashboard for production
3. **IAM Permissions**: Use least-privilege principle for AWS IAM user
4. **Rate Limiting**: Consider implementing rate limiting for API routes
5. **Input Validation**: Validate all user inputs before processing

## Future Enhancements

1. **Authentication**: Implement proper user authentication (NextAuth.js)
2. **Real-time Updates**: Add WebSocket support for live progress tracking
3. **Analytics**: Track user engagement and learning patterns
4. **Social Features**: Allow users to share learning paths
5. **Mobile App**: React Native version for mobile platforms
