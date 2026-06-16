# hamroSewa Configuration & Setup Index

Welcome! This document guides you through all configuration and setup documentation available for the hamroSewa project.

## Quick Navigation

### Getting Started (Choose One)
- **New to the project?** → Read [QUICK_START.md](QUICK_START.md) (10 minutes)
- **Need detailed setup?** → Read [SETUP_GUIDE.md](SETUP_GUIDE.md) (30 minutes)
- **Prefer automated setup?** → Run `./setup.sh` (macOS/Linux) or `setup.bat` (Windows)

---

## Documentation Files

### 1. QUICK_START.md ⭐ START HERE
**For:** Developers who want to get running in 5 minutes  
**Contains:**
- 5-minute setup checklist
- Common commands reference
- Quick troubleshooting table
- Environment variables summary
- Tips for success

**When to use:** First time setting up, quick reference during development

---

### 2. SETUP_GUIDE.md 📖 COMPREHENSIVE
**For:** Detailed step-by-step setup and configuration  
**Contains (630+ lines):**

- **System Requirements**
  - Hardware specifications
  - Software prerequisites (Node.js, PostgreSQL, Git)
  - Installation instructions for each OS

- **Database Setup**
  - Local PostgreSQL installation (macOS, Windows, Linux)
  - Cloud database options (Neon, Railway)
  - Database schema initialization

- **Backend Configuration**
  - Dependencies installation
  - .env.local setup with all options
  - Prisma migrations and setup
  - JWT secret generation

- **Frontend Configuration**
  - Dependencies installation
  - .env.development.local setup
  - Expo CLI installation
  - Platform-specific setup

- **Running the Project**
  - Starting backend (Terminal 1)
  - Starting frontend (Terminal 2)
  - Optional: Prisma Studio for database inspection

- **Troubleshooting**
  - Port conflicts resolution
  - Database connection issues
  - Prisma migration errors
  - Expo connection problems
  - Module not found errors
  - Complete reset procedures

- **Project Structure**
  - Directory overview
  - File organization
  - Key files explanation

- **Next Steps**
  - Development workflows
  - Adding API endpoints
  - Creating database models
  - Adding new screens

**When to use:** Initial setup, detailed reference, troubleshooting specific issues

---

## Environment Files

### Backend Configuration

#### Files to Create
1. **backend/.env.local** - Your actual configuration
2. **Reference:** backend/.env.example

#### Key Variables

```env
# Database (Required)
DATABASE_URL="postgresql://user:password@localhost:5432/hamrosewa"

# Authentication (Required)
JWT_SECRET="your-random-secret-key"

# Server (Required)
PORT=5000
NODE_ENV="development"

# CORS (Required)
CORS_ORIGIN="http://localhost:3000,http://localhost:19000"

# Email (Optional)
SMTP_HOST="smtp.gmail.com"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# External Services (Optional)
# Stripe, Khalti, Firebase, Twilio, etc.
```

**Template File:** [backend/.env.example](backend/.env.example)
- 91 lines of documented configuration
- Includes comments for each section
- Examples for all major services

---

### Frontend Configuration

#### Files to Create
1. **frontend/.env.development.local** - Your actual configuration
2. **Reference:** frontend/.env.example

#### Key Variables

```env
# API (Required)
EXPO_PUBLIC_API_URL="http://localhost:5000/api"

# Features (Optional)
EXPO_PUBLIC_DEBUG_MODE="true"
EXPO_PUBLIC_ENABLE_NOTIFICATIONS="true"

# External Services (Optional)
EXPO_PUBLIC_FIREBASE_API_KEY=""
EXPO_PUBLIC_SENTRY_DSN=""
```

**Template File:** [frontend/.env.example](frontend/.env.example)
- 84 lines of documented configuration
- Platform-specific examples
- Feature flag documentation

---

## Setup Scripts

### Automated Setup (Recommended)

#### macOS/Linux
```bash
chmod +x setup.sh    # Make executable (first time only)
./setup.sh          # Run the script
```

#### Windows
```bash
setup.bat           # Double-click or run from command prompt
```

**What the scripts do:**
1. Check prerequisites (Node.js, PostgreSQL, npm)
2. Install backend dependencies
3. Install frontend dependencies
4. Create .env.local files from templates
5. Optional: Setup database automatically
6. Print next steps

---

## Configuration by Use Case

### Use Case 1: First-Time Local Development

**Steps:**
1. Read: [QUICK_START.md](QUICK_START.md)
2. Run: `./setup.sh` (macOS/Linux) or `setup.bat` (Windows)
3. Follow prompts to configure database
4. Edit: `backend/.env.local` if needed
5. Start: Run services in two terminals

