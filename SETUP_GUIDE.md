# hamroSewa - Complete Project Setup Guide

## Table of Contents
1. [System Requirements](#system-requirements)
2. [Project Overview](#project-overview)
3. [Database Setup](#database-setup)
4. [Backend Configuration](#backend-configuration)
5. [Frontend Configuration](#frontend-configuration)
6. [Running the Project](#running-the-project)
7. [Troubleshooting](#troubleshooting)
8. [Project Structure](#project-structure)

---

## System Requirements

### Hardware
- **Minimum:** 8GB RAM, 10GB free disk space
- **Recommended:** 16GB RAM, 20GB free disk space

### Software
- **Node.js:** v18.x or later (LTS recommended)
- **npm/pnpm:** v9+ (pnpm is used in this project)
- **PostgreSQL:** v15 or later (local or cloud-hosted)
- **Git:** Latest version
- **Code Editor:** VS Code (or similar with TypeScript support)

### macOS/Linux
```bash
# Install Node.js (using Homebrew on macOS)
brew install node@18
brew install postgresql@15

# Or using system package manager on Linux
sudo apt-get install nodejs postgresql
```

### Windows
- Download Node.js from https://nodejs.org
- Download PostgreSQL from https://www.postgresql.org/download/windows/
- Ensure both are added to PATH

### Verify Installation
```bash
node --version          # Should be v18+
npm --version           # Should be v9+
pnpm --version          # If using pnpm
psql --version          # Should be v15+
```

---

## Project Overview

### Architecture
```
hamroSewa (On-Demand Service Platform)
├── Frontend (React Native - Expo)
│   └── Mobile app for iOS/Android/Web
├── Backend (Express.js)
│   └── REST API with PostgreSQL
└── Database (PostgreSQL)
    └── Core data storage
```

### Tech Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Mobile/Web | React Native + Expo | 0.85+ |
| Frontend Framework | React | 19.2+ |
| Backend | Express.js | 5.x |
| Database | PostgreSQL | 15+ |
| ORM | Prisma | 6.x |
| Authentication | JWT | - |
| Language | TypeScript | 6.x |

---

## Database Setup

### Option 1: PostgreSQL Local Installation

#### macOS (Homebrew)
```bash
# Install PostgreSQL
brew install postgresql@15

# Start the service
brew services start postgresql@15

# Create a superuser (if needed)
createuser -P postgres

# Test connection
psql -U postgres
```

#### Windows
1. Download PostgreSQL installer from https://www.postgresql.org/download/windows/
2. Run installer and follow setup wizard
3. Remember the password you set for `postgres` user
4. PostgreSQL should auto-start after installation
5. Test with:
   ```bash
   psql -U postgres
   ```

#### Linux (Ubuntu/Debian)
```bash
# Install PostgreSQL
sudo apt-get update
sudo apt-get install postgresql-15 postgresql-contrib-15

# Start the service
sudo systemctl start postgresql

# Login as postgres
sudo -u postgres psql
```

### Option 2: Cloud Database (Recommended for Development)

#### Using Neon (Free tier available)
1. Go to https://neon.tech
2. Sign up and create new project
3. Copy connection string
4. Save for later use

#### Using Railway
1. Go to https://railway.app
2. Create PostgreSQL database
3. Get DATABASE_URL from database settings
4. Save for later use

### Create Database Schema

```bash
# After PostgreSQL is running, create the database
createdb -U postgres hamrosewa

# Or connect and create:
psql -U postgres
CREATE DATABASE hamrosewa;
\c hamrosewa
```

---

## Backend Configuration

### Step 1: Clone and Navigate
```bash
cd /path/to/hamroSewa
cd backend
```

### Step 2: Install Dependencies
```bash
# Using npm
npm install

# Or using pnpm (if installed globally)
pnpm install
```

### Step 3: Create Environment File

Create `.env.local` file in `/backend` directory with:

```env
# Database Configuration
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/hamrosewa"

# Or if using cloud database (Neon/Railway):
# DATABASE_URL="postgresql://user:password@host:port/dbname"

# JWT Secret (generate a random string for production)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Email Configuration (for sending emails)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SMTP_FROM_EMAIL="noreply@hamrosewa.com"

# Server Configuration
PORT=5000
NODE_ENV="development"

# CORS Settings
CORS_ORIGIN="http://localhost:3000,http://localhost:19000,http://localhost:8081"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Step 4: Generate JWT Secret
```bash
# Generate a secure random secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 5: Initialize Prisma Database

```bash
# Run migrations to create database schema
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# Optional: View database in Prisma Studio
npx prisma studio
```

### Step 6: Verify Backend Setup
```bash
# Try to start the server
npm run dev

# Should output something like:
# [server] listening on http://localhost:5000
```

---

## Frontend Configuration

### Step 1: Navigate to Frontend
```bash
cd ../frontend
```

### Step 2: Install Dependencies
```bash
npm install
# or
pnpm install
```

### Step 3: Create Environment File

Create `.env.development.local` file in `/frontend` directory:

```env
# API Configuration
EXPO_PUBLIC_API_URL="http://localhost:5000/api"
EXPO_PUBLIC_API_TIMEOUT=10000

# App Configuration
EXPO_PUBLIC_APP_NAME="hamroSewa"
EXPO_PUBLIC_APP_VERSION="1.0.0"

# Feature Flags
EXPO_PUBLIC_ENABLE_NOTIFICATIONS=true
EXPO_PUBLIC_ENABLE_CHAT=true
EXPO_PUBLIC_ENABLE_VOICE_CALL=true

# Firebase (if using push notifications - optional)
EXPO_PUBLIC_FIREBASE_API_KEY=""
EXPO_PUBLIC_FIREBASE_PROJECT_ID=""
EXPO_PUBLIC_FIREBASE_APP_ID=""

# Sentry (if using error tracking - optional)
EXPO_PUBLIC_SENTRY_DSN=""
```

### Step 4: Install Expo CLI (if not already installed)
```bash
npm install -g expo-cli

# or
npx expo
```

### Step 5: Verify Frontend Setup
```bash
npm start
# or
npm run start

# This will show you options:
# i - iOS simulator
# a - Android emulator
# w - Web browser
# r - Restart server
# q - Quit
```

---

## Running the Project

### Terminal 1: Start Backend
```bash
cd backend
npm run dev

# Expected output:
# [server] listening on http://localhost:5000
```

### Terminal 2: Start Frontend
```bash
cd frontend
npm start

# Select your platform:
# Press 'w' for web browser (easiest to start)
# Press 'a' for Android emulator
# Press 'i' for iOS simulator
```

### Terminal 3 (Optional): Prisma Studio
```bash
cd backend
npx prisma studio

# Opens database viewer at http://localhost:5555
```

### Terminal 4 (Optional): Check Logs
```bash
# Monitor API requests (if implemented)
tail -f backend-logs.txt
```

---

## Complete Environment Files Reference

### Backend: `.env.local`
```env
# ===== DATABASE =====
DATABASE_URL="postgresql://postgres:password@localhost:5432/hamrosewa"

# ===== AUTHENTICATION =====
JWT_SECRET="change-this-to-a-secure-random-string"
JWT_EXPIRE="7d"

# ===== EMAIL SERVICE =====
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SMTP_FROM_EMAIL="noreply@hamrosewa.com"

# ===== SERVER =====
PORT=5000
NODE_ENV="development"
HOST="localhost"

# ===== CORS =====
CORS_ORIGIN="http://localhost:3000,http://localhost:19000,http://localhost:8081"

# ===== RATE LIMITING =====
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# ===== LOGGING =====
LOG_LEVEL="debug"
```

### Frontend: `.env.development.local`
```env
# ===== API ENDPOINTS =====
EXPO_PUBLIC_API_URL="http://localhost:5000/api"
EXPO_PUBLIC_API_TIMEOUT="10000"

# ===== APP CONFIG =====
EXPO_PUBLIC_APP_NAME="hamroSewa"
EXPO_PUBLIC_APP_VERSION="1.0.0"
EXPO_PUBLIC_BUILD_NUMBER="1"

# ===== FEATURES =====
EXPO_PUBLIC_ENABLE_NOTIFICATIONS="true"
EXPO_PUBLIC_ENABLE_CHAT="true"
EXPO_PUBLIC_ENABLE_VOICE_CALL="true"
EXPO_PUBLIC_DEBUG_MODE="true"

# ===== EXTERNAL SERVICES =====
# Firebase (Optional)
EXPO_PUBLIC_FIREBASE_API_KEY=""
EXPO_PUBLIC_FIREBASE_PROJECT_ID=""

# Sentry (Optional)
EXPO_PUBLIC_SENTRY_DSN=""
```

---

## Troubleshooting

### Backend Issues

#### Port Already in Use
```bash
# Find what's using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Or change port in .env
PORT=5001
```

#### Database Connection Failed
```bash
# Verify PostgreSQL is running
pg_isready -h localhost -p 5432

# Check connection string format
# Should be: postgresql://user:password@host:port/database

# Test connection directly
psql -U postgres -d hamrosewa -c "SELECT 1"
```

#### Prisma Migration Errors
```bash
# Reset database (⚠️ WARNING: Deletes all data)
npx prisma migrate reset

# Or manually connect and check:
psql -U postgres -d hamrosewa
# Then run: \d  (to list tables)
```

### Frontend Issues

#### Expo Connection Issues
```bash
# Clear Metro cache
npm start -- --reset-cache

# Or delete and reinstall:
rm -rf node_modules package-lock.json
npm install
```

#### API Not Connecting
```bash
# Check backend is running on port 5000
curl http://localhost:5000/api/health

# Verify API URL in .env.development.local
# Should not have trailing slash: http://localhost:5000/api

# Check network connectivity:
# On Android: adb shell "getprop ro.kernel.android.checkjni"
# On Web: Open DevTools (F12) and check Network tab
```

#### Module Not Found Errors
```bash
# Clear all caches and reinstall
rm -rf node_modules .expo package-lock.json
npm install
npm start -- --reset-cache
```

### General Issues

#### Node Modules Corruption
```bash
# Complete reset
rm -rf node_modules package-lock.json
rm -rf ~/.npm  # Clear npm cache
npm install
```

#### Git Issues
```bash
# If you get merge conflicts:
git status
git add .
git commit -m "Resolve merge conflicts"

# If .env files are tracked (should not be):
git rm --cached .env.local
git rm --cached frontend/.env.development.local
```

---

## Project Structure

```
hamroSewa/
├── backend/
│   ├── src/
│   │   ├── app.ts              # Express app setup
│   │   ├── server.ts           # Server entry point
│   │   ├── config/             # Configuration files
│   │   ├── controllers/        # Request handlers
│   │   ├── routes/             # API routes
│   │   ├── middleware/         # Custom middleware
│   │   ├── services/           # Business logic
│   │   ├── libs/               # Utilities & libraries
│   │   └── utils/              # Helper functions
│   ├── prisma/
│   │   ├── schema.prisma       # Database schema
│   │   └── migrations/         # Schema changes
│   ├── .env.local              # Environment variables
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── app/                # Expo Router screens
│   │   ├── components/         # Reusable components
│   │   ├── context/            # React Context
│   │   ├── hooks/              # Custom hooks
│   │   ├── constants/          # App constants
│   │   └── utils/              # Helper functions
│   ├── assets/                 # Images, fonts, icons
│   ├── app.json                # Expo configuration
│   ├── .env.development.local  # Environment variables
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── SETUP_GUIDE.md              # This file
├── .env.development.local      # Root environment variables
├── package.json                # Root package file
└── pnpm-lock.yaml              # Dependency lock file
```

---

## Next Steps

1. **Database Setup** - Create PostgreSQL database
2. **Backend Configuration** - Set up .env and run migrations
3. **Frontend Configuration** - Install dependencies and .env
4. **Start Services** - Run backend, then frontend
5. **Testing** - Test API and mobile app
6. **Debugging** - Use Prisma Studio and DevTools

---

## Useful Commands Reference

```bash
# Backend
npm run dev              # Start development server
npm run build           # Build for production
npm run lint            # Run linter
npm run test            # Run tests

# Database
npx prisma studio      # Open Prisma Studio (GUI)
npx prisma migrate dev # Run migrations
npx prisma generate    # Generate Prisma client
npx prisma db reset    # Reset database (⚠️)

# Frontend
npm start               # Start Expo development server
npm run web            # Start web version
npm run android        # Start Android version
npm run ios            # Start iOS version
npm run lint           # Run linter

# Git
git status             # Check status
git add .             # Stage changes
git commit -m ""      # Commit changes
git push              # Push to remote
git pull              # Pull from remote
```

---

## Support & Resources

- **Expo Documentation:** https://docs.expo.dev
- **React Native Docs:** https://reactnative.dev
- **Prisma Documentation:** https://www.prisma.io/docs
- **Express.js Guide:** https://expressjs.com
- **PostgreSQL Manual:** https://www.postgresql.org/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs

---

## Common Development Workflows

### Adding a New API Endpoint

1. Create controller in `backend/src/controllers/`
2. Add route in `backend/src/routes/`
3. Register route in `backend/src/routes/index.ts`
4. Test with curl or Postman
5. Update frontend to consume endpoint

### Adding a New Database Model

1. Update `backend/prisma/schema.prisma`
2. Run `npx prisma migrate dev --name <description>`
3. Test with Prisma Studio
4. Update API controllers

### Adding a New Screen to Frontend

1. Create file in `frontend/src/app/`
2. Use Expo Router file-based routing
3. Add navigation if needed
4. Import and use components
5. Test on all platforms

---

## Notes

- Always keep `.env` files in `.gitignore`
- Never commit secrets or API keys
- Use environment variables for configuration
- Test API endpoints before using in frontend
- Keep database backups in production
- Use meaningful git commit messages

---

Last Updated: June 2026
For questions or issues, refer to the official documentation of each framework/tool.
