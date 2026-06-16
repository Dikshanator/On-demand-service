# hamroSewa - Project Setup & Configuration Guide

Complete guide for setting up and running the hamroSewa on-demand service platform locally for development.

## Quick Start (5 minutes)

```bash
# 1. Clone and setup
git clone <repo-url>
cd hamroSewa

# 2. Run automated setup (macOS/Linux)
chmod +x setup.sh && ./setup.sh

# Or Windows
setup.bat

# 3. Start backend (Terminal 1)
cd backend && npm run dev

# 4. Start frontend (Terminal 2)
cd frontend && npm start
```

Access at: http://localhost:19000

---

## System Requirements

All platforms require the following prerequisites:

### Hardware
- **Minimum:** 8GB RAM, 10GB free disk space
- **Recommended:** 16GB RAM, 20GB free disk space

### Software
- **Node.js:** v18.x or later (LTS)
- **npm/pnpm:** v9+
- **PostgreSQL:** v15+ (local or cloud)
- **Git:** Latest version
- **Code Editor:** VS Code recommended

### Installation

**macOS (Homebrew)**
```bash
brew install node@18
brew install postgresql@15
brew services start postgresql@15
```

**Linux (Ubuntu/Debian)**
```bash
sudo apt-get update
sudo apt-get install nodejs postgresql postgresql-contrib
sudo service postgresql start
```

**Windows**
- Download from https://nodejs.org
- Download from https://www.postgresql.org/download/windows/
- Ensure both are in PATH

**Verify Installation**
```bash
node --version          # v18+
npm --version           # v9+
psql --version          # v15+
```

---

## Database Setup

### Option 1: Local PostgreSQL

**macOS**
```bash
brew install postgresql@15
brew services start postgresql@15
createuser -P postgres  # Create user with password
```

**Windows**
1. Run PostgreSQL installer
2. Remember the superuser password
3. PostgreSQL starts automatically

**Linux**
```bash
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
sudo -u postgres createuser -P postgres
```

### Option 2: Cloud Database

**Neon (Recommended)**
1. Sign up at https://neon.tech
2. Create project
3. Copy DATABASE_URL from dashboard
4. Add to `backend/.env.local`

**Railway**
1. Sign up at https://railway.app
2. Create PostgreSQL database
3. Copy connection string
4. Add to `backend/.env.local`

---

## Configuration Files

### Backend (.env.local)

Create `backend/.env.local`:

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/hamrosewa"

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRY=7d

# Email (optional - choose one)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=app_password

# CORS
CORS_ORIGIN=http://localhost:19000

# Rate limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

See `backend/.env.example` for all available options.

### Frontend (.env.development.local)

Create `frontend/.env.development.local`:

```env
# API
EXPO_PUBLIC_API_URL=http://localhost:5000
EXPO_PUBLIC_API_TIMEOUT=30000

# App
EXPO_PUBLIC_APP_NAME=hamroSewa
EXPO_PUBLIC_APP_VERSION=1.0.0

# Feature flags
EXPO_PUBLIC_ENABLE_ANALYTICS=false
EXPO_PUBLIC_ENABLE_CRASH_REPORTING=false
```

See `frontend/.env.example` for all options.

---

## Running the Project

### Setup Database (First Time)

```bash
cd backend

# Create database and tables
createdb hamrosewa
npx prisma migrate deploy

# Optional: Seed with sample data
npx prisma db seed
```

### Start Development

**Terminal 1 - Backend**
```bash
cd backend
npm run dev
# Listens on http://localhost:5000
```

**Terminal 2 - Frontend**
```bash
cd frontend
npm start
# Press 'w' for web
# Or 'i' for iOS simulator
# Or 'a' for Android emulator
```

### Useful Commands

```bash
# Backend
npm run dev              # Start dev server
npm run build            # Build for production
npx prisma studio       # Open database GUI
npx prisma migrate dev  # Create new migration

# Frontend
npm start                # Start dev server
npm run web              # Run on web
npm run build            # Build for production
npm run lint             # Run ESLint
```

---

## Project Structure

```
hamroSewa/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── middleware/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── .env.local
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── auth/
│   │   │   ├── client/
│   │   │   ├── provider/
│   │   │   └── call/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   └── constants/
│   ├── app.json
│   ├── .env.development.local
│   └── package.json
│
├── SETUP.md
├── ICONS.md
├── ASSETS_REQUIREMENTS.md
├── README.md
└── START_HERE.txt
```

---

## Troubleshooting

### Port Already in Use

**Backend (5000)**
```bash
# macOS/Linux
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Frontend (19000)**
```bash
# macOS/Linux
lsof -ti:19000 | xargs kill -9

# Windows
netstat -ano | findstr :19000
taskkill /PID <PID> /F
```

### Database Connection Failed

1. Verify PostgreSQL is running: `psql -U postgres`
2. Check DATABASE_URL in `.env.local`
3. Ensure database exists: `createdb hamrosewa`
4. Reset connection: Restart PostgreSQL service

### npm Install Fails

```bash
# Clear cache
npm cache clean --force

# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### TypeScript Errors

```bash
# Rebuild type definitions
npx tsc --noEmit

# Clear cache
rm -rf dist/ .turbo/
npm run build
```

### Frontend Won't Start

```bash
# Clear Expo cache
npx expo start --clear

# Or complete reset
rm -rf node_modules .expo
npm install
npm start
```

---

## Security Best Practices

- **Never commit .env files** - They contain secrets
- **Use different keys per environment** (dev, staging, prod)
- **Rotate JWT secrets regularly**
- **Use strong database passwords** (min 12 characters)
- **Enable CORS only for trusted origins**
- **Validate all user input** on backend
- **Use HTTPS in production**

---

## Production Deployment

### Environment Variables
- Set `NODE_ENV=production`
- Generate strong `JWT_SECRET`
- Use cloud database (Neon, Railway, etc.)
- Enable all security features
- Configure CORS properly

### Building

**Backend**
```bash
cd backend
npm run build
npm start
```

**Frontend**
```bash
cd frontend
npm run build
# Deploy to app store or web hosting
```

---

## Additional Resources

- **React Native Docs:** https://reactnative.dev
- **Expo Docs:** https://docs.expo.dev
- **Express.js Docs:** https://expressjs.com
- **Prisma Docs:** https://www.prisma.io/docs
- **PostgreSQL Docs:** https://www.postgresql.org/docs
- **TypeScript Docs:** https://www.typescriptlang.org/docs

For issues and questions, refer to **START_HERE.txt** or check the project's issue tracker.
