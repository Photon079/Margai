# Marg AI - New Development (Round 2)

This folder contains the new development for the AIforBharat Hackathon Round 2 submission.

## 🎯 Round 2 Goals

With $200 AWS credits, we're building:
1. **AWS Bedrock Integration** - Real AI-powered learning path generation
2. **Backend Infrastructure** - Lambda functions, DynamoDB, S3
3. **Full Stack Application** - Connected frontend with actual AWS services

## 📁 Structure

```
margainew/
└── marg-ai-app/          # Next.js frontend application
    ├── app/              # App router pages
    ├── components/       # React components
    ├── lib/              # Utilities and types
    └── public/           # Static assets (logo, etc.)
```

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **UI Library**: Shadcn UI + Radix UI
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Animations**: Framer Motion

### Backend (To be built)
- **Compute**: AWS Lambda (serverless functions)
- **AI**: AWS Bedrock (Amazon Nova Pro)
- **Database**: Amazon DynamoDB
- **Storage**: Amazon S3
- **API**: AWS API Gateway

## 🛠️ Development

### Frontend Setup
```bash
cd marg-ai-app
npm install
npm run dev
```

Visit http://localhost:3000

### Backend Setup (Coming Soon)
AWS CDK infrastructure will be added here.

## 📊 First Technical Milestone

**Deploy AWS Bedrock-powered learning path generator** that analyzes user goals and creates personalized, non-redundant learning roadmaps with structured milestones.

## 💰 Budget

- **Total Credits**: $200 USD
- **Estimated Usage**: ~$150 for full MVP
- **Buffer**: $50 for testing and iterations

## 🎨 Design

The frontend is built with a modern, clean design featuring:
- Dark/Light theme support
- Responsive layout
- Accessible components
- Professional UI with Marg AI branding

## 📝 Next Steps

1. ✅ Frontend landing page
2. ⏳ Onboarding flow
3. ⏳ Dashboard with learning paths
4. ⏳ AWS Lambda functions
5. ⏳ Bedrock integration
6. ⏳ Evidence submission system
7. ⏳ AI evaluation feedback

---

**Note**: This is a fresh start for Round 2. Previous prototypes are in the `../old/` folder.