**Time:** 10-15 minutes

---

### Use Case 2: Detailed Manual Setup

**Steps:**
1. Read: [SETUP_GUIDE.md](SETUP_GUIDE.md) - "System Requirements"
2. Read: [SETUP_GUIDE.md](SETUP_GUIDE.md) - "Database Setup"
3. Read: [SETUP_GUIDE.md](SETUP_GUIDE.md) - "Backend Configuration"
4. Read: [SETUP_GUIDE.md](SETUP_GUIDE.md) - "Frontend Configuration"
5. Create .env files from .env.example templates
6. Run services

**Time:** 30-45 minutes

---

### Use Case 3: Cloud Database Setup

**For:** Using Neon, Railway, or other cloud PostgreSQL

**Steps:**
1. Create cloud database account
2. Get DATABASE_URL from cloud provider
3. Copy to `backend/.env.local`
4. Run: `npx prisma migrate deploy`
5. Verify connection

**References:**
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - "Option 2: Cloud Database"
- Database provider documentation

---

### Use Case 4: Team Development Setup

**For:** Multiple developers on same project

**Best Practices:**
1. Each developer creates own .env files (never commit)
2. Use same DATABASE_URL for shared cloud database
3. Or each uses local PostgreSQL
4. Sync code via Git, never commit .env files

**Documentation:** [SETUP_GUIDE.md](SETUP_GUIDE.md) - "Troubleshooting: Git Issues"

---

### Use Case 5: Production Deployment

**For:** Deploying to production server

**Key Changes:**
```env
NODE_ENV="production"
JWT_SECRET="generate-new-random-secret"
DATABASE_URL="cloud-production-database"
CORS_ORIGIN="https://your-domain.com"
```

**Important:** Never use development .env in production

**References:**
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Environment variables section
- Backend/Frontend package.json - build scripts

---

## Environment Variables Reference

### All Available Variables

#### Backend (backend/.env.local)

**Database:**
- `DATABASE_URL` - PostgreSQL connection string

**Authentication:**
- `JWT_SECRET` - Secret for signing JWT tokens
- `JWT_EXPIRE` - Token expiration time (e.g., "7d")

**Server:**
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - "development" | "production"
- `HOST` - Server host (default: "localhost")

**CORS:**
- `CORS_ORIGIN` - Comma-separated allowed origins

