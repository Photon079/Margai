# MargAI - Personalized Learning Path Generator

A modern web application that generates personalized learning paths tailored to individual goals, skill levels, and time availability. Built with Next.js and designed to integrate with AWS services for AI-powered content generation.

## Overview

MargAI helps learners create structured, milestone-based learning paths with curated resources, practical tasks, and progress tracking. The application features gamification elements including experience points, achievement badges, and streak tracking to maintain learner engagement.

## Features

### Core Functionality
- **Personalized Learning Paths**: Generate custom learning roadmaps based on user goals and skill level
- **Milestone-Based Structure**: Break down learning into manageable milestones with clear objectives
- **Resource Curation**: Access curated learning resources including videos, articles, documentation, and tutorials
- **Progress Tracking**: Monitor completion status and track learning progress over time
- **Evidence Submission**: Submit proof of milestone completion for validation

### Gamification
- **Experience Points (XP)**: Earn points for completing milestones and tasks
- **Achievement System**: Unlock badges for reaching learning milestones
- **Streak Tracking**: Maintain daily learning streaks for consistent progress
- **Level Progression**: Advance through levels as you accumulate experience

### User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Intuitive Navigation**: Clean, modern interface with easy-to-use navigation

## Technology Stack

### Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Zustand (State Management)
- shadcn/ui Components

### Backend Integration (Architecture Ready)
- AWS Bedrock (Claude 3 Haiku) for AI-powered content generation
- AWS DynamoDB for data persistence
- Next.js API Routes

## Project Structure

```
margainew/marg-ai-app/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── lib/                    # Utilities and backend clients
│   ├── backend/           # AWS integration modules
│   │   ├── bedrock/       # AI generation client
│   │   └── db/            # Database client
│   └── ...                # Other utilities
├── public/                # Static assets
└── ARCHITECTURE.md        # Detailed architecture documentation
```

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Photon079/Margai.git
cd margainew/marg-ai-app
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## AWS Integration

The application is architected to integrate with AWS services. See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed information about:
- AWS Bedrock integration for AI-powered learning path generation
- DynamoDB integration for data persistence
- Environment configuration
- Security considerations

### Required AWS Services
- AWS Bedrock (Claude 3 Haiku model)
- AWS DynamoDB
- IAM user with appropriate permissions

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run code linting

### Code Quality
- TypeScript for type safety
- Biome for code formatting and linting
- ESLint configuration included

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure environment variables
4. Deploy

### Other Platforms
The application can be deployed to any platform supporting Next.js applications:
- AWS Amplify
- Netlify
- Railway
- Self-hosted with Node.js

## Contributing

Contributions are welcome. Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Commit changes with clear messages
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with Next.js and React
- UI components from shadcn/ui
- Icons from Lucide React
- Animations powered by Framer Motion

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

## Documentation

- [Architecture Documentation](./ARCHITECTURE.md) - Detailed system architecture
- [Next.js Documentation](https://nextjs.org/docs)
- [AWS Bedrock Documentation](https://docs.aws.amazon.com/bedrock/)
