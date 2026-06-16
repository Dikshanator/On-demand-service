@echo off
REM hamroSewa - Quick Start Setup Script for Windows
REM This script automates the initial setup process

echo.
echo ==========================================
echo   hamroSewa - Project Setup Script
echo ==========================================
echo.

REM Check for Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed
    echo Install from: https://nodejs.org
    exit /b 1
)
echo OK: Node.js %node --version%

REM Check for npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed
    exit /b 1
)
echo OK: npm found

REM Step 1: Install backend dependencies
echo.
echo Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install backend dependencies
    exit /b 1
)
cd ..
echo OK: Backend dependencies installed

REM Step 2: Install frontend dependencies
echo.
echo Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install frontend dependencies
    exit /b 1
)
cd ..
echo OK: Frontend dependencies installed

REM Step 3: Copy environment files
echo.
echo Setting up environment files...

if not exist "backend\.env.local" (
    echo Creating backend\.env.local from template...
    if exist "backend\.env.example" (
        copy backend\.env.example backend\.env.local
        echo OK: Created backend\.env.local
        echo WARNING: Please edit backend\.env.local with your database credentials
    ) else (
        echo ERROR: backend\.env.example not found
        exit /b 1
    )
) else (
    echo OK: backend\.env.local already exists
)

if not exist "frontend\.env.development.local" (
    echo Creating frontend\.env.development.local from template...
    if exist "frontend\.env.example" (
        copy frontend\.env.example frontend\.env.development.local
        echo OK: Created frontend\.env.development.local
    ) else (
        echo ERROR: frontend\.env.example not found
        exit /b 1
    )
) else (
    echo OK: frontend\.env.development.local already exists
)

echo.
echo ==========================================
echo   Setup Complete!
echo ==========================================
echo.
echo Next steps:
echo.
echo 1. Edit configuration files:
echo    - backend\.env.local
echo    - frontend\.env.development.local
echo.
echo 2. Start the backend (Command Prompt 1):
echo    cd backend ^&^& npm run dev
echo.
echo 3. Start the frontend (Command Prompt 2):
echo    cd frontend ^&^& npm start
echo.
echo For detailed setup instructions, see SETUP_GUIDE.md
echo.
pause
