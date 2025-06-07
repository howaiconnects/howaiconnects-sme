# Next.js 15 Template Setup Guide

## Overview

This guide outlines how to clone and integrate the necessary Next.js 15 boilerplate templates for the SME Boost Platform project structure.

## Template Repositories to Clone

### 1. Admin Dashboard Template
```bash
# Clone Vercel's Next.js 15 Admin Template
git clone https://github.com/vercel/nextjs-subscription-payments.git templates/admin-dashboard

# Alternative: shadcn/ui Admin Template
git clone https://github.com/shadcn-ui/taxonomy.git templates/admin-dashboard-shadcn
```

### 2. User Dashboard Template
```bash
# Clone Next.js 15 SaaS Template
git clone https://github.com/vercel/nextjs-saas-starter.git templates/user-dashboard

# Alternative: Modern SaaS Template
git clone https://github.com/mickasmt/next-saas-stripe-starter.git templates/user-dashboard-saas
```

### 3. Landing Page Template
```bash
# Clone Next.js 15 Marketing Template
git clone https://github.com/vercel/nextjs-commerce.git templates/landing-page

# Alternative: Modern Landing Page
git clone https://github.com/shadcn-ui/ui.git templates/landing-page-shadcn
```

### 4. Turbo Repo Template
```bash
# Clone Vercel's Turbo Repo Template
git clone https://github.com/vercel/turbo.git templates/turborepo-base

# Alternative: Next.js Turbo Starter
git clone https://github.com/vercel/turborepo-starter.git templates/turborepo-starter
```

## Project Structure Integration

### Step 1: Setup Base Turbo Repo Structure
```bash
cd DigitalOcean-mcp-servers-project

# Initialize Turbo Repo structure
mkdir -p apps/{admin,user,landing,api}
mkdir -p packages/{ui,config,utils,airtable-sdk}

# Copy Turbo configuration
cp templates/turborepo-starter/turbo.json ./
cp templates/turborepo-starter/package.json ./package.json
```

### Step 2: Setup Admin Dashboard
```bash
# Copy admin template to apps/admin
cp -r templates/admin-dashboard-shadcn/* apps/admin/

# Update package.json name
cd apps/admin
sed -i 's/"name": ".*"/"name": "@sme-boost\/admin"/' package.json
```

### Step 3: Setup User Dashboard
```bash
# Copy user template to apps/user
cp -r templates/user-dashboard-saas/* apps/user/

# Update package.json name
cd apps/user
sed -i 's/"name": ".*"/"name": "@sme-boost\/user"/' package.json
```

### Step 4: Setup Landing Page
```bash
# Copy landing template to apps/landing
cp -r templates/landing-page-shadcn/* apps/landing/

# Update package.json name
cd apps/landing
sed -i 's/"name": ".*"/"name": "@sme-boost\/landing"/' package.json
```

### Step 5: Setup Shared Packages
```bash
# Setup UI package
mkdir -p packages/ui/src/components
cp -r templates/admin-dashboard-shadcn/components/* packages/ui/src/components/

# Setup shared utilities
mkdir -p packages/utils/src
cp -r templates/turborepo-starter/packages/utils/* packages/utils/

# Setup shared config
mkdir -p packages/config
cp -r templates/turborepo-starter/packages/config/* packages/config/
```

## Configuration Files

### Root package.json
```json
{
  "name": "sme-boost-platform",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "clean": "turbo run clean",
    "type-check": "turbo run type-check"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "@turbo/gen": "^1.10.0"
  },
  "packageManager": "npm@10.0.0"
}
```

### turbo.json
```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "type-check": {}
  }
}
```

## App-Specific Configurations

### Admin Dashboard (apps/admin)
```json
{
  "name": "@sme-boost/admin",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev --port 3001",
    "lint": "next lint",
    "start": "next start --port 3001",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@sme-boost/ui": "workspace:*",
    "@sme-boost/utils": "workspace:*",
    "@sme-boost/airtable-sdk": "workspace:*",
    "next": "^15.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### User Dashboard (apps/user)
```json
{
  "name": "@sme-boost/user",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev --port 3002",
    "lint": "next lint",
    "start": "next start --port 3002",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@sme-boost/ui": "workspace:*",
    "@sme-boost/utils": "workspace:*",
    "@sme-boost/airtable-sdk": "workspace:*",
    "next": "^15.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### Landing Page (apps/landing)
```json
{
  "name": "@sme-boost/landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev --port 3000",
    "lint": "next lint",
    "start": "next start --port 3000",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@sme-boost/ui": "workspace:*",
    "@sme-boost/utils": "workspace:*",
    "next": "^15.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

## Shared Package Configurations

### UI Package (packages/ui)
```json
{
  "name": "@sme-boost/ui",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.js"
    },
    "./styles.css": "./dist/styles.css"
  },
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch",
    "lint": "eslint src/",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-avatar": "^1.0.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.290.0",
    "tailwind-merge": "^2.0.0"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### Airtable SDK Package (packages/airtable-sdk)
```json
{
  "name": "@sme-boost/airtable-sdk",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch",
    "lint": "eslint src/",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "airtable": "^0.12.0",
    "zod": "^3.22.0"
  }
}
```

## Environment Configuration

### Root .env.example
```bash
# Airtable Configuration
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id

# AWS Bedrock Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Redis Configuration
REDIS_URL=redis://localhost:6379

# Application URLs
NEXT_PUBLIC_ADMIN_URL=http://localhost:3001
NEXT_PUBLIC_USER_URL=http://localhost:3002
NEXT_PUBLIC_LANDING_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3003
```

## Installation and Setup Commands

```bash
# Clone all templates
./scripts/clone-templates.sh

# Install dependencies
npm install

# Setup workspace links
npm run setup

# Start development servers
npm run dev

# Build all apps
npm run build
```

## Script to Automate Template Cloning

### scripts/clone-templates.sh
```bash
#!/bin/bash

echo "Cloning Next.js 15 templates..."

# Create templates directory
mkdir -p templates

# Clone admin dashboard template
echo "Cloning admin dashboard template..."
git clone https://github.com/shadcn-ui/taxonomy.git templates/admin-dashboard

# Clone user dashboard template
echo "Cloning user dashboard template..."
git clone https://github.com/mickasmt/next-saas-stripe-starter.git templates/user-dashboard

# Clone landing page template
echo "Cloning landing page template..."
git clone https://github.com/shadcn-ui/ui.git templates/landing-page

# Clone turbo repo template
echo "Cloning turbo repo template..."
git clone https://github.com/vercel/turborepo-starter.git templates/turborepo

echo "All templates cloned successfully!"
echo "Run 'npm run setup' to configure the project structure."
```

### scripts/setup-project.sh
```bash
#!/bin/bash

echo "Setting up SME Boost Platform project structure..."

# Copy turbo configuration
cp templates/turborepo/turbo.json ./
cp templates/turborepo/package.json ./package-base.json

# Setup apps
echo "Setting up applications..."
cp -r templates/admin-dashboard/* apps/admin/
cp -r templates/user-dashboard/* apps/user/
cp -r templates/landing-page/* apps/landing/

# Setup packages
echo "Setting up shared packages..."
mkdir -p packages/ui/src
mkdir -p packages/utils/src
mkdir -p packages/config/src

# Update package names
echo "Updating package configurations..."
./scripts/update-package-names.sh

echo "Project setup complete!"
echo "Run 'npm install' to install dependencies."
```

This setup provides a complete Next.js 15 boilerplate structure that follows the SME Boost Platform requirements while maintaining the exact templates and ensuring consistency across all applications.
