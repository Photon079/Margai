# Marg AI (मार्ग AI) - AWS AI for Bharat Hackathon

[![Live Demo](https://img.shields.io/badge/Demo-Live-success)](YOUR_VERCEL_URL_HERE)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Democratizing personalized education for India using GenAI

**Marg** (मार्ग) means "path" in Hindi. Marg AI creates personalized learning paths using AWS Bedrock, making quality education accessible to India's 1.4 billion people.

## 🎯 Problem Statement

India's learners are stuck in "tutorial hell" - jumping between incomplete resources without achieving mastery. Quality education is expensive (₹50,000-₹2,00,000 per course) and not personalized. 70% of online learners never complete courses.

## 💡 Our Solution

Marg AI uses AWS Bedrock to provide:
- **AI-Generated Learning Paths** - Personalized roadmaps based on goals, skill level, and time
- **Evidence-Based Validation** - AI evaluates submissions using detailed rubrics
- **Duolingo-Style Gamification** - XP, streaks, and achievements for engagement
- **100x More Affordable** - ₹99/month vs ₹50,000+ for traditional courses

## 🏗️ Architecture

**Frontend:**
- Next.js 15 + React + TypeScript
- Tailwind CSS + Shadcn UI
- Framer Motion animations
- Responsive, mobile-first design

**Backend & AI:**
- AWS Bedrock (Claude 3 Haiku)
- Amazon DynamoDB
- Amazon S3
- RAG architecture

**Deployment:**
- Vercel (frontend)
- AWS (backend services)

## 🚀 Quick Start

```bash
cd margainew/marg-ai-app
npm install
npm run dev
```

Open http://localhost:3000

## 📁 Project Structure

```
margainew/marg-ai-app/     # Main application
├── app/                   # Next.js pages
├── components/            # React components
├── lib/                   # Utilities and backend
│   ├── backend/          # AWS integration
│   │   ├── bedrock/      # AI generation
│   │   └── db/           # DynamoDB
│   ├── mock-data.ts      # Demo data
│   └── types.ts          # TypeScript types
└── public/               # Static assets
```

## 🎨 Features

1. **AI Learning Path Generation** - Personalized 3-5 milestone roadmaps
2. **Evidence Validation** - AI-powered rubric-based evaluation
3. **Gamification** - XP system, streaks, achievement badges
4. **Progress Tracking** - Visual dashboards and analytics
5. **Responsive Design** - Works on desktop, tablet, mobile

## 💰 Cost Efficiency

**Monthly Cost (100 users):** $35-50
- AWS Bedrock: $25-30
- DynamoDB: $5-10 (mostly free tier)
- S3 + Lambda: $5-10

**Scales to 1000s of users with minimal cost increase**

## 🇮🇳 India-First Approach

- Affordable pricing (₹99/month)
- Regional language support (planned)
- Mobile-first design
- Local payment methods (UPI, Paytm)
- Cultural relevance (Marg = path in Hindi)

## 📊 Impact

**Target:** 10 million learners by 2027
- Bridge urban-rural education gap
- 100x more affordable than traditional education
- 70% completion rate (vs 30% industry average)
- Support Skill India initiative

## 🛠️ Tech Stack

- Next.js 15, React, TypeScript
- AWS Bedrock, DynamoDB, S3, Lambda
- Tailwind CSS, Shadcn UI, Framer Motion
- Zustand (state management)

## 📝 License

MIT License - see [LICENSE](LICENSE)

## 👥 Team

[Your Name/Team Name]
- AWS AI for Bharat Hackathon - Round 2

## 🔗 Links

- **Live Demo:** [YOUR_VERCEL_URL]
- **Demo Video:** [YOUR_VIDEO_URL]
- **GitHub:** https://github.com/Photon079/Marg-ai

---

**Made with ❤️ for India's learners**

Marg AI is an AI-powered learning integrity system that solves two core problems:

1. **Choice Overload** → AI Path-Finder curates single, minimal, non-redundant learning roadmaps
2. **Passive Consumption** → Anti-Tutorial-Hell Validator verifies learning through reflection and practical tasks

## 📁 Project Structure

```
AIforBharat/
├── requirements.md           # Functional requirements (10 requirements, 50+ criteria)
├── design.md                 # System architecture and design
├── tasks.md                  # Implementation roadmap
├── logo.png                  # Marg AI branding
├── LICENSE                   # MIT License
├── README.md                 # This file
│
├── Files/                    # Hackathon submission files
│   ├── AIforBharatsubmission.pptx
│   ├── AIforBharatsubmission.pptx.pdf
│   └── marg-ai-presentation.md
│
├── old/                      # Previous prototypes (Phase 1)
│   ├── marg-ai-frontend/     # React prototype
│   └── frontend_donebyai/    # Next.js prototype
│
└── margainew/                # Current development (Round 2)
    └── marg-ai-app/          # Next.js + AWS integration
```

## 🚀 Current Status

### ✅ Phase 1 (Completed)
- Complete technical specifications
- Working frontend prototype
- System architecture design
- Live demo deployment
- **Result**: Advanced to Round 2! 🎉

### 🔄 Round 2 (In Progress)
- **AWS Credits**: $200 USD awarded
- **Goal**: Build full MVP with real AWS Bedrock integration
- **Timeline**: 24-48 hours for first milestone
- **Tech Stack**: Next.js + AWS Lambda + Bedrock + DynamoDB + S3

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 16 + Shadcn UI + Tailwind CSS
- **Backend**: AWS Lambda (Serverless)
- **AI**: AWS Bedrock (Amazon Nova Pro)
- **Storage**: Amazon S3 + DynamoDB
- **API**: AWS API Gateway
- **Deployment**: Vercel (Frontend), AWS (Backend)

### Core Components
1. **Path Generator** - AI-curated non-redundant learning paths
2. **Evidence Evaluator** - AI-powered learning validation
3. **User Management** - Secure authentication and profiles
4. **Progress Tracker** - Milestone completion and analytics

## 🎨 Features

### ✅ Current (Phase 1)
- Landing page with Marg AI branding
- Learning goal input interface
- Progress tracking visualization
- Evidence submission forms
- Mock AI feedback system

### 🔮 In Development (Round 2)
- **AWS Bedrock Integration** - Real AI-powered path generation
- **Lambda Functions** - Serverless backend
- **DynamoDB** - User data and progress storage
- **S3** - Evidence file storage
- **Real-time AI Evaluation** - Actual feedback from Bedrock

## 🛠️ Development

### Frontend (margainew/marg-ai-app)
```bash
cd margainew/marg-ai-app
npm install
npm run dev
```

### Backend (Coming Soon)
AWS CDK infrastructure deployment

## 🎯 First Technical Milestone (Round 2)

**Deploy AWS Bedrock-powered learning path generator** that analyzes user goals and creates personalized, non-redundant learning roadmaps with structured milestones.

**Timeline**: 24 hours after AWS credits activation

## 💰 Budget Breakdown

| Phase | Cost | Purpose |
|-------|------|---------|
| Development | $20-30 | Testing and setup |
| Demo Period | $50-70 | Hackathon demonstrations |
| Production | $80-100 | 2-3 months operation |
| **Total** | **$150-200** | Full MVP with buffer |

## 🌟 Why Marg AI?

### For Learners
- ✅ Focused, non-redundant learning paths
- ✅ AI-validated progress with feedback
- ✅ Reduced time to skill mastery
- ✅ Clear progression milestones

### For Education
- ✅ Scalable mentorship through AI
- ✅ Objective learning assessment
- ✅ Analytics for curriculum improvement
- ✅ Cost-effective skill development

## 🏆 Hackathon Journey

**AIforBharat Hackathon** - AI for Learning & Developer Productivity Track

- **Phase 1**: Concept & Design ✅
  - Complete specifications
  - Working prototype
  - Live demo
  
- **Round 2**: Implementation 🔄
  - $200 AWS credits awarded
  - Building full MVP with Bedrock
  - Real AI integration

## 📄 Documentation

- [Requirements](requirements.md) - Detailed functional requirements
- [Design](design.md) - System architecture and components
- [Tasks](tasks.md) - Implementation roadmap
- [Presentation](Files/marg-ai-presentation.md) - Hackathon pitch deck

## 🤝 Contributing

We welcome contributions! This project is open source under the MIT License.

## 📞 Contact

- **Live Demo**: [https://marg-ai-kappa.vercel.app](https://marg-ai-kappa.vercel.app)
- **GitHub**: [https://github.com/Photon079/Marg-ai](https://github.com/Photon079/Marg-ai)
- **Hackathon**: AIforBharat 2025

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Marg AI** - Transforming tutorial hell into focused mastery, one learner at a time. 🎯