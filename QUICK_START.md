# Quick Start Reference Card

## 5-Minute Setup

### Prerequisites Check
```bash
node --version    # Should be v18+
npm --version     # Should be v9+
psql --version    # Should be v15+
```

### 1. Install Dependencies
```bash
# Backend
cd backend && npm install && cd ..

# Frontend
cd frontend && npm install && cd ..
```

### 2. Configure Environment

**Backend** - Create `backend/.env.local`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/hamrosewa"
JWT_SECRET="change-me-to-random-string"
PORT=5000
NODE_ENV="development"
CORS_ORIGIN="http://localhost:3000,http://localhost:19000"
```

**Frontend** - Create `frontend/.env.development.local`:
```env
EXPO_PUBLIC_API_URL="http://localhost:5000/api"
EXPO_PUBLIC_API_TIMEOUT="10000"
EXPO_PUBLIC_DEBUG_MODE="true"
```

### 3. Setup Database
```bash
# Create PostgreSQL database
createdb hamrosewa

# Run migrations
cd backend
npx prisma migrate dev --name init
npx prisma generate
cd ..
```

### 4. Start Services

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Should print: [server] listening on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# Press 'w' for web, 'a' for Android, 'i' for iOS
```

### 5. Access the App
- **Web:** http://localhost:19000
- **API:** http://localhost:5000/api
- **Database:** npx prisma studio (in backend directory)

---

## Automated Setup (Recommended)

### macOS/Linux
```bash
# Make script executable (first time only)
chmod +x setup.sh

# Run setup
./setup.sh
```

### Windows
```bash
# Run setup (double-click or command line)
setup.bat
```

---

## Common Commands

### Backend Development
```bash
npm run dev              # Start dev server with auto-reload
npm run build           # Build for production
npx prisma studio      # Open database GUI
npx prisma migrate dev # Create new migration
npx prisma db reset    # Reset database (⚠️ deletes data)
npm run lint            # Check code style
```

### Frontend Development
```bash
npm start               # Start Expo dev server
npm run web            # Web version specifically
npm run android        # Android emulator
npm run ios            # iOS simulator
npm run lint            # Check code style
npm start -- --reset-cache  # Clear all caches
```

### Database
```bash
psql -U postgres                          # Connect to PostgreSQL
\d                                        # List tables
\c hamrosewa                              # Switch to database
SELECT * FROM "User";                     # View data
DROP DATABASE hamrosewa;                  # Delete database
createdb hamrosewa                        # Create database
```

---

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Port 5000 in use | `PORT=5001 npm run dev` or kill process |
| Database connection failed | Check DATABASE_URL in .env.local |
| npm install fails | `npm cache clean --force` then `npm install` |
| API not responding | Check backend is running on port 5000 |
| Frontend won't connect | Verify EXPO_PUBLIC_API_URL in .env.development.local |
| Modules not found | Delete `node_modules` and reinstall |
| Prisma errors | Run `npx prisma generate` |

---

## Project Structure

```
hamroSewa/
├── backend/              # Express.js API
│   ├── src/
│   ├── prisma/          # Database schema
│   └── .env.local       # ← Create this
├── frontend/            # React Native App
│   ├── src/
│   └── .env.development.local  # ← Create this
├── SETUP_GUIDE.md       # Detailed setup
├── setup.sh             # Auto-setup (macOS/Linux)
└── setup.bat            # Auto-setup (Windows)
```

---

## Environment Variables Summary

### Backend (.env.local)
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret for JWT tokens
- `PORT` - Server port (default: 5000)
- `CORS_ORIGIN` - Allowed frontend origins
- `SMTP_*` - Email configuration
- `NODE_ENV` - development | production

### Frontend (.env.development.local)
- `EXPO_PUBLIC_API_URL` - Backend API URL
- `EXPO_PUBLIC_API_TIMEOUT` - Request timeout (ms)
- `EXPO_PUBLIC_DEBUG_MODE` - Enable debug logging
- `EXPO_PUBLIC_ENABLE_*` - Feature flags

---

## Support Resources

| Topic | Resource |
|-------|----------|
| React Native | https://reactnative.dev |
| Expo | https://docs.expo.dev |
| Express.js | https://expressjs.com |
| Prisma | https://www.prisma.io/docs |
| PostgreSQL | https://www.postgresql.org/docs |
| TypeScript | https://www.typescriptlang.org/docs |

---

## Tips for Success

✓ Use same Node.js version across team  
✓ Never commit .env files  
✓ Keep packages updated regularly  
✓ Use Prisma Studio to inspect database  
✓ Test API separately from frontend  
✓ Enable debug mode during development  
✓ Check console/logs for error messages  
✓ Use meaningful git commit messages  

---

## Next: Full Documentation

For detailed setup instructions, advanced configuration, and troubleshooting, see:
- **SETUP_GUIDE.md** - Complete setup documentation
- **README.md** - Project overview
- Framework documentation links above

---

Version: 1.0 | Last Updated: June 2026
