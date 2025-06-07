#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting HowAIConnects.com project setup...${NC}\n"

# Create project directory
PROJECT_DIR="howaiconnects-next"
echo -e "${BLUE}Creating project directory: ${PROJECT_DIR}${NC}"
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Initialize git
echo -e "${BLUE}Initializing git repository...${NC}"
git init

# Create workspace structure
echo -e "${BLUE}Creating workspace structure...${NC}"
mkdir -p apps/{web,admin,docs}
mkdir -p packages/{ui,theme,config,utils}

# Function to clone repository with error handling
clone_repo() {
    local repo_url=$1
    local target_dir=$2
    local branch=${3:-main}

    echo -e "${BLUE}Cloning ${repo_url} into ${target_dir}...${NC}"
    if git clone --depth 1 --branch $branch $repo_url $target_dir; then
        echo -e "${GREEN}Successfully cloned ${repo_url}${NC}"
    else
        echo -e "${RED}Failed to clone ${repo_url}${NC}"
        return 1
    fi
}

# Clone template repositories
echo -e "\n${BLUE}Cloning template repositories...${NC}"
mkdir -p templates

# Main website template (Taxonomy)
clone_repo "https://github.com/shadcn-ui/taxonomy.git" "templates/web" || exit 1

# Admin dashboard
clone_repo "https://github.com/vercel/nextjs-dashboard.git" "templates/admin" || exit 1

# Documentation site
clone_repo "https://github.com/shuding/nextra.git" "templates/docs" || exit 1

# Copy template files to project structure
echo -e "\n${BLUE}Setting up project structure...${NC}"

# Setup Web App
echo "Setting up web application..."
cp -r templates/web/* apps/web/
cd apps/web
cat > package.json << EOL
{
  "name": "@howaiconnects/web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
EOL
cd ../..

# Setup Admin Dashboard
echo "Setting up admin dashboard..."
cp -r templates/admin/* apps/admin/
cd apps/admin
cat > package.json << EOL
{
  "name": "@howaiconnects/admin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3001",
    "build": "next build",
    "start": "next start --port 3001",
    "lint": "next lint"
  }
}
EOL
cd ../..

# Setup Documentation
echo "Setting up documentation..."
cp -r templates/docs/* apps/docs/
cd apps/docs
cat > package.json << EOL
{
  "name": "@howaiconnects/docs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3002",
    "build": "next build",
    "start": "next start --port 3002",
    "lint": "next lint"
  }
}
EOL
cd ../..

# Setup shared packages
echo "Setting up shared packages..."

# UI Package
echo "Setting up UI package..."
cd packages/ui
cat > package.json << EOL
{
  "name": "@howaiconnects/ui",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch",
    "lint": "eslint src/"
  }
}
EOL
cp -r ../../templates/web/components/* src/
cd ../..

# Theme Package
echo "Setting up theme package..."
cd packages/theme
cat > package.json << EOL
{
  "name": "@howaiconnects/theme",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch",
    "lint": "eslint src/"
  }
}
EOL

# Create theme files
mkdir -p src
cat > src/colors.ts << EOL
export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  accent: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  }
}
EOL

cat > src/typography.ts << EOL
export const typography = {
  fonts: {
    heading: 'Cal Sans, sans-serif',
    body: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
}
EOL
cd ../..

# Create root package.json
echo "Creating root package.json..."
cat > package.json << EOL
{
  "name": "howaiconnects",
  "private": true,
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "format": "prettier --write \"**/*.{ts,tsx,md}\""
  },
  "devDependencies": {
    "@turbo/gen": "^1.10.12",
    "prettier": "^3.0.3",
    "turbo": "^1.10.12"
  },
  "packageManager": "pnpm@8.9.0",
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
EOL

# Create turbo.json
echo "Creating turbo.json..."
cat > turbo.json << EOL
{
  "\$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
EOL

# Create .gitignore
echo "Creating .gitignore..."
cat > .gitignore << EOL
# dependencies
node_modules
.pnp
.pnp.js

# testing
coverage

# next.js
.next/
out/
build
dist

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# turbo
.turbo

# vercel
.vercel
EOL

# Create .env.example
echo "Creating .env.example..."
cat > .env.example << EOL
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Database
DATABASE_URL=your-database-url

# Email
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASSWORD=your-smtp-password
SMTP_FROM=noreply@howaiconnects.com

# AWS
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1

# Stripe
STRIPE_PK=your-stripe-publishable-key
STRIPE_SK=your-stripe-secret-key
STRIPE_PRICE_ID=your-stripe-price-id
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
EOL

# Clean up templates
echo -e "\n${BLUE}Cleaning up template repositories...${NC}"
rm -rf templates

# Initialize git repository
echo -e "\n${BLUE}Initializing git repository...${NC}"
git add .
git commit -m "Initial commit: Project structure setup"

echo -e "\n${GREEN}Setup complete! You can now start the development servers:${NC}"
echo -e "${BLUE}pnpm install${NC}"
echo -e "${BLUE}pnpm dev${NC}"
echo -e "\nThis will start the following servers:"
echo "- Web App: http://localhost:3000"
echo "- Admin Dashboard: http://localhost:3001"
echo "- Documentation: http://localhost:3002"
