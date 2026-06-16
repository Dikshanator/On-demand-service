# hamroSewa - On-Demand Service Platform

A comprehensive mobile platform connecting service providers with clients in real-time. Built with React Native, Expo, Express.js, and PostgreSQL.

**Status:** Active Development | Phase 1-2: Navigation & Dashboard Implementation

## Core Features

### For Clients
- Browse and discover service providers
- Request services with real-time tracking
- Secure in-app chat and voice calls
- Payment and rating systems
- Booking history and saved addresses
- Provider profiles with credentials and reviews

### For Service Providers
- Real-time job request notifications
- Dashboard with earnings tracking
- Job history and performance analytics
- Certification and skills management
- Client communication (secure chat/calls)
- Service area and availability management
- Payout and earnings history

### Platform Features
- Secure JWT authentication with role-based routing
- Real-time notifications (jobs, payments, reviews)
- In-app voice calling with call recording
- Payment gateway integration (Stripe, Khalti)
- Rating and review system
- Dark mode and light mode support

## Tech Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Frontend** | React Native + Expo | TypeScript, NativeWind, Material Icons |
| **Backend** | Node.js + Express.js | TypeScript, REST API, WebSocket ready |
| **Database** | PostgreSQL | Prisma ORM, migrations, data validation |
| **Authentication** | JWT + Better Auth | Role-based routing, session management |
| **Styling** | NativeWind + Tailwind CSS | Light/Dark modes, responsive design |
| **Real-time** | WebSocket support | Job notifications, chat, live tracking |
| **Icons** | Material Community Icons | 50+ icons, color customizable |

## Project Structure

```
hamroSewa/
├── frontend/                    # React Native (Expo)
│   ├── src/app/
│   │   ├── auth/               # Login, registration
│   │   ├── client/(tabs)/       # Client dashboard, bookings, payments
│   │   ├── provider/(tabs)/     # Provider dashboard, jobs, earnings
│   │   ├── chat/                # Shared chat system
│   │   └── call/                # Voice call system
│   ├── src/components/          # Reusable UI components
│   ├── src/contexts/            # Authentication context
│   └── src/hooks/               # Custom React hooks
│
├── backend/                      # Express.js API
│   ├── src/routes/              # API endpoints
│   ├── src/controllers/         # Business logic
│   ├── src/models/              # Data models
│   ├── prisma/schema.prisma     # Database schema
│   └── .env.local               # Configuration
│
└── Documentation/
    ├── README.md                # This file
    ├── START_HERE.txt           # Setup guide
    ├── SETUP.md                 # Detailed configuration
    ├── ICONS.md                 # Icon system & colors
    └── ASSETS_REQUIREMENTS.md   # Design assets
```

## Implementation Phases

### Phase 1: Provider Navigation Structure ✓
- Provider tab layout (Home, Jobs, Earnings, Profile, Chat)
- Role-based routing from login
- Root layout integration

### Phase 2: Provider Dashboard & Screens (In Progress)
- **Home**: Welcome, availability toggle, earnings cards, active jobs, new requests
- **Jobs**: Schedule view, job timeline, status tracking
- **Earnings**: Total earnings, weekly overview, payout history
- **Profile**: Provider info, certifications, service management
- **Notifications**: Job alerts, payment notifications, reviews

### Phase 3: Service Provider Profile (Client View)
- Provider details before hiring
- Credentials and ratings display
- Service categories and availability

### Phase 4: Chat System (Shared)
- Conversation list with search
- Chat detail screen with quick actions
- Integration across provider and client

### Phase 5: Voice Call System
- Incoming call screen
- Active call screen with controls
- Call summary and quality rating

### Phase 6: Integration & Deployment
- Deep linking and navigation flows
- Production deployment setup
- API integration

## Architecture Highlights

- **Authentication**: JWT-based with role-based routing (client/provider)
- **Theming**: Complete light/dark mode support with theme context
- **Component Reuse**: Shared components for notifications, chat, calls
- **Type Safety**: Full TypeScript across frontend and backend
- **Mobile-First**: Responsive design for all screen sizes
- **Real-time Ready**: WebSocket infrastructure for live features
- **Database**: PostgreSQL with Prisma for type-safe queries

## Quick Start

```bash
# Automated setup (recommended)
chmod +x setup.sh && ./setup.sh    # macOS/Linux
# or
setup.bat                           # Windows

# Manual start (3 terminals)
Terminal 1: cd backend && npm run dev
Terminal 2: cd frontend && npm start
Terminal 3: (optional) npx prisma studio

# Access
http://localhost:19000              # App
http://localhost:5000/api/health    # API health check
```

## Documentation Files

- **[START_HERE.txt](START_HERE.txt)** - First-time local setup guide (5 min read)
- **[SETUP.md](SETUP.md)** - Complete setup, configuration, troubleshooting (30 min read)
- **[ICONS.md](ICONS.md)** - Icon system, colors, design specifications (15 min read)
- **[ASSETS_REQUIREMENTS.md](ASSETS_REQUIREMENTS.md)** - Professional asset specifications

## Development Workflow

```bash
# Backend development
cd backend
npm run dev              # Start with auto-reload
npx prisma studio       # View/edit database
npx prisma migrate dev  # Create schema migration

# Frontend development
cd frontend
npm start                # Start Expo dev server
npm run web              # Test on web browser
npm run lint             # Check code quality
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `frontend/src/contexts/AuthContext.tsx` | Authentication state |
| `frontend/src/hooks/use-theme.ts` | Theme management (light/dark) |
| `frontend/src/constants/icons.ts` | Icon definitions (50+ icons) |
| `backend/prisma/schema.prisma` | Database schema |
| `backend/src/middleware/auth.ts` | JWT verification |

## Theme Colors

**Light Mode:**
- Primary: Navy Blue (#003D99)
- Accent: Teal (#00A088)

**Dark Mode:**
- Primary: Purple (#7C3AED)
- Accent: Cyan (#06B6D4)

## License & Credits

**Project:** hamroSewa - On-Demand Service Platform
**Institution:** Nepal College of Information Technology, Pokhara University
**Supervisor:** Dr. Roshan Chitrakar

### Team
- Dikshant Dahal (222017) - UI/UX Designer & Frontend Lead
- Swarup Lamsal (222041) - Frontend Development
- Deeya Pandey (222015) - Backend Developer
- Shivaram Chalise (222036) - Backend Developer & Testing
- Anuj Rana (222007) - Database Design

## Support & Resources

- **React Native:** https://reactnative.dev/docs
- **Expo:** https://docs.expo.dev
- **Express.js:** https://expressjs.com
- **Prisma:** https://www.prisma.io/docs
- **PostgreSQL:** https://www.postgresql.org/docs

For setup issues, see [START_HERE.txt](START_HERE.txt). For detailed configuration, see [SETUP.md](SETUP.md).
