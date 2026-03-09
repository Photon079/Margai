# MargAI

A personalized learning path generator for students and professionals.

## About

MargAI is an early-stage project that helps users create structured learning paths based on their goals and available time. The platform generates milestone-based roadmaps with curated resources and tracks progress through gamification elements.

## Features

- Generate personalized learning paths
- Milestone-based progress tracking
- Resource recommendations
- Progress gamification (XP, streaks, achievements)
- Evidence submission for milestone completion

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- AWS Bedrock (planned integration)
- AWS DynamoDB (planned integration)

## Project Structure

```
margainew/marg-ai-app/    # Main application
├── app/                   # Next.js pages
├── components/            # React components
├── lib/                   # Utilities and backend
└── public/                # Static assets
```

## Getting Started

```bash
cd margainew/marg-ai-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Documentation

- [Architecture](./margainew/marg-ai-app/ARCHITECTURE.md)
- [App README](./margainew/marg-ai-app/README.md)

## Status

Early development. Core features implemented with mock data. AWS integration architecture in place.

## License

MIT