**Email:**
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM_EMAIL`

**Rate Limiting:**
- `RATE_LIMIT_WINDOW_MS` - Time window in milliseconds
- `RATE_LIMIT_MAX_REQUESTS` - Max requests per window

**Logging:**
- `LOG_LEVEL` - "error" | "warn" | "info" | "debug"

**Optional Services:**
- Firebase, Stripe, Khalti, Twilio, SendGrid, Mailgun

---

#### Frontend (frontend/.env.development.local)

**API:**
- `EXPO_PUBLIC_API_URL` - Backend API URL
- `EXPO_PUBLIC_API_TIMEOUT` - Request timeout in ms

**App:**
- `EXPO_PUBLIC_APP_NAME` - App display name
- `EXPO_PUBLIC_DEBUG_MODE` - Enable debug logging

**Features:**
- `EXPO_PUBLIC_ENABLE_NOTIFICATIONS` - Enable notifications
- `EXPO_PUBLIC_ENABLE_CHAT` - Enable chat features
- `EXPO_PUBLIC_ENABLE_VOICE_CALL` - Enable voice calls

**Optional Services:**
- Firebase, Sentry, Google Maps

---

## Troubleshooting Quick Reference

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Port 5000 in use | Another process using port | Change PORT in .env or kill process |
| Database connection failed | Wrong DATABASE_URL | Verify PostgreSQL running and credentials correct |
| npm install fails | Network or cache issue | `npm cache clean --force && npm install` |
| API not responding | Backend not running | Check backend server in Terminal 1 |
| Frontend can't connect API | Wrong API URL in .env | Verify EXPO_PUBLIC_API_URL matches backend |
| Modules not found | Incomplete install | Delete node_modules and reinstall |
| Prisma migration error | Database schema mismatch | Run `npx prisma migrate reset` |

**For more issues:** See [SETUP_GUIDE.md](SETUP_GUIDE.md) - "Troubleshooting"

---

## File Structure Reference

```
hamroSewa/
├── backend/
│   ├── .env.local                    ← CREATE (from .env.example)
│   ├── .env.example                  ← Reference template
│   ├── package.json                  ← Dependencies
│   ├── tsconfig.json                 ← TypeScript config
│   ├── src/
│   │   ├── server.ts                 ← Entry point
│   │   ├── app.ts                    ← Express setup
│   │   ├── config/                   ← Configuration
│   │   ├── controllers/              ← API handlers
│   │   ├── routes/                   ← API routes
│   │   ├── middleware/               ← Custom middleware
│   │   ├── services/                 ← Business logic
│   │   └── utils/                    ← Utilities
│   └── prisma/
│       ├── schema.prisma             ← Database schema
│       └── migrations/               ← Database changes
│
├── frontend/
│   ├── .env.development.local        ← CREATE (from .env.example)
│   ├── .env.example                  ← Reference template
│   ├── app.json                      ← Expo configuration
│   ├── package.json                  ← Dependencies
│   ├── tsconfig.json                 ← TypeScript config
│   ├── src/
│   │   ├── app/                      ← Screens (routing)
│   │   ├── components/               ← UI components
│   │   ├── hooks/                    ← Custom hooks
│   │   ├── context/                  ← State management
│   │   ├── constants/                ← App constants
│   │   └── utils/                    ← Utilities
│   └── assets/                       ← Images, fonts, icons
│
├── QUICK_START.md                    ← Quick reference
├── SETUP_GUIDE.md                    ← Detailed guide
├── setup.sh                          ← Auto-setup (macOS/Linux)
├── setup.bat                         ← Auto-setup (Windows)
├── backend/.env.example              ← Backend template
├── frontend/.env.example             ← Frontend template
└── README.md                         ← Project overview
```

---

## Next Steps

### 1. Read Documentation
Choose based on your experience level:
- **Quick setup:** [QUICK_START.md](QUICK_START.md)
- **Detailed setup:** [SETUP_GUIDE.md](SETUP_GUIDE.md)

### 2. Run Setup
Choose your method:
- **Automated:** `./setup.sh` or `setup.bat`
- **Manual:** Follow SETUP_GUIDE.md steps

### 3. Create Configuration
- Create `backend/.env.local` from `backend/.env.example`
- Create `frontend/.env.development.local` from `frontend/.env.example`
- Fill in your values (especially database URL)

### 4. Initialize Database
```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start Services
Terminal 1:
```bash
cd backend && npm run dev
```

Terminal 2:
```bash
cd frontend && npm start
```

### 6. Access Application
- **Web App:** http://localhost:19000
- **API:** http://localhost:5000/api
- **Database GUI:** http://localhost:5555 (when running `npx prisma studio`)

---

## Support & Resources

### Official Documentation
- [React Native Docs](https://reactnative.dev)
- [Expo Documentation](https://docs.expo.dev)
- [Express.js Guide](https://expressjs.com)
- [Prisma Docs](https://www.prisma.io/docs)
- [PostgreSQL Manual](https://www.postgresql.org/docs)

### Useful Tools
- [Node.js LTS](https://nodejs.org) - JavaScript runtime
- [PostgreSQL](https://www.postgresql.org) - Database
- [VS Code](https://code.visualstudio.com) - Code editor
- [Git](https://git-scm.com) - Version control
- [Postman](https://www.postman.com) - API testing

### Quick Links
- Bug Report: Create GitHub issue
- Questions: Check documentation first
- Stuck? See [SETUP_GUIDE.md](SETUP_GUIDE.md) Troubleshooting section

---

## Important Notes

⚠️ **Security:**
- Never commit `.env` files to Git
- Never share JWT_SECRET, DATABASE_URL, or API keys
- Always use different secrets for production
- Keep dependencies updated

✓ **Best Practices:**
- Use same Node.js version as team (v18 LTS recommended)
- Backup database before migrations
- Test API separately from frontend
- Use Prisma Studio to inspect data
- Enable debug mode during development

🔄 **Updates:**
- Keep documentation updated when processes change
- Notify team of new requirements
- Test setup on fresh machine periodically

---

## Document History

| Date | Version | Changes |
|------|---------|---------|
| June 2026 | 1.0 | Initial creation |
| | | - Added QUICK_START.md |
| | | - Added SETUP_GUIDE.md |
| | | - Created .env templates |
| | | - Created setup scripts |

---

## Questions or Issues?

1. **Check the docs** - Most answers are in [SETUP_GUIDE.md](SETUP_GUIDE.md)
2. **Search online** - Framework-specific issues have many solutions
3. **Ask team** - Team members may have solved it before
4. **Check Git logs** - Previous changes might show what was wrong

---

**Last Updated:** June 2026  
**Maintained By:** hamroSewa Development Team  
**Version:** 1.0 Production Ready
