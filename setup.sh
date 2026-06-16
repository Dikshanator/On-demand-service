#!/bin/bash

# hamroSewa - Quick Start Setup Script
# This script automates the initial setup process

set -e  # Exit on error

echo "=========================================="
echo "  hamroSewa - Project Setup Script"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Step 1: Check prerequisites
print_info "Step 1: Checking prerequisites..."

if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed"
    echo "Install from: https://nodejs.org"
    exit 1
fi
print_success "Node.js $(node --version) found"

if ! command -v npm &> /dev/null; then
    print_error "npm is not installed"
    exit 1
fi
print_success "npm $(npm --version) found"

if ! command -v psql &> /dev/null; then
    print_warning "PostgreSQL is not installed or not in PATH"
    echo "Install from: https://www.postgresql.org/download"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    print_success "PostgreSQL $(psql --version) found"
fi

echo ""

# Step 2: Install backend dependencies
print_info "Step 2: Installing backend dependencies..."
cd backend
npm install
print_success "Backend dependencies installed"
cd ..

echo ""

# Step 3: Install frontend dependencies
print_info "Step 3: Installing frontend dependencies..."
cd frontend
npm install
print_success "Frontend dependencies installed"
cd ..

echo ""

# Step 4: Setup backend environment
print_info "Step 4: Setting up backend environment..."

if [ ! -f "backend/.env.local" ]; then
    print_warning "backend/.env.local not found"
    echo "Creating from template..."
    
    if [ -f "backend/.env.example" ]; then
        cp backend/.env.example backend/.env.local
        print_success "Created backend/.env.local"
        print_warning "Please edit backend/.env.local with your database credentials"
    else
        print_error "backend/.env.example not found"
        exit 1
    fi
else
    print_success "backend/.env.local already exists"
fi

echo ""

# Step 5: Setup frontend environment
print_info "Step 5: Setting up frontend environment..."

if [ ! -f "frontend/.env.development.local" ]; then
    print_warning "frontend/.env.development.local not found"
    echo "Creating from template..."
    
    if [ -f "frontend/.env.example" ]; then
        cp frontend/.env.example frontend/.env.development.local
        print_success "Created frontend/.env.development.local"
        print_info "Frontend environment is configured with defaults"
    else
        print_error "frontend/.env.example not found"
        exit 1
    fi
else
    print_success "frontend/.env.development.local already exists"
fi

echo ""

# Step 6: Check database
print_info "Step 6: Checking PostgreSQL database..."

read -p "Do you want to setup the database now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter database username (default: postgres): " db_user
    db_user=${db_user:-postgres}
    
    read -sp "Enter database password: " db_password
    echo
    
    read -p "Enter database name (default: hamrosewa): " db_name
    db_name=${db_name:-hamrosewa}
    
    read -p "Enter database host (default: localhost): " db_host
    db_host=${db_host:-localhost}
    
    read -p "Enter database port (default: 5432): " db_port
    db_port=${db_port:-5432}
    
    # Update .env.local with database credentials
    sed -i.bak "s|DATABASE_URL=.*|DATABASE_URL=\"postgresql://${db_user}:${db_password}@${db_host}:${db_port}/${db_name}\"|" backend/.env.local
    rm -f backend/.env.local.bak
    
    print_success "Database credentials updated in .env.local"
    
    # Try to create database
    print_info "Creating database..."
    PGPASSWORD="${db_password}" createdb -U "${db_user}" -h "${db_host}" -p "${db_port}" "${db_name}" 2>/dev/null || print_warning "Database might already exist"
    
    # Run migrations
    print_info "Running Prisma migrations..."
    cd backend
    npx prisma migrate dev --name init || true
    npx prisma generate
    cd ..
    print_success "Database initialized"
fi

echo ""

# Final instructions
echo "=========================================="
print_success "Setup Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Edit configuration files:"
echo "   - backend/.env.local"
echo "   - frontend/.env.development.local"
echo ""
echo "2. Start the backend (Terminal 1):"
echo "   cd backend && npm run dev"
echo ""
echo "3. Start the frontend (Terminal 2):"
echo "   cd frontend && npm start"
echo ""
echo "4. Access the app:"
echo "   - Web: http://localhost:19000"
echo "   - API: http://localhost:5000"
echo ""
print_warning "For detailed setup instructions, see SETUP_GUIDE.md"
echo ""
